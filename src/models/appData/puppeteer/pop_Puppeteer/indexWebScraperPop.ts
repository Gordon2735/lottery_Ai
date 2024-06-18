'use strict';

import puppeteer from 'puppeteer';
import startPopScrapeBrowser from './browserPop.js';
import controllerScraper from './pageControllerPop.js';

//Start the browser and create a browser instance
const browserInstance: puppeteer.Browser = await startPopScrapeBrowser();

async function startControllerScraper() {
    if (!browserInstance.connected) {
        console.error('No browser instance found...');
        return await controllerScraper(browserInstance);
    } else {
        console.info('Browser instance found...');

        !browserInstance.connected
            ? await controllerScraper(browserInstance)
            : await browserInstance.close(),
            setTimeout(async () => {
                await controllerScraper(browserInstance);
            }, 4000);
        return;
    }
}
export default startControllerScraper;
