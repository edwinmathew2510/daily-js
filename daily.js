// day 14

//javaScript program that checks whether a given array is sorted in ascending order or not.

let arr = [10, 50, 30, 40, 20];

let str = String(arr);
let newArr = String(arr.sort());

console.log(
  `The array is${newArr == str ? " " : " NOT "}sorted in ascending order.`
);
