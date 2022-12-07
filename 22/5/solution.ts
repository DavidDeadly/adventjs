export function getMaxGifts(giftsCities: Array<number>, maxGifts: number, maxCities: number) {

  if(giftsCities.length === 1){
    return giftsCities[0] <= maxGifts ? giftsCities[0] : 0;
  }

  let citiesVisited = 0;  

  return giftsCities    
    .reduce((acc, current) => {
      if(current > maxGifts ) return acc;
      const newAcc = acc + current;
      if(citiesVisited === maxCities) return Math.max(acc, current);
      if(newAcc > maxGifts) return Math.max(acc, current);
      
      citiesVisited++;
      return newAcc;
    }, 0)
}

