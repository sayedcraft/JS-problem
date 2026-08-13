function firstNonRepeatingChar(str) {
  // প্রথমে প্রতিটি অক্ষরের ফ্রিকোয়েন্সি বা গণনাসংখ্যা বের করা হলো
  const charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  // স্ট্রিংয়ে লুপ চালিয়ে প্রথম যে অক্ষরের গণনাসংখ্যা ১ পাওয়া যাবে, সেটি রিটার্ন করা হবে
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  
  return null;
}

console.log(firstNonRepeatingChar("swiss")); // Output: "w"
console.log(firstNonRepeatingChar("programming")); // Output: "p"