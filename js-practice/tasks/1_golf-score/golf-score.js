// ### Golf score

// In the game of golf each hole has a *par* meaning the average number of strokes a golfer is expected to make in order to sink the ball in a hole to complete the play. Depending on how far above or below *par* your strokes are, there is a different nickname.

// Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

// eslint-disable-next-line consistent-return
export function golfScore(par, strokes) {
  if (strokes === 1) {
    return 'Hole-in-one!';
  }
  if (strokes <= par - 2) {
    return 'Eagle';
  }
  if (strokes === par - 1) {
    return 'Birdie';
  }
  if (strokes === par) {
    return 'Par';
  }
  if (strokes === par + 1) {
    return 'Bogey';
  }
  if (strokes === par + 2) {
    return 'Double Bogey';
  }
  if (strokes >= par + 3) {
    return 'Go Home!';
  }
}

//   const score = golfScore(4, 5);
//   console.log(score);
