import inspect
import os

from loguru import logger

from config import Config

# 在Python 2.x 版本中，不写继承的话默认会继承 object 类。而在 Python 3.x 版本中，不继承 object 类也可以，
# 但为了保持向后兼容性，我们通常建议在类定义时显式继承 object 类。
# @SingletonDecorator
class Log(object):
    business = None

    # 在这个构造函数中，name参数默认值为'pity'。这意味着，如果在创建一个Log实例时没有显式地指定name参数，
    # 那么默认情况下，这个实例的business属性将被设置为'pity'。
    def __init__(self, name='pity'):  # Logger标识默认为app
        """
        :param name: 业务名称
        """
        # 如果目录不存在则创建
        if not os.path.exists(Config.LOG_DIR):
            os.mkdir(Config.LOG_DIR)
        self.business = name

# 这行代码使用了 Python 的 inspect 模块中的 getframeinfo() 方法，用于获取当前代码执行时的堆栈帧信息。
# 其中 inspect.currentframe().f_back 获取当前函数调用栈帧的上一帧，也就是调用 error()、info() 等方法的函数所在的栈帧。
# getframeinfo() 方法返回一个包含以下信息的元组：
#     文件名
#     行号
#     函数名
#     源代码
#     当前行号（不是 Python 中的行号，而是 CPython 解释器内部使用的行号）
# 这些信息都可以通过元组的属性获取。在这里，我们只需要获取文件名、行号和函数名，因此使用了 _ 占位符来忽略返回的源代码和当前行号。
# 这些信息会被用于日志记录中，方便定位日志信息产生的位置。

    def info(self, message: str):
        file_name, line, func, _, _ = inspect.getframeinfo(inspect.currentframe().f_back)
        logger.bind(name=Config.PITY_INFO, func=func, line=line,
                    business=self.business, filename=file_name).debug(message)

    def error(self, message: str):
        file_name, line, func, _, _ = inspect.getframeinfo(inspect.currentframe().f_back)
        # 这行代码是在Log类的方法中调用logger对象的bind()方法,在这里，logger.bind()方法被调用，
        # 并将name、func、line、business、filename等信息绑定到了logger对象上。
        # 其中，name指定了日志的名称，func、line、filename等参数是从当前的堆栈帧中获取的，business是在Log类中定义的类属性。
        # 最后，bind()方法返回的是logger对象本身，紧接着调用error()方法输出错误日志信息，参数为message。error()方法是logger对象的方法，
        # 用于输出错误级别的日志信息。由于之前已经使用bind()方法将上下文信息绑定到logger对象上，
        # 因此在输出日志信息时这些信息会自动添加到日志记录中。
        logger.bind(name=Config.PITY_ERROR, func=func, line=line,
                    business=self.business, filename=file_name).error(message)

    def warning(self, message: str):
        file_name, line, func, _, _ = inspect.getframeinfo(inspect.currentframe().f_back)
        logger.bind(name=Config.PITY_ERROR, func=func, line=line,
                    business=self.business, filename=file_name).warning(message)

    def debug(self, message: str):
        file_name, line, func, _, _ = inspect.getframeinfo(inspect.currentframe().f_back)
        logger.bind(name=Config.PITY_INFO, func=func, line=line,
                    business=self.business, filename=file_name).debug(message)

    def exception(self, message: str):
        file_name, line, func, _, _ = inspect.getframeinfo(inspect.currentframe().f_back)
        logger.bind(name=Config.PITY_ERROR, func=func, line=line,
                    business=self.business, filename=file_name).exception(message)
