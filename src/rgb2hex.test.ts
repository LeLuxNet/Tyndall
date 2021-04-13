import { rgb2hex } from "./rgb2hex";

it("should be green", () => {
  expect(rgb2hex([63, 120, 76])).toBe("#3f784c");
});

it("should be purple", () => {
  expect(rgb2hex([96, 87, 112])).toBe("#605770");
});
