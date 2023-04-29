const path = require("path");
const pdfMakePrinter = require("pdfmake");

exports.generatePDF = (data, callback) => {
  const fonts = {
    Roboto: {
      normal: path.join(__dirname, "../fonts/Poppins-Regular.ttf"),
      bold: path.join(__dirname, "../fonts/Poppins-Bold.ttf"),
      italics: path.join(__dirname, "../fonts/Poppins-Italic.ttf"),
      bolditalics: path.join(__dirname, "../fonts/Poppins-BoldItalic.ttf"),
    },
  };

  const dd = {
    content: [
      {
        columns: [
          {
            image: path.join(__dirname, "../assests/whoLogo.png"),
            width: 100,
            heigth: 100,
          },
          {
            text: [
              {
                text: "OHM ASSOCIATES\n",
                style: "bigHeader",
                alignment: "center",
              },
              {
                text: "B-168, KAMALA PARK C.H.SOC.LTD., B/S CADILA LAB,\nGHODASAR, AHMEDABAD-380050\n",
                alignment: "center",
              },
              {
                text: "E-mail: ",
                bold: true,
                alignment: "center",
              },
              " ohmassociates1983@gmail.com\n",
              {
                text: "Mobile No.: ",
                bold: true,
                alignment: "center",
              },
              "  9898646486",
            ],
          },
        ],
      },
      "\n\n",
      {
        table: {
          widths: ["*"],
          body: [
            [
              {
                text: "TAX INVOICE",
                alignment: "center",
                bold: true,
                border: [false, false, false, true],
              },
            ],
          ],
        },
      },
      {
        table: {
          widths: ["*"],
          body: [
            [
              {
                text: "GSTIN No.: 24DBUPK8141J1Z5",
                alignment: "center",
                bold: true,
                border: [false, false, false, true],
              },
            ],
          ],
        },
      },
      {
        table: {
          widths: ["*", "auto"],
          body: [
            [
              {
                text: `first`,
                alignment: "center",
                border: [true, false, true, true],
              },
              {
                table: {
                  widths: ["auto", "auto"],
                  body: [
                    [
                      {
                        text: "Invoice No.",
                      },
                      {
                        text: "ok",
                      },
                    ],
                    [
                      {
                        text: "Invoice Date",
                      },
                      {
                        text: "ok",
                      },
                    ],
                  ],
                },
                layout: "noBorders",
              },
            ],
          ],
        },
      },
    ],
    styles: {
      bigHeader: {
        fontSize: 22,
        bold: true,
        alignment: "center",
      },
      tableHeader: {
        fontSize: 16,
        bold: true,
        italics: true,
        alignment: "center",
      },
      header: {
        fontSize: 18,
        bold: true,
      },
      subheader: {
        fontSize: 15,
        bold: true,
      },
      quote: {
        italics: true,
      },
      small: {
        fontSize: 8,
      },
    },
  };

  var printer = new pdfMakePrinter(fonts);
  var pdfDoc = printer.createPdfKitDocument(dd);

  var chunks = [];
  pdfDoc.on("data", function (chunk) {
    chunks.push(chunk);
  });

  pdfDoc.on("end", function () {
    var result = Buffer.concat(chunks);
    // var pdfData = result.toString("base64");
    callback(result);
  });

  pdfDoc.end();
};
