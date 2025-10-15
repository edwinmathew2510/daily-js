// day 11
// JavaScript program to count how many vowels (a, e, i, o, u) are in a given string.

let str = "JavaScript is awesome";

let lowerCaseStr = str.toLowerCase().replace(/\s/g, "").split("");

let count = 0;

for (let i = 0; i < lowerCaseStr.length; i++) {
  if ("aeiou".includes(lowerCaseStr[i])) {
    count = count + 1;
  }
}
console.log(`There ${count === 1 ? "is" : "are"} ${count} vowels.`);
