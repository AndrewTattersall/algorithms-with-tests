import type * as SubtractProductAndSum from "../subtractProductAndSum";
const { subtractProductAndSum } = jest.requireActual<
  typeof SubtractProductAndSum
>("../subtractProductAndSum");

describe("product and sum function", () => {
  test("output product and sum if array", () => {
    expect(subtractProductAndSum(234)).toBe(15);
    expect(subtractProductAndSum(4421)).toBe(21);
  });
});

export {};
