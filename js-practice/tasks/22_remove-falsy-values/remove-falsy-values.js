// ### Remove falsy values
// Remove all falsy values from an array.

// Falsy values in JavaScript are `false`, `null`, `0`, `""`, `undefined`, and `NaN`.

export function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

// console.log(removeFalsyValues([0, 1, false, 2, '', 3, null, undefined, NaN, 4]));
