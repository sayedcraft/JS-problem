function findDisappearedNumbers(nums) {
  // ইনডেক্স মার্কিং টেকনিক ব্যবহার করা হলো
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }
  
  let result = [];
  // যে ইনডেক্সগুলোর মান পজিটিভ রয়ে গেছে, সেগুলোর সংখ্যাগুলো মিসিং
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }
  
  return result;
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // Output: [5, 6]