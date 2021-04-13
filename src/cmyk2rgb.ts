// https://www.rapidtables.com/convert/color/cmyk-to-rgb.html

import { CMYK, RGB } from "./constants";

export function cmyk2rgb(cmyk: CMYK): RGB {
  const c = cmyk[0] / 100;
  const m = cmyk[1] / 100;
  const y = cmyk[2] / 100;
  const k = cmyk[3] / 100;

  const n = 255 * (1 - k);

  const r = (1 - c) * n;
  const g = (1 - m) * n;
  const b = (1 - y) * n;

  return [r, g, b];
}
