export default function reverseString(str) {
	if (str === undefined || str.length === 0) return '';
	return str.split('').toReversed().join('');
}
