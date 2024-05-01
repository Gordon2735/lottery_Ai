'use strict';

// import { Browser } from 'puppeteer';
import puppeteer from 'puppeteer';
import startBrowser from './browser.js';
import scraperController from './pageController.js';

//Start the browser and create a browser instance
const browserInstance: puppeteer.Browser = await startBrowser();

async function startScraperController() {
	if (!browserInstance.process()) {
		console.error('No browser instance found...');
		return await scraperController(browserInstance);
	} else {
		console.info('Browser instance found...');
		const currentURL: string = process.cwd();
		const URL: 'https://www.sceducationlottery.com/Games/Pick3' =
			'https://www.sceducationlottery.com/Games/Pick3';

		(currentURL !== URL) ? // FINISH THIS TERNARY EXPRESSION
		browserInstance.close();
		return await scraperController(browserInstance);
	}
}

export default startScraperController;
// export { browserInstance };
