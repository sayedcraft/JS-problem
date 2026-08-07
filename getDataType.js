function getDataType(value) {
  // typeof অপারেটর ব্যবহার করে যেকোনো ভ্যারিয়েবল বা ডেটার টাইপ বা ধরন বের করা হলো
  return typeof value;
}

console.log(getDataType(100));     // Output: "number"
console.log(getDataType("hello")); // Output: "string"
console.log(getDataType(false));   // Output: "boolean"