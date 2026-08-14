function removeDuplicates(arr) {
  // Set ব্যবহার করে অ্যারের সমস্ত ডুপ্লিকেট মান বাদ দিয়ে ইউনিক মানগুলো রাখা হলো
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]