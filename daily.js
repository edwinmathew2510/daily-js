// 🧩 Day 17 — Problem: Check if Two Strings are Anagrams

function Anagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  str1 = str1.replace(/\s/g, "").toLowerCase();
  str2 = str2.replace(/\s/g, "").toLowerCase();

  return str1.split("").sort().join("") === str2.split("").sort().join("");
}
let result = Anagrams("listen", "silent");
console.log(result);
