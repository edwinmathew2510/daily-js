// day 10
// 'JavaScript program to remove duplicate values from an array without using Set().'

let arr = [1, 2, 2, 3, 4, 4, 5];

let output = [];

for (let i = 0; i < arr.length; i++) {
  if (!output.includes(arr[i])) {
    output.push(arr[i]);
  }
}
console.log(output);

// Find the Sum of All Numbers in an Array

let arr1 = [10, 20, 30, 40, 50];
count = 0;

for (let i = 0; i <= arr1.length - 1; i++) {
  count += arr1[i];
}

console.log(count);
