function longestCommonPrefix(strs) {
  if (!strs.length) return "";
  // প্রথম স্ট্রিংটিকে ধরে নিয়ে বাকিগুলোর সাথে মিলিয়ে কমন প্রিফিক্স বের করা হলো
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (!prefix) return "";
    }
  }
  return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"