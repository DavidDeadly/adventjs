import { fixLetter } from "./solution";
import { describe, it, expect } from "vitest";

describe("fixLetter", () => {
  const letter = ` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `;
  const letterCorrection = "Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye."
  it("Must be a function", () => {
    expect(fixLetter).toBeTypeOf("function");
  })

  it("Must return a string", () => {
    expect(fixLetter(letter)).toBeTypeOf("string");
  })

  it("Must remove the space from the begining and end of the phrase", () => {
    expect(fixLetter("  Hi  ")).toBe("Hi.");
  })

  it("Must remove multiple space and leave only one", () => {
    expect(fixLetter("How  are   you?")).toBe("How are you?");
  })

  it("Must leave a space and only one space after each comma  and point", () => {
    expect(fixLetter("Hi,there.Bye!")).toBe("Hi, there. Bye!");
    expect(fixLetter("Hi,  there.Bye!")).toBe("Hi, there. Bye!");
  })

  it("Must remove space before each comma and point", () => {
    expect(fixLetter("Hi , there  .Bye!")).toBe("Hi, there. Bye!");
  })

  it("Questions must only end with a question mark", () => {
    expect(fixLetter("Hello, how are you??")).toBe("Hello, how are you?");
    expect(fixLetter("Hello, how are you??????")).toBe("Hello, how are you?");
  })

  it("The first letter of each sentence must be capitalized", () => {
    expect(fixLetter("Hi. i'm a girl from Spain. please, send me a bike. is it possible?")).toBe("Hi. I'm a girl from Spain. Please, send me a bike. Is it possible?");
  })

  it("Must put the word 'Santa Claus' in uppercase if it appears in the letter", () => {
    expect(fixLetter("Hi, santa claus")).toBe("Hi, Santa Claus.")
  })

  it("Must put the point at the end of the sentence if it doesn't have punctuation", () => {
    expect(fixLetter("Hi, I'm David")).toBe("Hi, I'm David.")
    expect(fixLetter("Hi, How are you?")).toBe("Hi, How are you?")
  })

  it("must return the corrected string", () => {    
    expect(fixLetter(letter)).toBe(letterCorrection);
  })

  it("must return the corrected string", () => {
    expect(fixLetter('  hi,santa claus. are you there ?   ')).toBe("Hi, Santa Claus. Are you there?")
  })

  it("must return the corrected string", () => {
    expect(fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?")).toBe("Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?");
  })

  it("must return the corrected string", () => {
    expect(fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `)).toBe("Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.");
  })
})