function startsWithLetter(word, letter) {
  // startsWith() মেথড ব্যবহার করে শব্দটি নির্দিষ্ট অক্ষর দিয়ে শুরু কি না তা চেক করা হলো
  return word.startsWith(letter);
}

console.log(startsWithLetter("apple", "a")); // Output: true
console.log(startsWithLetter("banana", "c")); // Output: false