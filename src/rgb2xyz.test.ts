import { rgb2xyz } from "./rgb2xyz";

it("should be cyan", () => {
  const [x, y, z] = rgb2xyz([23, 126, 137]);

  expect(x).toBeCloseTo(12.33);
  expect(y).toBeCloseTo(16.91);
  expect(z).toBeCloseTo(26.28);
});

it("should be blue", () => {
  const [x, y, z] = rgb2xyz([7, 27, 46]);

  expect(x).toBeCloseTo(0.97);
  expect(y).toBeCloseTo(1.03);
  expect(z).toBeCloseTo(2.73);
});
