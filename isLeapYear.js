function isLeapYear(year) {
  // সালটি ৪ দিয়ে বিভাজ্য কিন্তু ১০০ দিয়ে বিভাজ্য নয়, অথবা ৪০০ দিয়ে বিভাজ্য হলে লিপ ইয়ার হবে
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(isLeapYear(2024)); // Output: true
console.log(isLeapYear(2023)); // Output: false