export function countHours(yearNumber: number, holidays: Array<string>) {
  if(holidays.length === 0) return 0;

  const extraHoursPerDay = 2;

  const DATE = new Date();

  return holidays
    .filter(date => {
      if(date === "12/31") return false;
      const [month, day] = date.split("/");  

      DATE.setFullYear(yearNumber, Number(month) - 1, Number(day));
      const weekDay = DATE.getDay();

      return weekDay >= 1 && weekDay <= 5;
    }).length * extraHoursPerDay;
}
