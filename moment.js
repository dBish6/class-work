/*
 Moment installed Module 
 Moment is a library which helps with parsing, validating, manipulating 
 and displaying date/time in JavaScript in a very easy way.
*/

// Acquiring node module with require object.
const moment = require("moment");

// Logging the some instructions in the console.
console.log("Use Ctrl-C to stop.");

// Console Seconds Clock!
// Create a function with the Node global object setInterval().
setInterval(() => {
  let now = moment(); // A variable to store the current time by just calling moment().
  const readable = now.format("hh:mm:ssA"); // Now just format the time you desire with the variable now. hh for hours, mm for minutes, ss for seconds and A for capital PM/AM.
  console.log(readable); // Logging the formatted time to the console.
}, 1000); // The interval - 1000 milliseconds, which is 1 second. This function will be call every 1 second.

// Just logging the initial time for the minute clock, so you don't need to wait a mitute for it to appear for the first time.
// console.log(moment().format("hh:mmA"));

// Console Minute Clock!
// setInterval(() => {
//   const timeFormatted = moment().format("hh:mmA");
//   console.log(timeFormatted);
// }, 60000);
