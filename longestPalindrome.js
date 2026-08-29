function longestPalindrome(s) {
  if (s.length < 1) return "";
  let start = 0;
  let maxLength = 0;
  
  // কেন্দ্র থেকে দুপাশে ছড়িয়ে প্যালাইন্ড্রোম চেক করার ফাংশন
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }
  
  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(i, i);     // বিজোড় দৈর্ঘ্যের জন্য (যেমন: aba)
    let len2 = expandAroundCenter(i, i + 1); // জোড় দৈর্ঘ্যের জন্য (যেমন: abba)
    let len = Math.max(len1, len2);
    
    if (len > maxLength) {
      maxLength = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }
  
  return s.substring(start, start + maxLength);
}

console.log(longestPalindrome("babad")); // Output: "bab" (অথবা "aba")
console.log(longestPalindrome("cbbd"));  // Output: "bb"