import caesarCipher from '../functions/caesarCipher.js';

const testCases = [
	{
		input: { str: 'abc', key: 3 },
		expected: 'def',
	},
	{
		input: { str: 'xyz', key: 3 },
		expected: 'abc',
	},
	{
		input: { str: 'HeLLo', key: 3 },
		expected: 'KhOOr',
	},
	{
		input: { str: 'Hello, World!', key: 3 },
		expected: 'Khoor, Zruog!',
	},
	{
		input: { str: 'jameschen215@example.com', key: 3 },
		expected: 'mdphvfkhq215@hadpsoh.frp',
	},
	{
		input: { str: 'xyz', key: 300 },
		expected: 'lmn',
	},
	{
		input: { str: 'Hello', key: 0 },
		expected: 'Hello',
	},
	{
		input: { str: 'def', key: -3 },
		expected: 'abc',
	},
	{
		input: { str: 'ABCDE', key: 3 },
		expected: 'DEFGH',
	},
];

/* ---------- TEST EXISTENCE OF THE FUNCTION ---------- */
test('should exist', () => {
	expect(caesarCipher).toBeDefined();
	expect(typeof caesarCipher).toBe('function');
});

/* ---------- TEST PARAMETERS OF THE FUNCTION ---------- */

// Test for throwing errors on invalid input
test('should accept two parameters', () => {
	expect(caesarCipher.length).toBe(2);
});

test('should throw error when parameters are missing or too many', () => {
	expect(() => caesarCipher()).toThrow(
		'This function needs and only needs two parameters.'
	);

	expect(() => caesarCipher('abc')).toThrow(
		'This function needs and only needs two parameters.'
	);

	expect(() => caesarCipher('abc', 3, true)).toThrow(
		'This function needs and only needs two parameters.'
	);
});

// Test that the first parameter is string
test('should throw error if the first parameter is not a string', () => {
	expect(() => caesarCipher(3, 3)).toThrow(
		'The first parameter of the function must be a string.'
	);

	expect(() => caesarCipher(['abc'], 3)).toThrow(
		'The first parameter of the function must be a string.'
	);
});

// Test that the second parameter is integer
test('should throw error if the second parameter is not a integer', () => {
	expect(() => caesarCipher('abc', 'a')).toThrow(
		'The second parameter of the function must be an integer.'
	);

	expect(() => caesarCipher('abc', 0.3)).toThrow(
		'The second parameter of the function must be an integer.'
	);
});

/* ---------- TEST SPECIFIC CASES ---------- */

testCases.forEach(({ input, expected }) => {
	const { str, key } = input;

	test(`'${str}' ciphered by ${key} should result in '${expected}'`, () => {
		expect(caesarCipher(str, key)).toBe(expected);
	});
});
