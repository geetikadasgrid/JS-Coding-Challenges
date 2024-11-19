// In Computer Science a queue is an abstract Data Structure where items are kept in order. New
// items can be added at the back of the queue and old items are taken off from the front of the queue.

// Write a function which takes an array and a number as arguments. Add the number to the end of
// the array, then remove the first element of array. The function should then return the element that was removed.

const queue = [1, 2, 3];

export function nextInLine(arr, num) {
  arr.push(num);
  const result = arr.shift();
  return result;
}

const firstElement = nextInLine(queue, 1);
console.log(firstElement);
