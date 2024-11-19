// Write a function that takes `firstName` and a property (`prop`) as arguments has been pre-written for you.

// The function should check if `firstName` is an actual contact's first name and the given property (`prop`) is a property of that contact.
// * If both are `true`, then return the "value" of that property.
// * If `firstName` does not correspond to any contacts then return "No such contact".
// * If `prop` does not correspond to any valid properties then return "No such property".

const contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points']
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid'],
    points: 0
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin']
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes']
  }
];

export function lookupProfile(firstName, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === firstName) {
      return contacts[i][prop] !== undefined ? contacts[i][prop] : 'No such property';
    }
  }
  return 'No such contact';
}

console.log(lookupProfile('Harry', 'lastName'));
