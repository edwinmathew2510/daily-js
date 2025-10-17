// day 13
//Count Consonants in a String

let str = "JavaScript is awesome;";
let count = 0;
let newStr = str.toLowerCase().replace(/\s/g, "").split("");

if (newStr == 0) {
  console.log("no words");
} else {
  for (let i = 0; i < newStr.length; i++) {
    let char = newStr[i];
    if (char >= "a" && char <= "z" && !"aeiou".includes(char)) {
      count++;
    }
  }
}
console.log("count is :" + count);
