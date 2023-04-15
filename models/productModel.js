const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  name: String,
  hsn: Number,
  gstRate: Number,
  unit: String,
},
{ timestamps: true });

module.exports = mongoose.model("product", Schema);
