const reshandler = require("../commons/resHandler");
const _s = require("../commons/statusCode");

const validation = (Schema) => {
  return (req, res, next) => {
    // console.log(Schema);
    const { error } = Schema.validate(req.body);
    if (error) {
      console.log(error.details);
      const errorMessage = error.details[0].message.replace(/["]/g, "");
      return reshandler(res, _s._BAD_REQUEST, errorMessage);
    }
    next();
  };
};
module.exports = validation;
