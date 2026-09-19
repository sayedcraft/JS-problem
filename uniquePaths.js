function uniquePaths(m, n) {
  // একটি 2D ডিপি অ্যারে তৈরি করা হলো যেখানে প্রতিটি ঘরের ইউনিক পথের সংখ্যা ১ দিয়ে ইনিশিয়ালাইজ করা হলো
  const dp = Array(m).fill().map(() => Array(n).fill(1));
  
  // ভেতরকার প্রতিটি ঘরের জন্য বামের এবং ওপরের ঘরের পথের সংখ্যা যোগ করা হলো
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  
  return dp[m - 1][n - 1];
}

console.log(uniquePaths(3, 7)); // Output: 28
console.log(uniquePaths(3, 2)); // Output: 3