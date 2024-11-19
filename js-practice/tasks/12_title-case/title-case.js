// ### Title case

// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lowercase.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

export function titleCase(str) {
  const words = str.split(' ');
  const titleCasedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  return titleCasedWords.join(' ');
}

console.log(titleCase('morning'));
