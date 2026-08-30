function mergeIntervals(intervals) {
  if (!intervals.length) return [];
  // ইন্টারভেলের শুরু (start) অনুযায়ী ছোট থেকে বড় সাজানো হলো
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [intervals[0]];
  
  for (let i = 1; i < intervals.length; i++) {
    const prev = merged[merged.length - 1];
    const current = intervals[i];
    
    // যদি বর্তমান ইন্টারভেলের শুরু আগেরটির শেষের চেয়ে ছোট বা সমান হয়, তবে ওভারল্যাপ করবে
    if (current[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], current[1]);
    } else {
      merged.push(current);
    }
  }
  return merged;
}

console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]])); 
// Output: [[1, 6], [8, 10], [15, 18]]