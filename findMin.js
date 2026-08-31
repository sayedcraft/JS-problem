function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    
    // যদি মিড ভ্যালুটি রাইট ভ্যালু থেকে বড় হয়, তবে মিনিমাম সংখ্যাটি ডানে রয়েছে
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      // অন্যথায় মিনিমাম সংখ্যাটি বামে বা মিড-এ রয়েছে
      right = mid;
    }
  }
  
  return nums[left];
}

console.log(findMin([3, 4, 5, 1, 2]));    // Output: 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // Output: 0