const fs = require("fs");
const path = require("path");
const parseString = require("/usr/local/lib/node_modules/xml2js/lib/xml2js.js")
  .parseString;

// parses input file and creates separated json files, the files are named
// by the value obtained using the attr param on the
const defaultGetData = d => {
  // console.log(d);
  return (d && d.Normas && d.Normas.Norma) || null;
};

const toSeparateFilesByAttr = (
  file = "../data/small_leyes.xml",
  attr = "idNorma",
  getData = defaultGetData
) =>
  parseString(fs.readFileSync(path.resolve(__dirname, file)), (err, result) => {
    const arrayOfData = getData(result);
    if (!arrayOfData) {
      return console.error("No XML data defined with current getter");
    }
    return arrayOfData.forEach(item => {
      const identifier = item["$"][attr];
      // if data/separate doesn't exists, creating directory
      if (!fs.existsSync(path.resolve(__dirname, `../data/separate/`))) {
        fs.mkdirSync(path.resolve(__dirname, `../data/separate/`), 0744);
      }
      fs.writeFileSync(
        path.resolve(__dirname, `../data/separate/${identifier}.json`),
        JSON.stringify(result),
        "utf8"
      );
    });
  });

module.exports = toSeparateFilesByAttr();
