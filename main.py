import asyncio
from mimetypes import guess_type
from os.path import isfile

from apscheduler.jobstores.sqlalchemy import SQLAlchemyJobStore
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from fastapi import Request, WebSocket, WebSocketDisconnect, Depends
from starlette.responses import Response
from starlette.staticfiles import StaticFiles
from starlette.templating import Jinja2Templates

from app import pity, init_logging
from app.core.msg.wss_msg import WebSocketMessage
from app.core.ws_connection_manager import ws_manage
from app.crud import create_table
from app.crud.notification.NotificationDao import PityNotificationDao
from app.enums.MessageEnum import MessageStateEnum, MessageTypeEnum
from app.middleware.RedisManager import RedisHelper
from app.routers.auth import user
from app.routers.config import router as config_router
from app.routers.notification import router as msg_router
from app.routers.online import router as online_router
from app.routers.operation import router as operation_router
from app.routers.oss import router as oss_router
from app.routers.project import project
from app.routers.request import http
from app.routers.testcase import router as testcase_router
from app.routers.workspace import router as workspace_router
from app.utils.scheduler import Scheduler
from config import Config, PITY_ENV, BANNER

# 调用了定义的 init_logging() 函数，初始化了一个 logger 对象 
logger = init_logging()

# 使用 logger.bind() 方法将额外的信息（这里是 name=None）绑定到 logger 上，用来补充记录日志的信息。
# 然后使用 .opt(ansi=True) 方法打开终端颜色输出，最后使用 .success() 方法输出记录的信息，提示 PITY 应用正在运行。
logger.bind(name=None).opt(ansi=True).success(f"pity is running at <red>{PITY_ENV}</red>")
logger.bind(name=None).success(BANNER)


# request_info() 函数来记录请求信息。
async def request_info(request: Request):
    # 在函数内部，首先使用 logger.bind() 方法将额外的信息（这里是 name=None）绑定到 logger 上，然后使用 .debug() 方法记录请求的方法和 URL。
    logger.bind(name=None).debug(f"{request.method} {request.url}")
    # 使用 try-except 结构来处理请求体。如果请求头中包含了 JSON 数据，则通过 request.json() 方法将其解析，并使用 .bind() 方法将其记录到日志中。
    try:
        body = await request.json()
        logger.bind(payload=body, name=None).debug("request_json: ")
    except:
    # 如果请求头中没有 JSON 数据，则使用 request.body() 方法获取请求体，并检查其长度是否为 0。如果长度不为 0，则使用 .bind() 方法将其记录到日志中。
        try:
            body = await request.body()
            if len(body) != 0:
                # 有请求体，记录日志
                logger.bind(payload=body, name=None).debug(body)
        except:
            # 如果以上步骤都失败了，则说明请求中没有请求体，不做处理。
            pass


# 注册路由
# 在这段代码中，所有的路由器都使用了Depends(request_info)作为依赖项，即在路由处理函数执行之前，都会先执行request_info函数。
pity.include_router(user.router)
pity.include_router(project.router, dependencies=[Depends(request_info)])
pity.include_router(http.router, dependencies=[Depends(request_info)])
pity.include_router(testcase_router, dependencies=[Depends(request_info)])
pity.include_router(config_router, dependencies=[Depends(request_info)])
pity.include_router(online_router, dependencies=[Depends(request_info)])
pity.include_router(oss_router, dependencies=[Depends(request_info)])
pity.include_router(operation_router, dependencies=[Depends(request_info)])
pity.include_router(msg_router, dependencies=[Depends(request_info)])
pity.include_router(workspace_router, dependencies=[Depends(request_info)])

# 用于将一个静态文件目录映射到一个 URL。其中第一个参数是 URL 前缀，第二个参数是一个 StaticFiles 实例，它的 directory 参数指定了静态文件所在的目录，第三个参数是该挂载点的名称。
pity.mount("/statics", StaticFiles(directory="statics"), name="statics")

