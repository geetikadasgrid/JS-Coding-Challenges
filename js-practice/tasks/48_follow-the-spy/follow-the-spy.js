// ### Follow that Spy

// We are tracking down our rogue agent Matthew Knight A.K.A. Roy Miller and he travels from places to places to avoid being tracked. Each of his travels are based on a list of itineraries in an unusual or incorrect order. The task is to determine the routes he will take in his every journey. You are given an array of routes of his itineraries. List down only the places where he will go in correct order based on his itineraries.

export function followTheSpy(itinerary) {
  const result = [];
  const map = new Map();

  // eslint-disable-next-line no-restricted-syntax
  for (const pair of itinerary) {
    map.set(pair[0], pair[1]);
  }
  let start = itinerary.find((pair) => !itinerary.some((p) => p[1] === pair[0]))[0];
  result.push(start);

  while (map.has(start)) {
    start = map.get(start);
    result.push(start);
  }

  return result.join(', ');
}
