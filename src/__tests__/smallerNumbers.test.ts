import type * as SmallerNumbers from "../smallerNumbers";
const { smallerFunction } =
  jest.requireActual<typeof SmallerNumbers>("../smallerNumbers");

describe("smaller number function", () => {
  test("output number of smaller numbers in array", () => {
    expect(smallerFunction([8, 1, 2, 2, 3])).toEqual([4, 0, 1, 1, 3]);
    expect(smallerFunction([7, 7, 7, 7])).toEqual([0, 0, 0, 0]);
  });
});

export {};
