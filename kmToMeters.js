function kmToMeters(km) {
  // ১ কিলোমিটার সমান ১০০০ মিটার, তাই কিলোমিটারকে ১০০০ দিয়ে গুণ করা হলো
  return km * 1000;
}

console.log(kmToMeters(5)); // Output: 5000
console.log(kmToMeters(1.5)); // Output: 1500