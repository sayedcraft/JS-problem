function findMissingNumber(arr, n) {
  // ১ থেকে n পর্যন্ত সংখ্যার মোট যোগফলের সূত্র: (n * (n + 1)) / 2
  const expectedSum = (n * (n + 1)) / 2;
  // reduce() ব্যবহার করে অ্যারের বর্তমান উপাদানগুলোর যোগফল বের করা হলো
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  
  // কাঙ্ক্ষিত যোগফল থেকে বর্তমান যোগফল বিয়োগ করলে মিসিং সংখ্যাটি পাওয়া যাবে
  return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 5], 5));    // Output: 3
console.log(findMissingNumber([1, 3, 4, 5, 6], 6)); // Output: 2