const addIndexArray = (array1, array2) => {
  let result = [];
  let counter = 0;

  if (array1.length === 0) {
    console.log("array1 is empty.");
  } else if (array2.length === 0) {
    console.log("array2 is empty.");
  } else if (array1.length > array2.length || array2.length > array1.length) {
    console.log("Array length is greater then the other.");
  }
  while (counter < array1.length && counter < array2.length) {
    result.push(array1[counter] + array2[counter]);
    counter++;
  }
  return result;
};

var indexArr1 = [1, 2, 3, 5, 6];
var indexArr2 = [2, 3, 4, 3, 5];

console.log(addIndexArray(indexArr1, indexArr2));
