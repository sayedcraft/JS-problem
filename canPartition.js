function canPartition(nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  
  // যদি মোট যোগফল বিজোড় হয়, তবে কখনোই সমান দুই ভাগে ভাগ করা সম্ভব নয়
  if (sum % 2 !== 0) return false;
  
  const target = sum / 2;
  // একটি ডিপি অ্যারে তৈরি করা হলো যা ট্র্যাক রাখবে নির্দিষ্ট সাম (target) তৈরি করা সম্ভব কি না
  const dp = Array(target + 1).fill(false);
  dp[0] = true;
  
  for (let num of nums) {
    for (let i = target; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num];
    }
  }
  
  return dp[target];
}

console.log(canPartition([1, 5, 11, 5])); // Output: true ([1, 5, 5] এবং [11])
console.log(canPartition([1, 2, 3, 5]));   // Output: false