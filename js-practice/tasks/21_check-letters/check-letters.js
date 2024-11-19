// Return `true` if the string in the first element of the array contains all the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all the letters in "line" are present in "Alien".

export function checkLetters(arr) {
  const [str1, str2] = arr.map((str) => str.toLowerCase());

  // eslint-disable-next-line no-restricted-syntax
  for (const char of str2) {
    if (!str1.includes(char)) {
      return false;
    }
  }
  return true;
}

console.log(checkLetters(['hello', 'Hello']));
