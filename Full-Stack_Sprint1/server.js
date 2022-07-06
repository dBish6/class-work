/* Sever.js
   List of functions for running the node HTTP sever on LocalHost. 

   Authors: David Bishop, Jacob Pritchett,
   Alex Frizzell
   Created Date: June 16, 2022
   Updates:
   Date, Author, Description
   June 20, 2022, David, modules, server function, displayFile & server listen & events.
   June 21, 2022, David, figured out how to make the server read css, ect.
*/

const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const logEvent = require("./logEvent");

myEmitter.addListener("log", (msg, level, logName) =>
  logEvent(msg, level, logName)
);

const { newToken } = require("./token");

const port = 3069;

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.url === "/") {
    let htmlPath = path.join(__dirname, "public", "index.html");
    res.statusCode = 200;
    myEmitter.emit("log", `${req.method}\t${req.url}`, "INFO", "reqLog.log");
    displayFile(htmlPath);
  } else if (req.url === "/form") {
    let htmlPath = path.join(__dirname, "public", "form.html");
    res.statusCode = 200;
    myEmitter.emit("log", `${req.method}\t${req.url}`, "INFO", "reqLog.log");
    displayFile(htmlPath);
  } else if (req.url.match("/newToken")) {
    const form_data = url.parse(req.url, true).query;
    // From the newToken function, pass in the names from the form as functions parameters.
    const token = newToken(
      form_data.username,
      form_data.email,
      form_data.phone
    );
    token.then((data) => {
      res.end(`New token was created!\n\n ${JSON.stringify(data, null, 2)}`);
    });
  } else if (req.url === "/tokenCount") {
    fs.readFile(
      path.join(__dirname, "json", "tokens.json"),
      "UTF-8",
      (err, data) => {
        if (err) {
          myEmitter.emit(
            "log",
            `${err.name}:\t${err.message}`,
            "ERROR",
            "errLog.log"
          );
          console.error(err);
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("404 Not Found");
        } else {
          res.writeHead(res.statusCode, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        }
      }
    );
  }
  // Matches the req.url with the existing req.url if the extension name is ".css".
  else if (req.url.match(".css$")) {
    let cssPath = path.join(__dirname, req.url); // For some reason it just goes to public anyways... becasue the req.url has /public in it.
    // createReadStream is like readFileSync, but I've heard people use createReadStream for bigger files.. just wanted to do something different.
    let fileStream = fs.createReadStream(cssPath, "UTF-8");
    res.writeHead(200, { "Content-Type": "text/css" });
    myEmitter.emit("log", `${req.method}\t${req.url}`, "INFO", "reqLog.log");
    // Pipe listens from a readStream and "pipes" it to a writeSteam.
    fileStream.pipe(res);
  } else if (req.url.match(".png$")) {
    let imagePath = path.join(__dirname, req.url);
    let fileStream = fs.createReadStream(imagePath);
    res.writeHead(200, { "Content-Type": "image/png" });
    fileStream.pipe(res);
  } else {
    myEmitter.emit(
      "log",
      `${req.method}\t${req.url}\t404: no such file or directory found`,
      "ERROR",
      "errLog.log"
    );
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("404 Not Found");
    res.end();
  }

  // Takes in the path(filename), reads the file and writes it to server.
  function displayFile(filename) {
    fs.readFile(filename, "UTF-8", (err, data) => {
      if (err) {
        myEmitter.emit(
          "log",
          `${err.name}:\t${err.message}`,
          "ERROR",
          "errLog.log"
        );
        console.error(err);
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
      } else {
        res.writeHead(res.statusCode, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  }
});

// Listens for server on desired port on localhost.
server.listen(port, "localhost", () => {
  console.log(
    `Server is running on http://localhost:${port}; Ctrl-C to terminate...`
  );
});
