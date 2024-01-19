// Lottery Ai Routes

'use strict';

import express, { Router } from 'express';
import indexHandler, {
	registerHandler,
	registerPostHandler,
	loginHandler,
	loginPostHandler,
	logout,
	homeHandler
} from './route_handlers/route_handlers.js';

const router: Router = express.Router();
const index_route: express.Router = router.get('/', indexHandler);

const register_route: express.Router = router.get('/register', registerHandler);
const registerPOST_route: express.Router = router.post(
	'/register',
	registerPostHandler
);

const login_route: express.Router = router.get('/login', loginHandler);
const loginPOST_route: express.Router = router.post('/login', loginPostHandler);
const logout_route: express.Router = router.post('/logout', logout);
const home_index_route: express.Router = router.get('/home', homeHandler);

export {
	index_route as default,
	register_route,
	registerPOST_route,
	login_route,
	loginPOST_route,
	logout_route,
	home_index_route
};
