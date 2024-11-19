// ### Repeat string

// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

export function repeatString(str, num) {
  if (num < 1) return '';
  let result = '';
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}

console.log('abc', 2);
