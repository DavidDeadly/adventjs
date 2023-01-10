import { sortToys } from "./solution";
import { describe, it, expect } from "vitest";

describe("sortToys", () => {
  const toys = ['ball', 'doll', 'car', 'puzzle']
  const positions = [2, 3, 1, 0]
  it("must be a function", () => {
    expect(sortToys).toBeTypeOf("function");
  })

  it("must return an array", () => {
    expect(sortToys(toys, positions)).toBeInstanceOf(Array);
  })

  it("must return ['puzzle', 'car', 'ball', 'doll']", () => {
    expect(sortToys(toys, positions)).toEqual(['puzzle', 'car', 'ball', 'doll']);
  })

  it("must return ['ps4', 'xbox', 'switch', 'pc', 'nintendo'] even with big indexes", () => {
    const toys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo'];
    const positions = [8, 6, 5, 7, 9];

    expect(sortToys(toys, positions)).toEqual(['ps4', 'xbox', 'switch', 'pc', 'nintendo']);
  })

  it("must sort even really big indexes", () => {
    const toys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l'];
    const positions = [1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1111];
    expect(sortToys(toys, positions)).toEqual(["l", "a", "b", "c", "d", "e", "f", "g", "h", "j", "k"]);
  })
})