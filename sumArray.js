function sumArray(arr) {
  return arr.reduce((accumulator, current) => accumulator + current, 0);
}

console.log(sumArray([1, 2, 3, 4])); // Output: 10