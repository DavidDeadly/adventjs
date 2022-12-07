import { describe, expectTypeOf, it, expect } from "vitest";
import { distributeGifts } from "./solution";


describe("distributeGifts", () => {
  const packOfGifts = ["book", "doll", "ball"];
  const reindeers = ["dasher", "dancer"];

  it("must be a function", () => {
    expectTypeOf(distributeGifts).toBeFunction()
  })

  it("must return a number", () => {  
    expect(distributeGifts(packOfGifts, reindeers)).toBeTypeOf("number")
  })

  it("must return the maximun number of pack of gift Santa can deliver", () => {
    expect(distributeGifts(packOfGifts, reindeers)).toBe(2);
  })

})