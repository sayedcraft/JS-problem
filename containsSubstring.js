function containsSubstring(str, target) {
  return str.includes(target);
}

console.log(containsSubstring("hello world", "world")); // Output: true
console.log(containsSubstring("hello world", "javascript")); // Output: false