function numberRange(start, end) {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

console.log(numberRange(3, 7)); // Output: [3, 4, 5, 6, 7]