function findLongestWordLength(str) {
  const words = str.split(' ');
  let maxLength = 0;
  
  for (let word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }
  return maxLength;
}

console.log(findLongestWordLength("The quick brown fox jumped")); // Output: 6