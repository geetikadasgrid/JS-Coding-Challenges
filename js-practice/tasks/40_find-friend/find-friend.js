// ### Find friend

// Your friend has invited you to a party, and tells you to meet them in the line to get in. The one problem is it's a masked party. Everyone in line is wearing a colored mask, including your friend. Find which people in line could be your friend.

// Your friend has told you that he will be wearing a RED mask, and has TWO other friends with him, both wearing BLUE masks.

// Input to the function will be an array of strings, each representing a colored mask. For example:

// The output of the function should be the number of people who could possibly be your friend.

// ```javascript
// findFriend(['blue', 'blue', 'red', 'red', 'blue', 'green']); // returns 1
// ```
export function findFriend(masks) {
  let possibleFriends = 0;
  for (let i = 0; i < masks.length; i++) {
    if (masks[i] === 'red') {
      if (
        (masks[i - 1] === 'blue' && masks[i + 1] === 'blue') ||
        (masks[i - 2] === 'blue' && masks[i - 1] === 'blue' && masks[i] === 'red') ||
        (masks[i + 1] === 'blue' && masks[i + 2] === 'blue')
      ) {
        possibleFriends++;
      }
    }
  }
  return possibleFriends;
}
