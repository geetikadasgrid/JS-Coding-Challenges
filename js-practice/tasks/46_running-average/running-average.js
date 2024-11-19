// ### Running average

// Create a function that returns a callable function object. Update the series with each given value and calculate the current average.

export function runningAverage() {
  let sum = 0;
  let count = 0;
  return function (num) {
    sum += num;
    count++;
    return sum / count;
  };
}
