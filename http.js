/*
 Http Core Module
 Http is the extension that runs your website server. 
*/

// Acquiring built in node module with require object.
const http = require("http");

// Blank space - I just like making my console look clean.
console.log("");
// All the differamt methods that can be called.
console.log(`LIST OF METHODS: ${http.METHODS.join(", ")}`);
console.log("");
// A array of every status code for the http module.
console.log("Every HTTP Status Code - StatusCode : Description:");
console.log(http.STATUS_CODES);
// Constant for the port number to be binded with our server.
const port = 3000;

/* 
 Below, run a function to create our server that can be loaded. The function has 2 parameters 
 one for listening for any request that come to the server and the other for the response.
*/
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" }); // When status code is 200 use text/plain contect type.
  res.write(`Foot Lettuce`); // And then write desired text with selected content type.
  res.end(); // Lets the server know the response is done so it doesn't freeze.
});

console.log("");
server.listen(
  // Listen for any connections on port number then run function.
  port,
  () =>
    console.log(`Server started on port ${port}; press Ctrl-C to terminate...`) // Once the server is running log text in console.
);
