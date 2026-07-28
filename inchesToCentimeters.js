function inchesToCentimeters(inches) {
  // ১ ইঞ্চি সমান ২.৫৪ সেন্টিমিটার, তাই ইঞ্চিগুলোকে ২.৫৪ দিয়ে গুণ করতে হবে
  return inches * 2.54;
}

console.log(inchesToCentimeters(10)); // Output: 25.4
console.log(inchesToCentimeters(5));  // Output: 12.7