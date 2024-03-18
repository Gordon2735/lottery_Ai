'use strict';

abstract class AbstractErrorTemplate extends Error {
	abstract readonly statusCode: number;
	abstract readonly errors: GlobalErrorContent[];
	abstract readonly logging: boolean;

	constructor(message: string) {
		super(message);
		this.name = this.constructor.name;
		Error.captureStackTrace(this, this.constructor);

		// Extending built-in classes in TypeScript is a bit tricky.
		Object.setPrototypeOf(this, AbstractErrorTemplate.prototype);
	}
}

export { AbstractErrorTemplate };
