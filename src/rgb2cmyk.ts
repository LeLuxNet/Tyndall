// https://www.rapidtables.com/convert/color/rgb-to-cmyk.html

import { CMYK, RGB } from "./constants";

export function rgb2cmyk(rgb: RGB): CMYK {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;

  const k = 1 - Math.max(r, g, b);
  const n = 100 / (1 - k);

  const c = (1 - r - k) * n;
  const m = (1 - g - k) * n;
  const y = (1 - b - k) * n;

  return [c, m, y, k * 100];
}
