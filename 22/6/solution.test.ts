import { describe, expect, expectTypeOf, it } from "vitest"
import { createCube } from "./solution"

describe("createCube", () => {
  it("must be a function", () => {
    expectTypeOf(createCube).toBeFunction()
  })

  it("must return a string", () => {
    expect(createCube(1)).toBeTypeOf("string");
  })

  it("must draw a cube of 1 size", () => {
    const expected = createCube(20);
    console.log("theirs");
    console.log("/\\_\\\n\\/_/")
    console.log("mine");
    console.log(expected);

    expect(createCube(1)).toBe("/\\_\\\n\\/_/");
  })
})