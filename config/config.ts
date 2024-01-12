'use strict';

import dotenv from 'dotenv';
import fs from 'fs';
import IConfig, { SessionData } from '../src/@types/interfaces/interfaces.js';

// Load environment variables from .env file
dotenv.config({
	path: './config/.env'
});

declare module 'express-session' {
	interface Session {
		data: SessionData;
		views: number;
		session_id: Session & Partial<SessionData>;
		user_id: string;
		username: string;
		cookie: Cookie;
	}
}

const pkg: IConfig = JSON.parse(fs.readFileSync('package.json', 'utf8'));

async function getConfig(): Promise<{
	applicationName: string;
	port: string | number;
	host: string;
	session_key: string;
	mysql: {
		options: {
			host: string;
			port: number;
			database: string;
			user: string;
			password: string;
			waitForConnections: boolean;
			queueLimit: number;
		};
	};
	sessions: {
		session_id: string;
		expires: number;
		user_id: string;
		secretkey: string;
		username: string;
		data: SessionData;
		cookie: {};
		createDatabaseTable: boolean;
	};
	readonly serverUrl: string;
	client: any;
	user: {
		options: {
			id: string;
			username: string;
			email: string;
			password: string;
		};
	};
}> {
	// Return configuration object
	return {
		applicationName: pkg.name,
		port: process.env.PORT || 9080,
		host: process.env.HOST || '127.0.0.1',
		session_key: process.env.SESSION_KEY!,
		mysql: {
			options: {
				host: process.env.HOST || '',
				port: 3306,
				database: 'lottery_mysql_db',
				user: 'gordon_lottery_user',
				password: 'jOhn338@mAt2819@',
				waitForConnections: true,
				queueLimit: 10
			}
		},
		sessions: {
			session_id: '',
			expires: 0,
			user_id: '',
			secretkey: `${process.env.SESSION_KEY}`,
			username: '',
			data: {
				cookie: { originalMaxAge: 0 }
			},
			cookie: {},
			createDatabaseTable: false
		},
		get serverUrl(): string {
			return `http://${process.env.HOST}:${process.env.PORT}`;
		},
		client: null,
		user: {
			options: {
				id: '',
				username: '',
				email: '',
				password: ''
			}
		}
	};
}

export default getConfig;
