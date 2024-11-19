// ### Array plus Array

// Sum up the array values by indices. If pair value is missed, consider as 0.

export function arrayPlusArray(arr1, arr2) {
  const maxLength = Math.max(arr1.length, arr2.length);
  const result = [];

  for (let i = 0; i < maxLength; i++) {
    const value1 = arr1[i] || 0;
    const value2 = arr2[i] || 0;
    result.push(value1 + value2);
  }

  return result;
}
