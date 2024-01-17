// General Tests Collection

'use strict';

import test from 'node:test';
import sum from './__testFunctions__/sum.js';
import assert from 'node:assert/strict';

test('function test sum should return 150', () => {
	const actual: number = sum(100, 50);
	const expected: number = 150;
	assert.strictEqual(
		actual,
		expected,
		`Actual: ${actual} Expected: ${expected}`
	);
});
