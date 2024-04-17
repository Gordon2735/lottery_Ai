// Scrapes the pick 3 data from the website
// first I will Render results to page
// finally to save it to the MySQL database

'use strict';

import puppeteer from 'puppeteer';
// import puppeteer, { HTTPResponse } from 'puppeteer';
// import { setTimeout } from 'timers/promises';

class ScrapePicks {
	URL: string;
	colClass: string;
	timeClass: string;
	numsClass: string;
	numFireballClass: string;
	browser: puppeteer.Browser | undefined;
	page: puppeteer.Page | null | undefined;

	constructor(
		URL: string,
		colClass: string,
		timeClass: string,
		numsClass: string,
		numFireballClass: string
	) {
		this.URL = URL;
		this.colClass = colClass;
		this.timeClass = timeClass;
		this.numsClass = numsClass;
		this.numFireballClass = numFireballClass;
	}

	async launchBrowser(): Promise<puppeteer.Page | undefined | null> {
		try {
			const browser: puppeteer.Browser | null = await puppeteer.launch({
				headless: false,
				// defaultViewport: null,
				slowMo: 1250,
				devtools: true
			}); //as unknown as typeof puppeteer.Browser | null;
			this.browser = browser;

			this.hookUpSiteURL();

			setTimeout(async () => {
				console.warn(`this.browser: ${JSON.stringify(this.browser)}`);
			}, 4000);

			// return this.page;
			return;
		} catch (error: unknown) {
			console.error(
				`
                Class ScrapePicks' launchBrowser Method error...
                ERROR MESSAGE: ${error}
                `
			);
			// Response.redirect('/');

			return;
			// return Promise.reject();
		}
	}
	async hookUpSiteURL(): Promise<puppeteer.Page | undefined> {
		try {
			setTimeout(async () => {
				// Navigate to SC Lottery Data URL
				const page = await this.browser?.newPage();
				this.page = page;

				// console.warn(`this.page: ${JSON.stringify(this.page)}`);
			}, 3000);

			setTimeout(async () => {
				await this.page?.goto(this.URL);
				await this.page?.setViewport({ width: 1920, height: 1080 });
			}, 5000);

			console.info(`hookUpSiteURL() || this.URL: ${this.URL}`);
		} catch (error: unknown) {
			console.error(
				`
                    Class ScrapePicks' hookUpSiteURL Method error...
                        ERROR MESSAGE: ${error}
                `
			);
		}
		return;
	}
	async dataScrape(): Promise<string[] | undefined> {
		try {
			const dataDetails:
				| {
						datePeriod: string | null;
						numsSet: string;
						fireball: string | null;
						// eslint-disable-next-line no-mixed-spaces-and-tabs
				  }[]
				| undefined = [];
			setTimeout(async () => {
				const data = await this.page?.$$eval(
					this.colClass,
					async (elements: Element[]) => {
						elements.map(async (times: Element) => {
							const pickTime: Element | null =
								times.querySelector(this.timeClass);
							const numbersSpans: NodeListOf<Element> =
								times.querySelectorAll(this.numsClass);

							const getNumbers: string[] = Array.from(
								numbersSpans
							).map(
								(numbers: Element) => numbers.textContent ?? ''
							);

							const numFireball: Element | null =
								times.querySelector(this.numFireballClass);

							const scrapedDetails = await this.page?.evaluate(
								() => {
									const datePeriod =
										pickTime?.textContent ?? null;
									const numsSet = getNumbers.join('');
									const fireball =
										numFireball?.textContent ?? null;

									return {
										datePeriod,
										numsSet,
										fireball
									};
								}
							);

							if (scrapedDetails !== undefined) {
								dataDetails.push(scrapedDetails);
							}
							console.log(
								`dataDetails.fireball: ${JSON.stringify(
									scrapedDetails?.fireball
								)}`
							);
							console.log(JSON.stringify(scrapedDetails));
							// });
						});
						console.log(
							`dataDetails: ${JSON.stringify(dataDetails)}`
						);
						return dataDetails;
					}
				);
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				const updatedData: any[] | undefined = data;
				setTimeout(async () => {
					console.log(`data: ${JSON.stringify(updatedData)}`);
				}, 3000);

				await this.browser?.close();
				return updatedData;
			}, 5000);
		} catch (error: unknown) {
			console.error(
				`
                Class ScrapePicks' dataScrape Method error...
                ERROR MESSAGE: ${error}
                `
			);
			return Promise.reject();
		} finally {
			Promise.resolve();
		}
		return;
	}
}
export { ScrapePicks as default };
