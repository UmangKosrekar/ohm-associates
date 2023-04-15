const mongoose = require("mongoose");

const PriceSchema = {
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  gstRate: {
    type: Number,
    required: true,
  },
};

const Schema = mongoose.Schema(
  {
    invoiceID: {
      type: Number,
      required: true,
    },
    productData: [PriceSchema],
    companyID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("invoice", Schema);