# Jinja2Templates 是 FastAPI 内置的模板引擎，用于在应用程序中渲染 HTML 模板。在这段代码中，templates 是一个 Jinja2Templates 实例，它的 directory 参数指定了模板文件所在的目录。
templates = Jinja2Templates(directory="statics")


@pity.get("/")
async def serve_spa(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@pity.get("/{filename}")
async def get_site(filename):
    filename = './statics/' + filename

    if not isfile(filename):
        return Response(status_code=404)

    with open(filename, mode='rb') as f:
        content = f.read()

    content_type, _ = guess_type(filename)
    return Response(content, media_type=content_type)


@pity.get("/static/{filename}")
async def get_site_static(filename):
    filename = './statics/static/' + filename

    if not isfile(filename):
        return Response(status_code=404)

    with open(filename, mode='rb') as f:
        content = f.read()

    content_type, _ = guess_type(filename)
    return Response(content, media_type=content_type)


@pity.on_event('startup')
async def init_redis():
    """
    初始化redis，失败则服务起不来
    :return:
    """
    try:
        await RedisHelper.ping()
        logger.bind(name=None).success("redis connected success.        ✔")
    except Exception as e:
        if not Config.REDIS_ON:
            logger.bind(name=None).warning(
                f"Redis is not selected, So we can't ensure that the task is not executed repeatedly.        🚫")
            return
        logger.bind(name=None).error(f"Redis connect failed, Please check config.py for redis config.        ❌")
        raise e


@pity.on_event('startup')
def init_scheduler():
    """
    初始化定时任务
    :return:
    """
    # SQLAlchemyJobStore指定存储链接
    job_store = {
        'default': SQLAlchemyJobStore(url=Config.SQLALCHEMY_DATABASE_URI, engine_options={"pool_recycle": 1500},
                                      pickle_protocol=3)
    }
    scheduler = AsyncIOScheduler()
    Scheduler.init(scheduler)
    Scheduler.configure(jobstores=job_store)
    Scheduler.start()
    logger.bind(name=None).success("ApScheduler started success.        ✔")


@pity.on_event('startup')
async def init_database():
    """
    初始化数据库，建表
    :return:
    """
    try:
        asyncio.create_task(create_table())
        logger.bind(name=None).success("database and tables created success.        ✔")
    except Exception as e:
        logger.bind(name=None).error(f"database and tables  created failed.        ❌\nerror: {e}")
        raise


@pity.on_event('shutdown')
def stop_test():
    pass


@pity.websocket("/ws/{user_id}")
async def websocket_endpoint(websocket: WebSocket, user_id: int):
    async def send_heartbeat():
        while True:
            logger.debug("sending heartbeat")
            await websocket.send_json({
                'type': 3
            })
            await asyncio.sleep(Config.HEARTBEAT)

    await ws_manage.connect(websocket, user_id)
    try:
        # 定义特殊值的回复，配合前端实现确定连接，心跳检测等逻辑
        questions_and_answers_map: dict = {
            "HELLO SERVER": F"hello {user_id}",
            "HEARTBEAT": F"{user_id}",
        }

        # 存储连接后获取消息
        msg_records = await PityNotificationDao.list_messages(msg_type=MessageTypeEnum.all.value, receiver=user_id,
                                                              msg_status=MessageStateEnum.unread.value)
        # 如果有未读消息, 则推送给前端对应的count
        if len(msg_records) > 0:
            await websocket.send_json(WebSocketMessage.msg_count(len(msg_records), True))
        # 发送心跳包
        # asyncio.create_task(send_heartbeat())
        while True:
            data: str = await websocket.receive_text()
            du = data.upper()
            if du in questions_and_answers_map:
                await ws_manage.send_personal_message(message=questions_and_answers_map.get(du), websocket=websocket)
    except WebSocketDisconnect:
        if user_id in ws_manage.active_connections:
            ws_manage.disconnect(user_id)
    except Exception as e:
        logger.bind(name=None).debug(f"websocket: 用户: {user_id} 异常退出: {e}")
