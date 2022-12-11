export function checkJump(heights: Array<number>) {
  const maxNumber = Math.max(...heights);
  const indexMax = heights.indexOf(maxNumber);

  const leftSide = heights.slice(0, indexMax);
  const rightSide = heights.slice(indexMax + 1);


  if(leftSide.length === 0 || rightSide.length === 0) return false

  const leftSideWork = (height, index) => {
    if(index === leftSide.length - 1) return maxNumber >= height
    return height <= leftSide[index + 1];
  }

  const rightSideWork = (height, index) => {
    if(index === 0) return maxNumber >= height
    return rightSide[index - 1] >= height;
  }
  return leftSide.every(leftSideWork) && rightSide.every(rightSideWork)
}

// There's a problem with this solution a secret test of the adventjs.dev is not passing. Not even chatGPT can tall why that's happening.
export function checkJumps(heights: Array<number>) {
  if(heights[0] > heights[1]) return false;

  let goingUp = true;
  let switchTimes = 0;

  heights
    .forEach((height, i) => {
      const nextOne = heights[i + 1];          

      if(goingUp && height > nextOne) {
        goingUp = false;
        switchTimes++
      }

      if(!goingUp && height < nextOne) {
        goingUp = false;
        switchTimes++
      }
    })
  
  return switchTimes === 1;
}