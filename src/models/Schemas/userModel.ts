'use strict';

import { connection } from '../databases/userDB.js';
import { Connection } from 'mysql2/promise';
import { Session, SessionData, Cookie } from 'express-session';
import IUser, { IConfig } from '../../@types/interfaces/interfaces.js';
import fs from 'fs';
import mysql, { RowDataPacket } from 'mysql2/promise';
import { executeMysqlQuery } from '../../controllers/mysql_controllers/mysql_pool_rowData.js';
import { uuidV4 } from '../../app.js';
import bcrypt from 'bcryptjs';
//import { User } from '../../@types/global.js' // Import the User type from the appropriate module

async function createUserTable(): Promise<void> {
	try {
		// const conn: Connection = await connection();
		const conn: mysql.Connection = await connection();
		const query = `
			CREATE TABLE IF NOT EXISTS users (
				id VARCHAR(255) PRIMARY KEY,
				username VARCHAR(255) UNIQUE NOT NULL,
				email VARCHAR(255) UNIQUE NOT NULL,
				password VARCHAR(255) NOT NULL
			)
    	`;
		await conn.query(query);
		conn.end();

		return Promise.resolve() as Promise<void>;
	} catch (error: unknown) {
		console.error(`Error in createUserTable: ${error}`);
		Promise.reject() as Promise<void>;
		throw error as unknown;
	}
}

async function createSessionsTable(): Promise<void> {
	try {
		// const conn: Connection = await connection();
		const conn: mysql.Connection = await connection();
		const query = `
			CREATE TABLE IF NOT EXISTS sessions (
				session_id VARCHAR(255) NOT NULL COLLATE utf8mb4_0900_ai_ci,
				name VARCHAR(255) DEFAULT NULL,
				author VARCHAR(255) DEFAULT NULL,
				expires int(11) unsigned NOT NULL,
				user_id VARCHAR(255) DEFAULT NULL,
				secretkey VARCHAR(255) NULL,
				username VARCHAR(255) DEFAULT NULL,
				data VARCHAR(255) COLLATE utf8mb4_0900_ai_ci,
				FOREIGN KEY (user_id) REFERENCES users(id),
				PRIMARY KEY (session_id)				 
			)
		`;
		await conn.query(query);
		conn.end();

		return Promise.resolve() as Promise<void>;
	} catch (error: unknown) {
		console.error(`Error in createSessionsTable: ${error}`);
		Promise.reject() as Promise<void>;
	}
}
// ALTER user_id SET DEFAULT 'not_logged_in_yet',
// user_id VARCHAR(255) SET DEFAULT 'wait_on_login',

async function insertSession(
	session_id: Session & Partial<SessionData>,
	name: string | undefined,
	author: string,
	user_id: string | null,
	secretkey: string,
	username: string | null,
	data: SessionData,
	cookie: Cookie
): Promise<void> {
	try {
		const pkg: IConfig = JSON.parse(
			fs.readFileSync('package.json', 'utf8')
		);
		name = pkg.name;
		author = pkg.author;

		const conn: mysql.Connection = await connection();
		// async function dropDefaultAdd(
		// 	new_user_id: string | null | undefined
		// ): Promise<string> {
		// 	return `ALTER TABLE sessions ALTER COLUMN user_id SET DEFAULT ${new_user_id} `;
		// }
		// async function defaultKey(new_secretkey: string): Promise<string> {
		// 	return `ALTER TABLE sessions ALTER COLUMN secretkey DROP DEFAULT,
		// 		ALTER TABLE sessions ALTER COLUMN secretkey SET DEFAULT ${new_secretkey} `;
		// }
		const query = `INSERT INTO sessions (session_id, name, author, user_id, secretkey, username, data, cookie) VALUES (?, ?, ?, ?, ?, ?)`;
		await conn.query(query, [
			session_id,
			name,
			author,
			user_id,
			secretkey,
			username,
			data,
			cookie
		]);
		// await conn.query(query, [
		// 	session_id,
		// 	dropDefaultAdd(user_id),
		// 	defaultKey(secretkey),
		// 	username,
		// 	data
		// ]);

		await conn.end();
		return Promise.resolve() as Promise<void>;
	} catch (error: unknown) {
		console.info(
			`There was an Error in the insertSession method of the userModels; ERROR: ${error}`
		);
		Promise.reject() as Promise<void>;
	}
}

async function insertUser(
	username: string,
	email: string,
	password: string
): Promise<void> {
	try {
		// const conn: Connection = await connection();
		const conn: mysql.Connection = await connection();
		const id: string = uuidV4();
		const hashedPassword: string = await bcrypt.hash(password, 10);
		const query = `INSERT INTO users (id, username, email, password) VALUES (?, ?, ?, ?)`;

		await conn.query(query, [id, username, email, hashedPassword]);
		await conn.end();

		return Promise.resolve() as Promise<void>;
	} catch (error: unknown) {
		console.error(`Error in insertUser: ${error}`);
		Promise.reject() as Promise<void>;
		throw error as unknown;
	}
}

async function findUserByUsername(username: IUser): Promise<IUser> {
	try {
		const conn: Connection = await connection();
		const query = `SELECT * FROM users WHERE username = '${username}'`;

		const [rows]: RowDataPacket[] = (await conn.query(
			query,
			username
		)) as RowDataPacket[];

		console.info(`rows: ${rows[0]}`);
		await conn.end();

		Promise.resolve() as Promise<void>;
		return rows[0];
	} catch (error: unknown) {
		console.error(`Error in findUserByUsername: ${error}`);

		Promise.reject() as Promise<void>;
		throw error as unknown;
	}
}

async function getRowsPacketUsers(): Promise<RowDataPacket[]> {
	try {
		const query = `SELECT * FROM users`;
		const user: RowDataPacket[] = await executeMysqlQuery(query, [null]);
		console.info(user);

		Promise.resolve() as Promise<void>;
		return user;
	} catch (error: unknown) {
		console.error(`Error in getRowsPacketUsers: ${error}`);
		Promise.reject() as Promise<void>;
		throw error as unknown;
	}
}

// const uuidV4: typeof uuid = uuid;
// const conn: Connection = await connection();
const conn: mysql.Connection = await connection();

export {
	createUserTable as default,
	createSessionsTable,
	insertSession,
	insertUser,
	findUserByUsername,
	getRowsPacketUsers,
	conn
};
