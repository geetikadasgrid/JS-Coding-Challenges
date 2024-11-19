// ### Check boolean
// Check if a value is classified as a boolean primitive. Return `true` or `false`.
// Helpful links:
// * [Boolean Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

export const isBoolean = (value) => {
  const check = typeof value === 'boolean';
  return check;
};
// console.log(isBoolean('false'));
