'use strict';

import puppeteer from 'puppeteer';
import pageScraperPop from './pageScraperPop.js';

async function controllerScrapeAll(browserInstance: puppeteer.Browser) {
    let browser: puppeteer.Browser;
    try {
        browser = browserInstance;
        await pageScraperPop.scrapers(browser);
    } catch (error: unknown) {
        console.error(
            `
             Could not resolve the browser instance => : ${error}        
        `
        );
    }
    return;
}
export default (browserInstance: puppeteer.Browser): Promise<void> =>
    controllerScrapeAll(browserInstance);
