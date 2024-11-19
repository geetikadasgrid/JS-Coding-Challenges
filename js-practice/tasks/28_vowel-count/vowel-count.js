// ### Vowel count

// Return the number (count) of vowels in the given string.

// We will consider `a`, `e`, `i`, `o`, and `u` as vowels for this task.

// The input string will only consist of lower case letters and/or spaces.

export function vowelCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

//   console.log(vowelCount("jooo"))
