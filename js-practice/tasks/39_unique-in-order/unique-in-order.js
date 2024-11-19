// ### Unique In Order

// Write a function that takes as argument a sequence and returns an array of items without any elements with the same value next to each other and preserving the original order of elements.

export function uniqueInOrder(sequence) {
  return [...sequence].filter((item, index) => item !== sequence[index - 1]);
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
