// https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation_(sRGB_to_CIE_XYZ)

import { RGB, XYZ } from "./constants";

export function rgb2xyz(rgb: RGB): XYZ {
  const r = adjust(rgb[0] / 255);
  const g = adjust(rgb[1] / 255);
  const b = adjust(rgb[2] / 255);

  const x = 0.4123908 * r + 0.35758434 * g + 0.18048079 * b;
  const y = 0.21263901 * r + 0.71516868 * g + 0.07219232 * b;
  const z = 0.01933082 * r + 0.11919478 * g + 0.95053215 * b;

  return [x * 100, y * 100, z * 100];
}

function adjust(u: number) {
  if (u <= 0.04045) {
    return u / 12.92;
  }
  return Math.pow((u + 0.055) / 1.055, 2.4);
}
