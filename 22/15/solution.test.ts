import { decorateTree } from "./solution";
import { describe, it, expect } from "vitest";

describe("decorateTree", () => {
  it("must be a function", () => {
    expect(decorateTree).toBeTypeOf("function");
  })

  it("must a string", () => {
    expect(decorateTree('B P R P')).toBeInstanceOf(Array);
  })

  it("must a return the tree ['B', 'B B']", () => {
    expect(decorateTree('B B')).toEqual(['B', 'B B']);
  })

  it("must a return the tree ['R', 'P B', 'R B B', 'B P R P']", () => {
    expect(decorateTree('B P R P')).toEqual(['R', 'P B', 'R B B', 'B P R P']);
  })
  
})