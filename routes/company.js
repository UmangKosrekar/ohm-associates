const app = require("express").Router();
const {
  createCompany,
  listCompany,
  editCompany,
} = require("../controllers/company");
const validate = require("../commons/validate");
const {
  createCompanyValidation,
  editCompanyValidation,
} = require("../validations/companyValidation");

app.post("/create", validate(createCompanyValidation), createCompany);
app.put("/update", validate(editCompanyValidation), editCompany);
app.post("/list", listCompany);

module.exports = app;
