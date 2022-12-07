const drawUpperCube = (pattern: string, deepness: number) => {
  let finalString = ""; 
  for (let i = 0; i < deepness; i++) {
    
    finalString += " ".repeat(deepness - 1) + pattern.repeat(i + 1);  
  }

  return finalString;
}

export function createCube(size: number) {
  const upperCubePattern = "/\\";
  const lowerCubePattern = "\\/";
  const closeUpperCube = "_\\";
  const closeLowerCube = "_/";

  let upperCube = "";
  let lowerCube = "";

  for(let i = 0; i < size; i++) {
    upperCube += " ".repeat(size - i - 1) + upperCubePattern.repeat(i + 1) + closeUpperCube.repeat(size) + "\n";

    lowerCube += " ".repeat(i) + lowerCubePattern.repeat(size - i) + closeLowerCube.repeat(size) + "\n";

  }

  return upperCube + lowerCube.trim();
}