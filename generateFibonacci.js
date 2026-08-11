function generateFibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  
  const fib = [0, 1];
  // লুপ চালিয়ে আগের দুটি সংখ্যার যোগফল অ্যারেতে যোগ করা হলো
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}

console.log(generateFibonacci(5)); // Output: [0, 1, 1, 2, 3]
console.log(generateFibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8]