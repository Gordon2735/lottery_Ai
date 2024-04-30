/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import puppeteer from 'puppeteer';
// import puppeteer, { Browser } from 'puppeteer';

export default async function startBrowser(): Promise<puppeteer.Browser> {
	let browser: puppeteer.Browser;
	try {
		console.log('Opening the browser......');
		browser = await puppeteer.launch({
			headless: true,
			args: ['--disable-setuid-sandbox'],
			ignoreHTTPSErrors: true,
			devtools: true,
			slowMo: 300
		});
		return browser;
	} catch (error) {
		console.log('Could not create a browser instance => : ', error);
		return Promise.reject(error);
	}
}

// export { startBrowser as default };
