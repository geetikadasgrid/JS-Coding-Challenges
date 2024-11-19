// ### Truncate array

// Return the remaining elements of an array after cutting off `n` elements from the head.

// The head means the beginning of the array, or the zeroth index.

export function truncateArray(array, n) {
  return array.slice(n);
}
console.log(truncateArray([1, 2, 3], 1));
