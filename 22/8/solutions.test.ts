import { describe, expect, it } from "vitest"
import { checkPart } from "./solution"

describe("checkPart", () => {
  it("must be a function", () => {
    expect(typeof checkPart).toBe("function");
  })

  it("must return a boolean", () => {
    expect(checkPart("uwu")).toBeTypeOf("boolean");
  })

  it("must return true if the part itself is palindrome", () => {
    expect(checkPart("uwu")).toBeTruthy();
  })

  it("must return true on 'yolooloy'", () => {
    expect(checkPart("yolooloy")).toBeTruthy();
  })

  it("midu can't be palindrome after removing any caracter", () => {
    expect(checkPart("midu")).toBeFalsy()
  })

  it("miidim can be palindrome after removing one the first i", () => {
    expect(checkPart("miidim")).toBeTruthy()
  })
})