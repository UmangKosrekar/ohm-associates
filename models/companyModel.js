const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  name: String,
  phone: Number,
  address: String,
  gst: String,
  salesType: String,
  contactPersonName: String,
  contactPersonPhone: Number,
  ReferenceBy: String,
},
{ timestamps: true });

module.exports = mongoose.model("companies", Schema);
