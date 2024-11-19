// ### Pig Latin

// Translate the provided string to pig latin. Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end. Input strings are guaranteed to be English words in all lowercase.

export function pigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.includes(str[0])) {
    return `${str}way`;
  }

  const firstVowelIndex = str.split('').findIndex((char) => vowels.includes(char));
  return `${str.slice(firstVowelIndex) + str.slice(0, firstVowelIndex)}ay`;
}
console.log(pigLatin('consonant'));
