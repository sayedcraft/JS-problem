function isValidParentheses(s) {
  const stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  
  for (let char of s) {
    // ওপেনিং ব্র্যাকেট হলে স্ট্যাকে পুশ করা হলো
    if (['(', '{', '['].includes(char)) {
      stack.push(char);
    } else {
      // ক্লোজিং ব্র্যাকেট হলে স্ট্যাক থেকে পপ করে মিলিয়ে দেখা হলো সঠিক পেয়ার কি না
      const top = stack.pop();
      if (top !== map[char]) {
        return false;
      }
    }
  }
  // লুপ শেষে স্ট্যাক পুরোপুরি খালি থাকলে ব্র্যাকেটগুলো সঠিক ক্রমে বন্ধ হয়েছে
  return stack.length === 0;
}

console.log(isValidParentheses("()[]{}")); // Output: true
console.log(isValidParentheses("(]"));     // Output: false