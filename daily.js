// day 5

//Write a program that takes a number and reverses its digits.

let num = 12345;
let str = String(num);

// method 1
let result = str.split("").reverse().join("");
console.log(Number(result));

// method 2

let reversed = [];

for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log(Number(reversed));
