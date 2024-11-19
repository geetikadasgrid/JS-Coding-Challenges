// ### Spinal Case

// Convert a string to spinal case.

// Spinal case is `all-lowercase-words-joined-by-dashes`.

export function spinalCase(str) {
  return str
    .replace(/_/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();
}

console.log(spinalCase('The_Andy_Griffith_Show'));
