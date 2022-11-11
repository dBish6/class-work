const decimalToBinary = (n) => {
  if (n >= 1) {
    if (n % 2) {
      return decimalToBinary((n - 1) / 2) + 1;
    } else {
      return decimalToBinary(n / 2) + 0;
    }
  } else {
    console.log("Please enter a number greater then 0.");
    return "";
  }
};
console.log(decimalToBinary(1000));
