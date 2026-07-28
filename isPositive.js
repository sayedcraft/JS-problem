function isPositive(num) {
  // সংখ্যাটি ০ এর চেয়ে বড় কি না তা যাচাই করা হলো
  return num > 0;
}

console.log(isPositive(5));  // Output: true
console.log(isPositive(-3)); // Output: false
console.log(isPositive(0));  // Output: false