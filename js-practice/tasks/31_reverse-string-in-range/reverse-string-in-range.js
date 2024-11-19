export function reverseStringInRange(str, range) {
  const start = range[0];
  const end = range[1];

  const before = str.slice(0, start);
  const toReverse = str.slice(start, end + 1);
  const after = str.slice(end + 1);

  return before + toReverse.split('').reverse().join('') + after;
}
