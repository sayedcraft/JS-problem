function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  
  // স্ট্রিংয়ের প্রতিটি অক্ষর চেক করা হচ্ছে সেটি ভাওয়েল কি না
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("programming")); // Output: 3 (o, a, i)
console.log(countVowels("AEIOU"));       // Output: 5