interface ReindeerType {
  type: string,
  weightCapacity: number
}

interface Gifts {
  country: string,
  weight: number
}

export function howManyReindeers(reindeerTypes: Array<ReindeerType>, gifts: Array<Gifts>) {

  const sByWeight = (rA, rB) => rB.weightCapacity - rA.weightCapacity;
  const rsSort = reindeerTypes.sort(sByWeight);
  const rsRev = [...rsSort].reverse();

  const selectReinderTeam = (reindeers, giftWeight) => {

    const plusOneReindeer = (type: string) => {
      const sR = reindeers.find(r => r.type === type);

      sR!.num++
    }

    let weight = 0;

    while (weight < giftWeight) {
      const shouldContinue = rsRev
        .some(({ type, weightCapacity }) => {
          const posibleWeight = weight + weightCapacity;
          if(posibleWeight > giftWeight) return;

          weight = posibleWeight;

          plusOneReindeer(type);
          
        })

      if(shouldContinue) continue;
    }

    return reindeers.filter(r => r.num);;
  }

  const reindeerTeams = gifts.map(g => {
    return {
      country: g.country,
      reindeers: reindeerTypes.map(r => ({
        type: r.type,
        num: 0,
      }))
    }
  })

  return gifts.reduce((teams, { country, weight }) => {
    const team = teams.find(c => c.country === country);
    
    const reindeers = selectReinderTeam(team!.reindeers, weight);
    team!.reindeers = reindeers;

    return teams;
  }, reindeerTeams);
}