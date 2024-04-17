// Lottery Ai Route Handlers

'use strict';
// @ts-check

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
import { postLoginErrorHandler } from '../../../errors/postLoginErrorHandler.js';
import ScrapePicks from '../../../models/appData/pick3ScrapingsData/01_scrapePick3.js';

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

async function stateHandler(_req: Request, res: Response): Promise<void> {
	try {
		const state_index_script: string = `
			<script type="module" src="/src/state/state_index.js" 
				content="text/javascript" crossorigin="anonymous">
			</script>
		`;
		console.info(
			`
				Node Request Argument on stateHandler : ${_req.body}
			`
		);
		res.set('Content-Type', 'text/html');
		res.set('target', '_blank');
		res.render('state_mgt', {
			title: 'State Management',
			layout: 'state_mgt_main',
			partials: 'partials',
			helpers: 'helpers',
			script: [state_index_script]
		});
		return Promise.resolve() as Promise<void>;
	} catch (error: unknown) {
		console.error(`stateHandler had an ERROR: ${error}`);
		res.status(500).send('Server Error | stateHandler');
		return Promise.reject() as Promise<void>;
	}
}

async function errorBaseHandler(req: Request, res: Response): Promise<void> {
	try {
		const scriptErrorBase: string = `
			<script type="module" src="/src/components/error_components/error_base_comp/error-base.js" 
				content="text/javascript" crossorigin="anonymous">
			</script>
		`;

		res.set('Content-Type', 'text/html');
		res.set('target', '_blank');
		res.render('errors', {
			title: 'Error',
			layout: 'errors_main',
			partials: 'partials',
			helpers: 'helpers',
			script: [scriptErrorBase]
		});
		return Promise.resolve() as Promise<void>;
	} catch (error: unknown) {
		console.error(
			`
				errorBaseHandler had an ERROR: ${error}
			`
		);
		return Promise.reject() as Promise<void>;
	}
}

