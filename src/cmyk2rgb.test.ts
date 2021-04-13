import { cmyk2rgb } from "./cmyk2rgb";

it("should be yellow", () => {
  const [r, g, b] = cmyk2rgb([0, 17, 100, 0]);

  expect(r).toBeCloseTo(255, 0);
  expect(g).toBeCloseTo(212, 0);
  expect(b).toBeCloseTo(0, 0);
});

it("should be green", () => {
  const [r, g, b] = cmyk2rgb([98, 0, 58, 9]);

  expect(r).toBeCloseTo(5, 0);
  expect(g).toBeCloseTo(232, 0);
  expect(b).toBeCloseTo(97, 0);
});
