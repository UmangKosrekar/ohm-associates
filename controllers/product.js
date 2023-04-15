const reshandler = require("../commons/resHandler");
const _s = require("../commons/statusCode");
const Product = require("../models/productModel");

exports.createProduct = async (req, res) => {
  try {
    const ifName = await Product.findOne({ name: req.body.name });
    if (ifName) {
      return reshandler(res, _s._BAD_REQUEST, "Name already Exists");
    }

    await Product.create(req.body);
    return reshandler(res, _s._CREADTED, "Data Saved Successfully");
  } catch (err) {
    console.log(err);
    return reshandler(res, _s._INTERNAL_SERVER_ERROR);
  }
};

exports.listProduct = async (req, res) => {
  await Product.find()
    .then((data) => {
      return reshandler(res, _s._OK, "Success", data);
    })
    .catch((err) => {
      console.log(err);
      return reshandler(res, _s._INTERNAL_SERVER_ERROR);
    });
};

exports.editProduct = async (req, res) => {
  try {
    const ifName = await Product.findOne({
      $and: [{ _id: { $ne: req.body.id } }, { name: req.body.name }],
    });
    if (ifName) {
      console.log(ifName);
      return reshandler(res, _s._BAD_REQUEST, "Name Already Exists");
    }

    const data = await Product.updateOne({ _id: req.body.id }, req.body);
    if (data.modifiedCount > 0) {
      return reshandler(res, _s._OK, "Updated Successfully");
    } else if (data.matchedCount > 0) {
      console.log(data);
      return reshandler(res, _s._OK, "Updated Already");
    } else {
      console.log(data);
      return reshandler(res, _s._REQUEST_TIMEOUT, "Error occured...");
    }
  } catch (err) {
    console.log(err);
    return reshandler(res, _s._INTERNAL_SERVER_ERROR);
  }
};