async function indexHandler(req: Request, res: Response): Promise<void> {
	const index_script: string = `
		<script type="module" src="/src/ts/index.js" content="text/javascript" 
			crossorigin="anonymous">
		</script>
	`;

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
			partials: 'partials',
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
		const register_index: string = `
			<script type="module" src="/src/ts/register.js" content="text/javascript"
				crossorigin="anonymous">
			</script>
		`;
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
		const login_index: string = `
			<script type="module" src="/src/ts/login_index.js" content="text/javascript"
				crossorigin="anonymous">
			</script>
		`;

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
			postLoginErrorHandler(req, res, next, user);
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

async function state_boxHandler(_req: Request, res: Response): Promise<void> {
	try {
		const state_box_script: string = `
			<script type="module" src="/src/ts/state_box.js" content="text/javascript"
				crossorigin="anonymous">
			</script>
		`;
		res.set('Content-Type', 'text/html');
		res.set('target', '_blank');
		res.render('state_box', {
			title: 'State Box',
			layout: 'state_box_main',
			partials: 'partials',
			helpers: 'helpers',
			script: [state_box_script]
		});
		return Promise.resolve() as Promise<void>;
	} catch (error: unknown) {
		console.error(`state_boxHandler had an ERROR: ${error}`);
		res.status(500).send('Server Error');

		return Promise.reject() as Promise<void>;
	}
}

async function powerballHandler(_req: Request, res: Response): Promise<void> {
	try {
		const scriptPowerBallGameShell: string = `
			<script type="module" src="/src/components/game_components/powerBall_components/powerBall_game/powerball-game_shell.js" 
				content="text/javascript" crossorigin="anonymous">
			</script>
		`;
		res.set('Content-Type', 'text/html');
		res.set('target', '_blank');
		res.render('powerball', {
			title: 'Powerball®️ Game',
			layout: 'powerball_main',
			partials: 'partials',
			helpers: 'helpers',
			script: [scriptPowerBallGameShell]
		});

		return Promise.resolve() as Promise<void>;
	} catch (error: unknown) {
		console.error(`powerballHandler had an ERROR: ${error}`);
		res.status(500).send('Server Error');

		return Promise.reject() as Promise<void>;
	}
}

async function pick3Handler(_req: Request, res: Response): Promise<void> {
	try {
		const scriptPick3GameShell: string = `
			<script type="module" src="/src/components/game_components/pick3_components/pick3_game/pick3-game_shell.js" 
				content="text/javascript" crossorigin="anonymous">
			</script>
		`;

		res.set('Content-Type', 'text/html');
		res.set('target', '_blank');
		res.render('pick3', {
			title: 'Pick 3®️ Game',
			layout: 'pick3_main',
			partials: 'partials',
			helpers: 'helpers',
			script: [scriptPick3GameShell],
			date: await _req.body.time3,
			win3: await _req.body.numbers,
			fire3: await _req.body.fireball
		});

		return Promise.resolve() as Promise<void>;
	} catch (error: unknown) {
		console.error(`pick3Handler had an ERROR: ${error}`);
		res.status(500).send('Server Error');

		return Promise.resolve() as Promise<void>;
	}
}

async function pick3ScrapePostHandler(
	_req: Request,
	res: Response,
	_next: NextFunction
): Promise<{
	time3: string | undefined;
	numbers: string | undefined;
	fireball: string | undefined;
}> {
	console.info(
		`
		pick3ScrapePostHandler() {} Initial Log Message:
			_request: ${_req.body}

			response: ${res.locals}

			_next: ${_next}
		`
	);

	try {
		const pick3URL: string = `https://www.sceducationlottery.com/Games/Pick3`;
		const columnClass: string = '.col-md-2';
		const numsDateClass: string = '.numbers-date';
		const pick3NumsClass: string = '.number-circle';
		const pick3FireballClass: string = '.number-circle-fireball-pick3';

		const getData = new ScrapePicks(
			pick3URL,
			columnClass,
			numsDateClass,
			pick3NumsClass,
			pick3FireballClass
		);

		setTimeout(async () => {
			await getData.launchBrowser();

			console.warn(
				`
				pick3Handler() {} routing handler function:
				
				APPLICATION IS CURRENTLY IN A SETTIMEOUT FUNCTION WHICH LAUNCHED
				THE BROWSER AND IS WAITING FOR THE DATA TO BE SCRAPED FROM THE
				WEBSITE...
				
				timeout is 5000 milliseconds!
				`
			);
		}, 5000);

		const currentData = getData.dataScrape;

		console.log(JSON.stringify(currentData));
		// console.log(JSON.stringify(currentData?.[0] ?? null));

		const currentPick3 = currentData().then((data) => {
			const resolvedData = data;
			const time3 = resolvedData?.[0].slice(0, 1);
			const numbers: string | undefined = resolvedData?.[0].slice(1, 2);
			const fireball: string | null | undefined =
				resolvedData?.[0].slice(2);

			console.info(
				`
					time3: ${time3},
					numbers: ${numbers},
					fireball: ${fireball}
				`
			);

			return { time3, numbers, fireball };
		});

		console.log(JSON.stringify((await currentPick3).time3 ?? null));
		console.log(JSON.stringify((await currentPick3).numbers ?? null));
		console.log(JSON.stringify((await currentPick3).fireball ?? null));

		console.info(
			`
					:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

						DateTime scrape data inside of "forEach" Loop-Block:

								dateTime: ${JSON.stringify((await currentPick3).time3)}

							combineNumbers: ${JSON.stringify((await currentPick3).numbers)}

							fireballNumber: ${JSON.stringify((await currentPick3).fireball)}

					:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
				`
		);
		// let pick3DateTime: string | undefined = (await currentPick3).time3;
		// let pick3Numbers: string | undefined = (await currentPick3).numbers;
		// let pick3Fireball: string | undefined = (await currentPick3).fireball;

		const {
			time3 = (await currentPick3)?.time3,
			numbers = (await currentPick3)?.numbers,
			fireball = (await currentPick3)?.fireball
		}: { time3?: string; numbers?: string; fireball?: string } = _req.body;

		app.use((req: Request) => {
			return (
				req.body.time3,
				req.body.numbers,
				req.body.fireball,
				time3,
				numbers,
				fireball
			);
		});

		return { time3, numbers, fireball };
	} catch (error: unknown) {
		console.error(`pick3ScrapePostHandler had an ERROR: ${error}`);
		res.status(500).send('Server Error');

		return { time3: undefined, numbers: undefined, fireball: undefined };
	}
}

export {
	stateHandler,
	errorBaseHandler,
	indexHandler as default,
	registerHandler,
	registerPostHandler,
	loginHandler,
	loginPostHandler,
	logout,
	state_boxHandler,
	powerballHandler,
	pick3Handler,
	pick3ScrapePostHandler
};

// let incNum: number = 0;
// let breakNum: number = 0;
// waitOnData: while (incNum < 115) {
// 	if (pick3Time === null) {
// 		incNum++;
// 		if (incNum < 815) {
// 			breakNum += incNum;
// 			console.log(breakNum);
// 			console.log(
// 				`
// 				DateTime scrape data inside of "waitOnData" Loop-Label:
// 					${pick3Time}
// 			`
// 			);
// 			continue waitOnData;
// 		} else {
// 			break waitOnData;
// 		}
// 	} else if (pick3Time !== null) {
// 		console.log(
// 			`
// 				BREAKOUT OF LABELED-WHILE LOOP && pick3Time !== null:
// 					DateTime: ${pick3Time}
// 					Winning Numbers: ${pick3Numbers}
// 					Fireball Number: ${pick3Fireball}
// 			`
// 		);

// 		break waitOnData;
// 	} else if (incNum > 815) {
// 		console.error(
// 			`
// 				incNum > 815: ${incNum},
// 				DateTime: ${pick3Time},
// 				value.dateTime: ${value.dateTime}
// 			`
// 		);
// 		break waitOnData;
// 	}
// 	console.log(
// 		`
// 		BREAKOUT OF LABELED-WHILE LOOP && pick3Time !== null:
// 			DateTime: ${pick3Time}
// 			Winning Numbers: ${pick3Numbers}
// 			Fireball Number: ${pick3Fireball}
// 	`
// 	);
// 	return pick3Time && pick3Numbers && pick3Fireball;
// }

// const currentData:
// | Promise<{
// 		dateTime: string | null;
// 		combineNumbers: void;
// 		fireballNumber: string | null | undefined;
// 		// eslint-disable-next-line no-mixed-spaces-and-tabs
//   }>[]
// | undefined = getData?.map(async (value) => {
// return {
// 	dateTime: (await value).dateTime,
// 	combineNumbers: (await value).combineNumbers,
// 	fireballNumber: (await value).fireballNumber
// };
// });

// const pick3Time = (await currentData![0])?.dateTime;
// const pick3Numbers = (await currentData![0]).combineNumbers;
// const pick3Fireball = (
// await currentData![0]
// ).fireballNumber?.toString();

// const tempArray: string[] = [];

// currentData?.forEach(async (data) => {
// const resolvedData = await data;
// tempArray.push(JSON.stringify(resolvedData));
// });

// setTimeout(() => {
// console.info(`tempArray: ${tempArray[0].valueOf()}`);

// console.info(
// 	`
// 		DateTime scrape data inside of "setTimeout" Function:
// 			${JSON.stringify(currentData![0].then((value) => value))}
// 	`
// );
// }, 4000);

// setTimeout(() => {
// const resolveData: Promise<
// 	| Promise<{
// 			dateTime: string | null;
// 			combineNumbers: void;
// 			fireballNumber: string | null | undefined;
// 			// eslint-disable-next-line no-mixed-spaces-and-tabs
// 	  }>[]
// 	| undefined
// > = dataPick3();

// const resolverArray: Promise<{
// 	dateTime: string | null;
// 	combineNumbers: void;
// 	fireballNumber: string | null | undefined;
// }>[] = [];

// resolveData.then(async (value) => {
// 	const data = value![0];

// 	resolverArray.push(
// 		Promise.resolve({
// 			dateTime: (await data).dateTime,
// 			combineNumbers: (await data).combineNumbers,
// 			fireballNumber: (await data).fireballNumber
// 		})
// 	);

// 	for (const resolved of resolverArray) {
// 		const time3: string | null | undefined = (
// 			await resolved
// 		).dateTime?.toString();
// 		const numbers: void = (await resolved).combineNumbers;
// 		const fireball: string | null | undefined = (
// 			await resolved
// 		).fireballNumber?.toString();

// 		resolved.then((value) => {
// 			const timePick3: string | null | undefined =
// 				value.dateTime;
// 			const numbersPick3: void = value.combineNumbers;
// 			const fireballPick3: string | null | undefined =
// 				value.fireballNumber;

// 			console.info(
// 				`
// 					:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// 						DateTime scrape data inside of "setTimeout" Function
// 						and the resolverArray Loop-Block:

// 								dateTime: ${JSON.stringify(time3)}

// 							combineNumbers: ${JSON.stringify(numbers)}

// 							fireballNumber: ${JSON.stringify(fireball)}

// 					:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// 				`
// 			);

// 			console.info(
// 				`
// 				:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// 					DateTime scrape data inside of "setTimeout" Function
// 					and the resolverArray Loop-Block:

// 							dateTime: ${JSON.stringify(timePick3)}

// 						combineNumbers: ${JSON.stringify(numbersPick3)}

// 						fireballNumber: ${JSON.stringify(fireballPick3)}

// 				:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// 			`
// 			);
// 		});
// 	}

// 	console.info(
// 		`
// 			resolverArray Array scrape data inside of "setTimeout" Function:
// 				resolverArray:	${JSON.stringify(resolverArray)}
// 		`
// 	);
// });
// }, 5000);

// console.info(
// `
// 	dataPick3() Scraper Function: ${await dataPick3().then((value) => {
// 		const datapick = value![0];

// 		if (datapick === undefined) {
// 			return undefined;
// 		} else {
// 			const data3 = datapick;
// 			return JSON.stringify(data3);
// 		}
// 	})}
// `
// );
