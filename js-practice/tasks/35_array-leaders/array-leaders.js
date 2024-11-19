// ### Array Leaders

// An element is leader if it is greater than the sum of all the elements to its right side.

// Given an array of integers, find all the LEADERS in the array.

export function arrayLeaders(arr) {
  const leaders = [];
  let rightSum = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > rightSum) {
      leaders.unshift(arr[i]);
    }
    rightSum += arr[i];
  }

  return leaders;
}

console.log(arrayLeaders([0, -1, -29, 3, 2]));
