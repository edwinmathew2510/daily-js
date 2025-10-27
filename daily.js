function createCounter(){
  let value =0
  function increment(){
   return ++value
  }
  return {increment}
}
let counter1=createCounter()
let counter2=createCounter()
console.log(counter1.increment())
console.log(counter1.increment())