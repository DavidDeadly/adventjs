export function dryNumber(dry: number, numbers: number) {
  return Array.from({
    length: numbers
  }, (_, index) => index + 1)
  .filter(num => num.toString().includes(dry));
}