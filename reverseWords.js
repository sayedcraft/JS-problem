function reverseWords(s) {
  // প্রথমে ট্রিম করে অতিরিক্ত স্পেস বাদ দেওয়া হলো, এরপর রেগুলার এক্সপ্রেশন ব্যবহার করে শব্দগুলো আলাদা করে রিভার্স ও জয়িন করা হলো
  return s.trim().split(/\s+/).reverse().join(" ");
}

console.log(reverseWords("the sky is blue"));  // Output: "blue is sky the"
console.log(reverseWords("  hello world  ")); // Output: "world hello"