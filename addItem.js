function addItem(arr, item) {
  // push() মেথড ব্যবহার করে অ্যারের শেষে নতুন আইটেম যুক্ত করা হলো
  arr.push(item);
  return arr;
}

console.log(addItem([1, 2, 3], 4)); // Output: [1, 2, 3, 4]