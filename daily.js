// day 24 ,2626. Array Reduce Transformation
const reduce = function (num, fn, init) {
  let res = init;
  for (n of num) {
    res = fn(res, n);
  }
  return res;
};
let arr = [1, 2, 3, 4];
function sum(accum, curr) {
  return accum + curr;
}
console.log(reduce(arr, sum, 0));
