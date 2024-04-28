/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import puppeteer from 'puppeteer';

import pageScraper from './pageScraper.js';

async function scrapeAll(browserInstance: puppeteer.Browser | undefined) {
	let browser: puppeteer.Browser | undefined;
	try {
		browser = await browserInstance;
		await pageScraper.scraper(browser);
	} catch (error) {
		console.log('Could not resolve the browser instance => ', error);
	}
	return;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (
	browserInstance: puppeteer.Browser | undefined
): Promise<void> => scrapeAll(browserInstance);
