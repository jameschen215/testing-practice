export function isAllNumber(array) {
	for (const num of array) {
		if (typeof num !== 'number') {
			return false;
		}
	}

	return true;
}

export function isInteger(num) {
	return Number.isInteger(num);
}

export function isAlphabetic(char) {
	return /^[A-Za-z]$/.test(char);
}
