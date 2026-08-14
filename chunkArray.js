function chunkArray(arr, size) {
  const chunked = [];
  // লুপ চালিয়ে নির্দিষ্ট সাইজ অনুযায়ী অ্যারেগুলোকে ছোট ছোট টুকরোয় ভাগ করা হলো
  for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, i + size));
  }
  return chunked;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3)); // Output: [[1, 2, 3], [4, 5, 6], [7]]