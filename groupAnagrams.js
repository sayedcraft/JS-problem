function groupAnagrams(strs) {
  const map = {};
  
  for (let str of strs) {
    // প্রতিটি শব্দকে সর্ট করে তার ইউনিক কি (key) তৈরি করা হলো
    const sorted = str.split("").sort().join("");
    if (!map[sorted]) {
      map[sorted] = [];
    }
    map[sorted].push(str);
  }
  
  return Object.values(map);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); 
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]