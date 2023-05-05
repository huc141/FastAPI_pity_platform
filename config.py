# 基础配置类
import os
from typing import List

from pydantic import BaseSettings

# __file__是Python中一个预定义的变量，用于获取当前脚本的文件路径。os.path.abspath(__file__)用来获取当前脚本的绝对路径。
# os.path.dirname(os.path.abspath(__file__))用来获取当前脚本所在的目录的绝对路径。
ROOT = os.path.dirname(os.path.abspath(__file__))


# BaseSettings是Python中Pydantic库中的一个类，它的作用是提供一个方便的方式来定义应用程序的配置项，并且支持验证和类型转换。
class BaseConfig(BaseSettings):
    LOG_DIR = os.path.join(ROOT, 'logs')
    LOG_NAME = os.path.join(LOG_DIR, 'pity.log')

    SERVER_HOST: str = "0.0.0.0"
    SERVER_PORT: int

    HEARTBEAT: int = 48

    # mock server
    MOCK_ON: bool
    PROXY_ON: bool
    PROXY_PORT: int
    MYSQL_HOST: str
    MYSQL_PORT: int
    MYSQL_USER: str
    MYSQL_PWD: str
    DBNAME: str

    # etcd server
    ETCD_ENDPOINT: str

    # WARNING: close redis can make job run multiple times at the same time
    REDIS_ON: bool
    REDIS_HOST: str
    REDIS_PORT: int
    REDIS_DB: int
    REDIS_PASSWORD: str
    # Redis连接信息
    REDIS_NODES: List[dict] = []

    # sqlalchemy
    SQLALCHEMY_DATABASE_URI: str = ''
    # 异步URI
    ASYNC_SQLALCHEMY_URI: str = ''
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # 权限 0 普通用户 1 组长 2 管理员
    MEMBER = 0
    MANAGER = 1
    ADMIN = 2

    # github access_token地址
    GITHUB_ACCESS = "https://github.com/login/oauth/access_token"

    # github获取用户信息
    GITHUB_USER = "https://api.github.com/user"

    # client_id
    CLIENT_ID: str

    # SECRET
    SECRET_KEY: str

    # 测试报告路径
    REPORT_PATH = os.path.join(ROOT, "templates", "report.html")

    # 重置密码路径
    PASSWORD_HTML_PATH = os.path.join(ROOT, "templates", "reset_password.html")

    # APP 路径
    APP_PATH = os.path.join(ROOT, "app")

    # dao路径
    DAO_PATH = os.path.join(APP_PATH, 'crud')

    # markdown地址
    MARKDOWN_PATH = os.path.join(ROOT, 'templates', "markdown")

    SERVER_REPORT = "http://localhost:8000/#/record/report/"

    OSS_URL = "http://oss.pity.fun"

    # 七牛云链接地址，如果采用七牛oss，需要自行替换
    QINIU_URL = "https://static.pity.fun"

    RELATION = "pity_relation"
    ALIAS = "__alias__"
    TABLE_TAG = "__tag__"
    # 数据库表展示的变更字段
    FIELD = "__fields__"
    SHOW_FIELD = "__show__"
    IGNORE_FIELDS = ('created_at', "updated_at", "deleted_at", "create_user", "update_user")

    # 测试计划中，case默认重试次数
    RETRY_TIMES = 1

    # 日志名
    PITY_ERROR = "pity_error"
    PITY_INFO = "pity_info"

# 这两个类中定义子类的作用是使用Pydantic库提供的功能来对配置项进行验证和类型转换。通过在内部定义一个名为Config的子类，并在其中设置各种配置项，
# 可以使用Pydantic提供的数据验证和转换功能来保证配置项的正确性和合法性。
# Pydantic的BaseSettings类要求在子类中必须定义一个名为Config的子类，以便设置配置项。这个Config子类是必须定义的，而且名称也必须为Config，
# 因为Pydantic会在初始化时查找这个子类，并使用其中定义的属性来设置实例对象的属性。
# 如果在子类中没有定义Config子类，或者定义了其他名称的子类，则在实例化时会引发ConfigError异常。
class DevConfig(BaseConfig):
    class Config:
        env_file = os.path.join(ROOT, "conf", "dev.env")


class ProConfig(BaseConfig):
    class Config:
        env_file = os.path.join(ROOT, "conf", "pro.env")

    SERVER_REPORT = "https://pity.fun/#/record/report/"
    SERVER_HOST = "127.0.0.1"

# os.environ.get 是一个 Python 内置函数，它用于获取环境变量的值。该函数可以传入一个参数作为要获取的环境变量的键（key），
# 如果该键存在，则返回对应的值（value），如果不存在，则返回默认值（默认为 None），
# 具体地说，os.environ.get() 函数的第一个参数是要获取的环境变量的键（key），即 "pity_env"。
# 第二个参数是默认值，如果指定的环境变量不存在，则返回默认值 "dev"。
# 以下获取pity环境变量
PITY_ENV = os.environ.get("pity_env", "dev")

# 如果pity_env存在且为prod
Config = ProConfig() if PITY_ENV and PITY_ENV.lower() == "pro" else DevConfig()

# init redis
Config.REDIS_NODES = [
    {
        "host": Config.REDIS_HOST, "port": Config.REDIS_PORT, "db": Config.REDIS_DB, "password": Config.REDIS_PASSWORD
    }
]

# init sqlalchemy (used by apscheduler)
Config.SQLALCHEMY_DATABASE_URI = 'mysql+mysqlconnector://{}:{}@{}:{}/{}'.format(
    Config.MYSQL_USER, Config.MYSQL_PWD, Config.MYSQL_HOST, Config.MYSQL_PORT, Config.DBNAME)

# init async sqlalchemy
Config.ASYNC_SQLALCHEMY_URI = f'mysql+aiomysql://{Config.MYSQL_USER}:{Config.MYSQL_PWD}' \
                              f'@{Config.MYSQL_HOST}:{Config.MYSQL_PORT}/{Config.DBNAME}'

BANNER = """
 ________        ___          _________         ___    ___ 
|\   __  \      |\  \        |\___   ___\      |\  \  /  /|
\ \  \|\  \     \ \  \       \|___ \  \_|      \ \  \/  / /
 \ \   ____\     \ \  \           \ \  \        \ \    / / 
  \ \  \___|      \ \  \           \ \  \        \/  /  /  
   \ \__\          \ \__\           \ \__\     __/  / /    
    \|__|           \|__|            \|__|    |\___/ /     
                                              \|___|/      

"""
