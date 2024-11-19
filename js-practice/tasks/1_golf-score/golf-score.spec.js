import { golfScore } from './golf-score';

describe('golfScore', () => {
  it('golfScore(4, 1) should return "Hole-in-one!"', () => {
    expect(golfScore(4, 1)).toBe('Hole-in-one!');
  });

  it('golfScore(4, 2) should return "Eagle"', () => {
    expect(golfScore(4, 2)).toBe('Eagle');
  });

  it('golfScore(5, 2) should return "Eagle"', () => {
    expect(golfScore(5, 2)).toBe('Eagle');
  });

  it('golfScore(4, 3) should return "Birdie"', () => {
    expect(golfScore(4, 3)).toBe('Birdie');
  });

  it('golfScore(4, 4) should return "Par"', () => {
    expect(golfScore(4, 4)).toBe('Par');
  });

  it('golfScore(1, 1) should return "Hole-in-one!"', () => {
    expect(golfScore(1, 1)).toBe('Hole-in-one!');
  });

  it('golfScore(5, 5) should return "Par"', () => {
    expect(golfScore(5, 5)).toBe('Par');
  });

  it('golfScore(4, 5) should return "Bogey"', () => {
    expect(golfScore(4, 5)).toBe('Bogey');
  });

  it('golfScore(4, 6) should return "Double Bogey"', () => {
    expect(golfScore(4, 6)).toBe('Double Bogey');
  });

  it('golfScore(4, 7) should return "Go Home!"', () => {
    expect(golfScore(4, 7)).toBe('Go Home!');
  });

  it('golfScore(5, 9) should return "Go Home!"', () => {
    expect(golfScore(5, 9)).toBe('Go Home!');
  });
});
