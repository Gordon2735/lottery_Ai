'use strict';

import { AbstractErrorTemplate } from './AbstractErrorTemplate.js';

class FailedRequestError extends AbstractErrorTemplate {
	private static readonly _statusCode = 400;
	private readonly _code: number;
	private readonly _logging: boolean;
	private readonly _context: { [key: string]: never };
	static code: number;

	constructor(params?: {
		code?: number;
		message?: string;
		logging?: boolean;
		context?: { [key: string]: never };
	}) {
		const { code, message, logging } = params || {};

		super(message || 'Failed Request');

		this._code = code || FailedRequestError._statusCode;
		this._logging = logging || false;
		this._context = params?.context || {};

		Object.setPrototypeOf(this, FailedRequestError.prototype);
	}

	get errors() {
		return [{ message: this.message, context: this._context }];
	}

	get statusCode() {
		return this._code;
	}

	get logging() {
		return this._logging;
	}
}

export { FailedRequestError };
