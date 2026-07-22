function countOccurrences(arr, target) {
  let count = 0;
  for (let item of arr) {
    if (item === target) {
      count++;
    }
  }
  return count;
}

console.log(countOccurrences([1, 2, 3, 2, 4, 2, 5], 2)); // Output: 3