// ### N smallest elements in original order

// Your task is to write a function that does just what the title suggests (so, fair warning, be aware that you are not getting out of it just throwing a lame bas sorting method there) with an array of integers and the expected number n of smallest elements to return.

// Notes:
// * The number of elements to be returned cannot be higher than the array length.
// * Elements can be duplicated.
// * In case of duplicates, just return them according to the original order (see third example for more clarity).

export function firstNSmallest(arr, n) {
  const sorted = [...arr].sort((a, b) => a - b).slice(0, n);
  const result = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const num of arr) {
    if (sorted.includes(num)) {
      result.push(num);
      sorted.splice(sorted.indexOf(num), 1);
    }
  }
  return result;
}
