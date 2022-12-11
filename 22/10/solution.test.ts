import { describe, expect, it } from "vitest"
import { checkJump } from "./solution"

describe("checkJump", () => {
  const heights = [1, 3, 8, 5, 2];
  it("must be a function", () => {
    expect(checkJump).toBeTypeOf("function");
  })

  it("must return a boolean", () => {
    expect(checkJump(heights)).toBeTypeOf("boolean");
  })

  it("must return true since it only goes up and down once", () => {
    expect(checkJump(heights)).toBeTruthy();
  })

  it("must return false if it start going down", () => {
    expect(checkJump([8, 5, 1, 4])).toBeFalsy();
  })

  it("must return false if it's not a perfect parabola", () => {
    const heights = [1, 7, 3, 5];
    expect(checkJump(heights)).toBeFalsy();
  })

  it("must return true if it's a perfect parabola even with repeted values", () => {
    const heights = [1, 3, 5, 5, 2];
    expect(checkJump(heights)).toBeTruthy();
  })

  it("must work even with negative numbers", () => {
    const heights = [-2,-1,0,-1,-2];
    expect(checkJump(heights)).toBeTruthy();
  })
})