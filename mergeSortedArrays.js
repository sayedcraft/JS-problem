function mergeSortedArrays(arr1, arr2) {
  let merged = [];
  let i = 0, j = 0;
  
  // দুটি পয়েন্টার ব্যবহার করে ছোট মানটি নতুন অ্যারেতে পুশ করা হলো
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  
  // বাকি থাকা উপাদানগুলো যুক্ত করা হলো
  return [...merged, ...arr1.slice(i), ...arr2.slice(j)];
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]