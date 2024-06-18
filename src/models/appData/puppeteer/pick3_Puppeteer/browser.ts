/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import puppeteer from 'puppeteer';

export default async function startBrowser(): Promise<puppeteer.Browser> {
    let browser: puppeteer.Browser;
    try {
        console.log('Opening the browser......');
        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ['--disable-setuid-sandbox'],
            ignoreHTTPSErrors: true,
            devtools: true,
            slowMo: 300,
            protocolTimeout: 220000
        });
        return browser;
    } catch (error) {
        console.log('Could not create a browser instance => : ', error);
        return Promise.reject(error);
    }
}
