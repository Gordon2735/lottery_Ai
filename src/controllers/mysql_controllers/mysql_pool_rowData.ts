'use strict';

import getConfig from '../../../config/config.js';
import {
	createPool,
	Pool,
	PoolConnection,
	RowDataPacket,
	ResultSetHeader,
	ProcedureCallPacket
} from 'mysql2/promise';

const config = await getConfig();

const pool: Pool = createPool(config.mysql.options);

async function executeMysqlQuery<
	T extends
		| RowDataPacket[]
		| ResultSetHeader
		| RowDataPacket[][]
		| ProcedureCallPacket = RowDataPacket[]
>(query: string, values?: any[] | null): Promise<T> {
	let conn: PoolConnection = await pool.getConnection();
	try {
		const [rows] = await conn.execute<T>(query, [values]);
		return rows;
	} catch (error: unknown) {
		console.error(`Error in executeMysqlQuery: ${error}`);
		return Promise.reject(error);
	} finally {
		if (conn) {
			conn.release();
		}
	}
}

export { executeMysqlQuery };
