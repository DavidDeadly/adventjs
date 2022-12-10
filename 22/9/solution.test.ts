import { describe, expect, it } from "vitest";
import { countTime } from "./solution"

describe("countTime", () => {
  it("must be a function", () => {
    expect(countTime).toBeTypeOf("function");
  })

  it("must return a number", () => {
    expect(countTime([1, 1])).toBeTypeOf("number")
  })

  it("must return time zero if all the leds are on", () => {
    expect(countTime([1, 1, 1, 1])).toBe(0);
  })

  it("must return time 7 because at the first mutations all leds are on", () => {
    const leds = [0, 1, 1, 0, 1];
    expect(countTime(leds)).toBe(7);
  })

  it("must return time 21, becuase after 3 mutations all leds will be on", () => {
    const leds = [0, 0, 0, 1];
    expect(countTime(leds)).toBe(21);
  })

  it("must return time 28, because after 4 mutations all leds will be on", () => {
    const leds = [0, 0, 1, 0, 0];
    expect(countTime(leds)).toBe(28);
  })
})

