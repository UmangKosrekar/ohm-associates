const reshandler = require("../commons/resHandler");
const _s = require("../commons/statusCode");
const Order = require("../models/orderModel");
const orderIdGenerator = require("../commons/orderIdGenerator");
const { generatePDF } = require("../commons/pdfDD");

exports.createOrder = async (req, res) => {
  try {
    const currentId = await Order.findOne().sort({ _id: -1 }).lean();
    const id = orderIdGenerator(currentId);
    req.body = {
      ...req.body,
      orderId: id,
    };

    await Order.create(req.body);
    return reshandler(res, _s._CREADTED, "Data Saved Successfully");
  } catch (err) {
    console.log(err);
    return reshandler(res, _s._INTERNAL_SERVER_ERROR);
  }
};

exports.listOrder = async (req, res) => {
  try {
    const query = [
      {
        $lookup: {
          from: "companies",
          foreignField: "_id",
          localField: "companyId",
          as: "companyData",
        },
      },
      {
        $lookup: {
          from: "products",
          foreignField: "_id",
          localField: "productId",
          as: "productData",
        },
      },
      {
        $unwind: {
          path: "$companyData",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $unwind: {
          path: "$productData",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $project: {
          orderId: 1,
          price: 1,
          createdAt: 1,
          companyData: {
            name: 1,
          },
          productData: {
            name: 1,
          },
        },
      },
    ];
    const orderData = await Order.aggregate(query);
    return reshandler(res, _s._OK, "Success", orderData);
  } catch (error) {
    console.log(error);
    return reshandler(res, _s._INTERNAL_SERVER_ERROR);
  }
};

exports.view = async (req, res) => {
  try {
    const { flag: flag, orderId: orderId } = req.params;

    const query = [
      {
        $match: {
          orderId: orderId,
        },
      },
      {
        $lookup: {
          from: "companies",
          foreignField: "_id",
          localField: "companyId",
          as: "companyData",
        },
      },
      {
        $lookup: {
          from: "products",
          foreignField: "_id",
          localField: "productId",
          as: "productData",
        },
      },
      {
        $unwind: {
          path: "$productData",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $unwind: {
          path: "$companyData",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $project: {
          orderId: 1,
          price: 1,
          createdAt: 1,
          companyData: 1,
          productData: 1,
        },
      },
    ];

    const viewData = await Order.aggregate(query);

    // return res.send(viewData);

    if (flag == "pdf") {
      generatePDF(viewData, function (pdfData) {
        res.contentType("application/pdf");
        // return reshandler(res, _s._OK, "", pdfData);
        res.send(pdfData);
      });
    } else if (flag == "view") {
    }
  } catch (error) {
    console.log(error);
    return reshandler(res, _s._INTERNAL_SERVER_ERROR);
  }
};

// exports.editOrder = async (req, res) => {
//   try {
//     const ifName = await Product.findOne({
//       $and: [{ _id: { $ne: req.body.id } }, { name: req.body.name }],
//     });
//     if (ifName) {
//       console.log(ifName);
//       return reshandler(res, _s._BAD_REQUEST, "Name Already Exists");
//     }

//     const data = await Product.updateOne({ _id: req.body.id }, req.body);
//     if (data.modifiedCount > 0) {
//       return reshandler(res, _s._OK, "Updated Successfully");
//     } else if (data.matchedCount > 0) {
//       console.log(data);
//       return reshandler(res, _s._OK, "Updated Already");
//     } else {
//       console.log(data);
//       return reshandler(res, _s._REQUEST_TIMEOUT, "Error occured...");
//     }
//   } catch (err) {
//     console.log(err);
//     return reshandler(res, _s._INTERNAL_SERVER_ERROR);
//   }
// };
