// day 12
// JavaScript program to find the largest number in an array manually — no built-in methods like Math.max() or .sort().

let arr = [45, 12, 78, 34, 89, 23];

let value = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (value < arr[i]) {
    value = arr[i];
  }
}
console.log("largest number is: " + value);
