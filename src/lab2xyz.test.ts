import { lab2xyz } from "./lab2xyz";

it("should be blue", () => {
  const [x, y, z] = lab2xyz([20, 18, -38]);

  expect(x).toBeCloseTo(3.95);
  expect(y).toBeCloseTo(2.99);
  expect(z).toBeCloseTo(13.64);
});
