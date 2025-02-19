import analyzeArray from '../functions/analyzeArray.js';

const testCases = [
	// Edge case: Single element
	{
		input: [5],
		expected: { average: 5, min: 5, max: 5, length: 1 },
	},

	// Negative numbers
	{
		input: [-1, -2, -3],
		expected: { average: -2, min: -3, max: -1, length: 3 },
	},

	// Mixed positive and negative
	{
		input: [1, -2, 3, -4],
		expected: { average: -0.5, min: -4, max: 3, length: 4 },
	},

	// With zero
	{
		input: [0, 10, -10],
		expected: { average: 0, min: -10, max: 10, length: 3 },
	},

	// Small numbers to test precision
	{
		input: [0.0001, 0.0002, 0.0003],
		expected: { average: 0.0002, min: 0.0001, max: 0.0003, length: 3 },
	},

	// All same numbers
	{
		input: [42, 42, 42, 42],
		expected: { average: 42, min: 42, max: 42, length: 4 },
	},

	// Precision test with floating-point numbers
	{
		input: [0.1, 0.2, 0.3, 0.4],
		expected: { average: 0.25, min: 0.1, max: 0.4, length: 4 },
	},
];

/* ---------- TEST EXISTENCE OF THE FUNCTION ---------- */
test('should exist', () => {
	expect(analyzeArray).toBeDefined();
	expect(typeof analyzeArray).toBe('function');
});

/* ---------- TEST PARAMETERS OF THE FUNCTION ---------- */

// Test for throwing errors on invalid input
test('should accept only one parameter', () => {
	expect(analyzeArray.length).toBe(1);
});

// Test that the number of parameters should be one
test('should throw error when parameters are missing or too many', () => {
	expect(() => analyzeArray()).toThrow(
		'This function requires only one parameter.'
	);

	expect(() => analyzeArray(1, 2, 3, 4)).toThrow(
		'This function requires only one parameter.'
	);
});

// Test that the parameter is an array containing only numerical values.
test('should throw error if the parameter is not array', () => {
	expect(() => analyzeArray('1,2,3,4')).toThrow(
		'This function requires an array as its parameter.'
	);

	expect(() => analyzeArray(['a', 2, 3])).toThrow(
		'The parameter must contain only numerical values.'
	);

	expect(() => analyzeArray([])).toThrow(
		'The parameter must contain at least one numerical value.'
	);
});

/* ---------- TEST SPECIFIC CASES ---------- */

testCases.forEach(({ input, expected }) => {
	test(`analyze ${JSON.stringify(input)} should result in ${JSON.stringify(
		expected
	)}`, () => {
		const result = analyzeArray(input);

		expect(result.length).toBe(expected.length);
		expect(result.max).toBe(expected.max);
		expect(result.min).toBe(expected.min);
		expect(result.average).toBeCloseTo(expected.average, 5);
	});
});
