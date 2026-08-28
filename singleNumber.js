function singleNumber(nums) {
  let result = 0;
  // বিটওয়াইজ এক্সক্লুসিভ অর (XOR) অপারেটর ব্যবহার করে জোড়ায় জোড়ায় সংখ্যা বাদ দেওয়া হলো
  for (let num of nums) {
    result ^= num;
  }
  return result;
}

console.log(singleNumber([2, 2, 1]));       // Output: 1
console.log(singleNumber([4, 1, 2, 1, 2])); // Output: 4