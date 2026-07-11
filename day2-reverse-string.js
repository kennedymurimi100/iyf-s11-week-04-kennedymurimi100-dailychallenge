function reverseString(text) {
  let reversed = "";

  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }

  return reversed;
}

function reverseStringBuiltIn(text) {
  return text.split("").reverse().join("");
}

console.log(reverseString("hello"));
console.log(reverseString("JavaScript"));
console.log(reverseString("Nova"));

console.log(reverseStringBuiltIn("hello"));
console.log(reverseStringBuiltIn("JavaScript"));
console.log(reverseStringBuiltIn("Nova"));


