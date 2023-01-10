import { dryNumber } from "./solution";
import { describe, it, expect } from "vitest";

describe("dryNumber", () => {
  it("must be a function", () => {
    expect(dryNumber).toBeTypeOf("function");
  })

  it("must return an array", () => {
    expect(dryNumber(1, 15)).toBeInstanceOf(Array);
  })

  it("must return [1, 10, 11, 12, 13, 14, 15], since all those numbers contain the number 1", () => {
    expect(dryNumber(1, 15)).toEqual([1, 10, 11, 12, 13, 14, 15]);
  })
})