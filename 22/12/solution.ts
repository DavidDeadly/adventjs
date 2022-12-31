interface Sleigh {
  name: string, consumption: number
}

const batteryMax = 20;

export function selectSleigh(distance: number, sleighs: Array<Sleigh>) {
  const batteryMax = 20;
  const canCoverDistance = s => s.consumption * distance <= batteryMax;
  const goodSleighs = sleighs.filter(canCoverDistance);
  
  if(!goodSleighs.length) return null;

  return goodSleighs.map(sleigh => sleigh.name).at(-1);

}