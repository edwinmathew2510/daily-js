//day 2=3
//Write a program that takes two numbers and an operator (+, -, *, /) as input, then performs the calculation.

let num1 = 40;
let num2 = 20;
let operator = "*";

// b = eval(num1 + operator + num2);
// console.log(b);

let result;
switch (operator) {
  case "+":
    result = num1 + num2;
    break;

  case "-":
    result = num1 - num2;
    break;

  case "/":
    result = num1 / num2;
    break;

  case "*":
    result = num1 * num2;
    break;

  default:
    result = "invalid operator";
}

console.log(result);
