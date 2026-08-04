function addPrefix(word) {
  // শব্দের শুরুতে "Un" যুক্ত করা হলো
  return "Un" + word;
}

console.log(addPrefix("happy")); // Output: "Unhappy"
console.log(addPrefix("do"));    // Output: "Undo"