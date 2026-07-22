function capitalizeFirst(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizeFirst("javascript")); // Output: "Javascript"