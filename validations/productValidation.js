const joi = require("joi");
joi.objectId = require("joi-objectid")(joi);

module.exports = {
  createProductValidation: joi.object().keys({
    name: joi.string().required(),
    hsn: joi.number().required(),
    gstRate: joi.number().min(0).max(100).required(),
    unit: joi.string().required(),
  }),
  editProductValidation: joi.object().keys({
    id: joi.objectId().required(),
    name: joi.string().required(),
    hsn: joi.number().required(),
    gstRate: joi.number().min(0).max(100).required(),
    unit: joi.string().required(),
  }),
};
