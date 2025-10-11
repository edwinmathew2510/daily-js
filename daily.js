// day 8
// Find Maximum and Minimum in an Array

let input = [10, 25, 3, 47, 19];
input.sort((a, b) => a - b);

console.log(`Minimum:${input[0]} , Maximum:${input[input.length - 1]}`);
