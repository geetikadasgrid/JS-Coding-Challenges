// ### Missed letters

// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return `undefined`.

export function missedLetters(str) {
  const start = str.charCodeAt(0);
  const end = str.charCodeAt(str.length - 1);

  for (let i = start; i <= end; i++) {
    if (!str.includes(String.fromCharCode(i))) {
      return String.fromCharCode(i);
    }
  }

  return undefined;
}
console.log(missedLetters('abcdef'));
