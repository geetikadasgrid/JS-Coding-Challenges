// ### Array chunks

// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

export function arrayChunks(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

console.log(arrayChunks([1, 2, 3], 1));
