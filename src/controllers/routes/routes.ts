// Lottery Ai Routes

'use strict';

import express, { Router } from 'express';
import indexHandler, {
    stateHandler,
    errorBaseHandler,
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
    pick3PredictionsPostHandler
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
const pick3_route: express.Router = router.get('/pick3', pick3Handler);
const pick3ScrapePost_route: express.Router = router.post(
    '/pick3',
    pick3ScrapePostHandler
);
const pick3Predictions_route: express.Router = router.get(
    '/pick3_predictions',
    pick3PredictionsHandler
);
const pick3PredictionsPost_route: express.Router = router.post(
    '/pick3_predictions',
    pick3PredictionsPostHandler
);

const errorBase_route: express.Router = router.get('/errors', errorBaseHandler);

export {
    index_route as default,
    state_mgt_route,
    errorBase_route,
    register_route,
    registerPOST_route,
    login_route,
    loginPOST_route,
    logout_route,
    state_box_route,
    powerball_route,
    pick3_route,
    pick3ScrapePost_route,
    pick3Predictions_route,
    pick3PredictionsPost_route
};
