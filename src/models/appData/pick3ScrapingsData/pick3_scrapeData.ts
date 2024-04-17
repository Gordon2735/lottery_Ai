'use strict';
// @ts-check
import puppeteer from 'puppeteer';
// import { setTimeout } from 'timers/promises';

async function dataPick3(): Promise<
	| Promise<{
			dateTime: string | null;
			combineNumbers: void;
			fireballNumber: string | null | undefined;
			// eslint-disable-next-line no-mixed-spaces-and-tabs
	  }>[]
	| undefined
> {
	// let data: Promise<{
	// 	dateTime: string | null;
	// 	combineNumbers: void;
	// 	fireballNumber: string | null | undefined;
	// }>[] = [];

	try {
		// Launch Browser and open a new BLANK PAGE
		const browser: puppeteer.Browser = await puppeteer.launch();
		const page: puppeteer.Page = await browser.newPage();

		// Navigate to SC Lottery Data URL
		await page.goto('https://www.sceducationlottery.com/Games/Pick3');

		// Set the Screen Size
		// await page.setViewport({ width: 1920, height: 1080 });
		const numbers = await page.waitForSelector('.number-circle');
		const numbersText = await page.evaluate(
			(numbers) => numbers?.textContent,
			numbers
		);
		console.log(`Numbers: ${numbersText}`); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

		// await setTimeout(5000).then(async () => {
		const data = await page.$$eval('.col-md-2', (elements: Element[]) =>
			elements.map(async (times: Element) => {
				// await page.waitForNavigation();
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
						return [number.textContent];
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

				console.log(
					`INSIDE DATA :::: combineNumbers: ${combineNumbers}`
				);

				return { dateTime, combineNumbers, fireballNumber };
			})
		);
		await Promise.all([
			// await page.waitForNavigation(),
			console.log(
				`${data.map(async (d) => {
					JSON.stringify((await d).dateTime),
						JSON.stringify((await d).combineNumbers),
						JSON.stringify((await d).fireballNumber);
				})}`
			)
		]);

		await browser.close();
		// response;
		return data;
		// });
	} catch (error: unknown) {
		console.error(
			`
			Scraper Function "dataPick3()" try/catch block caught an error...
		`
		);

		Promise.reject() as Promise<void> | undefined;
	}
	// await setTimeout(10000).then(async () => {
	// 	const scrapedData = await data;
	// 	console.log(
	// 		`
	// 		Scraping Function scrapping data...
	// 			DateTime: ${(await scrapedData[0]).dateTime}
	// 			combineNumbers: ${(await scrapedData[1]).combineNumbers}
	// 			Fireball Number: ${(await scrapedData[2]).fireballNumber}

	// 	`
	// 	);
	// 	return Promise.resolve(
	// 		[
	// 			(await data[0]).dateTime,
	// 			(await data[1]).combineNumbers,
	// 			(await data[2]).fireballNumber
	// 		] && data
	// 	);
	// });
	// return data;
}

export { dataPick3 };

// const response: [puppeteer.HTTPResponse | null, void] =
// 	await Promise.all([
// 		await page.waitForNavigation(),
// 		console.log(
// 			`${data.map(async (d) => {
// 				(await d).dateTime,
// 					(await d).combineNumbers,
// 					(await d).fireballNumber;
// 			})}`
// 		)
// 	]);
