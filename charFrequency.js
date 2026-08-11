function charFrequency(str) {
  const freq = {};
  // লুপ চালিয়ে প্রতিটি অক্ষরের উপস্থিতি অবজেক্টে গণনা করা হলো
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}

console.log(charFrequency("banana")); // Output: { b: 1, a: 3, n: 2 }
console.log(charFrequency("hello"));  // Output: { h: 1, e: 1, l: 2, o: 1 }