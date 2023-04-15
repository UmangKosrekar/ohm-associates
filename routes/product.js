const app = require("express").Router();
const {
  createProduct,
  listProduct,
  editProduct,
} = require("../controllers/product");
const validate = require("../commons/validate");
const {
  createProductValidation,
  editProductValidation,
} = require("../validations/productValidation");

app.post("/create", validate(createProductValidation), createProduct);
app.put("/update", validate(editProductValidation), editProduct);
app.post("/list", listProduct);

module.exports = app;
