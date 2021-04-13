import { hsv2rgb } from "./hsv2rgb";

it("should be yellow", () => {
  const [r, g, b] = hsv2rgb([63, 65, 100]);

  expect(r).toBeCloseTo(247, 0);
  expect(g).toBeCloseTo(255, 0);
  expect(b).toBeCloseTo(89, 0);
});

it("should be red", () => {
  const [r, g, b] = hsv2rgb([353, 65, 94]);

  expect(r).toBeCloseTo(240, 0);
  expect(g).toBeCloseTo(84, 0);
  expect(b).toBeCloseTo(102, 0);
});
