export interface Box {
  l: number;
  w: number;
  h: number;
}

export function fitsInOneBox(boxes: Array<Box>) {
  return boxes
    .sort((boxA, boxB) => (
      boxA.h - boxB.h &&
      boxA.l - boxB.l &&
      boxA.w - boxB.w
    )).every((box, i) => {
      const nextBox = boxes[i + 1];
      if(!nextBox) return true;
    
      for(const [key, value] of Object.entries(box)) {
        if(value >= nextBox[key]) return false ;
      }

      return true;
    });
}