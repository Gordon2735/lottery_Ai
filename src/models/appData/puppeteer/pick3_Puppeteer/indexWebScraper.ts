'use strict';

import puppeteer from 'puppeteer';
import startBrowser from './browser.js';
import scraperController from './pageController.js';

//Start the browser and create a browser instance
const browserInstance: puppeteer.Browser = await startBrowser();

async function startScraperController() {
    if (!browserInstance.connected) {
        console.error('No browser instance found...');
        return await scraperController(browserInstance);
    } else {
        console.info('Browser instance found...');

        !browserInstance.connected
            ? await scraperController(browserInstance)
            : await browserInstance.close(),
            setTimeout(async () => {
                await scraperController(browserInstance);
            }, 4000);
        return;
    }
}
export default startScraperController;
