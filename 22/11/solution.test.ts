import { describe, it, expect } from "vitest";
import { getCompleted } from "./solution"

describe("getCompleted", () => {
  it("must be a function", () => {
    expect(getCompleted).toBeTypeOf("function")
  })

  it("must return a string", () => {
    const result = getCompleted('01:00:00', '03:00:00');
    expect(result).toBeTypeOf("string")
  })

  it("must return a string with 1/3", () => {
    const result = getCompleted('01:00:00', '03:00:00');
    expect(result).toBe("1/3");
  })

  it("must return a string with 1/6", () => {
    const result = getCompleted('00:10:00', '01:00:00')
    expect(result).toBe("1/6");
  })

  it("must return a string with 2/3", () => {
    const result = getCompleted('01:10:10', '03:30:30')
    expect(result).toBe("1/3");
  })

  it("must return a string with 1/1", () => {
    const result = getCompleted('01:00:00', '01:00:00')
    expect(result).toBe("1/1");
  })

  it("must return a string with 3/5", () => {
    const result = getCompleted('03:30:30', '05:50:50')
    expect(result).toBe("3/5");
  })
})