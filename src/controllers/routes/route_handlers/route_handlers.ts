/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// Lottery Ai Route Handlers

'use strict';
// @ts-check

import type { Request, Response, NextFunction } from '../../../app.js';
import express, { type Application } from 'express';
import getConfig from '../../../../config/config.js';
import {
    insertSession,
    insertUser,
    findUserByUsername
} from '../../../models/Schemas/userModel.js';
import bcrypt from 'bcryptjs';
import Session from 'express-session';
import type { IUser } from '../../../../src/@types/interfaces/interfaces.js';
import { postLoginErrorHandler } from '../../../errors/postLoginErrorHandler.js';
import puppeteer from 'puppeteer';
import scraper from '../../../models/appData/puppeteer/pick3_Puppeteer/pageScraper.js';
import startScraperController from '../../../models/appData/puppeteer/pick3_Puppeteer/indexWebScraper.js';
import startBrowser from '../../../models/appData/puppeteer/pick3_Puppeteer/browser.js';
// import popScraper from '../../../models/appData/puppeteer/pop_Puppeteer/pageScraperPop.js';
// import startControllerScraper from '../../../models/appData/puppeteer/pop_Puppeteer/indexWebScraperPop.js';
// import startPopScrapeBrowser from '../../../models/appData/puppeteer/pop_Puppeteer/browserPop.js';
import processLotteryCollection from '../../../models/appData/pick3Data/pick3_predictions_logic.js';
import getProcessDataObject from '../../../models/appData/dataPrediction_functions/func_getProcessDataObject.js';
import getMidDayProcessDataObject from '../../../models/appData/dataPrediction_functions/func_getMidDayProcessDataObject.js';
import Pick3DataObject from '../../../components/game_components/pick3_components/pick3_logic/pick3_data/pick3Data.js';

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
        // EventEmitterHandlers.on('drawPickUpdate', (data) => {
        // 	res.locals.time3 = data.time3;
        // 	res.locals.numbers = data.numbers;
        // 	res.locals.fireball = data.fireball;
        // });

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
            script: [scriptPick3GameShell]
            // date: await _req.body.time3,
            // win3: await _req.body.numbers,
            // fire3: await _req.body.fireball,
            // time3: await res.locals.time3,
            // numbers: await res.locals.numbers,
            // fireball: await res.locals.fireball
        });

        return Promise.resolve() as Promise<void>;
    } catch (error: unknown) {
        console.error(`pick3Handler had an ERROR: ${error}`);
        res.status(500).send('Server Error');

        return Promise.reject() as Promise<void>;
    }
}

async function pick3ScrapePostHandler(
    _req: Request,
    res: Response
): Promise<void | Response<any, Record<string, any>>> {
    try {
        console.log('pick3TestPostHandler ROUTER: starting scraperController');

        await startScraperController();

        const browser = (await startBrowser()) as puppeteer.Browser;
        const scrapeCollection = [];
        const scraperText = scraper.scrapers(browser);
        const scrapered = (await scraperText).scrapeData;

        scrapeCollection.push({ scrapeData: scrapered });

        console.log(
            `JSON.stringify({ collectionModified }): ${JSON.stringify({
                scrapeCollection
            })}`
        );
        return res.json({ scrapeCollection });
    } catch (error: unknown) {
        console.error(`pick3TestPostHandler had an ERROR: ${error}`);
        res.status(500).send('Server Error');

        return Promise.reject() as Promise<void>;
    }
}

async function pick3PredictionsHandler(
    _req: Request,
    res: Response
): Promise<void> {
    try {
        const scriptPick3Predictions: string = `
			<script type="module" src="/src/components/game_components/pick3_components/pick3_predictions/pick3-predictions.js"
				content="text/javascript" crossorigin="anonymous">
			</script>
		`;

        console.info(
            `
            The Routing pick3PredictionsHandler() Function has fired...
        `
        );

        res.set('Content-Type', 'text/html');
        res.set('target', '_blank');
        res.render('pick3_predictions', {
            title: 'Pick 3®️ Predictions',
            layout: 'pick3_predictions_main',
            partials: 'partials',
            helpers: 'helpers',
            script: [scriptPick3Predictions]
        });

        // return Promise.resolve() as Promise<void>;
        return;
    } catch (error: unknown) {
        console.error(
            `
            pick3PredictionsHandler had an ERROR: ${error}
        `
        );
        res.status(500).send('Server Error');

        return Promise.reject() as Promise<void>;
    }
}

