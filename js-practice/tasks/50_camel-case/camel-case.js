// ### CamelCase

// Write simple .camelCase method for strings. All words must have their first letter capitalized without spaces.

// In camelCase.js file
// eslint-disable-next-line no-extend-native, func-names
// In camelCase.js file
// In your camelCase.js file

// Extending String.prototype with the camelCase method
// eslint-disable-next-line no-extend-native
String.prototype.camelCase = function () {
  return this.split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
};

console.log('hello case'.camelCase());
