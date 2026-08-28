function productExceptSelf(nums) {
  const n = nums.length;
  const res = new Array(n);
  
  // প্রথমে বাম দিকের গুণফলগুলো রাখা হলো
  res[0] = 1;
  for (let i = 1; i < n; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }
  
  // এরপর ডান দিক থেকে গুণফলগুলো হিসাব করে মূল ফলাফলের সাথে গুণ করা হলো
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= rightProduct;
    rightProduct *= nums[i];
  }
  
  return res;
}

console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]