/*
 Lodash installed Module 
 Lodash makes JavaScript easier with their own utility functions by taking the hassle out of working with arrays, 
 numbers, objects, strings, etc.
*/

// Acquiring node module with require object.
const _ = require("lodash");

// A array of grocery list items.
const groceriesArr = [
  "Water",
  "SaltBeef",
  "Photoes",
  "Cabbage",
  "Carrot",
  "Water",
];

console.log("*Chunked*"); // Just logging a label for simplicity sake.
// Creates an array of elements split into groups the length of size.
// If the array can't be split evenly, the final chunk will be the remaining elements.
// Lodash uses _. for their objects.
const chunkedArray = _.chunk(groceriesArr, 2); // The object takes in a array and an integer for the length of each chunk.
console.log(chunkedArray); // Logging chunckedArray to the console.

console.log(""); // Just logging a empty space.

console.log("*Difference*");
// Creates an array of array values not included in the other given arrays.
// Takes in two arugments, the first for the array to inspect then a array of values to exclude.
// Returns the new array of desired filtered values.
const differenceArray = _.difference(groceriesArr, ["Water", "SaltBeef"]);
console.log(differenceArray);

console.log("");

console.log("*Intersection*");
// Creates an array of unique values that are included in all given arrays.
const intersectionArray = _.intersection(groceriesArr, ["Water", "SaltBeef"]);
console.log(intersectionArray);

console.log("");

console.log("*Join*");
// Converts all elements in array into a string separated by separator.
// The lodash _.join is basically the same thing as using .join with node, but _.join takes the array as the first argument.
const joinArray = _.join(groceriesArr, ", "); // Second argument is the separator between items in the array.
console.log(joinArray);

console.log("");

console.log("*Without*");
// Creates an array excluding all given values
// The first argument is the array to inspect and the second argument is the values to exclude then returns a new array.
// This is basically the same thing as _.difference, but _.without just takes in values as the second argument.
const withoutArray = _.without(groceriesArr, "Water", "SaltBeef");
console.log(withoutArray);

console.log("");

console.log("*Unique*");
// Creates a duplicate-free version of an array
const uniqueArray = _.uniq(groceriesArr); // Just take in a array as the argument.
console.log(uniqueArray);

console.log("");

console.log("*Merge*");
const person = {
  name: "David",
  age: "19",
  status: "Alien",
};

const update = {
  name: "David",
  age: "38",
  status: "God",
};

// Recursively merges own and inherited enumerable string keyed properties of source objects into the destination object.
// first argument is the initial object and the second argument is the object to change to.
const mergeObject = _.merge(person, update);
console.log(mergeObject);
