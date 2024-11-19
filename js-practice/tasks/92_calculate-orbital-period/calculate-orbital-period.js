export function calculateOrbitalPeriod(arr) {
  const GM = 398600.4418;
  const EARTH_RADIUS = 6367.4447;

  return arr.map(({ name, avgAlt }) => {
    const semiMajorAxis = avgAlt + EARTH_RADIUS;
    const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(semiMajorAxis ** 3 / GM));
    return { name, orbitalPeriod };
  });
}

console.log(calculateOrbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]));
