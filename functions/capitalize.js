import { isAlphabetic } from '../helpers/utils.js';

export default function capitalize(str) {
	if (str === undefined || str.length === 0) return '';

	let index = 0;

	for (const [i, c] of [...str].entries()) {
		if (isAlphabetic(c)) {
			index = i;
			break;
		}
	}

	return str.slice(0, index) + str[index].toUpperCase() + str.slice(index + 1);
}
