// ### Convert numbers to reversed array of digits

// Convert a number into a reversed array of digits.

export function numbersToReversedArray(num) {
  return String(num).split('').reverse().map(Number);
}

// console.log(numbersToReversedArray(54321))
