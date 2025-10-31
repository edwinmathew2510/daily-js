// day 22 ,2635. Apply Transform Over Each Element in Array

const map = function (array, fn) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(fn(array[i], i));
  }
  return result;
};
/////////
let arr = [1, 2, 3];
/////////
function plusI(n, i) {
  return n + i;
}
/////////
console.log(map(arr, plusI));
