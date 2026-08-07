function makePositive(num) {
  // Math.abs() ফাংশন ব্যবহার করে যেকোনো সংখ্যাকে পজিটিভ বা ধনাত্মক মানে রূপান্তর করা হলো
  return Math.abs(num);
}

console.log(makePositive(-15)); // Output: 15
console.log(makePositive(25));  // Output: 25