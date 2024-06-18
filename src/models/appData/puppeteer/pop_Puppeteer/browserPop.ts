'use strict';

import puppeteer from 'puppeteer';

export default async function startPopScrapeBrowser(): Promise<puppeteer.Browser> {
    let browser: puppeteer.Browser;
    try {
        console.info(
            `
            Opening the browser...
        `
        );
        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ['--disable-setuid-sandbox'],
            ignoreHTTPSErrors: true,
            devtools: true,
            slowMo: 300,
            protocolTimeout: 220000
        });
    } catch (error) {
        console.error(
            `
            The Puppeteer Browser Startup Function startPop3ScrapeBrowser()
                has been caught in the try/catch block...
            Could not create a browser instance => : ERROR: ${error};
        `
        );
        return Promise.reject(error);
    } finally {
        console.info(
            `
            The Puppeteer Browser Startup Function startPop3ScrapeBrowser()
                has reached its 'finally' in the block...
            The Function will now attempt a return of the instantiated 
                Puppeteer browser...
        `
        );
    }
    if (!browser) {
        throw new Error(
            `
            Escaped the startPop3ScrapeBrowser() Function's 
                try/catch/finally block...
            Even though the function threw a new Error() at the
                return browser if/else statement due to an absence
                of an active Puppeteer Scraping Browser...
        `
        );
    } else {
        return browser;
    }
}
