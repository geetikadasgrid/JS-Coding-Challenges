// ### Find object analogy

// Write a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

export function findObjectAnalogy(collection, source) {
  const sourceKeys = Object.keys(source);

  return collection.filter((obj) => sourceKeys.every((key) => obj[key] === source[key]));
}

const result = findObjectAnalogy(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' }
  ],
  { last: 'Capulet' }
);
console.log(result);
