from sqlalchemy import create_engine
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from app.enums.DatabaseEnum import DatabaseEnum
from config import Config


# create_database() 函数利用 SQLAlchemy 的 create_engine() 方法创建一个数据库引擎对象 engine，
# 并通过 conn.execute() 方法创建了一个名为 pity 的数据库。
# 同时，echo=True 参数设置可以让 SQLAlchemy 打印更多的调试信息。
def create_database():
    engine = create_engine('mysql+mysqlconnector://{}:{}@{}:{}'.format(
        Config.MYSQL_USER, Config.MYSQL_PWD, Config.MYSQL_HOST, Config.MYSQL_PORT), echo=True)
    # 使用 with engine.connect() as conn，可以创建一个 engine 的连接，使用 as 关键字将 conn 作为 engine.connect() 返回的连接对象的别名，可以在with语句块中使用 conn 进行数据库操作。
    # 并在代码块执行结束后自动释放这个连接。这样可以防止在程序出现异常的情况下，连接没有被正确释放而造成的资源泄漏。
    with engine.connect() as conn:
        # 使用 conn 变量执行各种 SQL 操作。
        conn.execute("CREATE DATABASE IF NOT EXISTS pity default character set utf8mb4 collate utf8mb4_unicode_ci")
    # close engine
    engine.dispose()


# 优先建库
create_database()

# 同步engine
# engine = create_engine(Config.SQLALCHEMY_DATABASE_URI, pool_recycle=1500)

# 异步engine，是一个异步的SQLAlchemy引擎对象，它是应用程序和数据库之间的一个中介。
# 在应用程序中通过它来访问数据库，并且可以使用SQLAlchemy提供的方法来执行SQL语句和ORM操作，
# 比如增删改查等。它使用异步的方式来处理数据库请求，这样可以避免I/O等待阻塞程序运行。
async_engine = create_async_engine(Config.ASYNC_SQLALCHEMY_URI, pool_recycle=1500)

# Session = sessionmaker(engine)

# 利用 sessionmaker 方法来创建一个异步的 Session 对象，这个对象可以用来执行异步数据库操作。
async_session = sessionmaker(async_engine, class_=AsyncSession)

# 创建对象的基类: 用 SQLAlchemy 的 declarative_base() 方法来创建一个 ORM 基类 Base，所有的 ORM 模型类都需要继承这个基类。
Base = declarative_base()


# Base.metadata.create_all(engine)


# 该类的作用是为应用程序提供数据库连接和会话管理功能。在实例化该类后，
# 可以调用其方法来获取和释放数据库连接，以及测试连接是否正常。
class DatabaseHelper(object):

    # 在Python中，对象的属性可以在类定义中直接声明，也可以在实例化后通过赋值语句进行声明。
    # 使用__init__方法来定义属性，是一种在实例化对象时进行属性初始化的方法。
    # elf.connections 是 DatabaseHelper 类的一个属性，用于存储不同数据库连接的信息，它的初始值是一个空字典。
    # 在 __init__ 方法中对其进行初始化是因为在每个 DatabaseHelper 实例化时都需要创建一个新的 connections 字典，
    # 而这个字典是通过实例化 DatabaseHelper 类来创建的。因此，在 __init__ 方法中初始化这个字典，可以确保每个实例都有自己的空字典，而不是所有实例都共用同一个字典。
    def __init__(self):
        # cache
        self.connections = dict()


