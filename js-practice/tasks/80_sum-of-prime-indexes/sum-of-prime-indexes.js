// ### Sum of prime-indexed elements

// You will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.

// To make this interesting, array lengths in random tests will have up to 5000 elements.

export function sumOfPrimeIndexes(arr) {
  let sum = 0;

  for (let i = 2; i < arr.length; i++) {
    // eslint-disable-next-line no-use-before-define
    if (isPrime(i)) {
      sum += arr[i];
    }
  }

  return sum;
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(sumOfPrimeIndexes([10, 20, 30, 40, 50, 60]));
