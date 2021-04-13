import { xyz2rgb } from "./xyz2rgb";

it("should be green", () => {
  const [r, g, b] = xyz2rgb([13, 19, 16]);

  expect(r).toBeCloseTo(63, 0);
  expect(g).toBeCloseTo(134, 0);
  expect(b).toBeCloseTo(104, 0);
});

it("should be purple", () => {
  const [r, g, b] = xyz2rgb([14, 10, 27]);

  expect(r).toBeCloseTo(113, 0);
  expect(g).toBeCloseTo(71, 0);
  expect(b).toBeCloseTo(143, 0);
});
