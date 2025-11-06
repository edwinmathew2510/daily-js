//promises chaining
function fun1() {
  let randomNum = Math.random();
  return new Promise((resolve, reject) => {
    console.log("fun1 started");
    randomNum < 0.5 ? resolve("fun1 sucessful") : reject("fun1 failed");
  });
}
function fun2() {
  let randomNum = Math.random();
  return new Promise((resolve, reject) => {
    console.log("fun2 started");
    randomNum < 0.5 ? resolve("fun2 sucessful") : reject("fun2 failed");
  });
}
function fun3() {
  let randomNum = Math.random();
  return new Promise((resolve, reject) => {
    console.log("fun3 started");
    randomNum < 0.5 ? resolve("fun3 sucessful") : reject("fun3 failed");
  });
}
fun1()
  .then((data) => console.log(data))
  .then(fun2)
  .then((data) => console.log(data))
  .then(fun3)
  .then((data) => console.log(data))
  .then(() => console.log("all fun executed properly"))
  .catch((error) => console.log(error));
