function countWords(sentence) {
  // split(' ') ব্যবহার করে বাক্যটিকে স্পেসের মাধ্যমে আলাদা শব্দে ভাগ করে অ্যারের দৈর্ঘ্য মাপা হলো
  const words = sentence.trim().split(" ");
  return sentence.trim() === "" ? 0 : words.length;
}

console.log(countWords("JavaScript is fun to learn")); // Output: 6
console.log(countWords("Hello world")); // Output: 2