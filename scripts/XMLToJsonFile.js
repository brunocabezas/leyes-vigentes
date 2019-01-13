const fs = require("fs");
const path = require("path");
var parser = require("fast-xml-parser");
const xmlReader = require("read-xml");

// utility to remove unscaped character from source file
if (!String.prototype.encodeHTML) {
  String.prototype.encodeHTML = function() {
    return this.replace(/&#195;&#141;/g, "Í")
      .replace(/&#195;&#147;/g, "Ó")
      .replace(/&#195;&#154;/g, "Ú")
      .replace(/&#195;&#145;/g, "Ñ")
      .replace(/&#195;&#129;/g, "Á")
      .replace(/&#195;&#137;/g, "É")
      .replace(/&#195;&#169;/g, "é")
      .replace(/&#195;&#161;/g, "á")
      .replace(/&#195;&#173;/g, "í")
      .replace(/&#195;&#186;/g, "ú")
      .replace(/&#194;&#180;/g, "'")
      .replace(/&#195;&#179;/g, "ó")
      .replace(/&#194;&#176;/g, "°")
      .replace(/\n/g, " ")
      .replace(/&#194;&#186;/g, "º");
  };
}
// Writes to existing or not file leyes.json
const toFile = (file = "../leyesBIG2.xml", output = "../data/leyes4.json") => {
  const filePath = path.join(__dirname, file);
  return xmlReader.readXML(fs.readFileSync(filePath), (readError, result) => {
    if (readError) console.error(readError);
    else if (result) {
      const writePath = path.resolve(__dirname, output);
      // File in json withouth unencoded values
      // console.log(result.content, result.content.encodeHTML());
      const file = parser.parse(result.content.encodeHTML(), {
        ignoreAttributes: false,
        attributeNamePrefix: ""
      });
      fs.writeFile(writePath, JSON.stringify(file), writeError => {
        if (writeError) throw writeError;
        else console.log("No error. File written: " + writePath);
      });
    }
  });
};

module.exports = toFile();
