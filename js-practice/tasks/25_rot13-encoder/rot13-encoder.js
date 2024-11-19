// Write a function which takes a string as input and returns ROT13 encoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
export function rot13Encoder(str) {
  return str
    .split('')
    .map((char) => {
      if (/[A-Z]/.test(char)) {
        const code = char.charCodeAt(0);
        return String.fromCharCode(((code - 65 + 13) % 26) + 65);
      }
      return char;
    })
    .join('');
}

console.log(rot13Encoder('H'));
