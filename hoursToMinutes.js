function hoursToMinutes(hours) {
  // ১ ঘণ্টা সমান ৬০ মিনিট, তাই ঘণ্টাকে ৬০ দিয়ে গুণ করা হলো
  return hours * 60;
}

console.log(hoursToMinutes(2)); // Output: 120
console.log(hoursToMinutes(1.5)); // Output: 90