/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import pageScraper from './pageScraper.js';

async function scrapeAll(browserInstance: any) {
	let browser;
	try {
		browser = await browserInstance;
		await pageScraper.startScraper(browser);
	} catch (err) {
		console.log('Could not resolve the browser instance => ', err);
	}
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (browserInstance: any): Promise<void> =>
	scrapeAll(browserInstance);
