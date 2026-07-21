function repeatStringNumTimes(str, num) {
  if (num < 0) return "";
  let repeated = "";
  for (let i = 0; i < num; i++) {
    repeated += str;
  }
  return repeated;
}

console.log(repeatStringNumTimes("abc", 3)); // Output: "abcabcabc"