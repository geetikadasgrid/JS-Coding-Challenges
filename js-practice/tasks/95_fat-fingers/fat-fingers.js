// ### Fat Fingers

// Freddy has a really fat left pinky finger, and every time Freddy tries to type an A, he accidentally hits the *CapsLock key*!

// Given a string that Freddy wants to type, emulate the keyboard misses where each A supposedly pressed is replaced with CapsLock, and return the string that Freddy actually types. It doesn't matter if the A in the string is capitalized or not. When CapsLock is enabled, capitalization is reversed, but punctuation is not affected.

// ```javascript
// fatFingers('The quick brown fox jumps over the lazy dog.'); // returns 'The quick brown fox jumps over the lZY DOG.'
// fatFingers('aAaaaaAaaaAAaAa'); // returns ''
// ```
export function fatFingers(str) {
  let capsLock = false;
  let result = '';

  // eslint-disable-next-line no-restricted-syntax
  for (const char of str) {
    if (char.toLowerCase() === 'a') {
      capsLock = !capsLock;
    } else if (capsLock && /[a-zA-Z]/.test(char)) {
      result += char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    } else {
      result += char;
    }
  }

  return result;
}

console.log(fatFingers('The quick brown fox jumps over the lazy dog.'));
