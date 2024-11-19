// ### Sum All Odd Fibonacci Numbers

// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
export function sumOddFibonacci(num) {
  let a = 1;
  let b = 1;
  let sum = 0;

  while (a <= num) {
    if (a % 2 !== 0) {
      sum += a;
    }
    [a, b] = [b, a + b];
  }

  return sum;
}
console.log(sumOddFibonacci(10));
