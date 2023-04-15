const pdfMakePrinter = require("pdfmake");

const { fonts, dd } = require("../commons/pdfDD");

exports.createInvoice = (req, res) => {
  try {
    var printer = new pdfMakePrinter(fonts);
    var doc = printer.createPdfKitDocument(dd);

    var chunks = [];
    var result;

    doc.on("data", function (chunk) {
      chunks.push(chunk);
    });
    doc.on("end", function () {
      result = Buffer.concat(chunks);

      res.contentType("application/pdf");
      res.send(result);
    });
    doc.end();
  } catch (error) {
    console.log(error);
    return res.send("Internal error ");
  }
};
