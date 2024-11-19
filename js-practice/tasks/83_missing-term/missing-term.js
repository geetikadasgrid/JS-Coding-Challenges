// ### Find the missing term in an Arithmetic Progression

// An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP.

// Write a function that finds the missing term.

// Input array will always be at least 3 numbers. The missing term will never be the first or last one.
// eslint-disable-next-line consistent-return
export function missingTerm(arr) {
  const n = arr.length;
  const diff1 = arr[1] - arr[0];
  const diff2 = arr[2] - arr[1];
  const commonDiff = Math.abs(diff1) < Math.abs(diff2) ? diff1 : diff2;

  for (let i = 1; i < n; i++) {
    if (arr[i] - arr[i - 1] !== commonDiff) {
      return arr[i - 1] + commonDiff;
    }
  }
}

console.log(missingTerm([1, 3, 7, 9, 11]));
