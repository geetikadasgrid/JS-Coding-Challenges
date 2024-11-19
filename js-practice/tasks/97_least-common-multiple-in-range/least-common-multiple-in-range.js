// ### Least common multiple in range

// Find the least common multiple of the provided parameters that can be evenly divided by both, as well as by **all** sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order. e.g. for 1 and 3 - find the least common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

// ```javascript
// leastCommonMultipleInRange([1, 5]); // returns 60
// ```

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

// Function to calculate the LCM (Least Common Multiple) of two numbers
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

export function leastCommonMultipleInRange(range) {
  const start = Math.min(range[0], range[1]);
  const end = Math.max(range[0], range[1]);

  let result = start;

  for (let i = start + 1; i <= end; i++) {
    result = lcm(result, i);
  }

  return result;
}
