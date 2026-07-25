function convertToSeconds(minutes) {
  // ১ মিনিট সমান ৬০ সেকেন্ড, তাই মিনিটকে ৬০ দিয়ে গুণ করতে হবে
  return minutes * 60;
}

console.log(convertToSeconds(5)); // Output: 300
console.log(convertToSeconds(2)); // Output: 120