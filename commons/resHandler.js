const resHandler = (res, statusCode, msg = "Internal Error", data) => {
  return res.status(statusCode).json({ msg: msg, data: data });
};

module.exports = resHandler;
