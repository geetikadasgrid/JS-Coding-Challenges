// ### Swap cases

// Write a function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.

export function swapCases(str) {
  return str
    .split('')
    .map((char) => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()))
    .join('');
}
console.log(swapCases('Hello World'));
