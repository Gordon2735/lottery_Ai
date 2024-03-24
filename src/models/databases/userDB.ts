'use strict';

import getConfig from '../../../config/config.js';
import mysql from 'mysql2/promise';
import { DatabaseError } from '../../errors/DatabaseError.js';
import { Request, Response } from '../../app.js';

const config = await getConfig();

async function connection(): Promise<mysql.Connection> {
	const req: Request = {} as Request;
	const res: Response = {} as Response;
	try {
		return await mysql.createConnection({
			host: config.mysql.options.host,
			user: config.mysql.options.user,
			password: config.mysql.options.password,
			database: config.mysql.options.database,
			waitForConnections: config.mysql.options.waitForConnections,
			queueLimit: config.mysql.options.queueLimit
		});
	} catch (error: unknown) {
		if (req.accepts('html')) {
			throw new DatabaseError({
				message: 'Database error',
				logging: true,
				context: {
					error: res.status(500).render('500', {
						message: `
							<h1>Internal Server Error</h1>
							<p>There was an error with the database</p>
		
							<h2>Error:</h2>
							<p>${error}</p>
						`
					})
				}
			});
		} else {
			throw new DatabaseError({
				message: 'Database error',
				logging: true,
				context: {
					error: res.status(500).json({
						errors: [{ message: 'Internal Server Error' }]
					})
				}
			});
		}
	}
}

export { connection };
