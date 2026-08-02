function isValidNumber(value) {
  // typeof ব্যবহার করে মানটি নাম্বার কি না তা যাচাই করা হলো
  return typeof value === "number" && !isNaN(value);
}

console.log(isValidNumber(42));     // Output: true
console.log(isValidNumber("42"));   // Output: false
console.log(isValidNumber(NaN));    // Output: false