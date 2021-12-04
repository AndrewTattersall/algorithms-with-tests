import type * as PalidromeNumber from "../palidromeNumber";
const { palidromeNumber } =
  jest.requireActual<typeof PalidromeNumber>("../palidromeNumber");

describe("palidrome function", () => {
  test("return true is palidrome integer, false if not", () => {
    expect(palidromeNumber(4334)).toBeTruthy();
    expect(palidromeNumber(5334)).toBeFalsy();
    expect(palidromeNumber(1221)).toBeTruthy();
  });
});

export {};
