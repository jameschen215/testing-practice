import capitalize from '../functions/capitalize.js';

const testCases = [
	{
		input: 'hello',
		expected: 'Hello',
	},
	{
		input: 'world',
		expected: 'World',
	},
	{
		input: 'James, Chen',
		expected: 'James, Chen',
	},
	{
		input: '"what is your name?"',
		expected: '"What is your name?"',
	},
	{
		input: '_cat_and_dog',
		expected: '_Cat_and_dog',
	},
	{
		input: ' beauty',
		expected: ' Beauty',
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
		expected: ' -_=.,',
	},
];

test('should exist', () => {
	expect(capitalize()).toBeDefined();
});

testCases.forEach((t) => {
	test('should capitalize the first letter of a string ', () => {
		const actual = capitalize(t.input);
		expect(actual).toBe(t.expected);
	});
});
