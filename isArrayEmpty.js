function isArrayEmpty(arr) {
  // অ্যারের length যদি ০ হয়, তাহলে সেটি খালি (true) হিসেবে গণ্য হবে
  return arr.length === 0;
}

console.log(isArrayEmpty([]));       // Output: true
console.log(isArrayEmpty([1, 2, 3])); // Output: false