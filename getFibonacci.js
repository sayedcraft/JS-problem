function getFibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return n <= 2 ? sequence.slice(0, n) : sequence;
}

console.log(getFibonacci(6)); // Output: [0, 1, 1, 2, 3, 5]