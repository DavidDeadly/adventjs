type Store = Array<String>;

export function getGiftsToRefill(a1: Store, a2: Store, a3: Store) {

  const stores = Array.from(new Set([a1, a2, a3]));

  const inOneStore = (gift) => {
    let times = 0;

    stores
      .forEach(store => {
        if(store.includes(gift)) times++;
      });
    
    return times === 1;
  }
  
  const allItems = new Set([...stores.flat()]);
  const toReplenish = [];

  allItems
    .forEach((gift) => {
      const isOnlyOneStore = inOneStore(gift)
      if(isOnlyOneStore) toReplenish.push(gift);
    })

  return toReplenish;
}