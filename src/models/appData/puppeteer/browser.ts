'use strict';

import puppeteer from 'puppeteer';

async function startBrowser() {
	let browser;
	try {
		console.log('Opening the browser......');
		browser = await puppeteer.launch({
			headless: false,
			args: ['--disable-setuid-sandbox'],
			ignoreHTTPSErrors: true,
			devtools: true
		});
	} catch (err) {
		console.log('Could not create a browser instance => : ', err);
	}
	return browser;
}

export { startBrowser as default };
