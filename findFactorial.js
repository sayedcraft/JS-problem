function findFactorial(num) {
  // যদি সংখ্যাটি ০ বা ১ হয়, তবে এর ফ্যাক্টরিয়াল সবসময় ১ হবে
  if (num === 0 || num === 1) return 1;
  
  let result = 1;
  // ১ থেকে num পর্যন্ত সংখ্যাগুলোর গুণফল বের করা হলো
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log(findFactorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)
console.log(findFactorial(4)); // Output: 24 (4 * 3 * 2 * 1)