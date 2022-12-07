import { assertType, describe, expect, expectTypeOf, it } from "vitest";
import { wrapping } from "./solution";

describe("wrapping", () => {
  const gifts = ['cat', 'game', 'socks'];

  it("must return the same lenght array", () => {
    const execution = wrapping(gifts);

    expect(execution).toBeInstanceOf(Array);

    expect(execution.length).toBe(3);
  })

  it("must add a line break to each gift && * symbol", () => {
    const execution = wrapping(gifts);

    execution.forEach(gift => {
      expect(gift).toContain("\n");
      expect(gift).toContain("*");
    })
  })

  it("must add length + 3 as * to wrapped the gift at each side of the string", () => {
    const execution = wrapping(gifts);

    execution.forEach((gift, i) => {
      const numOfAsts = gift.replaceAll(gifts[i], "").replaceAll("\n", "").length;

      expect(numOfAsts).toBe((gifts[i].length + 3) * 2);
    })
  })

  it("must wrapped correctly the gifts", () => {
    const result = ["******\n*midu*\n******"]

    expect(wrapping(["midu"])).toStrictEqual(result)

    const result2 = [
      "*****\n*cat*\n*****",
      "******\n*game*\n******",
      "*******\n*socks*\n*******"
    ]

    expect(wrapping(gifts)).toStrictEqual(result2)

    const result3 = [
      "***\n*a*\n***"
    ]

    expect(wrapping(["a"])).toStrictEqual(result3)
  })

})