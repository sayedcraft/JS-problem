function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  
  let prev2 = 0;
  let prev1 = 0;
  
  // ডাইনামিক প্রোগ্রামিং ব্যবহার করে পাশাপাশি ঘর বাদ দিয়ে সর্বোচ্চ টাকা চুরির হিসাব রাখা হলো
  for (let num of nums) {
    let current = Math.max(prev1, prev2 + num);
    prev2 = prev1;
    prev1 = current;
  }
  
  return prev1;
}

console.log(rob([1, 2, 3, 1]));    // Output: 4 (1 + 3 = 4)
console.log(rob([2, 7, 9, 3, 1])); // Output: 12 (2 + 9 + 1 = 12)