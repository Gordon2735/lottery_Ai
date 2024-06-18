'use strict';

import puppeteer from 'puppeteer';

async function controllerScrapeAll(browserInstance: puppeteer.Browser) {
    let browser: puppeteer.Browser;
    try {
        browser = browserInstance;
        browser;
    } catch (error: unknown) {
        console.log(``);
    }
}
export default (browserInstance: puppeteer.Browser): Promise<void> =>
    controllerScrapeAll(browserInstance);
