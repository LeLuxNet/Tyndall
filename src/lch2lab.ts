import { LAB, LCH } from "./constants";

export function lch2lab(lch: LCH): LAB {
  const n = 2 * Math.PI * lch[2];

  const a = lch[1] * Math.cos(n);
  const b = lch[1] * Math.sin(n);

  return [lch[0], a, b];
}
