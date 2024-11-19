// ### Valid Braces

// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return `true` if the string is valid, and `false` if it's invalid.

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: `()[]{}`.

// A string of braces is considered valid if all braces are matched with the correct brace.

// ```javascript
// validBraces('(){}[]'); // returns true
// validBraces('(}'); // returns false

export function validBraces(str) {
  const stack = [];
  const matchingBraces = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  // eslint-disable-next-line no-restricted-syntax
  for (const char of str) {
    if (matchingBraces[char]) {
      stack.push(char);
    } else {
      const lastOpeningBrace = stack.pop();
      if (matchingBraces[lastOpeningBrace] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(validBraces('(}'));
