export function sortToys(toys: Array<string>, positions: Array<number>) {
  const lowerPositions = positions.map(p => p - Math.min(...positions));

  return Array.from({
    length: toys.length
  }, (_, index) => toys[lowerPositions.findIndex(p => p === index)]);
}