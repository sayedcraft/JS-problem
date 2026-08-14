function validatePassword(password) {
  // পাসওয়ার্ডে অন্তত ৮ অক্ষর, বড় হাতের অক্ষর, ছোট হাতের অক্ষর এবং সংখ্যা আছে কি না চেক করা হলো
  const minLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  
  return minLength && hasUpper && hasLower && hasNumber;
}

console.log(validatePassword("Pass1234")); // Output: true
console.log(validatePassword("weak"));     // Output: false