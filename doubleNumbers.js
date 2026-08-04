function doubleNumbers(arr) {
  // map() মেথড ব্যবহার করে প্রতিটি সংখ্যাকে ২ দিয়ে গুণ করা হলো
  return arr.map(num => num * 2);
}

console.log(doubleNumbers([1, 2, 3, 4])); // Output: [2, 4, 6, 8]