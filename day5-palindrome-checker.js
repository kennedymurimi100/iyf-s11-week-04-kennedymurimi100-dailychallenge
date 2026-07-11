function isPalindrome(text) {
  let cleaned = text.toLowerCase().replaceAll(" ", "");
}
function isPalindrome(text) {
  let cleaned = text.toLowerCase().replaceAll(" ", "");
  let reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man a plan a canal Panama"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("JavaScript"));