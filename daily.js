// day 23 ,2634. Filter Elements from Array
const filter = function (array, fn) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i], i)) result.push(array[i]);
  }
  return result;
};
///////
function greaterThan10(n) {
  return n > 10;
}
///////
let arr = [0, 10, 20, 30];
////////
console.log(filter(arr, greaterThan10));
