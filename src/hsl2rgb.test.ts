import { hsl2rgb } from "./hsl2rgb";

it("should be orange", () => {
  const [r, g, b] = hsl2rgb([28, 43, 51]);

  expect(r).toBeCloseTo(184, 0);
  expect(g).toBeCloseTo(126, 0);
  expect(b).toBeCloseTo(76, 0);
});

it("should be purple", () => {
  const [r, g, b] = hsl2rgb([328, 38, 37]);

  expect(r).toBeCloseTo(130, 0);
  expect(g).toBeCloseTo(58, 0);
  expect(b).toBeCloseTo(97, 0);
});
