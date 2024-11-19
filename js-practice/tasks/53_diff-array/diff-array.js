// ### Diff 2 arrays

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

export function diffArray(arr1, arr2) {
  return arr1.filter((item) => !arr2.includes(item)).concat(arr2.filter((item) => !arr1.includes(item)));
}

console.log(diffArray([1, 'calf', 3, 'piglet'], [7, 'filly']));
