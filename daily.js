// day 31,2721. Execute Asynchronous Functions in Parallel
function promiseAll(functions) {
  return new Promise(async (res, rej) => {
    let len = functions.length;
    let count = 0;
    let ans = new Array(len);
    functions.forEach(async (fun, index) => {
      try {
        let val = await fun();
        ans[index] = val;
        count++;
        if (count === len) res(ans);
      } catch (err) {
        rej(err);
      }
    });
  });
}
const promise = promiseAll([() => new Promise((res) => res(42))]);
promise.then(console.log); // [42]
