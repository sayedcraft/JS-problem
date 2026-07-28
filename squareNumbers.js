function squareNumbers(arr) {
  // map() মেথড ব্যবহার করে অ্যারের প্রতিটি সংখ্যাকে নিজের সাথে গুণ করে বর্গ বের করা হলো
  return arr.map(num => num * num);
}

console.log(squareNumbers([2, 3, 4])); // Output: [4, 9, 16]