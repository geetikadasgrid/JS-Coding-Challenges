export function peopleInBus(busStops) {
  let totalPeople = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const [on, off] of busStops) {
    totalPeople += on - off;
  }
  return totalPeople;
}
console.log(
  peopleInBus([
    [10, 0],
    [3, 5],
    [5, 8]
  ])
);
