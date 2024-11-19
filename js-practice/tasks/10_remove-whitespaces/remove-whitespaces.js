export function removeWhitespaces(str) {
  return str.replace(/\s+/g, '');
}

console.log(removeWhitespaces(' Hello, World! '));
