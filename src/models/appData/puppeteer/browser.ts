/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import puppeteer, { Browser } from 'puppeteer';

export default async function startBrowser(): Promise<Browser | undefined> {
	try {
		// let browser;
		console.log('Opening the browser......');
		const browser: puppeteer.Browser = await puppeteer.launch({
			headless: false,
			args: ['--disable-setuid-sandbox'],
			ignoreHTTPSErrors: true,
			devtools: true,
			slowMo: 300
		});
		return browser;
	} catch (error) {
		console.log('Could not create a browser instance => : ', error);
		return;
	}
}

// export { startBrowser as default };
