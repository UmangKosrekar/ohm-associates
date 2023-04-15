const app = require("express").Router();

const productRouter = require("./product");
const companyRouter = require("./company");
const invoiceRouter = require("./invoice");
app.use("/product", productRouter);
app.use("/company", companyRouter);
app.use("/invoice", invoiceRouter);

module.exports = app;
