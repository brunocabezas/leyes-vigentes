const fs = jest.genMockFromModule("fs");
const path = require("path");
let readFileSyncResponse = null;
// example of newMockFiles
// { "./testFolder/file1.txt": "This is the file content"
function __createMockFiles(newMockFiles) {
  mockFiles = "string of xml";
}
function readFileSync(pathToDirectory) {
  return readFileSyncResponse;
}
fs.readFileSync = readFileSync;
fs.__createMockFiles = __createMockFiles;
module.exports = fs;
