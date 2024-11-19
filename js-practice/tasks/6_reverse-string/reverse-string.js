// Reverse the provided string. You may need to turn the string into an array before you can reverse it. Your result must be a string.

export function reverseString(str) {
  const revStr = str.split('').reverse().join('');

  return revStr;
}

console.log(reverseString('foo bañana mañana'));
