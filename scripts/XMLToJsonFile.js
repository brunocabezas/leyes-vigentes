const fs = require("fs");
const path = require("path");
const parseString = require("/usr/local/lib/node_modules/xml2js/lib/xml2js.js")
  .parseString;

// Writes to existing or not file leyes.json
const toFile = (
  file = "../data/small_leyes.xml",
  output = "../data/leyes3.json"
) => {
  const filePath = path.resolve(__dirname, file);
  // console.log(filePath, fs.readFileSync(__dirname, file));
  return parseString(fs.readFileSync(filePath, "utf8"), (readError, result) => {
    // console.log(result, readError);
    if (readError) throw readError;
    else if (!result) throw result;
    else if (result) {
      const writePath = path.resolve(__dirname, output);
      fs.writeFile(
        writePath,
        "[" + JSON.stringify(result) + "]",
        "utf8",
        writeError => {
          if (writeError) throw writeError;
          else console.log("No error. File written: " + writePath);
        }
      );
    }
  });
};

module.exports = toFile();
