import { describe, expect, it } from "vitest";
import { getGiftsToRefill } from "./solution";


describe("getGiftsToRefill", () => {
  const a1 = ['bike', 'car', 'bike', 'bike']
  const a2 = ['car', 'bike', 'doll', 'car']
  const a3 = ['bike', 'pc', 'pc']

  it("must be a function", () => {
    expect(typeof getGiftsToRefill).toBe("function")
  })

  it("must return and empty array if there is no gift to replenish", () => {
    const result = getGiftsToRefill(a1, ["pc", "car"], a3);

    expect(result).toBeInstanceOf(Array)

    expect(result).toHaveLength(0);
  })

  it("must return and array with 'doll' and 'pc'", () => {
    const result = getGiftsToRefill(a1, a2, a3);

    expect(result).toHaveLength(2);
    expect(result).toContain("doll")
    expect(result).toContain("pc")
  })
})