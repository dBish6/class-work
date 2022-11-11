const power = (n, exponent) => {
  if (exponent === 0) {
    return 1;
  } else {
    return n * power(n, exponent - 1);
  }
};

console.log(power(2, 3));
