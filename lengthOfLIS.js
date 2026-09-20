function lengthOfLIS(nums) {
  if (nums.length === 0) return 0;
  
  // একটি ডিপি অ্যারে তৈরি করা হলো যেখানে প্রতিটি পজিশনে সাবসিকোয়েন্সের দৈর্ঘ্য অন্তত ১ ধরা হলো
  const dp = Array(nums.length).fill(1);
  let maxLen = 1;
  
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    maxLen = Math.max(maxLen, dp[i]);
  }
  
  return maxLen;
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // Output: 4 ([2, 3, 7, 101])
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));          // Output: 4 ([0, 1, 2, 3])