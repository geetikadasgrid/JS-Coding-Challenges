// ### Maximum Triplet Sum

// Given an array of n integers, find the sum of the three highest unique ones.

export function maxTripletSum(arr) {
  arr.sort((a, b) => b - a);
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr[0] + uniqueArr[1] + uniqueArr[2];
}

console.log(maxTripletSum([-7, 12, -7, 29, -5, 0, -7, 0, 0, 29]));
