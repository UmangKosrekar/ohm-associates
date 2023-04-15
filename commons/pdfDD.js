const path = require("path");

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
        widths: ["*", "*", "*","*", "*", "*","*"],
        body: [
          [
            {
              text: "TAX INVOICE",
              colSpan: 8,
              alignment: "center",
              bold: true,
              border: [false, false, false, true],
            },
          ],
          [
            {
              text: "GSTIN No.: 24DBUPK8141J1Z5",
              colSpan: 8,
              alignment: "center",
              bold: true,
              border: [false, false, false, true],
            },
          ],
          [
            {
              text: "Buyers",
              colSpan: 5,
              alignment: "center",
              bold: true,
              border: [false, false, false, true],
            },
          ],
          [
            {
              text: "GSTIN No.: 24DBUPK8141J1Z5",
              colSpan: 3,
              alignment: "center",
              bold: true,
              border: [false, false, false, true],
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

module.exports = { fonts, dd };
