const fs = require("fs");
const parseString = require("/usr/local/lib/node_modules/xml2js/lib/xml2js.js")
  .parseString;

// parses input file and creates separated json files, the files are named
// by the value obtained using the attr param on the
const defaultGetData = d => d.Normas.Norma;

const toSeparateFilesByAttr = (
  file: "./data/leyes.xml",
  attr: "idNorma",
  getData: defaultGetData
) =>
  parseString(file, (err, result) => {
    // Array of laws
    const arrayOfData = getData(result);
    for (let law of arrayOfLaws) {
      const identifier = law.$[attr];
      fs.writeFileSync(
        `./data/separate/${identifier}.json`,
        JSON.stringify(result),
        "utf8"
      );
    }
  });

export default toSeparateFilesByAttr;
