/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import puppeteer from 'puppeteer';
// import puppeteer, { Page } from 'puppeteer';

const scraper = {
	url: 'https://www.sceducationlottery.com/Games/Pick3',
	async scraper(browser: puppeteer.Browser): Promise<{
		scrapeData: Promise<
			Awaited<
				ReturnType<
					() => {
						drawEvent: string | null | undefined;
						winNumbers: string | null | undefined;
						fireNum: string | null | undefined;
					}[]
				>
			>
		>;
	}> {
		const page: puppeteer.Page = await browser.newPage();

		console.info(
			`
				Navigating to Pick 3 Scraping Data from: ${this.url}...
			
			`
		);
		await page.goto(this.url);

		async function takeScreenshot(page: puppeteer.Page, name?: string) {
			return await page.screenshot({
				type: 'png',
				path: `./screenshots/${Date.now()}_${name}.png`
			});
		}
		await takeScreenshot(page, 'pick3Screenshot');

		await page.waitForSelector('.col-md-2');

		const scrapeData = await page.evaluate(async () => {
			const elements: {
				drawEvent: string | null | undefined;
				winNumbers: string | null | undefined;
				fireNum: string | null | undefined;
			}[] = [];
			// | undefined = [{ drawEvent: '', winNumbers: '', fireNum: '' }];

			const elementsQuery: NodeListOf<HTMLElement> =
				document.querySelectorAll('.col-md-2');

			for (const element of elementsQuery) {
				const dataEvent: HTMLElement | null | undefined =
					element?.querySelector<HTMLElement>('.numbers-date');
				const numbers: NodeListOf<HTMLElement> =
					element?.querySelectorAll<HTMLElement>('.number-circle');
				const fireballNumber: HTMLElement | null | undefined =
					element.querySelector<HTMLElement>(
						'.number-circle-fireball-pick3'
					);

				const convertNumbers: (string | null)[] = [
					numbers[0]?.textContent, // 1st number
					numbers[1]?.textContent, // 2nd number
					numbers[2]?.textContent // 3rd number
				];

				if (elements !== null || !'') {
					elements?.push({
						drawEvent: dataEvent?.textContent,
						winNumbers: convertNumbers.join(''),
						fireNum: fireballNumber?.textContent
					});
				}
			}
			const stringifyElements: string = JSON.stringify(elements);

			console.log(
				`						
					stringifyElements: ${stringifyElements}                
				`
			);
			await browser.close();

			return elements;
		});

		console.log({ scrapeData });

		return { scrapeData: Promise.resolve(scrapeData) };
	}
};
export { scraper as default };

// const preparePageForTests = async (page: any) => {
// 	const userAgent =
// 		'Mozilla/5.0 (X11; Linux x86_64)' +
// 		'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36';
// 	await page.setUserAgent(userAgent);
// };

// await preparePageForTests(page);
