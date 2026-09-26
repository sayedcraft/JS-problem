function longestCommonSubsequence(text1, text2) {
  const m = text1.length;
  const n = text2.length;
  // একটি টু-ডি (2D) ডিপি টেবিল তৈরি করা হলো
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // যদি অক্ষর মিলে যায়, তবে ওপরের কোণাকুণি ঘরের মানের সাথে ১ যোগ হবে
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // অক্ষর না মিললে বামের অথবা ওপরের ঘরের সর্বোচ্চ মানটি নেওয়া হবে
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  
  return dp[m][n];
}

console.log(longestCommonSubsequence("abcde", "ace")); // Output: 3 ("ace")
console.log(longestCommonSubsequence("abc", "def"));    // Output: 0