export function wrapping(gifts: Array<string>) {
  if(!Array.isArray(gifts)) throw new Error("Gifts must be an array");
  
  return gifts
      .map(gift => {
        const edgesPaper = "*\n*"
        const paper = "*".repeat(gift.length + 1)
        const wrappedGift = gift.split("");

        wrappedGift.push(edgesPaper)
        wrappedGift.push(paper)
        wrappedGift.unshift(edgesPaper.split("").reverse().join(""));
        wrappedGift.unshift(paper);

        return wrappedGift.join("");
      });
}
