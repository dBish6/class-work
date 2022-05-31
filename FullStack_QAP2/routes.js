// const fs = require("fs");

// const logEvents = require("./logEvents");
// const EventEmitter = require("events");
// class MyEmitter extends EventEmitter {}
// // initialize an new emitter object.
// const myEmitter = new MyEmitter();

// myEmitter.addListener("log", (msg, fileName) => logEvents(msg, fileName));

// const indexPage = (filename, res) => {
//   myEmitter.emit("log", `${req.url}\t${req.method}`, "reqLog.txt");
//   displayFile(filename, res);
// };

// const displayFile = (filename, res) => {
//   fs.readFile(filename, (err, data) => {
//     // || path
//     if (err) {
//       console.log(err);
//       myEmitter.emit("log", `${err.name}: ${err.message}`, "errLog.txt");
//       res.writeHead(404, { "Content-Type": "text/plain" });
//       res.end("404 NOT FOUND");
//     } else {
//       res.writeHead(404, { "Content-Type": "text/html" });
//       res.write(data);
//       res.end();
//     }
//   });
//   // displayFile();
// };

// module.exports = {
//   indexPage,
// };
