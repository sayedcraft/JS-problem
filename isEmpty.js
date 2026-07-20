function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

console.log(isEmpty({}));    // Output: true
console.log(isEmpty({a: 1})); // Output: false