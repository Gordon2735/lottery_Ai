/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

// import puppeteer from 'puppeteer';

const scraper = {
	url: 'https://www.sceducationlottery.com/Games/Pick3',
	async startScraper(browser: any) {
		const page = await browser.newPage();

		await page.goto(this.url);

		await page.waitForSelector('.col-md-2');

		const scrapeData = await page.evaluate(async () => {
			const elements: {
				drawEvent: string | null | undefined;
				winNumbers: (string | null)[];
				fireNum: string | null | undefined;
			}[] = [{ drawEvent: '', winNumbers: [], fireNum: '' }];

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
					winNumbers: Array.from(numbers)?.map(
						(number) => number?.textContent
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
			return { elements };
		});

		// console.log({ scrapeData });
		return scrapeData.elements[0];
	}
};
export { scraper as default };
