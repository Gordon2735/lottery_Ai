'use strict';

// import { Browser } from 'puppeteer';
import puppeteer from 'puppeteer';
import startBrowser from './browser.js';
import scraperController from './pageController.js';

//Start the browser and create a browser instance
const browserInstance: puppeteer.Browser = await startBrowser();

async function startScraperController() {
	return await scraperController(browserInstance);
}

export default startScraperController;
// export { browserInstance };
