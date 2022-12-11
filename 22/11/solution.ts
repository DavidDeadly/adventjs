export function getCompleted(part: string, total: string) {
  const getSecondsOfDate = (dateStr: string) => {
    const [hours, minutes, seconds] = dateStr.split(":");
    return Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
  }

  const findUnit = (dividend: number, divider: number) => {
    while (divider !== 0) {
      let auxiliar = divider;
      divider = dividend % divider;
      dividend = auxiliar;
    }

    const unit = dividend;
    return unit;
  }
  
  const datePartSeconds = getSecondsOfDate(part)
  const dateTotalSeconds = getSecondsOfDate(total);
  const unit = findUnit(datePartSeconds, dateTotalSeconds)
  const numerator = datePartSeconds / unit;
  const denominator = dateTotalSeconds / unit;

  return `${numerator}/${denominator}`
}