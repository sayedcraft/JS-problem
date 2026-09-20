function canJump(nums) {
  let maxReach = 0;
  
  // গ্রিডি অ্যালগরিদম ব্যবহার করে প্রতিটি অবস্থান থেকে সর্বোচ্চ কতদূর যাওয়া সম্ভব তা ট্র্যাক করা হলো
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false; // যদি বর্তমান ইনডেক্সটি আমাদের সর্বোচ্চ পৌঁছানোর ক্ষমতার বাইরে চলে যায়
    maxReach = Math.max(maxReach, i + nums[i]);
    
    // যদি সর্বোচ্চ পৌঁছানোর ক্ষমতা শেষ ইনডেক্স বা তার চেয়ে বেশি হয়
    if (maxReach >= nums.length - 1) return true;
  }
  
  return true;
}

console.log(canJump([2, 3, 1, 1, 4])); // Output: true (ইনডেক্স ০ থেকে ১, এরপর ৩ এ লাফ দিয়ে শেষে পৌঁছানো সম্ভব)
console.log(canJump([3, 2, 1, 0, 4])); // Output: false