function areAnagrams(str1, str2) {
  // যদি দুটি স্ট্রিংয়ের দৈর্ঘ্য সমান না হয়, তবে তারা অ্যানাগ্রাম হতে পারে না
  if (str1.length !== str2.length) return false;
  
  // স্ট্রিংগুলোকে ছোট হাতের করে, অ্যারেতে রূপান্তর, সর্ট এবং আবার স্ট্রিংয়ে রূপান্তর করা হলো
  const formatStr = (s) => s.toLowerCase().split("").sort().join("");
  return formatStr(str1) === formatStr(str2);
}

console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world"));   // Output: false