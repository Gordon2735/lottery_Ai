// Lottery Ai Main Application File

'use strict';

import getConfig from '../config/config.js';
import express, {
    type Application,
    type Request,
    type Response,
    type NextFunction,
    Router
} from 'express';
import { create, ExpressHandlebars } from 'express-handlebars';
import Session from 'express-session';
import * as MySQLStoreClass from 'express-session';
import expressMySqlSession from 'express-mysql-session';
import cookieParser from 'cookie-parser';
import { createSessionsTable } from './models/Schemas/userModel.js';
import path from 'path';
import morgan from 'morgan';
import cors from 'cors';
import { fileURLToPath } from 'url';
import router from './controllers/router.js';
import helper from '../public/views/helpers/helpers.js';
import favicon from 'express-favicon';
// import { ErrorHandler } from './errors/errorHandler.js';
import { v4 as uuid } from 'uuid';

declare module 'express-session' {
    interface Session {
        data: SessionData;
        views: number;
        session_id: Session & Partial<SessionData>;
        name: string | undefined;
        author: string;
    }
}

export default async function (config: {
    applicationName: string;
}): Promise<express.Application> {
    const app: Application = express();

    const __filename: string = fileURLToPath(import.meta.url);
    const __dirname: string = path.dirname(__filename);
    // const errors: ErrorHandler = new ErrorHandler(404, 'Not Found');
    const routers: Router = router;
    const oneDay = 1000 * 60 * 60 * 24;

    const handlebars: ExpressHandlebars = create({
        extname: '.hbs',
        defaultLayout: 'main',
        layoutsDir: path.join(
            __dirname,
            '..',
            '..',
            'public',
            '/views/layouts'
        ),
        partialsDir: path.join(
            __dirname,
            '..',
            '..',
            'public',
            '/views/partials'
        ),
        helpers: { ...helper }
    });

    app.engine('.hbs', handlebars.engine);
    app.set('view engine', '.hbs');
    app.set('views', path.join(__dirname, '..', '..', 'public', '/views'));
    app.set('trust proxy', 1); // trust first proxy
    app.enable('view cache');

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(morgan('dev'));
    app.use(cors());
    app.use(
        favicon(
            path.join(__dirname, '..', '..', 'public', '/images/palmetto.ico')
        )
    );
    const configs = await getConfig();

    const options: {
        host: string;
        user: string;
        password: string;
        database: string;
        waitForConnections: boolean;
        queueLimit: number;
        session_id: string;
        name: string | undefined;
        author: string;
        createDatabaseTable: boolean;
        insecureAuth: boolean;
        user_id: string;
        secretkey: string;
    } = {
        host: configs.mysql.options.host,
        user: configs.mysql.options.user,
        password: configs.mysql.options.password,
        database: configs.mysql.options.database,
        waitForConnections: true,
        queueLimit: configs.mysql.options.queueLimit,
        session_id: configs.sessions.session_id,
        name: configs.sessions.name,
        author: configs.sessions.author,
        createDatabaseTable: false,
        user_id: configs.sessions.user_id,
        secretkey: `${process.env.SESSION_KEY}`,
        insecureAuth: true
    };

    const session = MySQLStoreClass;
    const MySQLStore = expressMySqlSession(session);
    const sessionStore = new MySQLStore(options);
    createSessionsTable();

    app.use(
        Session({
            name: configs.sessions.name,
            // author: `${configs.sessions.author}`,
            secret: `${process.env.SESSION_KEY}`,
            resave: false,
            saveUninitialized: false,
            store: sessionStore,
            cookie: {
                maxAge: oneDay,
                sameSite: true
            }
        })
    );
    app.use(cookieParser());
    app.use(express.static('public'));
    app.use(express.static('src'));
    app.use(express.static('dist'));
    app.use('/', routers);

    app.get('/favicon.ico', (_req: Request, res: Response) => {
        res.status(204);
    });

    app.use(async (req: Request, res: Response, next: NextFunction) => {
        let user: string | undefined;
        // To show the Application Name on the page.
        res.locals.applicationName = config.applicationName;
        res.locals.username = req.body.username;
        res.locals.email = req.body.email;
        res.locals.user_id = req.body.user_id;
        req.body.username = user;
        return next();
    });

    // catch 404 and forward to error handler
    // app.use((req: Request, _res: Response, next: NextFunction) => {
    // 	const error: Error = new Error(`Not Found (${req.url})`);
    // 	error.message;
    // 	next(error);
    // });

    // error handler
    // app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    //     // set locals, only providing error in development
    //     // res.locals.error =
    //     // 	req.app.get('env') === 'development'
    //     // 		? ErrorHandler(error, req, res, next)
    //     // 		: {};
    //     console.error('error', () => {
    //         ErrorHandler(error, req, res, next);
    //     });
    // });

    // set Global Variables
    app.use(function (req: Request, res: Response) {
        res.locals.username = req.body.username;
        res.locals.email = req.body.email;
    });

    return app;
}

const uuidV4: typeof uuid = uuid;

export {
    express,
    type Application,
    type Request,
    type Response,
    type NextFunction,
    uuidV4
};
