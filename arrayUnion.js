function arrayUnion(arr1, arr2) {
  // দুটি অ্যারে যুক্ত করে Set ব্যবহার করে ইউনিক মানগুলোর একটি অ্যারে তৈরি করা হলো
  return [...new Set([...arr1, ...arr2])];
}

console.log(arrayUnion([1, 2, 3], [2, 3, 4, 5])); // Output: [1, 2, 3, 4, 5]