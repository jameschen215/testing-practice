import { calculator } from '../functions/calculator.js';

const { add, subtract, divide, multiply } = calculator;

const functionsToTest = [add, subtract, divide, multiply];

/* ----------- TEST CALCULATOR AND FUNCTIONS EXISTENCE ----------- */

test('should define calculator', () => {
	expect(calculator).toBeDefined();
});

test('should define functions in calculator', () => {
	functionsToTest.forEach((fn) => {
		expect(fn).toBeDefined();
		expect(typeof fn).toBe('function');
	});
});

/* ----------- HELPER FUNCTIONS FOR PARAMETER TESTS --------------- */

function testParameters(fn) {
	// Test that the function accepts only two parameters
	test('should accept two parameters', () => {
		expect(fn.length).toBe(2);
	});

	// Test for throwing errors on invalid input
	test('should throw error when parameters are missing or too many', () => {
		expect(() => fn()).toThrow(
			'This function needs and only needs two parameters.'
		);
		expect(() => fn(2)).toThrow(
			'This function needs and only needs two parameters.'
		);
		expect(() => fn(2, 1, 5)).toThrow(
			'This function needs and only needs two parameters.'
		);
	});

	// Test that parameters are numbers
	test('should throw error if parameters are not numbers', () => {
		expect(() => fn('2', 3)).toThrow(
			'This function only accepts numerical values as input parameters.'
		);
		expect(() => fn('a', 'b')).toThrow(
			'This function only accepts numerical values as input parameters.'
		);
		expect(() => fn(false, 3)).toThrow(
			'This function only accepts numerical values as input parameters.'
		);
		expect(() => fn([1], 3)).toThrow(
			'This function only accepts numerical values as input parameters.'
		);
		expect(() => fn({ num: 1 }, 3)).toThrow(
			'This function only accepts numerical values as input parameters.'
		);
	});

	if (fn.name === 'divide') {
		test('should not divide by zero', () => {
			expect(() => fn(3, 0)).toThrow('It is not possible to divide by zero.');
		});
	}
}

functionsToTest.forEach((fn) => {
	describe(`${fn.name} tests`, () => {
		testParameters(fn);
	});
});

/* ------------------ TEST ADDITION RESULTS ---------------------- */

const additionTests = [
	{ inputs: [3, 1], expected: 4 },
	{ inputs: [5, -7], expected: -2 },
	{ inputs: [-2, -6], expected: -8 },
	{ inputs: [7, 0], expected: 7 },
	{ inputs: [-5, 0], expected: -5 },
	{ inputs: [0, 0], expected: 0 },
	{ inputs: [0.1, 0.2], expected: 0.3 },
];

additionTests.forEach(({ inputs, expected }) => {
	test(`${inputs[0]} add ${inputs[1]} should be ${expected}`, () => {
		expect(add(...inputs)).toBeCloseTo(expected, 5);
	});
});

/* ------------------ TEST SUBTRACTION RESULTS ---------------------- */

const subtractionTests = [
	{ inputs: [3, 1], expected: 2 },
	{ inputs: [5, -7], expected: 12 },
	{ inputs: [-2, -6], expected: 4 },
	{ inputs: [7, 0], expected: 7 },
	{ inputs: [-5, 0], expected: -5 },
	{ inputs: [0, 0], expected: 0 },
	{ inputs: [-0.1, 0.2], expected: -0.3 },
];

subtractionTests.forEach(({ inputs, expected }) => {
	test(`${inputs[0]} subtract ${inputs[1]} should be ${expected}`, () => {
		expect(subtract(...inputs)).toBeCloseTo(expected, 5);
	});
});

/* ------------------ TEST DIVISION RESULTS ---------------------- */

const divisionTests = [
	{ inputs: [3, 1], expected: 3 },
	{ inputs: [15, -3], expected: -5 },
	{ inputs: [-2, -6], expected: 0.33333 },
	{ inputs: [7, 7], expected: 1 },
	{ inputs: [1, -7], expected: -0.14286 },
	{ inputs: [0.1, -0.2], expected: -0.5 },
	{ inputs: [0, 0], expected: 'It is not possible to divide by zero.' },
];

divisionTests.forEach(({ inputs, expected }) => {
	test(`${inputs[0]} divide ${inputs[1]} should be ${expected}`, () => {
		if (inputs[1] === 0) {
			expect(() => divide(...inputs)).toThrow(expected);
		} else {
			expect(divide(...inputs)).toBeCloseTo(expected, 5);
		}
	});
});

/* ------------------ TEST MULTIPLICATION RESULTS ---------------------- */

const multiplicationTests = [
	{ inputs: [3, 1], expected: 3 },
	{ inputs: [15, -3], expected: -45 },
	{ inputs: [-2, -6], expected: 12 },
	{ inputs: [7, 0], expected: 0 },
	{ inputs: [10, 0.03], expected: 0.3 },
	{ inputs: [0.1, -0.2], expected: -0.02 },
	{ inputs: [0, 0], expected: 0 },
];

multiplicationTests.forEach(({ inputs, expected }) => {
	test(`${inputs[0]} multiply ${inputs[1]} should be ${expected}`, () => {
		expect(multiply(...inputs)).toBeCloseTo(expected, 5);
	});
});
