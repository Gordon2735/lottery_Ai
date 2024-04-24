/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

// import puppeteer from 'puppeteer';

const scraper = {
	url: 'https://www.sceducationlottery.com/Games/Pick3',
	async scraper(browser: any) {
		const page = await browser.newPage();

		await page.goto(this.url);

		await page.waitForSelector('.col-md-2');

		const scrapeData = await page.evaluate(async () => {
			const elements: {
				dataEvent: string | null | undefined;
				numbers: (string | null | undefined)[];
				fireballNumber: string | null | undefined;
			}[] = [{ dataEvent: '', numbers: [], fireballNumber: '' }];

			const elementsQuery: NodeListOf<Element> =
				await document.querySelectorAll('.col-md-2');

			for (const element of elementsQuery) {
				const dataEvent: Element | null =
					element.querySelector('.numbers-date');
				const numbers: NodeListOf<Element> =
					element.querySelectorAll('.number-circle');
				const fireballNumber: Element | null = element.querySelector(
					'.number-circle-fireball-pick3'
				);

				elements.push({
					dataEvent: dataEvent?.textContent,
					numbers: Array.from(numbers)?.map(
						(number) => number?.textContent
					),
					fireballNumber: fireballNumber?.textContent
				});
			}

			const stringifyElements: string = JSON.stringify(elements);

			console.log(
				`
				scrapeData Return:
				
				elements: ${elements},
				
				stringifyElements: ${stringifyElements}                
				`
			);
			return elements;
		});

		// console.log({ scrapeData });
		return { scrapeData };
	}
};
export { scraper as default };
