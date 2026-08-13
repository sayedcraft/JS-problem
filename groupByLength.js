function groupByLength(arr) {
  // reduce() মেথড ব্যবহার করে প্রতিটি স্ট্রিংয়ের দৈর্ঘ্য অনুযায়ী অবজেক্টে গ্রুপ তৈরি করা হলো
  return arr.reduce((acc, str) => {
    const len = str.length;
    if (!acc[len]) {
      acc[len] = [];
    }
    acc[len].push(str);
    return acc;
  }, {});
}

console.log(groupByLength(["cat", "dog", "elephant", "rat", "tiger"])); 
// Output: { '3': [ 'cat', 'dog', 'rat' }, '5': [ 'tiger' ], '8': [ 'elephant' ] }