import { isAllNumber } from '../helpers/utils.js';

export default function analyzeArray(array) {
	if (arguments.length !== 1) {
		throw new Error('This function requires only one parameter.');
	}

	if (!(array instanceof Array)) {
		throw new Error('This function requires an array as its parameter.');
	}

	if (!isAllNumber(array)) {
		throw new Error('The parameter must contain only numerical values.');
	}

	if (array.length === 0) {
		throw new Error('The parameter must contain at least one numerical value.');
	}

	let max = array[0];
	let min = array[0];
	let sum = 0;

	for (const num of array) {
		if (num > max) max = num;
		if (num < min) min = num;
		sum += num;
	}

	const length = array.length;
	const average = sum / length;

	return { average, length, max, min };
}
