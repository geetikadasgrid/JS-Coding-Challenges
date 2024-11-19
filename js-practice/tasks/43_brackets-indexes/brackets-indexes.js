// ### Brackets indexes

// You are given a string with brackets and an index of an opening bracket and your task is to return the index of the matching closing bracket. Return -1 if there is no answer.

export function bracketsIndexes(str, index) {
  if (str[index] !== '(') return -1;
  let balance = 1;
  for (let i = index + 1; i < str.length; i++) {
    if (str[i] === '(') balance++;
    if (str[i] === ')') balance--;
    if (balance === 0) return i;
  }
  return -1;
}
console.log(bracketsIndexes('((1)23(45))(aB)', 1));
