// day 16
// Problem: Check if a Number is Prime

function isPrime(num) {
  if (num < 2 || !Number.isInteger(num)) return false;

  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }
  return true;
}
const num = 29;
console.log(`${num} is${isPrime(num) ? " " : " not "} prime number`);
