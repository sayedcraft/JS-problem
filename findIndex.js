function findIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(findIndex([5, 12, 8, 130, 44], 8)); // Output: 2
console.log(findIndex([5, 12, 8, 130, 44], 99)); // Output: -1