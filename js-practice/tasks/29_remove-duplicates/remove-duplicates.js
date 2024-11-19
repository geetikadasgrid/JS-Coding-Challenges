// ### Remove duplicates

// Write a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

export function removeDuplicates(arr) {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
}
