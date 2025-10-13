// day 9
// Reverse an Array (without using .reverse())

let arr = [1, 2, 3, 4, 5];
let output = [];
for (let i = arr.length - 1; i >= 0; i--) {
  output.push(arr[i]);
}
console.log(output);
