function sortByProperty(arr, property) {
  // sort() মেথড ব্যবহার করে অবজেক্টগুলোর নির্দিষ্ট প্রপার্টির মান অনুযায়ী ছোট থেকে বড় সাজানো হলো
  return [...arr].sort((a, b) => a[property] - b[property]);
}

const items = [{ age: 25 }, { age: 18 }, { age: 30 }];
console.log(sortByProperty(items, 'age')); // Output: [{ age: 18 }, { age: 25 }, { age: 30 }]