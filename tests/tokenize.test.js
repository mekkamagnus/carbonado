import { tokenize } from "../tokenize.js";

describe(tokenize, () => {
  it("should return an array", () => {
    expect(Array.isArray(tokenize(""))).toBe(true);
  });
});
