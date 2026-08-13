function flattenArray(arr) {
  // flat(Infinity) মেথড ব্যবহার করে যেকোনো গভীরতার নেস্টেড অ্যারে বা অ্যারের ভেতরকার অ্যারেগুলোকে এক স্তরে ফ্ল্যাট করা হলো
  return arr.flat(Infinity);
}

console.log(flattenArray([1, [2, 3], [4, [5, 6]]])); // Output: [1, 2, 3, 4, 5, 6]
console.log(flattenArray(['a', ['b', 'c'], ['d']]));     // Output: ['a', 'b', 'c', 'd']