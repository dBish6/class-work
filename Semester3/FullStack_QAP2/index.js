const http = require("http");
const fs = require("fs");
// const url = require("url");

const logEvents = require("./logEvents");
const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
// initialize an new emitter object.
const myEmitter = new MyEmitter();

myEmitter.addListener("log", (msg, fileName, level) =>
  logEvents(msg, fileName, level)
);
const port = 3001;

const requestListener = (req, res) => {
  console.log(req.method, req.url);
  // const urlObject = url.parse("index.html", true);
  // const filename = "./views/" + "." + urlObject.pathname;
  // console.log("Pathname: " + urlObject.pathname);
  // displayFile(filename, res);
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200; // OK
      displayFile(path);
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      displayFile(path);
      break;
    case "/subscribe":
      path += "subscribe.html";
      res.writeHead(200, "Set-cookie", "subscription=New");
      displayFile(path);
      break;
    case "/create":
      path += "create.html";
      res.statusCode = 201; // Created - The server has fulfilled the request to the browser, but has created a new resource.
      // res.setHeader("Location", "/products"); // You can create the resource to another location, but it doesn't display the page... it says the location is /products in network.
      // res.end();
      displayFile(path);
      break;
    case "/products":
      path += "products.html";
      res.statusCode = 202; // Accepted - Server accepts for processing, may or may not result in a completed response, as it might be disallowed when processing.
      displayFile(path);
      break;
    case "/products/info":
      res.statusCode = 301; // Moved Permanently
      res.setHeader("Location", "/products");
      res.end();
      break;
    case "/nothing":
      path += "nothing.html";
      res.statusCode = 204; // No Content - Server processes the response corrently but doesn't return any content (look in the network tool when entered).
      displayFile(path);
      break;
    case "/jokeFrom1998":
      path += "jokeFrom1998.html";
      res.statusCode = 418; // I'm a Teapot - Server refuses to brew coffee because it is, permanently, a teapot.
      displayFile(path);
      break;
    case "/censored":
      path += "censored.html";
      res.statusCode = 451; // Unavailable for Legal Reasons - Server owner prohibit access for request.
      displayFile(path);
      break;
    default:
      path += "404.html";
      // Not Found
      res.statusCode = 404;
      displayFile(path);
      break;
  }
  if (path === "./views/404.html") {
    myEmitter.emit(
      "log",
      `${req.method}\t${req.url}\t404: no such file or directory found`,
      "errLog.txt",
      "ERROR"
    );
  } else if (path === "./views/censored.html") {
    myEmitter.emit(
      "log",
      `${req.method}\t${req.url}\t451: unavailable for legal reasons`,
      "errLog.txt",
      "ERROR"
    );
  } else {
    myEmitter.emit("log", `${req.method}\t${req.url}`, "reqLog.txt", "INFO");
  }
  function displayFile(filename) {
    fs.readFile(filename, (err, data) => {
      // || path
      if (err) {
        myEmitter.emit(
          "log",
          `${err.name}:\t${err.message}`,
          "errLog.txt",
          "ERROR"
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
};

// I don't know why I did it this way, but I just wanted to do something different.
const server = http.createServer(requestListener);
server.listen(port, "localhost", () => {
  console.log(
    `Server is running on http://localhost:${port}; press Ctrl-C to terminate...`
  );
});
