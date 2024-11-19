// It's the academic year's end, fateful moment of your school report.
// The averages must be calculated.
// All the students come to you and entreat you to calculate their average for them.
// Easy! You just need to write a script.

// Write a function that returns the average of the given array rounded down to its nearest integer.

// The array will never be empty.

export function averageMark(arr) {
  return Math.floor(arr.reduce((sum, num) => sum + num) / arr.length);
}
// console.log(averageMark([23,34,56,78]));
