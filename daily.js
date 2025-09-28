// day 4

//Write a program to find the factorial of a number using a for loop.

let number = 5;
let result = 1;

// for (let i = 1; i <= 5; i++) {
//   result = i * result;
// }
// console.log(result);

if (number < 0) {
  console.log("factorial is not defined by negative numbers");
} else {
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
}
console.log(`Factoral of number ${number} is : ${result}`);
