// https://en.wikipedia.org/wiki/HSL_and_HSV#From_RGB

import { HSV, RGB } from "./constants";

export function rgb2hsv(rgb: RGB): HSV {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;

  const V = Math.max(r, g, b);
  const Xmin = Math.min(r, g, b);

  const C = V - Xmin;

  var h: number;
  if (C === 0) {
    h = 0;
  } else if (V === r) {
    h = 60 * ((g - b) / C);
  } else if (V === g) {
    h = 60 * (2 + (b - r) / C);
  } else {
    h = 60 * (4 + (r - g) / C);
  }

  const s = V === 0 ? 0 : C / V;

  return [h < 0 ? h + 360 : h, s * 100, V * 100];
}
