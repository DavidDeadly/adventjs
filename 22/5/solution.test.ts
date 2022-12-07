import { describe, expect, expectTypeOf, it } from "vitest"
import { getMaxGifts } from "./solution"

describe("getMaxGifts", () => {
  const giftsCities = [12, 3, 11, 5, 7]
  const maxGifts = 20
  const maxCities = 3

  it("must be a function", () => {
    expectTypeOf(getMaxGifts).toBeFunction();
  })

  it("must return a number", () => {
    expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toBeTypeOf("number");
  })

  it("must return a 20 as the the highest sum of gifts to distribute visiting a maximum of 3 cities", () => {
    expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toBe(20);
  })

  it("must return 0 when it's not possible to make any trips that satisfies everything,", () => {
    expect(getMaxGifts([50], 15, 1)).toBe(0);
  })

  it("must return the maxium value even when there's only one ", () => {
    expect(getMaxGifts([50], 100, 1)).toBe(50);
  })

  it("must return the maximun value even when it comes after another high one", () => {
    expect(getMaxGifts([50, 70, 30], 100, 2)).toBe(100);
  })

  it("must return the maxium value even with few elements", () => {
    expect(getMaxGifts([50, 70], 100, 1)).toBe(70);
  })
})