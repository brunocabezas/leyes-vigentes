const fs = require("fs");
const path = require("path");
const dayjs = require("dayjs");
const parseString = require("/usr/local/lib/node_modules/xml2js/lib/xml2js.js")
  .parseString;

function parseDate(input, format) {
  format = format || "dd/mm/yyyy"; // somedefault format
  var parts = input.match(/(\d+)/g),
    i = 0,
    fmt = {};
  // extract date-part indexes from the format
  format.replace(/(yyyy|dd|mm)/g, function(part) {
    fmt[part] = i++;
  });
  return new Date(parts[fmt["yyyy"]], parts[fmt["mm"]] - 1, parts[fmt["dd"]]);
}

const sortByDate = (a, b) => {
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return parseDate(a.date, "dd-mm-yyyy") - parseDate(b.date, "dd-mm-yyyy");
};

const isValidDate = d => d instanceof Date && !isNaN(d);
const filterInvalidDates = item => isValidDate(new Date(item.date));

// Writes to existing or not file leyes.json
const main = (
  file = path.resolve(__dirname, `../data/small_leyes.xml`),
  output = path.resolve(__dirname, `../data/reduced.json`)
) =>
  parseString(fs.readFileSync(file), (err, result) => {
    const arrayOfData = result.Normas.Norma;
    const data = arrayOfData
      .map(item => ({
        id: item.$.idNorma,
        date: dayjs(item.$.fechaPublicacion).format("YYYY-MM-DD")
      }))
      .filter(filterInvalidDates)
      .sort(sortByDate);
    fs.writeFileSync(output, JSON.stringify(data), "utf8");
  });

module.exports = main();
