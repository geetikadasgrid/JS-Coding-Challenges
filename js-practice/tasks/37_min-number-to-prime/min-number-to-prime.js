// Given an array of n integers, find minimum number to be inserted in an array, so that sum of all elements of array should equal the closest prime number.

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function nextPrime(num) {
  let next = num;
  while (!isPrime(next)) {
    next++;
  }
  return next;
}

export function minNumberToPrime(arr) {
  const sum = arr.reduce((a, b) => a + b, 0);
  const closestPrime = nextPrime(sum);
  return closestPrime - sum;
}
// console.log(minNumberToPrime([3,2,1]))
