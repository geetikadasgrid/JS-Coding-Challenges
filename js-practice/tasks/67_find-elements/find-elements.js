// ### Find element - [arrays, fundamentals]

// Write a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). Do not use Array.prototype.find.

export function findElements(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}
console.log(findElements([1, 2, 3, 4], (num) => num % 2 === 0));
