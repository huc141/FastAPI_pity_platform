import hashlib
from datetime import timedelta, datetime

import jwt
from jwt.exceptions import ExpiredSignatureError

EXPIRED_HOUR = 72


class UserToken(object):
    key = 'pityToken'
    salt = 'pity'
    # 静态方法无需实例化对象即可被类调用
    @staticmethod
    def get_token(data):
        expire = datetime.now() + timedelta(hours=EXPIRED_HOUR)
        # dict()是python内置的一个函数，用于创建字典对象，dict()函数的语法如下：dict([iterable])。
        # iterable可以是一个由键值对组成的可迭代对象，例如一个元组、列表或字典。如果没有提供可迭代对象，则返回一个空字典对象。
        new_data = dict({"exp": datetime.utcnow() + timedelta(hours=EXPIRED_HOUR)}, **data)  # '**'属于解包运算符
        # expire 是一个 datetime 类型的对象，而 timestamp() 是 datetime 类型对象上的一个方法，可以返回一个 Unix 时间戳。因此，expire.timestamp() 返回的是 expire 对象所代表的日期和时间对应的 Unix 时间戳。
        return expire.timestamp(), jwt.encode(new_data, key=UserToken.key)

    # 解析JWT token
    @staticmethod
    def parse_token(token):
        try:
            return jwt.decode(token, key=UserToken.key, algorithms=["HS256"])  # token是要解码的令牌，UserToken.key是用于解码的密钥，algorithms=["HS256"]指定了使用HS256算法进行签名和验证。
        except ExpiredSignatureError:
            raise Exception("登录状态已过期, 请重新登录")
        except Exception:
            raise Exception("登录状态校验失败, 请重新登录")

    @staticmethod
    def add_salt(password):
        m = hashlib.md5()
        bt = f"{password}{UserToken.salt}".encode("utf-8")
        m.update(bt)
        return m.hexdigest()
