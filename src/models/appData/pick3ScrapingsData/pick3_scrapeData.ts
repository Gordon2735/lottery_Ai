'use strict';
// @ts-check
import puppeteer from 'puppeteer';

async function dataPick3(): Promise<
	| {
			dateTime: string | null | undefined;
			combineNumbers: void;
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
		await page.setViewport({ width: 1920, height: 1080 });

		const data: Promise<
			{
				dateTime: string | null | undefined;
				combineNumbers: void;
				fireballNumber: string | null | undefined;
				// eslint-disable-next-line no-mixed-spaces-and-tabs
			}[]
		> = (await page.$$eval('.col-md-2', (elements: Element[]) =>
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
				const combineNumbers: void = numberCircleSpan.forEach(
					(number: Element) => {
						return [number.textContent ?? 0, number];
					}
				);

				const fireballNumber: string | null | undefined =
					spanFireball?.textContent;

				// const combineNumbers: string[] | null = Array.from(
				// 	winningNumbers
				// ).map((numbers: Element) => numbers.textContent ?? '');
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
		)) as unknown as Promise<
			{
				dateTime: string | null | undefined;
				combineNumbers: void;
				fireballNumber: string | null | undefined;
				// eslint-disable-next-line no-mixed-spaces-and-tabs
			}[]
		>;
		await new Promise((resolve) => setTimeout(resolve, 5000));

		await browser.close();

		return data as Promise<
			| {
					dateTime: string | null | undefined;
					combineNumbers: void;
					fireballNumber: string | null | undefined;
					// eslint-disable-next-line no-mixed-spaces-and-tabs
			  }[]
			| undefined
		>;
	} catch (error: unknown) {
		console.error(
			`
			Scraper Function "dataPick3()" try/catch block caught an error...
		`
		);

		Promise.reject() as Promise<void> | undefined;
	}
}
export { dataPick3 };
