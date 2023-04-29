const mongoose = require("mongoose");

const Schema = mongoose.Schema(
  {
    orderId: String,
    productId: mongoose.Schema.Types.ObjectId,
    price: Number,
    companyId: mongoose.Schema.Types.ObjectId,
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", Schema);
