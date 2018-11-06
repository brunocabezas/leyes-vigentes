import fn from "../../scripts/XMLToJsonFile";
const p = require("path");
const fileReadSyncValue = require("fs").readFileSync(
  p.resolve(__dirname, "../../__mocks__/xml_data.xml")
);
jest.mock("fs");

const file = "../xml_data.xml";
const output = "../__mocks__/xml_file_test_output.json";

console.log(
  fileReadSyncValue,
  p.resolve(__dirname, "../../__mocks__/xml_data.xml")
);
test("Adding 1 + 1 equals 2", () => {
  require("fs").__createMockFiles();
  require("../../scripts/XMLToJsonFile");

  jest.mock(p.resolve(__dirname, "../../__mocks__/xml_data.xml"));
  console.log(p.resolve(__dirname, "../../__mocks__/xml_data.xml"));
  fs.readFileSync = jest.fn();
  fs.readFileSync.mockReturnValue(fileReadSyncValue);
  expect(fn(file)).toBe(true);
});
