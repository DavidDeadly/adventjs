import { getOptimalPath } from "./solution";
import { describe, it, expect } from "vitest";

describe("getOptimalPath", () => {
  const pyramid = [
      [0],
      [7, 4],
      [2, 4, 6]
    ];

  it("must be a function", () => {
    expect(getOptimalPath).toBeTypeOf("function");
  })

  it("must return a number", () => {
    expect(getOptimalPath(pyramid)).toBeTypeOf("number");
  })

  it("must return 8 since that's the shortest path", () => {
    expect(getOptimalPath(pyramid)).toBe(8);
  })

  it("must return 5", () => {
    const pyramid = [
      [0],
      [3, 4],
      [9, 8, 1]
    ];
    expect(getOptimalPath(pyramid)).toBe(5);
  })
})