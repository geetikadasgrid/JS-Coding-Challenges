// ### Sum all numbers in range

// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.

export function sumAllNumbersInRange(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const range = Array.from({ length: max - min + 1 }, (_, i) => min + i);
  return range.reduce((sum, num) => sum + num, 0);
}

console.log(sumAllNumbersInRange([1, 4]));