async function pick3PredictionsPostHandler(_req: Request, res: Response) {
    try {
        console.info(
            `
            The Routing pick3PredictionsPostHandler() Function has fired...
        `
        );
        const receiveData: IPick3DataObject = Pick3DataObject;
        const processedCollectionData: number[] = [];
        const processedCollectionDataIndexes: number[] = [];

        const pick3AllData: number[] = await getProcessDataObject(
            receiveData,
            processedCollectionData,
            processedCollectionDataIndexes
        );
        const predictionsData: number[] =
            await processLotteryCollection(pick3AllData);

        // Calculate the sum of indexes using reduce && making sure the lotteryData and the Indexes match...
        const indexCollectionDataIndexesSum: number =
            processedCollectionDataIndexes.reduce(
                (sum, _, index) => sum + index,
                0
            );
        console.info(
            `indexCollectionDataIndexesSum indexSum reduces to effect the sum of Indexes: ${indexCollectionDataIndexesSum}`
        );
        // Calculate the sum of indexes using reduce && making sure the lotteryData and the Indexes match...
        const indexCollectionDataSum: number = processedCollectionData.reduce(
            (sum, _, index) => sum + index,
            0
        );
        console.info(
            `processedCollectionData indexSum reduces to effect the sum of Indexes: ${indexCollectionDataSum}`
        );

        return res.json(predictionsData);
    } catch (error: unknown) {
        console.error(
            `
            The Routing pick3PredictionsPostHandler() Function was caught by the try/catch block...
            ERROR: ${error}
        `
        );
        res.status(500).send('Server Error');

        return Promise.reject() as Promise<void>;
    } finally {
        console.info(
            `
             The Routing pick3PredictionsPostHandler() Function fired and its
             Promise has been resolved...   
        `
        );
    }
}
async function pick3PredictionsMidDayPostHandler(_req: Request, res: Response) {
    try {
        console.info(
            `
            The Routing pick3PredictionsPostHandler() Function has fired...
        `
        );
        const receiveData: IPick3DataObject = Pick3DataObject;
        const processedMidDayCollectionData: number[] = [];
        const processedMidDayCollectionDataIndexes: number[] = [];

        const pick3MidDayData: number[] = await getMidDayProcessDataObject(
            receiveData,
            processedMidDayCollectionData,
            processedMidDayCollectionDataIndexes
        );
        const predictionsMidDayData: number[] =
            await processLotteryCollection(pick3MidDayData);

        // Calculate the sum of indexes using reduce && making sure the lotteryData and the Indexes match...
        const indexMidDayCollectionDataIndexesSum: number =
            processedMidDayCollectionDataIndexes.reduce(
                (sum, _, index) => sum + index,
                0
            );
        console.info(
            `indexMidDayCollectionDataIndexesSum indexSum reduces to effect the sum of Indexes: ${indexMidDayCollectionDataIndexesSum}`
        );
        // Calculate the sum of indexes using reduce && making sure the lotteryData and the Indexes match...
        const indexMidDayCollectionDataSum: number =
            processedMidDayCollectionData.reduce(
                (sum, _, index) => sum + index,
                0
            );
        console.info(
            `processedMidDayCollectionData indexSum reduces to effect the sum of Indexes: ${indexMidDayCollectionDataSum}`
        );

        return res.json(predictionsMidDayData);
    } catch (error: unknown) {
        console.error(
            `
            The Routing pick3PredictionsPostHandler() Function was caught by the try/catch block...
            ERROR: ${error}
        `
        );
        res.status(500).send('Server Error');

        return Promise.reject() as Promise<void>;
    } finally {
        console.info(
            `
             The Routing pick3PredictionsPostHandler() Function fired and its
             Promise has been resolved...   
        `
        );
    }
}
async function pick3ChartPostHandler(_req: Request, res: Response) {
    try {
        return res.json();
    } catch (error: unknown) {
        console.info(
            `
            The Routing pick3ChartPostHandler() Function has been caught
                in the try/catch block...
            ERROR: ${error}
        `
        );
        res.status(500).send(
            `
            The Route Handler 'pick3ChartPostHandler' has produced this 
                Server Error: ${error}
        `
        );

        return Promise.reject() as Promise<void>;
    } finally {
        console.info(
            `
            The Routing pick3ChartPostHandler() Function's try/catch/finally block 
                has reached 'finally'...
        `
        );
    }
}
async function popHandler(_req: Request, res: Response): Promise<void> {
    try {
        const scriptPop: string = `
			<script type="module" src="/src/components/game_components/pop_components/pop_game/pop-game_shell.js"
				content="text/javascript" crossorigin="anonymous">
			</script>
		`;

        console.info(
            `
            The Routing popHandler() Function has fired...
        `
        );

        res.set('Content-Type', 'text/html');
        res.set('target', '_blank');
        res.render('pop', {
            title: 'Cash Pop®️',
            layout: 'pop_main',
            partials: 'partials',
            helpers: 'helpers',
            script: [scriptPop]
        });

        return;
    } catch (error: unknown) {
        console.error(
            `
            popHandler had an ERROR: ${error}
        `
        );
        res.status(500).send('Server Error');

        return Promise.reject() as Promise<void>;
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
    pick3ScrapePostHandler,
    pick3PredictionsHandler,
    pick3PredictionsPostHandler,
    pick3PredictionsMidDayPostHandler,
    pick3ChartPostHandler,
    popHandler
};
