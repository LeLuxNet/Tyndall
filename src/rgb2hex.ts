import { RGB } from "./constants";

export function rgb2hex(rgb: RGB): string {
  return "#" + rgb.map((x) => x.toString(16).padStart(2, "0")).join("");
}
