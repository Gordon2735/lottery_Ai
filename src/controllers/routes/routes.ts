// Lottery Ai Routes

'use strict';

import express, { Router } from 'express';
import indexHandler from './route_handlers/route_handlers.js';

const router: Router = express.Router();
const index_route: express.Router = router.get('/', indexHandler);

export { index_route as default };
