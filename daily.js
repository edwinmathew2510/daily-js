// day 29 /2725. Interval Cancellation
let cancellable = function (fn, args, t) {
  fn(...args);

  const id = setInterval(() => {
    fn(...args);
  }, t);

  return function cancelFn() {
    clearInterval(id);
  };
};

const cancelTimeMs = 190;
const cancelFn = cancellable((x) => x * 2, [4], 35);
setTimeout(cancelFn, cancelTimeMs);
