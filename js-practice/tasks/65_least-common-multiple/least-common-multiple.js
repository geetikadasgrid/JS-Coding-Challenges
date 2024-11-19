// ### Least Common Multiple

// Write a function that accepts two numbers and returns their least common multiple.

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    // eslint-disable-next-line no-param-reassign
    b = a % b;
    // eslint-disable-next-line no-param-reassign
    a = temp;
  }
  return a;
}

export function leastCommonMultiple(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}
console.log(leastCommonMultiple(4, 5));
