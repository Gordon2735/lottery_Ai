// Lottery Ai Route Handlers

'use strict';

import { Request, Response, NextFunction } from '../../../app.js';
import express, { Application } from 'express';
import getConfig from '../../../../config/config.js';
import {
	insertSession,
	insertUser,
	findUserByUsername
} from '../../../models/Schemas/userModel.js';
import bcrypt from 'bcryptjs';
import Session from 'express-session';
import {} from '../../../../src/@types/global.d.js';
import IUser from '../../../../src/@types/interfaces/interfaces.js';
// import { UnknownObject } from 'express-handlebars/types/index.js';
declare module 'express-session' {
	interface Session {
		data: SessionData;
		views: number;
		session_id: Session & Partial<SessionData>;
		name: string | undefined;
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

	// Move the function declaration to the root of the function body
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

		app.use((req: Request) => {
			return insertSession(
				req.session.session_id,
				req.session.name,
				req.session.author,
				req.session.user_id,
				config.sessions.secretkey,
				req.session.username,
				config.sessions.data,
				req.session.cookie
			);
		});

		console.info(
			`name: ${config.sessions.name} || author: ${config.sessions.author}`
		);

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

async function registerHandler(_req: Request, res: Response): Promise<void> {
	try {
		const register_index = `<script type="module" src="/src/ts/register.js" content="text/javascript"></script>`;
		res.set('Content-Type', 'text/html');
		res.set('target', '_blank');
		res.render('register', {
			title: 'Register New User',
			layout: 'register_main',
			partials: 'partials',
			helpers: 'helpers',
			script: [register_index]
		});
		return Promise.resolve() as Promise<void>;
	} catch (error: unknown) {
		console.error(`registerHandler had an ERROR: ${error}`);
		res.status(500).send('Server Error');

		return Promise.reject() as Promise<void>;
	}
}

async function registerPostHandler(req: Request, res: Response): Promise<void> {
	try {
		// const errors: unknown = [];
		const errors: { msg: string }[] = [];

		const { username, email, password, password2 } = req.body;
		await insertUser(username, email, password);

		if (username && email && password) {
			console.log(
				`${username}:  Thank You for registering! Please login`
			);
			res.redirect('/login');

			if (!username || !email || !password || !password2) {
				errors.push({ msg: 'Please fill in all fields' });
			} else if (password !== password2) {
				errors.push({ msg: 'Passwords do not match' });
			} else if (password.length < 8) {
				errors.push({ msg: 'Password must be at least 8 characters' });
			} else if (errors.length > 0) {
				res.render('register', {
					errors
				});
			} else {
				res.send('pass');
			}
			return Promise.resolve() as Promise<void>;
		}
	} catch (error: unknown) {
		console.error(`registerPostHandler had an ERROR: ${error}`);
		res.status(500).send(`Post Register Error: ${error}`);

		return Promise.reject() as Promise<void>;
	}
}

async function loginHandler(req: Request, res: Response): Promise<void> {
	async function sessionView(): Promise<string> {
		if (!req?.session.views) {
			req.session.views = 1;
			return `
					<p class="sessionParaFirst">
						First View: | ${req.session.views} |
					</p>
				`;
		} else {
			req.session.views++;
			return `
					<p class="sessionParaFirst">
						Number of times you visited View: | ${req.session.views} |
					</p>
				`;
		}
	}
	try {
		const login_index = `<script type="module" src="/src/ts/login_index.js" content="text/javascript"></script>`;

		res.set('Content-Type', 'text/html');
		res.set('target', '_blank');
		res.render('login', {
			title: 'User Login',
			layout: 'login_main',
			partials: 'partials',
			helpers: 'helpers',
			script: [login_index],
			username: req.body.username,
			email: req.body.email,
			sessionView: `${await sessionView()}`
		});

		app.use((req: Request) => {
			return req.body;
		});

		await sessionView();

		return Promise.resolve()
			.then(() => {
				console.info(`loginHandler processed`);
			})
			.then(() => {
				if (req.body.username) {
					console.info(
						`
							%c
							username: ${req.body.username},
							email: ${req.body.email} 
						`,
						`
							color: chartreuse;
							font-family: 'Titillium Web', sans-serif; 
							font-size: 0.85rem;
							font-weight: bold;
							background-color: black;						
						`
					);
					return;
				}
			})
			.catch((error: unknown) => {
				console.error(
					`login Route Handler: LoginPopupHandler | Type of ERROR: ${error}`
				);
				res.status(500).send(`login handler Error: ${error}`);
				return Promise.reject() as Promise<void>;
			}) as Promise<void>;
	} catch (error: unknown) {
		console.error(`loginHandler had an ERROR: ${error}`);
		res.status(500).send('Server Error');

		return Promise.reject() as Promise<void>;
	}
}

async function userLogin(user: IUser): Promise<IUser | undefined> {
	try {
		const currentUser: IUser = user;
		return currentUser;
	} catch (error: unknown) {
		console.error(`userLogin had an ERROR: ${(error as Error).message}`);
		return;
	}
}

const userArray: IUser[] = [];

async function loginPostHandler(
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> {
	try {
		const { id, username, password }: IUser = req.body;
		const user: IUser = await findUserByUsername(req.body.username);

		const nowUser = (await userLogin(user)) as IUser;

		const loginUser: IUser = nowUser;

		userArray.push(loginUser);

		app.use((req: Request) => {
			const user = req.body.user as { id: string; username: string }; // Add type annotations to ensure 'user' has 'id' and 'username' properties
			// Check and see if this is why the user is not being added to the database
			if (typeof user === 'object' && user !== null && 'id' in user) {
				return insertSession(
					req.session.session_id,
					req.session.name,
					req.session.author,
					user.id,
					config.sessions.secretkey,
					user.username,
					config.sessions.data,
					req.session.cookie
				);
			}
			return null;
		});
		console.info(
			`user.id: ${user.id} || user.username: ${user.username} || user.password: ${user.password}
			|| email: ${user.email} || username: ${username} || password: ${password} || id: ${id}`
		);

		if (!user.username) {
			res.status(400).send({ message: 'Invalid Credentials!' });

			// return Promise.reject() as Promise<void>;
			return next();
		}

		res.locals.username = user.username;
		res.locals.email = user.email;
		res.locals.id = user.id;
		req.body.email = user.email;
		req.body.username = user.username;
		req.body.id = user.id;

		const isMatch: boolean = await bcrypt.compare(password, user.password);
		console.info(`isMatch: ${isMatch}`);

		if (isMatch === true) {
			console.info(
				`
				%c
				req.body.username: ${req.body.username},
				req.body.email: ${req.body.email},
				req.body.id: ${req.body.id},
				res.locals.username: ${res.locals.username}  
				res.locals.email: ${res.locals.email} 
			`,
				`
				color: chartreuse;
				font-family: 'Titillium Web', sans-serif; 
				font-size: 0.85rem;
				font-weight: bold;
				background-color: black;						
			`
			);

			app.use((req: Request) => {
				return (
					req.body.username,
					req.body.email,
					req.body.id,
					res.locals.username,
					res.locals.email,
					res.locals.id,
					req.body
				);
			});

			res.redirect('/');

			return Promise.resolve() as Promise<void>;
		} else {
			res.status(400).send({ message: 'Invalid Credentials!' });

			// return Promise.reject() as Promise<void>;
		}
	} catch (error: unknown) {
		console.error(
			`loginPostHandler had an ERROR: ${(error as Error).message}`
		);
		res.status(500).send(`Post Login Error: ${(error as Error).message}`);
		return Promise.reject() as Promise<void>;
	}
}

async function logout(req: Request, res: Response): Promise<void> {
	try {
		// Create a new sessionStorage object
		const sessionStorage = window.sessionStorage;
		req?.session.destroy((error: unknown) => {
			if (!error) {
				return res.redirect('/');
			}
			sessionStorage.close();
			res.clearCookie(req.body.sessions);
			res.redirect('/login');

			return Promise.resolve() as Promise<void>;
		}) as Session.Session & Partial<Session.SessionData>;
	} catch (error: unknown) {
		console.error(
			`
				The logout route_handler function had an 
				error upon execution | ERROR: ${error}
			`
		);
		return Promise.reject() as Promise<void>;
	}
}

async function homeHandler(_req: Request, res: Response): Promise<void> {
	try {
		const home_index: string = `<script type="module" src="/src/ts/home_index.js" content="text/javascript"></script>`;
		res.set('Content-Type', 'text/html');
		res.set('target', '_blank');
		res.render('home', {
			title: 'Home',
			layout: 'main',
			partials: 'partials',
			helpers: 'helpers',
			script: [home_index]
		});

		return Promise.resolve() as Promise<void>;
	} catch (error: unknown) {
		console.error(`homeHandler had an ERROR: ${error}`);
		res.status(500).send('Server Error');

		return Promise.reject() as Promise<void>;
	}
}

export {
	indexHandler as default,
	registerHandler,
	registerPostHandler,
	loginHandler,
	loginPostHandler,
	logout,
	homeHandler
};
