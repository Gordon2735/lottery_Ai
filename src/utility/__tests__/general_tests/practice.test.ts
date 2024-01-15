'use strict';

import test from 'node:test';
import sum from './__testFunctions__/sum.js';
import assert from 'node:assert/strict';

test('test for function sum', async (t) => {
	const actual: number = sum(200, 250);

	if (actual !== 450) {
		console.error(
			`
                actual: ${actual}
                
                actual should have been a number that equals 250!

                EVIDENTLY the test for the function 'sum' had an error
            
            `
		);
	} else {
		await t.test(
			'subtest:sum | function sum should be a number equaling 250',
			(t, done) => {
				assert.strictEqual(actual, 450, `Message: subtest:sum passed`);

				if (actual === 450) setImmediate(done);
			}
		);
	}
});
