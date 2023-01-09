export function decorateTree(base: string) {
  const decorationLaw = {
    BP: "R",
    PB: "R",
    RP: "B",
    PR: "B",
    BR: "P",
    RB: "P",
    RR: "R",
    BB: "B",
    PP: "P"
  }

  return Array.from([...base])
    .reduce((tree, _) => {
      const level = tree[0].split(" ");

      const nextLevel = level
        .map((_deco, index) => {
          const pair = level.slice(index, index + 2);

          return decorationLaw[pair.join("")];
        }).filter(n => n).join(" ");

      tree.unshift(nextLevel);
      return tree;
    }, [base]).filter(n => n);
}