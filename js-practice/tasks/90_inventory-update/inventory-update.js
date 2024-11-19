// ### Inventory Update

// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in *arr1*). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

// ```javascript
// // Example inventory lists
// const curInv = [
//     [21, "Bowling Ball"],
//     [2, "Dirty Sock"],
//     [1, "Hair Pin"],
//     [5, "Microphone"]
// ];

// const newInv = [
//     [2, "Hair Pin"],
//     [3, "Half-Eaten Apple"],
//     [67, "Bowling Ball"],
//     [7, "Toothpaste"]
// ];

// updateInventory(curInv, newInv);
// /*
// returns [
//   [88, 'Bowling Ball'],
//   [2, 'Dirty Sock'],
//   [3, 'Hair Pin'],
//   [3, 'Half-Eaten Apple'],
//   [5, 'Microphone'],
//   [7, 'Toothpaste'],
// ]
// */
// ```

export function updateInventory(curInv, newInv) {
  const inventory = {};

  curInv.forEach(([quantity, item]) => {
    inventory[item] = quantity;
  });

  newInv.forEach(([quantity, item]) => {
    if (inventory[item] !== undefined) {
      inventory[item] += quantity;
    } else {
      inventory[item] = quantity;
    }
  });

  const updatedInventory = Object.entries(inventory)
    .map(([item, quantity]) => [quantity, item])
    .sort((a, b) => a[1].localeCompare(b[1]));

  return updatedInventory;
}

const curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone']
];

const newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste']
];

console.log(updateInventory(curInv, newInv));
