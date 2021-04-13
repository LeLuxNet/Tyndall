import { rgb2hsv } from "./rgb2hsv";

it("should be red", () => {
  const [h, s, v] = rgb2hsv([178, 13, 48]);

  expect(h).toBeCloseTo(347, 0);
  expect(s).toBeCloseTo(93, 0);
  expect(v).toBeCloseTo(70, 0);
});

it("should be green", () => {
  const [h, s, v] = rgb2hsv([172, 228, 170]);

  expect(h).toBeCloseTo(118, 0);
  expect(s).toBeCloseTo(25, 0);
  expect(v).toBeCloseTo(89, 0);
});

it("should be blue", () => {
  const [h, s, v] = rgb2hsv([63, 132, 229]);

  expect(h).toBeCloseTo(215, 0);
  expect(s).toBeCloseTo(72, 0);
  expect(v).toBeCloseTo(90, 0);
});

it("should be black", () => {
  const [h, s, v] = rgb2hsv([0, 0, 0]);

  expect(h).toBe(0);
  expect(s).toBe(0);
  expect(v).toBe(0);
});
