// https://en.wikipedia.org/wiki/SRGB#The_forward_transformation_(CIE_XYZ_to_sRGB)

import { RGB, XYZ } from "./constants";

export function xyz2rgb(xyz: XYZ): RGB {
  const x = xyz[0] / 100;
  const y = xyz[1] / 100;
  const z = xyz[2] / 100;

  const r = 3.24096994 * x - 1.53738318 * y - 0.49861076 * z;
  const g = -0.96924364 * x + 1.8759675 * y + 0.04155506 * z;
  const b = 0.05563008 * x - 0.20397696 * y + 1.05697151 * z;

  return [adjust(r), adjust(g), adjust(b)];
}

function gamma(u: number) {
  if (u <= 0.0031308) {
    return 12.92 * u;
  }
  return 1.055 * Math.pow(u, 1 / 2.4) - 0.055;
}

function adjust(u: number) {
  return Math.min(Math.max(gamma(u), 0), 1) * 255;
}
