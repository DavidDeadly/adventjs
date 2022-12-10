export function countTime(leds: Array<number>) {
  if(!leds.includes(0)) return 0;
  
  const checkOffLeds = (updatedLeds: Array<number>) => 
    updatedLeds.map((led, index) => {
      if(led === 0 && updatedLeds.at(index - 1)=== 1) {
        return ++led;
      }

      return led;
    });

  return countTime(checkOffLeds(leds)) + 7;
}