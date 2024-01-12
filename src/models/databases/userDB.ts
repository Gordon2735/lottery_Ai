'use strict';

import getConfig from '../../../config/config.js';
import mysql from 'mysql2/promise';

const config = await getConfig();

async function connection(): Promise<mysql.Connection> {
	return await mysql.createConnection({
		host: config.mysql.options.host,
		user: config.mysql.options.user,
		password: config.mysql.options.password,
		database: config.mysql.options.database,
		waitForConnections: config.mysql.options.waitForConnections,
		queueLimit: config.mysql.options.queueLimit
	});
}

export { connection };
