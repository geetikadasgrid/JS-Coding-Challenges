export function findNumbers(str) {
  const digits = str.match(/\d+/g);
  return digits ? digits.map(Number) : [];
}

console.log(findNumbers('s123d'));
