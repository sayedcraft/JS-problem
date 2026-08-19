function moveZeroes(nums) {
  let insertPos = 0;
  
  // সব নন-জিরো বা অ-শূন্য সংখ্যাগুলোকে অ্যারের সামনে এগিয়ে আনা হলো
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }
  
  // বাকি শেষ অংশগুলোতে শূন্য (0) বসিয়ে দেওয়া হলো
  while (insertPos < nums.length) {
    nums[insertPos] = 0;
    insertPos++;
  }
  
  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]
console.log(moveZeroes([0]));              // Output: [0]