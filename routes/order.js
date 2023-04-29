const app = require("express").Router();
const { createOrder, listOrder, view } = require("../controllers/order");
const validate = require("../commons/validate");
const { createOrderValidation } = require("../validations/orderValidation");

app.post("/create", validate(createOrderValidation), createOrder);
// app.put("/update", validate(editProductValidation), editProduct);
app.post("/list", listOrder);
app.get("/:flag/:orderId", view);

module.exports = app;
