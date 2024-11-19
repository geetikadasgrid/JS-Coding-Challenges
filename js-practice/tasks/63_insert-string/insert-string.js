// ### Insert a string

// Write a function to insert a string within a string at a particular position (default is 0).

export function insertString(str, insert = '', position = 0) {
  return str.slice(0, position) + insert + str.slice(position);
}

console.log(insertString('We are doing some exercises.', 'JavaScript', 18));
