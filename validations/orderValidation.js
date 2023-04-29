const joi = require("joi");

module.exports = {
  createOrderValidation: joi.object().keys({
    productId: joi.string().required(),
    price: joi.number().required(),
    companyId: joi.string().required(),
    qyt: joi.number().required(),
  }),
};
