// https://bottosson.github.io/posts/oklab

import { LAB, XYZ } from "./constants";

export function oklab2xyz(lab: LAB): XYZ {
	const l = lab[0] + 0.3963377774 * lab[1] + 0.2158037573 * lab[2];
	const a = lab[0] - 0.1055613458 * lab[1] - 0.0638541728 * lab[2];
	const b = lab[0] - 0.0894841775 * lab[1] - 1.2914855480 * lab[2];

	const l3 = Math.pow(l, 3);
	const a3 = Math.pow(a, 3);
	const b3 = Math.pow(b, 3);

	const x = 1.22701 * l3 - 0.5578 * a3 + 0.281256 * b3;
	const y = -0.0405802 * l3 + 1.11226 * a3 - 0.0716767 * b3;
	const z = -0.0763813 * l3 - 0.421482 * a3 + 1.58616 * b3;

	return [x * 100, y * 100, z * 100];
}
