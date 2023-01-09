type Levels = Array<number>;

export function getOptimalPath(pyramid: Array<Levels>) {
  const totalPaths = pyramid.reduce((paths, nextLevel)=> {
    
    const sumsLevels = paths.map((distance, index) => {
      const nextDistances = nextLevel.slice(index, index + 2);
      const sumsToNext = nextDistances.map(nextDistance => nextDistance + distance)
      return sumsToNext;
    });

    return sumsLevels.flat();
  })

  return Math.min(...totalPaths)
}