# 在 get_connection 方法中，我们首先查找一个已经存在的数据库连接，如果没有找到，则创建一个新的连接并将其存储在 self.connections 中，这样我们可以在以后的操作中重复使用这个连接，避免频繁地创建和关闭数据库连接。
    async def get_connection(self, sql_type: int, host: str, port: int, username: str, password: str, database: str):
        # 拼接key键值：
        # 首先，key 的值是一个字符串，由输入参数 host，port，username，password 和 database 组成，
        # 它们都是数据库连接的必要信息。通过这个字符串作为 self.connections 的键值，我们可以在 self.connections 中存储和查找一个数据库连接对象。
        key = f"{host}:{port}:{database}:{username}:{password}"
        # 接着，使用 self.connections.get(key) 方法获取 key 对应的数据库连接对象，
        # 如果它已经存在，就返回这个连接对象。如果没有找到，则返回 None。
        connection = self.connections.get(key)

        # 先判断是否已经有connection了，如果有则直接返回
        if connection is not None:
            return connection
        # 获取sqlalchemy需要的jdbc url：据数据库类型、主机、端口、用户名、密码和数据库名称，生成数据库的JDBC URL。get_jdbc_url()是一个静态方法，可以通过类名直接访问。因此，get_jdbc_url()方法可以放在jdbc_url变量赋值的下面。
        jdbc_url = DatabaseHelper.get_jdbc_url(sql_type, host, port, username, password, database)
        # 创建异步引擎
        # create_async_engine 是 SQLAlchemy 的一个异步引擎，它用于创建异步数据库连接。
        # 它的第一个参数是一个连接字符串，可以通过 DatabaseHelper.get_jdbc_url() 方法获取，
        # 第二个参数是连接池回收时间，表示多少秒没有使用后自动回收连接。这里设置为 1500 秒。
        eg = create_async_engine(jdbc_url, pool_recycle=1500)
        # sessionmaker 是 SQLAlchemy 的会话管理器，用于创建会话，可以用来执行数据库操作。
        # 它的第一个参数是一个引擎，即上面创建的异步引擎 eg，第二个参数是一个类，表示会话类的基类，默认为普通的 Session 类，这里设置为异步会话类 AsyncSession。为什么设置为异步会话类查看末尾
        ss = sessionmaker(bind=eg, class_=AsyncSession)
        # 将数据缓存起来：
        # engine 键对应的是一个异步引擎对象 eg，session 键对应的是一个异步会话类 ss。
        data = dict(engine=eg, session=ss)
        # 然后，将 data 添加到字典 connections 中，key 作为字典的键。这样就可以缓存数据库连接，避免重复创建。
        # self.connections[key] = data 表示将 key 和 data 组成一个键值对，并将其添加到 self.connections 字典对象中。
        self.connections[key] = data
        # 最后，返回 data，也就是包含异步引擎和异步会话类的字典。由于 get_connection() 方法是异步方法，所以返回的也是一个异步对象。
        return data


    # 测试数据库连接是否正常。
    # 因为这个方法没有引用任何实例属性，所以它可以定义为一个静态方法，并且被类和实例调用。
    # 在调用这个方法时，只需要传入一个异步会话类的实例 ss，即可测试数据库连接是否正常。
    @staticmethod
    async def test_connection(ss):
        if ss is None:
            raise Exception("暂不支持的数据库类型")
        # 使用 async with 语句异步创建一个会话实例 session，并在这个会话中执行一条 SQL 语句 "select 1"。这个 SQL 语句只是用来测试数据库连接是否成功的语句，因为执行这条语句并不会产生任何副作用。
        # 如果执行 SQL 语句成功，说明数据库连接正常。如果连接失败，await session.execute 将会抛出一个异常，表示连接失败。
        async with ss() as session:
            await session.execute("select 1")


# 静态方法 get_jdbc_url()，其作用是根据传入的数据库类型 sql_type，数据库的主机地址 host，端口号 port，用户名 username，密码 password 和数据库名 database，构建出对应数据库的 JDBC URL。
    @staticmethod
    def get_jdbc_url(sql_type: int, host: str, port: int, username: str, password: str, database: str):
        if sql_type == DatabaseEnum.MYSQL:
            # mysql模式:mysql+aiomysql 和 postgresql+asyncpg 都是 SQLAlchemy 中支持的异步数据库驱动。aiomysql 和 asyncpg 分别是 Python 中异步 MySQL 和 PostgreSQL 驱动的名称。
            return f'mysql+aiomysql://{username}:{password}@{host}:{port}/{database}'
        if sql_type == DatabaseEnum.POSTGRESQL:
            return f'postgresql+asyncpg://{username}:{password}@{host}:{port}/{database}'
        raise Exception("未知的数据库类型")


    # 根据传入的主机、端口、用户名、密码和数据库名称，从self.connections中移除对应的连接。
    def remove_connection(self, host: str, port: int, username: str, password: str, database: str):
        key = f"{host}:{port}:{database}:{username}:{password}:{database}"
        if self.connections.get(key):
            self.connections.pop(key)


db_helper = DatabaseHelper()


"""
在异步应用程序中，每个请求和响应都需要在异步方式下处理，
因为同步的会话类可能会阻塞异步应用程序的事件循环。

SQLAlchemy提供了AsyncSession类来解决这个问题。AsyncSession类使用异步方式进行操作,
并提供了一组支持异步IO的API,这样可以在异步程序中执行数据库操作而不会阻塞事件循环。
在异步应用程序中,使用AsyncSession类而不是同步的会话类是必要的。
"""


"""
使用 `as` 关键字将 `conn` 作为 `engine.connect()` 返回的连接对象的别名,可以在with语句块中使用 `conn` 进行数据库操作。
这样可以确保代码块执行完毕后连接自动关闭，避免了忘记关闭连接而导致的数据库资源浪费或者连接泄漏的问题。
同时，使用 with 语句也可以保证操作过程中出现异常时连接可以正常关闭，从而避免造成数据库的不一致或异常情况。
"""