// This function returns true if give input is prime.

function isPrime(num) {
  if (num < 2) return false;
  sqrt = Math.sqrt(num);
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function isPrime2(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(2)); // true
console.log(isPrime(36)); // false
console.log(isPrime(37)); // true
console.log(isPrime(102343)); // true

console.log("\nIS PRIME 2\n");

console.log(isPrime2(2)); // true
console.log(isPrime2(36)); // false
console.log(isPrime2(37)); // true
console.log(isPrime2(102343)); // true
