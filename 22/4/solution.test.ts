import { describe, expect, expectTypeOf, it } from "vitest";
import { fitsInOneBox } from "./solutions";

describe("fitsInOneBox", () => {
  const firstPack = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 }
  ];

  const secondPack = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
  ]

  const thirdPack = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
  ]


  it("must be a function", () => {
    expectTypeOf(fitsInOneBox).toBeFunction()
  })

  it("must return a boolean", () => {
    expect(fitsInOneBox(firstPack)).toBeTypeOf("boolean")
  })

  it("must return true if one box fits in another", () => {
    expect(fitsInOneBox(firstPack)).toBeTruthy();
  })

  it("must return false 'cause the middle box does not fit in the last one",  () => {
    expect(fitsInOneBox(secondPack)).toBeFalsy();
  })

  it("must return true if the main condition it met even when the boxes are no ordered",  () => {
    expect(fitsInOneBox(thirdPack)).toBeTruthy();
  })
})