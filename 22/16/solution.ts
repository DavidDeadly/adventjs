export function fixLetter(letter: string) {
  const capitalizeSentences = (str: string) => {
    const text = str
      .replace(/ *[\.\?\!] *[a-z]/g, match => {
      const [punctuation, char] = match.split(/\s*/g);

      const nextPart = `${punctuation} ${char.toUpperCase()}` 
      return nextPart;
    });

    return text[0].toUpperCase() + text.slice(1);
  }

  const repGooPunc = match => `${match.trim()} `;
  const repDotEnd = match => `${match}.`;

  const trimed = letter.trim();
  const noSpaces = trimed.replace(/ +/g, " ");
  const goodPunc = noSpaces.replaceAll(/ *[,\.] */g, repGooPunc);
  const oneQMark = goodPunc.replace(/ *\?+ */g, "? ")
  const santUpper = oneQMark.replace(/santa claus/gi, "Santa Claus")
  const dotEnd = santUpper.replace(/\w$/g, repDotEnd)
  const correctedLetter = capitalizeSentences(dotEnd.trimEnd());

  return correctedLetter;
}