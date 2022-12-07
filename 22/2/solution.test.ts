import { expectTypeOf, it, describe, expect } from "vitest";
import { countHours } from "./solution";

describe("countHours", () => {
  const year = 2022
  const holidays = ['01/06', '04/01', '12/25'] 

  it("must return a number", () => {
    expect(countHours(year, [])).toBeTypeOf("number");
  })

  it("must return zero in case of no holidays", () => {
    expect(countHours(year, [])).toBe(0);
  })

  it("must return count only monday to friday days", () => {
    expect(countHours(year, ['12/25'])).toBe(0);
  })

  it("must return 4 for 2 holidays", () => {
    expect(countHours(year, holidays)).toBe(4);
  })

  it("must avoid counting the 31 of december due to the end of the year", () => {
    expect(countHours(2021, ["12/31"])).toBe(0);
  })
})