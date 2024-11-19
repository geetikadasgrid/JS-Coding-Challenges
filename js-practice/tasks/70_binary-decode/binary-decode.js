// ### Binary Decode

// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.
export function binaryDecode(str) {
  if (typeof str !== 'string' || str.trim() === '') return '';

  return str
    .split(' ')
    .map((binary) => String.fromCharCode(parseInt(binary, 2)))
    .join('');
}

console.log(binaryDecode('01001000 01100101 01101100 01101100 01101111'));
