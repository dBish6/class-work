/*
 File System Core Module 
 The file system module allows you to work with the file system on your computer.
*/

// Acquiring built in node module with require object.
const fs = require("fs");
// With help from http of course for this example.
const http = require("http");
// Constant for the port number to be binded with our server.
const port = 3069;

/*
  Run a function that creates a server just like before in http.js, but inside
  the function will read this html file I created with the fs node module.
*/
http
  .createServer((req, res) => {
    // For the first argurment specify the path for the file.
    // Then the second argurment is a callback function with 2 parameters.
    // One to handle the error and the other handle the data.
    fs.readFile("./sample.html", (error, data) => {
      // if the file couldn't be run corrently throw the error.
      if (error) {
        throw error;
        // or else if the file is read successfully run the following code - I know the else is not needed.
      } else {
        res.writeHead(200, { "Content-Type": "text/html" }); // When status code is 200 use contect type text/html so it can output html.
        res.write(data); // Now write the data, which will load our html file.
        res.end(); // Lets the server know the response is done so it doesn't freeze.
      }
    });
  })
  .listen(
    // Listen for any connections on port number then run function.
    port,
    () =>
      console.log(
        `Server started on port ${port}; press Ctrl-C to terminate...`
      ) // Once the server is running log text in console.
  );

// Extra - Not part of above example.
/* 
 Also comment things out below accordingly, so for example let it write the file and comment out where 
 I add text to it (the appendFile function) or you can just run it at the same time...
*/

// Constant to store the decired file name.
const file = "newFile.txt";
// Asynchronously write a text file to this current directory with the desired text as the second argurment.
// By default, the file would be replaced if it exists.
// Pass a single parameter to handle the error and run the function as follows.
fs.writeFile(`${file}`, "Wow, a new file...", (error) => {
  if (error) throw error; // if the file couldn't be created corrently throw the error.
  console.log("File was created successfully."); // if the file was created successfully the console will indicate it was a success.
});

/*
 writeFile() and appendFile() does mostly the same thing. I can replace writeFile function with appendFile and
 it will do the same thing, but writeFile if it already exists and I run the function, the file would be replaced.
 On the other hand appendFile, will do the same thing create a new file if it does not exist, but appendFile will
 append or add the text next to the text that was already created and if I would writeFile for that, it wouldn't
 append it will just replace the text that was already there.
*/

// Function that uses the same file and appends new text to the choosen file.
fs.appendFile(`${file}`, " Wow, new text new text NEW TEXT!", (error) => {
  if (error) throw error;
  console.log(`New content was added to ${file}`);
});

// Function that deletes specified file.
// fs.unlink(`${file}`, (error) => {
//   if (error) throw error;
//   console.log(`${file} was successfully deleted.`);
// });

// Function that renames the praticular file.
// The second argurment is what you want the new name to be.
// fs.rename(`${file}`, "changed.txt", (error) => {
//   if (error) throw error;
//   console.log(`${file} was successfully renamed.`);
// });
