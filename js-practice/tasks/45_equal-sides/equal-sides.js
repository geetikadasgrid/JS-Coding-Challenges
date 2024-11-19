// ### Equal Sides Of An Array

// You are going to be given an array of integers. Your task is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// Empty arrays are equal to 0 in this problem.

export function equalSides(arr) {
  let totalSum = arr.reduce((sum, num) => sum + num, 0);
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    totalSum -= arr[i];
    if (leftSum === totalSum) return i;
    leftSum += arr[i];
  }

  return -1;
}
console.log(equalSides([1, 2, 3, 4, 3, 2, 1]));
