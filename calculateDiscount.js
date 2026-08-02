function calculateDiscount(price, discountPercentage) {
  // ডিসকাউন্টের পরিমাণ বের করে মূল মূল্য থেকে বাদ দেওয়া হলো
  const discountAmount = (price * discountPercentage) / 100;
  return price - discountAmount;
}

console.log(calculateDiscount(100, 20)); // Output: 80
console.log(calculateDiscount(50, 10));  // Output: 45