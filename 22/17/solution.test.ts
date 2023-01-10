import { carryGifts } from "./solution";
import { describe, it, expect } from "vitest";

describe("carryGifts", () => {
  const gifts = ['game', 'bike', 'book', 'toy'];
  it("Must be a function", () => {
    expect(carryGifts).toBeTypeOf("function");
  })

  it("Must return an array", () => {
    expect(carryGifts(gifts, 10)).toBeInstanceOf(Array);
  })

  it("Must return the gifts packed since 'game' and 'bike' are 4k each, thus 8k both, the maximium weight", () => {
    const gifts = ['game', 'bike'];
    expect(carryGifts(gifts, 8)).toEqual(["game bike"]);
  })

  it("Must return ['game bike', 'book toy']", () => {
    expect(carryGifts(gifts, 10)).toEqual(['game bike', 'book toy']);
  })

  it("Must return ['game', 'bike', 'book toy']", () => {
    expect(carryGifts(gifts, 7)).toEqual(['game', 'bike', 'book toy']);
  })

  it("Must return an empty array if neither gift can be packed", () => {
    const gifts = ["toy", "toy", "toy", "toy"]
    expect(carryGifts(gifts, 2)).toEqual([]);
  })

  it("Must return ['toy', 'gamme', 'toy', 'bike']", () => {
    const gifts = ['toy', 'gamme', 'toy', 'bike']
    expect(carryGifts(gifts, 6)).toEqual(gifts);
  })

  it("Must return ['game', 'bike', 'book', 'toy']", () => {
    const gifts = ['game', 'bike', 'book', 'toy'];
    expect(carryGifts(gifts, 4)).toEqual(gifts);
  })

  it("All gift can be grouped in a single bag", () => {
    const gifts = ['game', 'bike', 'book', 'toy'];
    expect(carryGifts(gifts, 15)).toEqual(["game bike book toy"]);
  })
  
})