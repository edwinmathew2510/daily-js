// day 27,2723. Add Two Promises

addTwoPromises = async function (promise1, promise2) {
  let prm1 = await promise1;
  let prm2 = await promise2;

  return prm1 + prm2;
};

let p1 = new Promise((resolve) => setTimeout(() => resolve(10), 50));
let p2 = new Promise((resolve) => setTimeout(() => resolve(-12), 30));
addTwoPromises(p1, p2).then(console.log);
