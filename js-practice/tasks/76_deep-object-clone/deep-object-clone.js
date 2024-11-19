// ### Deep object clone

// Write a recursive function to copy an argument object.

export function deepObjectClone(obj) {
  if (obj !== null && typeof obj === 'object') {
    const copy = Array.isArray(obj) ? [] : {};
    // eslint-disable-next-line no-restricted-syntax
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        copy[key] = deepObjectClone(obj[key]);
      }
    }
    return copy;
  }
  return obj;
}

const original = { a: 1, b: { c: 10 } };
const copy = deepObjectClone(original);

console.log(copy.b === original.b);
