function maxProduct(nums) {
  if (nums.length === 0) return 0;
  
  let maxProd = nums[0];
  let minProd = nums[0];
  let result = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i];
    // নেগেটিভ সংখ্যার গুণের কারণে ম্যাক্স ও মিনের স্থান পরিবর্তন হতে পারে, তাই টেম্পোরারি ভ্যারিয়েবলে হিসাব করা হলো
    let tempMax = Math.max(curr, maxProd * curr, minProd * curr);
    minProd = Math.min(curr, maxProd * curr, minProd * curr);
    maxProd = tempMax;
    
    result = Math.max(result, maxProd);
  }
  
  return result;
}

console.log(maxProduct([2, 3, -2, 4])); // Output: 6 ([2, 3])
console.log(maxProduct([-2, 0, -1]));   // Output: 0