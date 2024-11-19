// ### Largest of Four

// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr\[i\].
export function largestOfFour(arr) {
  const largestNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    let max = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }
    largestNumbers.push(max);
  }

  return largestNumbers;
}

console.log(
  largestOfFour([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1]
  ])
);
