function findSecondLargest(arr) {
  // অ্যারেটিকে বড় থেকে ছোট ক্রমানুসারে সাজানো হলো
  const sorted = [...arr].sort((a, b) => b - a);
  // ডুপ্লিকেট মান এড়িয়ে প্রথমটির পরের উপাদানটি (দ্বিতীয় বৃহত্তম) রিটার্ন করা হলো
  let largest = sorted[0];
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] < largest) {
      return sorted[i];
    }
  }
  return null;
}

console.log(findSecondLargest([10, 40, 20, 50, 30])); // Output: 40
console.log(findSecondLargest([5, 1, 9, 9, 3]));      // Output: 5