function sumPrimes(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) sum += i; 
  }
  return sum;
}

console.log(sumPrimes(10)); 