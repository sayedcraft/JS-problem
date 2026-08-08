function endsWithLetter(word, letter) {
  // endsWith() মেথড ব্যবহার করে শব্দটি নির্দিষ্ট অক্ষর দিয়ে শেষ হয় কি না তা চেক করা হলো
  return word.endsWith(letter);
}

console.log(endsWithLetter("apple", "e")); // Output: true
console.log(endsWithLetter("banana", "c")); // Output: false