function findIntersection(arr1, arr2) {
  // filter() এবং includes() ব্যবহার করে দুটি অ্যারের কমন উপাদানগুলো ফিল্টার করে বের করা হলো
  return arr1.filter(item => arr2.includes(item));
}

console.log(findIntersection([1, 2, 3, 4], [2, 4, 6, 8])); // Output: [2, 4]
console.log(findIntersection(["apple", "banana"], ["banana", "orange"])); // Output: ["banana"]