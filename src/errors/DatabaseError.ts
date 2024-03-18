'use strict';

import { AbstractErrorTemplate } from './AbstractErrorTemplate.js';

class DatabaseError extends AbstractErrorTemplate {
	private static readonly _statusCode = 500;
	private readonly _code: number;
	private readonly _logging: boolean;
	private readonly _context: { [key: string]: never };

	constructor(params?: {
		code?: number;
		message?: string;
		logging?: boolean;
		context?: { [key: string]: never };
	}) {
		const { code, message, logging } = params || {};

		super(message || 'Database error');

		this._code = code || DatabaseError._statusCode;
		this._logging = logging || false;
		this._context = params?.context || {};

		Object.setPrototypeOf(this, DatabaseError.prototype);
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

export { DatabaseError };
