// ### Seek and destroy

// You will be provided with an initial array (first argument) followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

export function destroyer(arr, ...args) {
  return arr.filter((item) => !args.includes(item));
}

console.log(destroyer(['a', 'b', 'c', 'a'], 'a'));
