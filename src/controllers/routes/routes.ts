// Lottery Ai Routes

'use strict';

import express, { Router } from 'express';
import indexHandler, {
	stateHandler,
	registerHandler,
	registerPostHandler,
	loginHandler,
	loginPostHandler,
	logout,
	state_boxHandler,
	powerballHandler,
	errorBaseHandler
} from './route_handlers/route_handlers.js';

const router: Router = express.Router();
const state_mgt_route: express.Router = router.get('/state_mgt', stateHandler);
const index_route: express.Router = router.get('/', indexHandler);

const register_route: express.Router = router.get('/register', registerHandler);
const registerPOST_route: express.Router = router.post(
	'/register',
	registerPostHandler
);

const login_route: express.Router = router.get('/login', loginHandler);
const loginPOST_route: express.Router = router.post('/login', loginPostHandler);
const logout_route: express.Router = router.post('/logout', logout);
const state_box_route: express.Router = router.get(
	'/state_box',
	state_boxHandler
);
const powerball_route: express.Router = router.get(
	'/powerball',
	powerballHandler
);
const errorBase_route: express.Router = router.get('/errors', errorBaseHandler);

export {
	index_route as default,
	state_mgt_route,
	register_route,
	registerPOST_route,
	login_route,
	loginPOST_route,
	logout_route,
	state_box_route,
	powerball_route,
	errorBase_route
};
