import type * as TwoSum from "./twoSum";
const { twoSum } = jest.requireActual<typeof TwoSum>("../twoSum");

describe("return indices of the two numbers that sum to target", () => {
  test("indices sum to target", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
    expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
  });
});

export {};
