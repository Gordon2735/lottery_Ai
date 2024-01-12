// Lottery Ai Route Handlers

'use strict';

import { Request, Response, NextFunction } from '../../../app.js';
import express, { Application } from 'express';
import getConfig from '../../../../config/config.js';
import createUserTable, {
	insertSession,
	insertUser,
	findUserByUsername
} from '../../../models/Schemas/userModel.js';
import bcrypt from 'bcryptjs';
import { connection } from '../../../models/databases/userDB.js';
import { Connection } from 'mysql2/promise';
import mysql, { RowDataPacket } from 'mysql2/promise';
import Session from 'express-session';
import {} from '../../../../src/@types/global.d.js';
import { uuidV4 } from '../../../app.js';
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
const config = await getConfig();
const app: Application = express();
app.use(express.json());
app.set('json spaces', 2);
app.use(express.urlencoded({ extended: true }));

async function indexHandler(req: Request, res: Response): Promise<void> {
	const index_script = `<script type="module" src="/src/ts/index.js" content="text/javascript"></script>`;
	try {
		res.set('Content-Type', 'text/html');
		res.set('target', '_blank');
		res.render('index', {
			title: `Lottery Ai`,
			description: `Welcome to the 'Winning Team!!'`,
			layout: 'main',
			helpers: 'helpers',
			partials: 'footer_partial',
			script: [index_script],
			appName: config.applicationName,
			session: `${await sessionView()}`
		});

		async function sessionView(): Promise<string> {
			if (!req.session.views) {
				req.session.views = 1;
				return `
					<strong>
						<p class="sessionParaFirst">
							First View: | ${req.session.views} |
						</p>
					</strong>
				`;
			} else {
				req.session.views++;
				return `
					<strong>
						<p class="sessionParaMas">
							Number of times you visited View: | ${req.session.views} |
						</p>
					</strong>

				`;
			}
		}

		// req.body.session.views: ${req.body.session.views}
		console.info(`
				req.session.views: ${req.session.views}
				req.body: ${req.body}
			
			`);

		return Promise.resolve() as Promise<void>;
	} catch (error: unknown) {
		console.error(`indexHandler had an ERROR: ${error}`);
		res.status(500).send('Server Error');

		return Promise.reject() as Promise<void>;
	}
}

export { indexHandler as default };
