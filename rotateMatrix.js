function rotateMatrix(matrix) {
  const n = matrix.length;
  
  // প্রথমে ম্যাট্রিক্সের ট্রান্সপোজ (Transpose - সারি ও কলাম বদল) করা হলো
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  
  // এরপর প্রতিটি সারির উপাদানগুলো রিভার্স বা উল্টো করা হলো
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
  
  return matrix;
}

console.log(rotateMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])); 
// Output: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]