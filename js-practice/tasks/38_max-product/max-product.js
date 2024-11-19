// ### Maximum Product

// Given an array of integers, find the maximum product obtained from multiplying 2 adjacent numbers in the array.

export function maxProduct(arr) {
  let max = arr[0] * arr[1];
  for (let i = 1; i < arr.length - 1; i++) {
    const product = arr[i] * arr[i + 1];
    if (product > max) {
      max = product;
    }
  }
  return max;
}
