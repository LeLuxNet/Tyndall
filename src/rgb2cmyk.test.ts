import { rgb2cmyk } from "./rgb2cmyk";

it("should be red", () => {
  const [c, m, y, k] = rgb2cmyk([232, 72, 85]);

  expect(c).toBeCloseTo(0, 0);
  expect(m).toBeCloseTo(69, 0);
  expect(y).toBeCloseTo(63, 0);
  expect(k).toBeCloseTo(9, 0);
});

it("should be gray", () => {
  const [c, m, y, k] = rgb2cmyk([95, 117, 142]);

  expect(c).toBeCloseTo(33, 0);
  expect(m).toBeCloseTo(18, 0);
  expect(y).toBeCloseTo(0, 0);
  expect(k).toBeCloseTo(44, 0);
});
