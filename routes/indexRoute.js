const app = require("express").Router();

const productRouter = require("./product");
const companyRouter = require("./company");
const invoiceRouter = require("./invoice");
const orderRouter = require("./order");

app.use("/product", productRouter);
app.use("/company", companyRouter);
app.use("/invoice", invoiceRouter);
app.use("/order", orderRouter);

module.exports = app;
