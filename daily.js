// day 30,2627. Debounce

function debounce(fn, t) {
  let timer = null;
  return function (...args) {
    if (timer != null) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), t);
  };
}
debounce(console.log(), 2000);
debounce(console.log(), 2000);
debounce(console.log(), 2000);
