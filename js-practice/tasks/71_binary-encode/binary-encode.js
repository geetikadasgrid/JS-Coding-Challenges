// ### Binary Encode

// Return a binary string of passed English sentence.

// The binary string will be space separated.
export function binaryEncode(str) {
  if (typeof str !== 'string') {
    return '';
  }
  return str
    .split('')
    .map((char) => char.charCodeAt(0).toString(2).padStart(8, '0'))
    .join(' ');
}

console.log(binaryEncode('hello'));
