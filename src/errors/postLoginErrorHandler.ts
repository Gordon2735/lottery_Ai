'use strict';

import { FailedRequestError } from './FailedRequestError.js';
import { Request, Response, NextFunction } from '../app.js';
import IUser from '../@types/interfaces/interfaces.js';

async function postLoginErrorHandler(
	req: Request,
	res: Response,
	next: NextFunction,
	user: IUser
): Promise<void> {
	try {
		if (!user) {
			throw new FailedRequestError({
				code: 400,
				message: 'Invalid Credentials',
				logging: true
			});
		}
		if (!user && req.accepts('html')) {
			res.status(400).render('404', {
				message: 'Invalid Credentials'
			});
			next();
		} else {
			res.status(400).json({
				errors: [{ message: 'Invalid Credentials' }]
			});
			next();
		}
		next();

		return next();
	} catch (error: unknown) {
		console.error(
			`
			PostLoginErrorHandler Error: ${error}
		`
		);
		return next(error);
	}
}
export { postLoginErrorHandler };
