function rotateArray(arr, k) {
  k = k % arr.length;
  // slice ব্যবহার করে অ্যারেটিকে ভেঙে সঠিক জায়গায় রোটেশন করা হলো
  return [...arr.slice(-k), ...arr.slice(0, arr.length - k)];
}

console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]