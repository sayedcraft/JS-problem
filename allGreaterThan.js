function allGreaterThan(arr, threshold) {
  return arr.every(num => num > threshold);
}

console.log(allGreaterThan([10, 15, 20], 5));  // Output: true
console.log(allGreaterThan([5, 12, 15], 10)); // Output: false