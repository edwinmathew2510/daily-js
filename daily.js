// Day 15
// Problem: Find the Second Largest Number in an Array

function bubbleSort(arr) {
  let n = arr.length;
  //check weather all numbers are same
  if (arr.every((num) => num == arr[0])) {
    return "all numbers are equal";
  }
  // sorting array manualy
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  //finding second last number is last number has dupilcates
  let secondLastNum;
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i - 1] != arr[i]) {
      return "The second largest number is " + (secondLastNum = arr[i - 1]);
    }
  }
}
let array = [10, 25, 50, 70, 70, 70];
let result = bubbleSort(array);
console.log(result);
