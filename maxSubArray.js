function maxSubArray(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];
  
  // কাদেয়ানের অ্যালগরিদম (Kadane's Algorithm) ব্যবহার করে সর্বোচ্চ সাবঅ্যারের যোগফল বের করা হলো
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6 ([4, -1, 2, 1])
console.log(maxSubArray([1]));                              // Output: 1