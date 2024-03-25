'use strict';

import { Request, Response, NextFunction } from '../app.js';
import { AbstractErrorTemplate } from './AbstractErrorTemplate.js';

async function ErrorHandler(
	error: Error,
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> {
	try {
		// Handle Errors
		if (error instanceof AbstractErrorTemplate) {
			const { statusCode, errors, logging } =
				error as AbstractErrorTemplate;
			if (logging) {
				console.error(
					JSON.stringify(
						{
							code: error.statusCode,
							errors: error.errors,
							stack: error.stack
						},
						null,
						2
					)
				);
			}
			if (req.accepts('html')) {
				const status: number = error.statusCode;
				switch (status) {
					case 400:
						res.status(status).sendFile('errors/errors', {
							// message: /*HTML*/ `
							// 	<error-base id="errorBase" class="error-base" data-error_base="${status}" style="display: block;">
							// 		<h1>Failed Request || ${status}</h1>
							// 		<p>There was an error with the request</p>
							// 		<h2>Error ${status}:</h2>
							// 		<p>${errors[0].message}</p>
							// 	</error-base>
							// `
						});
						break;
					case 401:
						res.status(status).render('errors/errors', {
							message: /*HTML*/ `
								<error-base id="errorBase" class="error-base" data-error_base="${status}" style="display: block;">
									<h1>Unauthorized || ${status}</h1>
									<p>There was an error with the request</p>
									<h2>Error ${status}:</h2>
									<p>${errors[0].message}</p>
								</error-base>
							`
						});
						break;
					case 403:
						res.status(status).render('errors/errors', {
							message: /*HTML*/ `
								<error-base id="errorBase" class="error-base" data-error_base="${status}" style="display: block;">
									<h1>Forbidden || ${status}</h1>
									<p>There was an error with the request</p>
									<h2>Error ${status}:</h2>
									<p>${errors[0].message}</p>
								</error-base>
							`
						});
						break;
					case 404:
						res.status(status).render('errors/errors', {
							message: /*HTML*/ `
								<error-base id="errorBase" class="error-base" data-error_base="${status}" style="display: block;">
									<h1>Not Found || ${status}</h1>
									<p>There was an error with the request</p>
									<h2>Error ${status}:</h2>
									<p>${errors[0].message}</p>
								</error-base>
							`
						});
						break;
					case 406:
						res.status(status).render('errors/errors', {
							message: /*HTML*/ `
								<error-base id="errorBase" class="error-base" data-error_base="${status}" style="display: block;">
									<h1>Not Acceptable || ${status}</h1>
									<p>There was an error with the request</p>
									<h2>Error ${status}:</h2>
									<p>${errors[0].message}</p>
								</error-base>
							`
						});
						break;
					case 500:
						res.status(status).render('errors/errors', {
							message: /*HTML*/ `
								<error-base id="errorBase" class="error-base" data-error_base="${status}" style="display: block;">
									<h1>Internal Server Error || ${status}</h1>
									<p>There was an error with the request</p>
									<h2>Error ${status}:</h2>
									<p>${errors[0].message}</p>
								</error-base>
							`
						});
						break;
					default:
						res.status(status).render(`${{ errors }}`);
						break;
				}
				return next();
			} else {
				res.status(statusCode).json({ errors });
				return next();
			}
		}
	} catch (error: unknown) {
		console.error(
			`
				Error Handler Error: ${error}
			`
		);
		return next(error);
	}
}
export { ErrorHandler };
