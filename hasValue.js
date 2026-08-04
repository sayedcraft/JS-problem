function hasValue(arr, target) {
  // includes() মেথড ব্যবহার করে অ্যারেতে মানটি আছে কি না তা চেক করা হলো
  return arr.includes(target);
}

console.log(hasValue(["apple", "banana", "orange"], "banana")); // Output: true
console.log(hasValue([10, 20, 30], 40));                       // Output: false