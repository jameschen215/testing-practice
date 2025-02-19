import { isAlphabetic, isInteger } from '../helpers/utils';

export default function caesarCipher(str, key) {
	if (arguments.length !== 2) {
		throw new Error('This function needs and only needs two parameters.');
	}

	if (typeof str !== 'string') {
		throw new Error('The first parameter of the function must be a string.');
	}

	if (!isInteger(key)) {
		throw new Error('The second parameter of the function must be an integer.');
	}

	// Convert string to array, cipher each alphabetic character, then join back to string
	return str
		.split('')
		.map((char) => (isAlphabetic(char) ? cipher(char, key) : char))
		.join('');
}

function cipher(char, key) {
	const code = char.charCodeAt(0);
	const isUpperCase = code <= 90;
	const base = isUpperCase ? 65 : 97;
	const cipheredIndex = (code - base + key) % 26;

	return String.fromCharCode(cipheredIndex + base);
}
