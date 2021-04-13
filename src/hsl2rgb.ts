// https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB

import { HSL, RGB } from "./constants";

export function hsl2rgb(hsl: HSL): RGB {
  const s = hsl[1] / 100;
  const l = hsl[2] / 100;

  const C = (1 - Math.abs(2 * l - 1)) * s;
  const H = hsl[0] / 60;
  const X = C * (1 - Math.abs((H % 2) - 1));

  var r = 0;
  var g = 0;
  var b = 0;
  if (H < 1) {
    r = C;
    g = X;
  } else if (H < 2) {
    r = X;
    g = C;
  } else if (H < 3) {
    g = C;
    b = X;
  } else if (H < 4) {
    g = X;
    b = C;
  } else if (H < 5) {
    r = X;
    b = C;
  } else {
    r = C;
    b = X;
  }

  const m = l - C / 2;
  return [(r + m) * 255, (g + m) * 255, (b + m) * 255];
}
