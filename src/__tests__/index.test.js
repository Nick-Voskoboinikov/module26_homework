import { modifyString } from "../index.js";

describe("test function modifyString to return correct answer", () => {
  it("function modifyString returned result to be equal to BAR", () => {
    const result = modifyString('foo');
    expect(result).toBe('bar');
  });
});
