/* 
 Node Global Objects are the objects that are available in all modules. 
 Global Objects are built-in objects that are part of the JavaScript and can 
 just be used directly in the code without importing any particular module.
*/

// This function will get you global namespace objects.
function globals() {
  return this;
}

/* 
 Then this fuction will take everything listed in "this" and create an array 
 of all variables names of all global objects in node.
*/
function globList() {
  return Object.getOwnPropertyNames(globals()); // Passing the function with "this" through "getOwnPropertyNames" to get all names.
}
console.log(globList());
