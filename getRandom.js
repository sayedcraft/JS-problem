function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

console.log(getRandom(['apple', 'banana', 'cherry']));