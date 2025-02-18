import reverseString from '../functions/reverse-string.js';

const testCases = [
	{ input: 'Hello', expected: 'olleH' },
	{ input: 'Hello, world!', expected: '!dlrow ,olleH' },
	{
		input: 'James, Chen',
		expected: 'nehC ,semaJ',
	},
	{
		input: '"what is your name?"',
		expected: '"?eman ruoy si tahw"',
	},
	{
		input: '_cat_and_dog',
		expected: 'god_dna_tac_',
	},
	{
		input: ' beauty',
		expected: 'ytuaeb ',
	},
	{
		input: '',
		expected: '',
	},
	{
		input: undefined,
		expected: '',
	},
	{
		input: ' -_=.,',
		expected: ',.=_- ',
	},
];

test('should exist', () => {
	expect(reverseString()).toBeDefined();
});

testCases.forEach((t) => {
	test('should reverse a string', () => {
		expect(reverseString(t.input)).toBe(t.expected);
	});
});
