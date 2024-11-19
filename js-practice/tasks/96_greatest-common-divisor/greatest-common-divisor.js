// ### Greatest Common Divisor

// Write a function that accepts two numbers and returns their greatest common divisor.
export function greatestCommonDivisor(a, b) {
  while (b !== 0) {
    const temp = b;
    // eslint-disable-next-line no-param-reassign
    b = a % b;
    // eslint-disable-next-line no-param-reassign
    a = temp;
  }
  return a;
}

console.log(greatestCommonDivisor(48, 18));
