// ### Unpack Elements

// Flatten a nested array. You must account for varying levels of nesting. You can't use `Array.prototype.flat`.

export function unpackElements(arr) {
  let result = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const element of arr) {
    if (Array.isArray(element)) {
      result = result.concat(unpackElements(element));
    } else {
      result.push(element);
    }
  }
  return result;
}
