// ### Calculate Primorial Of a Number

// **Primorial Of a Number** is similar to factorial of a number. In primorial, not all the natural numbers get multiplied, only prime numbers are multiplied to calculate the primorial of a number. It's denoted with `P#`.

// Given a number N , calculate its primorial.

export function calculatePrimorialOfANumber(n) {
  const primes = [];
  let num = 2;

  while (primes.length < n) {
    // eslint-disable-next-line no-use-before-define
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }

  return primes.reduce((acc, prime) => acc * prime, 1);
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(calculatePrimorialOfANumber(3));
