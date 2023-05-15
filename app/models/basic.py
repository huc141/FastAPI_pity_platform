import json
from datetime import datetime
from decimal import Decimal
from typing import Tuple

from sqlalchemy import INT, Column, BIGINT, TIMESTAMP

from app.models import Base
from config import Config


class PityBase(Base):
    id = Column(INT, primary_key=True)
    created_at = Column(TIMESTAMP, nullable=False)
    updated_at = Column(TIMESTAMP, nullable=False)
    deleted_at = Column(BIGINT, nullable=False, default=0)
    create_user = Column(INT, nullable=False)
    update_user = Column(INT, nullable=False)
    __abstract__ = True  # 指示该类是否是 SQLAlchemy 中的抽象基类，设为 True 表示该类是抽象基类，不会被创建成数据库表。
    __fields__: Tuple[Column] = [id] # __fields__ 属性是一个元组,具体作用查看本文末尾。
    __tag__ = "未定义"  #用于给当前模型指定一个标签，通常用于前端展示
    __alias__ = dict(name="名称")  # 是一个字典，用于指定当前模型的字段的别名。在此模型中，它指定了 name 字段的别名为 名称。
    __show__ = 1  # 用于指定当前模型是否在数据库表中展示。在此模型中，设为 1 表示该模型会被创建成数据库表。

# __abstract__和__show__这两个属性看上去是矛盾的。但是需要注意的是，如果一个类的__abstract__属性被设置为True，
# 那么这个类将不会被映射到数据库中，也就是说，这个类不会被创建成数据库表，即使__show__属性被设置为1也没有用。


# 这段代码定义了 PityBase 类的初始化方法 __init__。这个方法在创建 PityBase 类的实例时被调用。也就是说，在创建 PityBase 类的实例时，这些字段的值都会被自动设置
    def __init__(self, user, id=None): # 方法中接收两个参数：user 和 id。其中，user 表示创建或更新当前记录的用户，而 id 则表示当前记录的唯一标识符。如果 id 参数没有指定，则默认为 None。
        # created_at 和 updated_at 表示当前记录的创建时间和最近一次更新时间，分别被赋值为当前时间。
        self.created_at = datetime.now()
        self.updated_at = datetime.now()
        # create_user 和 update_user 表示创建或更新当前记录的用户，都被赋值为 user 参数。
        self.create_user = user
        self.update_user = user
        # deleted_at 表示当前记录是否被删除，被赋值为 0，表示未被删除。
        self.deleted_at = 0
        # self.id = id

    def serialize(self, *ignore):
        """
        这段代码实现了将 SQLAlchemy 模型对象序列化成 JSON 格式的方法，方法名为 serialize()。
        首先，方法的参数 *ignore 表示可以忽略某些字段，不进行转换。
        """
        data = dict() # 然后，定义一个空字典 data，用于保存转换后的字段值。
        # 接着，遍历当前对象的 table.columns，即遍历当前模型的所有列，对每一个列进行以下操作：
        for c in self.__table__.columns:
            # 如果该列在忽略列表中，则跳过该列,不进行转换；
            if c.name in ignore:
                continue
            # 否则，获取该列的值，使用 getattr() 方法获取，注意这里的 c.name 是当前列的名称；
            val = getattr(self, c.name)
            # 根据该列的类型进行不同的处理：
            # 如果该列是 datetime 类型，使用 strftime() 方法将其转换为字符串；
            if isinstance(val, datetime):
                data[c.name] = val.strftime("%Y-%m-%d %H:%M:%S")
                # 如果该列是 Decimal 类型，将其转换为字符串；
            elif isinstance(val, Decimal):
                data[c.name] = str(val)
                # 如果该列是 bytes 类型，将其转换为字符串；
            elif isinstance(val, bytes):
                data[c.name] = val.decode(encoding='utf-8')
                # 否则，直接将其值保存到 data 中。
            else:
                data[c.name] = val
        # 最后，使用 json.dumps() 方法将 data 字典序列化成 JSON 格式的字符串并返回。其中，ensure_ascii=False 表示不对非 ASCII 字符进行转义，输出结果更易读。
        return json.dumps(data, ensure_ascii=False)


# 通过使用 PityRelationField 类，可以定义模型之间的关系，并在查询时自动加载关联的数据。
# 例如，一个模型可以定义一个 ManyToMany 关系字段，它与另一个模型的主键相关联。
# 当查询该模型时，ORM 会自动加载与之关联的其他模型的数据。
class PityRelationField(object):
    def __init__(self, field, foreign=None):
        self.field = field
        self.foreign = foreign

# init_relation 函数的作用是为模型动态添加一个关系字段，以表示与其他模型的关联关系。
# 它的参数 model 表示当前模型对象，data 则表示要添加的关系字段，
# 其中 data 是一个由 PityRelationField 实例组成的可变参数。
# 在函数内部，它通过 setattr 函数为当前模型对象动态添加一个名为 RELATION 的属性，属性值为 data，表示当前模型的关系字段。
def init_relation(model, *data: PityRelationField):
    setattr(model, Config.RELATION, data)

"""
Q: _fields__: Tuple[Column] = [id] 的作用到底是什么？

`__fields__` 属性指定了当前模型所包含的数据库表列（`Column`）。默认情况下，
如果没有显式地指定 `__fields__`，则只有一个主键列 `id` 被包含在模型中。

指定 `__fields__` 的作用是在对数据库进行 CRUD（增删改查）操作时，
能够确定需要读取和更新哪些列，从而避免了不必要的性能开销和数据库资源的浪费。

例如，在查询操作中，如果模型定义了大量的列但只需要其中的一部分列，那么在查询语句中就需要对所有列进行读取。如果将 `__fields__` 设置为只包含需要的列，就可以避免读取不必要的列，提高查询性能。

同时，如果没有在 `__fields__` 中包含需要的列，那么在进行更新操作时，这些列的值也不会被更新，
从而避免了潜在的数据错误。

因此，`__fields__` 的作用是指定当前模型需要读取和更新的数据库表列，是一个很重要的属性。
"""