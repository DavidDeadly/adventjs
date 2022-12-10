type Store = Array<String>;

export function getGiftsToRefill(a1: Store, a2: Store, a3: Store) {

  const stores = [a1, a2, a3];
  const allItems = new Set([...stores.flat()]);

  const inOneStore = (gift) =>
    stores
      .filter(store => store.includes(gift)).length === 1;  

  return [...allItems]
    .filter(inOneStore);
}