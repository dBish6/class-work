const sumOfDigits = (n) => {
  if (n >= 1) {
    return n + sumOfDigits(n - 1);
  } else if (n === 0) {
    return n;
  } else {
    console.log("Please enter a natural number.");
    return "";
  }
};

console.log(sumOfDigits(7));
