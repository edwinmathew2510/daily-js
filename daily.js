//day 29,2715. Timeout Cancellation
var cancellable = function (fn, args, t) {
  let timer = setTimeout(() => {
    fn(...args);
  }, t);
  return (cancelFn = () => clearTimeout(timer));
};
