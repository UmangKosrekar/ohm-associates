var printer = new pdfMakePrinter(fontDescriptors);
var doc = printer.createPdfKitDocument(definition);

var chunks = [];
var result;

doc.on("data", function (chunk) {
  chunks.push(chunk);
});
doc.on("end", function () {
  result = Buffer.concat(chunks);

  response.contentType("application/pdf");
  response.send(result);
});
doc.end();
