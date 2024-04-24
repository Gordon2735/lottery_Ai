'use strict';

import startBrowser from './browser.js';
import scraperController from './pageController.js';

//Start the browser and create a browser instance
const browserInstance = startBrowser();

async function startScraperController(): Promise<void> {
	// Pass the browser instance to the scraper controller
	await scraperController(browserInstance);
}

export { startScraperController as default };
