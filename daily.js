// day 21 ,2665. Counter II

let createCounter = function (init) {
  let count = init;
  let increment = () => ++count;
  let decrement = () => --count;
  let reset = () => {
    count = init;
    return count;
  };
  return {
    increment: increment,
    decrement: decrement,
    reset: reset,
  };
};

// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4
