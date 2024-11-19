// ### Row Weight

// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Given an array of positive integers (the weights of the people), return a new array of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

export function rowWeights(arr) {
  let team1 = 0;
  let team2 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      team1 += arr[i];
    } else {
      team2 += arr[i];
    }
  }

  return [team1, team2];
}

console.log(rowWeights([50, 60, 70, 80]));
