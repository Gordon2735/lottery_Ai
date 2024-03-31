'use strict';

import puppeteer from 'puppeteer';

async function dataPick3(): Promise<
	{
		dateTime: string | null | undefined;
		winningNumbers: string[];
		fireballNumber: string | null | undefined;
	}[]
> {
	// Launch Browser and open a new BLANK PAGE
	const browser: puppeteer.Browser = await puppeteer.launch();
	const page: puppeteer.Page = await browser.newPage();

	const closeBrowser = async (
		currentData: {
			dateTime: string | null | undefined;
			winningNumbers: string[];
			fireballNumber: string | null | undefined;
		}[]
	): Promise<
		{
			dateTime: string | null | undefined;
			winningNumbers: string[];
			fireballNumber: string | null | undefined;
		}[]
	> => {
		const dataArray = currentData as {
			dateTime: string | null;
			winningNumbers: string[];
			fireballNumber: string | null;
		}[];
		await browser.close();
		// return currentData;
		return dataArray;
	};

	// Navigate to SC Lottery Data URL
	await page.goto('https://www.sceducationlottery.com/Games/Pick3');

	// Set the Screen Size
	await page.setViewport({ width: 1920, height: 1080 });

	const data = await page.$$eval('.col-md-2', (elements: Element[]) =>
		elements.map((times: Element) => {
			const time: Element | null = times.querySelector('.numbers-date');
			const spanNumbers: NodeListOf<Element> =
				times.querySelectorAll('.number-circle');
			const spanFireball: Element | null = times.querySelector(
				'.number-circle-fireball-pick3'
			);

			const numbers: string[] | null = [''];
			for (const number of spanNumbers) {
				const getNumber: string | null = number?.textContent;
				if (getNumber !== null) numbers?.push(getNumber);
			}
			const dateTime: string | null | undefined = time?.textContent;
			const winningNumbers = numbers;
			const fireballNumber = spanFireball?.textContent;

			return { dateTime, winningNumbers, fireballNumber };
		})
	);
	// await closeBrowser();
	// return data;

	return closeBrowser(data);
}
export { dataPick3 };

// const collections: puppeteer.ElementHandle<HTMLDivElement>[] =
// 	await page.$$('div[class="col-md-2"]');

// 	collections.map(())

// for (const collection of collections) {
// 	const evening = await collection.evaluate((node) => {});
// }
