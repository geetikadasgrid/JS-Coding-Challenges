// ### Sort by bits

// You're expected to sort an array of 32-bit integers in ascending order by the number of on-bits they have.

export function sortByBits(arr) {
  arr.sort((a, b) => {
    const bitsA = a.toString(2).replace(/0/g, '').length;
    const bitsB = b.toString(2).replace(/0/g, '').length;
    return bitsA === bitsB ? a - b : bitsA - bitsB;
  });
}

console.log(sortByBits([3, 8, 3, 6, 5, 7, 9, 1]));
