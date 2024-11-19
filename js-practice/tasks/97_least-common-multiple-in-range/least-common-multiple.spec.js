import { leastCommonMultipleInRange } from './least-common-multiple-in-range';

describe('leastCommonMultipleInRange', () => {
  it('leastCommonMultipleInRange([1, 5]) should return a number', () => {
    expect(typeof leastCommonMultipleInRange([1, 5])).toBe('number');
  });

  it('leastCommonMultipleInRange([1, 5]) should return 60', () => {
    expect(leastCommonMultipleInRange([1, 5])).toBe(60);
  });

  it('leastCommonMultipleInRange([5, 1]) should return 60', () => {
    expect(leastCommonMultipleInRange([5, 1])).toBe(60);
  });

  it('leastCommonMultipleInRange([1, 13]) should return 360360', () => {
    expect(leastCommonMultipleInRange([1, 13])).toBe(360360);
  });

  it('leastCommonMultipleInRange([23, 18]) should return 6056820', () => {
    expect(leastCommonMultipleInRange([23, 18])).toBe(6056820);
  });
});
