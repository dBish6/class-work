/*
 Events Core Module 
 The events module provides the EventEmitter class, which is key to working with events in Node.js.
 You can create-, fire-, and listen for- your own events.
*/

// Acquiring built in node module with require object - EventEmitter is a class.
const EventEmitter = require("events");
// Object within class.
const emitter = new EventEmitter();

// Listening for an event.
emitter.on("messageLogged", () => {
  console.log("Listener Called"); // Logs text to the console when messageLogged is raised.
});

// To raise an event.
emitter.emit("messageLogged");
