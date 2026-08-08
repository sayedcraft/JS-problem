function repeatWord(word, count) {
  // repeat() এবং trim() ব্যবহার করে শব্দটি নির্দিষ্ট বার পুনরাবৃত্তি করা হলো
  let result = "";
  for (let i = 0; i < count; i++) {
    result += word + " ";
  }
  return result.trim();
}

console.log(repeatWord("Hello", 3)); // Output: "Hello Hello Hello"