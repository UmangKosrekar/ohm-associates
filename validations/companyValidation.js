const joi = require("joi");
joi.objectId = require("joi-objectid")(joi);

module.exports = {
  createCompanyValidation: joi.object().keys({
    name: joi.string().required(),
    phone: joi.number().required(),
    address: joi.string().required(),
    gst: joi.string().required(),
    salesType: joi.string().required(),
    contactPersonName: joi.string(),
    contactPersonPhone: joi.number(),
    ReferenceBy: joi.string(),
  }),
  editCompanyValidation: joi.object().keys({
    id: joi.objectId().required(),
    name: joi.string().required(),
    phone: joi.number().required(),
    address: joi.string().required(),
    gst: joi.string().required(),
    salesType: joi.string().required(),
    contactPersonName: joi.string(),
    contactPersonPhone: joi.number(),
    ReferenceBy: joi.string(),
  }),
};
