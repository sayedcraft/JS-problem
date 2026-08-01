function isEvenLength(str) {
  // স্ট্রিংয়ের দৈর্ঘ্যকে ২ দিয়ে ভাগ করলে ভাগশেষ ০ হলে সেটি জোড় সংখ্যা (true) হবে
  return str.length % 2 === 0;
}

console.log(isEvenLength("code")); // Output: true
console.log(isEvenLength("hello")); // Output: false