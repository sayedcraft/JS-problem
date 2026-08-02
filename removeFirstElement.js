function removeFirstElement(arr) {
  // shift() মেথড ব্যবহার করে অ্যারের প্রথম উপাদানটি সরিয়ে ফেলা হলো
  arr.shift();
  return arr;
}

console.log(removeFirstElement([1, 2, 3, 4])); // Output: [2, 3, 4]