// day 26,2666. Allow One Function Call

function once(fn, ...args) {
  let count = 0;
  return function (args) {
    count++;
    if (count == 2) return undefined;
    return fn(args);
  };
}
let fn = (a, b, c) => a + b + c;
let arr = [
  [1, 2, 3],
  [2, 3, 6],
];
once(fn, arr);
