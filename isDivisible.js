function isDivisible(num, divisor) {
  return num % divisor === 0;
}

console.log(isDivisible(10, 2)); // Output: true
console.log(isDivisible(10, 3)); // Output: false