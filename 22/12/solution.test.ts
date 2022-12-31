import { describe, expect, it } from "vitest";
import { selectSleigh } from "./solution";

describe("selectSleigh", () => {
  const distance = 30
  const sleighs = [
    { name: "Gorusuke", consumption: 0.3 },
    { name: "Madeval", consumption: 0.5 },
    { name: "Lolivier", consumption: 0.7 },
    { name: "Hyuuh", consumption: 1 }
  ]
  it("must be a function", () => {
    expect(selectSleigh).toBeTypeOf("function");
  })

  it("must return a string", () => {
    expect(selectSleigh(distance, sleighs)).toBeTypeOf("string");
  })

  it("must return a Madeval", () => {
    expect(selectSleigh(distance, sleighs)).toBe("Madeval");
  })

  it("must return a null if no sleigh satisfied the condition", () => {
    const sleighs = [
    { name: "Lolivier", consumption: 0.7 },
    { name: "Hyuuh", consumption: 1 }
  ]
    expect(selectSleigh(distance, sleighs)).toBe(null);
  })
})