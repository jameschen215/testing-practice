function add(a, b) {
	if (arguments.length !== 2) {
		throw new Error('This function needs and only needs two parameters.');
	}

	if (typeof a !== 'number' || typeof b !== 'number') {
		throw new Error(
			'This function only accepts numerical values as input parameters.'
		);
	}

	return a + b;
}

function subtract(a, b) {
	if (arguments.length !== 2) {
		throw new Error('This function needs and only needs two parameters.');
	}

	if (typeof a !== 'number' || typeof b !== 'number') {
		throw new Error(
			'This function only accepts numerical values as input parameters.'
		);
	}

	return a - b;
}

function divide(a, b) {
	if (arguments.length !== 2) {
		throw new Error('This function needs and only needs two parameters.');
	}

	if (typeof a !== 'number' || typeof b !== 'number') {
		throw new Error(
			'This function only accepts numerical values as input parameters.'
		);
	}

	if (b === 0) {
		throw new Error('It is not possible to divide by zero.');
	}

	return a / b;
}

function multiply(a, b) {
	if (arguments.length !== 2) {
		throw new Error('This function needs and only needs two parameters.');
	}

	if (typeof a !== 'number' || typeof b !== 'number') {
		throw new Error(
			'This function only accepts numerical values as input parameters.'
		);
	}

	return a * b;
}

export const calculator = {
	add,
	subtract,
	divide,
	multiply,
};
