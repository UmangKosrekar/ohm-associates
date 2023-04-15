const joi = require("joi");
joi.objectId = require("joi-objectid")(joi);

const productArray = joi.object().keys({
  productID: joi.objectId().required(),
  price: joi.number().required(),
});

module.exports = {
  createInvoiceValidation: joi.object().keys({
    companyID: joi.objectId().required(),
    pdf: joi.boolean().required(),
    productData: joi.array().items(productArray),
  }),
};
