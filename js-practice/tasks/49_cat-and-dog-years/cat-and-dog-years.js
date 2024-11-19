// ### Cats and Dogs years

// I have a cat and a dog. I got them at the same time as kitten/puppy. That was humanYears years ago.

// Write a function that returns their respective ages now as `[humanYears, catYears, dogYears]`.

export function catAndDogYears(humanYears) {
  let catYears = 0;
  let dogYears = 0;

  if (humanYears === 1) {
    catYears = 15;
    dogYears = 15;
  } else if (humanYears === 2) {
    catYears = 24;
    dogYears = 24;
  } else {
    catYears = 24 + (humanYears - 2) * 4;
    dogYears = 24 + (humanYears - 2) * 5;
  }

  return [humanYears, catYears, dogYears];
}
