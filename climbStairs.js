function climbStairs(n) {
  if (n <= 2) return n;
  
  let first = 1;
  let second = 2;
  
  // ডাইনামিক প্রোগ্রামিং বা ফাইবোনিসি নিয়মে পূর্ববর্তী ধাপগুলোর যোগফল বের করা হলো
  for (let i = 3; i <= n; i++) {
    let current = first + second;
    first = second;
    second = current;
  }
  
  return second;
}

console.log(climbStairs(2)); // Output: 2 (1+1 অথবা 2)
console.log(climbStairs(3)); // Output: 3 (1+1+1, 1+2, অথবা 2+1)