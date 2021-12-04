import type * as Default from "../default";
const { defaultFunction } = jest.requireActual<typeof Default>("../default");

describe("default function", () => {
  test("guaranteed random", () => {
    expect(defaultFunction()).toBe(4);
  });
});

export {};
