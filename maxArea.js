function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;
  
  // দুটি পয়েন্টার দুই প্রান্ত থেকে শুরু করে ভেতরের দিকে আসা হলো
  while (left < right) {
    let width = right - left;
    let currentHeight = Math.min(height[left], height[right]);
    let currentWater = width * currentHeight;
    
    maxWater = Math.max(maxWater, currentWater);
    
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  
  return maxWater;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49