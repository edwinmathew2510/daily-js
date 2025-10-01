// day 6

// A number is a palindrome if it reads the same forwards and backwards.

let num = "121";
let newStr = String(num).split("").reverse().join("");

if (num === newStr) {
  console.log("its a palindrome");
} else {
  console.log("not a palindrome");
}
