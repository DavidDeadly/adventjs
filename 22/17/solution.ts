export function carryGifts(gifts: Array<string>, maxWeight: number) {

  return gifts.reduce((packs: Array<string>, gift: string) => {
    const lastPack = packs.at(-1);
    if(!lastPack) {
      gift.length <= maxWeight && packs.push(gift);
      return packs;
    }

    const lastPackLength = lastPack.replaceAll(" ", "").length;
    const posiblePackLength = lastPackLength + gift.length;

    if(posiblePackLength <= maxWeight) {
      const newPack = `${lastPack} ${gift}`
      
      packs[packs.length - 1] = newPack;

      return packs;
    }

    packs.push(gift);

    return packs;
  }, []);
}