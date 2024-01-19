// Lottery Ai Router

'use strict';

import express, { Application, Router } from 'express';
import index_route, {
	register_route,
	registerPOST_route,
	login_route,
	loginPOST_route,
	logout_route,
	home_index_route
} from './routes/routes.js';

const app: Application = express();
const router: Router = express.Router();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const routes: Router[] = [
	index_route,
	register_route,
	registerPOST_route,
	login_route,
	loginPOST_route,
	logout_route,
	home_index_route
];

const thisRoute: express.Router = router;
for (const route of routes) {
	thisRoute.use(`/`, route);
}

export default router;
