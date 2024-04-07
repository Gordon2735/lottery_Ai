'use strict';

import puppeteer from 'puppeteer';

async function dataPick3(): Promise<
	| {
			dateTime: string | null | undefined;
			combineNumbers: string[] | null | undefined;
			fireballNumber: string | null | undefined;
			// eslint-disable-next-line no-mixed-spaces-and-tabs
	  }[]
	| undefined
> {
	try {
		// Launch Browser and open a new BLANK PAGE
		const browser: puppeteer.Browser = await puppeteer.launch();
		const page: puppeteer.Page = await browser.newPage();

		// Navigate to SC Lottery Data URL
		await page.goto('https://www.sceducationlottery.com/Games/Pick3');

		// Set the Screen Size
		// await page.setViewport({ width: 1920, height: 1080 });

		const data: Promise<{
			dateTime: string | null | undefined;
			combineNumbers: string[] | null | undefined;
			fireballNumber: string | null | undefined;
			// eslint-disable-next-line no-mixed-spaces-and-tabs
		}>[] = await page.$$eval('.col-md-2', (elements: Element[]) =>
			elements.map(async (times: Element) => {
				console.log(`times: ${times}`);
				const time: Element | null =
					times?.querySelector('.numbers-date');

				const numberCircleSpan: NodeListOf<Element> =
					times?.querySelectorAll('.number-circle');

				const spanFireball: Element | null = times?.querySelector(
					'.number-circle-fireball-pick3'
				);

				const dateTime: string | null | undefined =
					time?.textContent ?? null;

				// const winningNumbers: () => IterableIterator<Element> =
				const winningNumbers: IterableIterator<Element> =
					numberCircleSpan.values();

				const fireballNumber: string | null | undefined =
					spanFireball?.textContent;

				const combineNumbers: string[] | null = Array.from(
					winningNumbers
				).map((num: Element) => num.textContent ?? '');

				console.log(
					`
						scrapping data...
							DateTime: ${dateTime}
							combineNumbers: ${combineNumbers}
							Fireball Number: ${fireballNumber}
					
					`
				);

				return { dateTime, combineNumbers, fireballNumber };
			})
		);
		const dataResults: Promise<
			{
				dateTime: string | null | undefined;
				combineNumbers: string[] | null | undefined;
				fireballNumber: string | null | undefined;
				// eslint-disable-next-line no-mixed-spaces-and-tabs
			}[]
		> = Promise.all(data);

		await browser.close();

		return dataResults;
	} catch (error: unknown) {
		console.error(
			`
			Scraper Function "dataPick3()" try/catch block caught an error...
		`
		);

		Promise.reject() as Promise<void>;
		return;
	}
}
export { dataPick3 };
