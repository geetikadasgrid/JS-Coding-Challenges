// ### Added Characters

// Given two strings, the first being a random string and the second being the same as the first, but with three added characters somewhere in the string (three same characters).

// Write a function that takes two strings and returns the added character as described above.

// Notes:
// * The characters could be anywhere in the string and string2 is actually shuffled.
// * The added character could also exist in the original string.
// * You can assume that string2 will always be larger than string1, and there will always be three added characters in string2.

// eslint-disable-next-line consistent-return
export function addedCharacters(string1, string2) {
  const countChars = (str) => {
    const counts = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const char of str) {
      counts[char] = (counts[char] || 0) + 1;
    }
    return counts;
  };

  const count1 = countChars(string1);
  const count2 = countChars(string2);

  // eslint-disable-next-line no-restricted-syntax
  for (const char in count2) {
    if (!count1[char] || count2[char] - count1[char] === 3) {
      return char;
    }
  }
}

console.log(addedCharacters('abcde', '2db2a2ec'));
