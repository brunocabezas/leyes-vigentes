const fs = require("fs");
const parseString = require("/usr/local/lib/node_modules/xml2js/lib/xml2js.js")
  .parseString;

// Writes to existing or not file leyes.json
const toFile = (file: "./data/leyes.xml", output: "./data/leyes.json") =>
  parseString(fs.readFileSync(file), (err, result) => {
    fs.writeFile(file, JSON.stringify(result), "utf8");
  });

export default toFile;
