export type XYZ = [x: number, y: number, z: number];
export type RGB = [r: number, g: number, b: number];
export type HSV = [h: number, s: number, v: number];
export type HSL = [h: number, s: number, l: number];
export type CMYK = [c: number, m: number, y: number, k: number];
export type LAB = [L: number, a: number, b: number];
export type LCH = [L: number, C: number, h: number];

export type Illuminant = [xn: number, yn: number, zn: number];
export const D50 = {
  2: <Illuminant>[0.96422, 1, 0.82521],
  10: <Illuminant>[0.9672, 1, 0.81427],
};

export const D65 = {
  2: <Illuminant>[0.95047, 1, 1.08883],
  10: <Illuminant>[0.94811, 1, 1.07304],
};
