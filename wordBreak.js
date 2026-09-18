function wordBreak(s, wordDict) {
  const wordSet = new Set(wordDict);
  // একটি ডিপি অ্যারে তৈরি করা হলো যা ট্র্যাক রাখবে স্ট্রিংয়ের নির্দিষ্ট অংশ পর্যন্ত ভেঙে ফেলা যায় কি না
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;
  
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      // যদি পূর্বের অংশ ট্রু হয় এবং বর্তমান সাবস্ট্রিং ডিকশনারিতে থাকে
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  
  return dp[s.length];
}

console.log(wordBreak("leetcode", ["leet", "code"]));       // Output: true (কারণ "leet" + "code")
console.log(wordBreak("applepenapple", ["apple", "pen"])); // Output: true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // Output: false