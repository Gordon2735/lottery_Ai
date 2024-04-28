'use strict';

import { Browser } from 'puppeteer';
import startBrowser from './browser.js';
import scraperController from './pageController.js';

//Start the browser and create a browser instance
const browserInstance: Browser | undefined = await startBrowser();

async function startScraperController() {
	await scraperController(browserInstance);
}

export { startScraperController as default };
