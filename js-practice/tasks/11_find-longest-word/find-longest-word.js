// ### Find the longest word in a string

// Return the length of the longest word in the provided sentence.

// Your response should be a number.

export function findLongestWord(str) {
  const words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}

console.log(findLongestWord('What if we try a super-long word such as otorhinolaryngology'));
