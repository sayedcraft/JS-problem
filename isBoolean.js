function isBoolean(value) {
  return typeof value === "boolean";
}

console.log(isBoolean(true));  // Output: true
console.log(isBoolean("true")); // Output: false