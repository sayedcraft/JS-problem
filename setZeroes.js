function setZeroes(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let firstRowHasZero = false;
  let firstColHasZero = false;
  
  // প্রথম সারিতে কোনো শূন্য আছে কি না চেক করা হলো
  for (let c = 0; c < n; c++) {
    if (matrix[0][c] === 0) {
      firstRowHasZero = true;
      break;
    }
  }
  
  // প্রথম কলামে কোনো শূন্য আছে কি না চেক করা হলো
  for (let r = 0; r < m; r++) {
    if (matrix[r][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }
  
  // সাব-ম্যাট্রিক্স ব্যবহার করে বাকি উপাদানগুলোতে শূন্য মার্ক করা হলো
  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      if (matrix[r][c] === 0) {
        matrix[r][0] = 0;
        matrix[0][c] = 0;
      }
    }
  }
  
  // মার্কিং অনুযায়ী সেলগুলোতে শূন্য বসানো হলো
  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      if (matrix[r][0] === 0 || matrix[0][c] === 0) {
        matrix[r][c] = 0;
      }
    }
  }
  
  // প্রথম সারি আপডেট করা হলো
  if (firstRowHasZero) {
    for (let c = 0; c < n; c++) {
      matrix[0][c] = 0;
    }
  }
  
  // প্রথম কলাম আপডেট করা হলো
  if (firstColHasZero) {
    for (let r = 0; r < m; r++) {
      matrix[r][0] = 0;
    }
  }
  
  return matrix;
}

console.log(setZeroes([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
])); 
// Output: [[1, 0, 1], [0, 0, 0], [1, 0, 1]]