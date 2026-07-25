function isStringEmpty(str) {
  // স্ট্রিংটির দৈর্ঘ্য (length) যদি ০ হয়, তাহলে true রিটার্ন করবে
  return str.length === 0;
}

console.log(isStringEmpty(""));     // Output: true
console.log(isStringEmpty("hello")); // Output: false