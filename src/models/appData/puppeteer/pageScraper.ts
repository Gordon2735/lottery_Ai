/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

// import puppeteer from 'puppeteer';
import { Browser, Page } from 'puppeteer';

const scraper = {
	url: 'https://www.sceducationlottery.com/Games/Pick3',
	async scraper(browser: Browser | undefined): Promise<{
		scrapeData: Promise<
			Awaited<
				ReturnType<
					() =>
						| {
								drawEvent: string | null | undefined;
								winNumbers: (string | null)[];
								fireNum: string | null | undefined;
						  }[]
						| undefined
				>
			>
		>;
	}> {
		// const preparePageForTests = async (page: any) => {
		// 	const userAgent =
		// 		'Mozilla/5.0 (X11; Linux x86_64)' +
		// 		'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36';
		// 	await page.setUserAgent(userAgent);
		// };

		// await preparePageForTests(page);
		const page: Page | undefined = await browser?.newPage();

		console.info(
			`
				Navigating to Pick 3 Scraping Data from: ${this.url}...
			
			`
		);
		await page?.goto(this.url);
		await page?.waitForSelector('.col-md-2');

		const scrapeData = await page?.evaluate(async () => {
			const elements:
				| {
						drawEvent: string | null | undefined;
						winNumbers: (string | null)[];
						fireNum: string | null | undefined;
				  }[]
				| undefined = [{ drawEvent: '', winNumbers: [], fireNum: '' }];

			const elementsQuery: NodeListOf<Element> =
				document.querySelectorAll('.col-md-2');

			for (const element of elementsQuery) {
				const dataEvent: Element | null =
					element.querySelector('.numbers-date');
				const numbers: NodeListOf<Element> =
					element.querySelectorAll('.number-circle');
				const fireballNumber: Element | null = element.querySelector(
					'.number-circle-fireball-pick3'
				);

				elements.push({
					drawEvent: dataEvent?.textContent,
					winNumbers: Array.from(numbers).map(
						(number) => number.textContent
					),
					fireNum: fireballNumber?.textContent
				});
			}

			const stringifyElements: string = JSON.stringify(elements);

			console.log(
				`
				scrapeData Return:
				
				drawEvent: ${JSON.stringify(elements[0])},
				winNumbers: ${JSON.stringify(elements[0])},
				fireNum: ${JSON.stringify(elements[0])},
				
				stringifyElements: ${stringifyElements}                
				`
			);
			// await browser?.close();
			// return Promise.resolve([...elements]);
			return Promise.resolve(elements);
		});

		console.log({ scrapeData });
		// return Promise.resolve([...scrapeData]);

		return { scrapeData: Promise.resolve(scrapeData) };
	}
};
export { scraper as default };
