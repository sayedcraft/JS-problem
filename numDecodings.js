function numDecodings(s) {
  if (!s || s[0] === '0') return 0;
  
  const n = s.length;
  // ডাইনামিক প্রোগ্রামিং অ্যারে তৈরি করা হলো যা প্রতিটি পজিশন পর্যন্ত ডিকোডের উপায় সংখ্যা রাখবে
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = s[0] !== '0' ? 1 : 0;
  
  for (let i = 2; i <= n; i++) {
    const oneDigit = parseInt(s.substring(i - 1, i));
    const twoDigits = parseInt(s.substring(i - 2, i));
    
    // যদি সিঙ্গেল ডিজিট ১ থেকে ৯ এর মধ্যে হয়
    if (oneDigit >= 1 && oneDigit <= 9) {
      dp[i] += dp[i - 1];
    }
    
    // যদি ডাবল ডিজিট ১০ থেকে ২৬ এর মধ্যে হয়
    if (twoDigits >= 10 && twoDigits <= 26) {
      dp[i] += dp[i - 2];
    }
  }
  
  return dp[n];
}

console.log(numDecodings("12"));  // Output: 2 ("AB" বা "L")
console.log(numDecodings("226")); // Output: 3 ("BZ", "VF", "BBF")