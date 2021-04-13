// https://en.wikipedia.org/wiki/CIELAB_color_space#From_CIELAB_to_CIEXYZ

import { D65, Illuminant, LAB, XYZ } from "./constants";

export function lab2xyz(lab: LAB, n: Illuminant = D65[2]): XYZ {
  const m = (lab[0] + 16) / 116;

  const x = n[0] * f(m + lab[1] / 500);
  const y = n[1] * f(m);
  const z = n[2] * f(m - lab[2] / 200);

  return [x * 100, y * 100, z * 100];
}

const delta = 6 / 29;
function f(t: number) {
  if (t > delta) {
    return Math.pow(t, 3);
  }
  return 3 * Math.pow(delta, 3) * (t - 4 / 29);
}
