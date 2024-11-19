// ### Factorize number

// Return the factorial of the provided integer.

// If the integer is represented with the letter `n`, a factorial is the product of all positive integers less than or equal to `n`.

export function factorialize(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialize(5));
