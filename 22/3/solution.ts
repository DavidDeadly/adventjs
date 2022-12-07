export function distributeGifts(packOfGifts: Array<string>, reindeers: Array<string>) {

  const sumValues = (accumulative, current) => accumulative + current

  const packGiftsWeight = packOfGifts
    .map(gift => gift.length)
    .reduce(sumValues);

  const reindeersWeightLimit = reindeers
    .map(reindeer => reindeer.length * 2)
    .reduce(sumValues)

  return Math.floor(reindeersWeightLimit / packGiftsWeight);
}