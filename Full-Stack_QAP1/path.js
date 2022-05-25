/*
 Path Core Module
 The path module provides utilities for working with file and directory paths.
*/

// Acquiring built in node module with require object.
const path = require("path");

// Blank space - I just like making my console look clean.
console.log("");
// Logs the absolute current directory path.
// __dirname is the current file you are executing.
console.log(path.dirname(__dirname));

// Logs the extension name of a file in this case the extension for path.js is ".js".
console.log(path.extname("path.js"));

console.log("");
