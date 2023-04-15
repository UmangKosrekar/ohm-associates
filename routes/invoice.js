const app = require("express").Router();
const { createInvoice } = require("../controllers/invoice");
const validate = require("../commons/validate");
const { createInvoiceValidation } = require("../validations/invoiceValidation");

app.post("/create", validate(createInvoiceValidation), createInvoice);

module.exports = app;
