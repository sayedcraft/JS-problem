function capitalizeWords(sentence) {
  // বাক্যটিকে স্পেস দিয়ে ভেঙে প্রতিটা শব্দের প্রথম অক্ষর বড় হাতের করে আবার যুক্ত করা হলো
  const words = sentence.split(" ");
  let capitalized = [];
  
  for (let word of words) {
    if (word.length > 0) {
      capitalized.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
  }
  return capitalized.join(" ");
}

console.log(capitalizeWords("hello world from javascript")); // Output: "Hello World From Javascript"