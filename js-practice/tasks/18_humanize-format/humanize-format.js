// ### Humanize format

// Write a function to return humanized number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
export function humanizeFormat(num) {
  if (num === undefined) {
    return ''; // Return empty string if no argument is provided
  }

  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${num}th`;
  }

  if (lastDigit === 1) {
    return `${num}st`;
  }
  if (lastDigit === 2) {
    return `${num}nd`;
  }
  if (lastDigit === 3) {
    return `${num}rd`;
  }
  return `${num}th`;
}

console.log(humanizeFormat());
