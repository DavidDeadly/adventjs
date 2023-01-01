import { getFilesToBackup, Changes } from "./solution";
import { describe, it, expect } from "vitest";

describe("getFilesToBackup", () => {
  const lastBackup = 1546300800

  const changes: Array<Changes> = [
    [ 3, 1546301100 ],
    [ 2, 1546300800 ],
    [ 1, 1546300800 ],
    [ 1, 1546300900 ],
    [ 1, 1546301000 ]
  ]

  it("must be a function", () => {
    expect(getFilesToBackup).toBeTypeOf("function");
  })

  it("must return an array", () => {
    expect(getFilesToBackup(lastBackup, changes)).toBeInstanceOf(Array);
  })

  it("must return an array of two elements", () => {
    expect(getFilesToBackup(lastBackup, changes)).toHaveLength(2);
  })

  it("the array must contain the files 1 and 3 ", () => {
    expect(getFilesToBackup(lastBackup, changes)).toContain(1)
    expect(getFilesToBackup(lastBackup, changes)).toContain(3)
  })

  it("the array must cotain the file 1 only one time, and must be sorted in the ascending order", () => {
    expect(getFilesToBackup(lastBackup, changes)).toEqual([1, 3])
  })
})