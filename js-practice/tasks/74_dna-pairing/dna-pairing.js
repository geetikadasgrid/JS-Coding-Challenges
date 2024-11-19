// ### DNA Pairing

// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// __Base pairs__ are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
export function DNAPairing(str) {
  const complement = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  };

  return str.split('').map((base) => [base, complement[base]]);
}
console.log(DNAPairing('GCG'));
