// Lottery Ai Router

'use strict';

import express, { type Application, Router } from 'express';
import index_route, {
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
    pick3PredictionsPost_route,
    pick3PredictionsMidDayPostHandler_route
} from './routes/routes.js';

const app: Application = express();
const router: Router = express.Router();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const routes: Router[] = [
    index_route,
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
    pick3PredictionsPost_route,
    pick3PredictionsMidDayPostHandler_route
];

const thisRoute: express.Router = router;
for (const route of routes) {
    thisRoute.use(`/`, route);
}

export default router;
