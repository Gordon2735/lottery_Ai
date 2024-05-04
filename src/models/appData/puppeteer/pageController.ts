/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

// import { Browser } from 'puppeteer';
import puppeteer from 'puppeteer';
import pageScraper from './pageScraper.js';

// const browserInstances: puppeteer.Browser = browserInstance;
async function scrapeAll(browserInstance: puppeteer.Browser) {
    let browser: puppeteer.Browser;
    // browserInstance = browserInstances;
    try {
        browser = browserInstance;
        await pageScraper.scrapers(browser);
    } catch (error) {
        console.log('Could not resolve the browser instance => ', error);
    }
    return;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (browserInstance: puppeteer.Browser): Promise<void> =>
    scrapeAll(browserInstance);
