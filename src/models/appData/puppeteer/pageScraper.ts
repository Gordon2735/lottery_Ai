/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import puppeteer from 'puppeteer';
import fileName_date_time from '../../../tools/date_time/file_date_template.js';

const scraper = {
    url: 'https://www.sceducationlottery.com/Games/Pick3',
    async scrapers(browser: puppeteer.Browser): Promise<{
        scrapeData: Promise<
            Awaited<
                ReturnType<
                    () => {
                        drawEvent: string | null | undefined;
                        winNumbers: string;
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

        const screenshotDataTime: string = fileName_date_time;

        async function takeScreenshot(page: puppeteer.Page, name?: string) {
            return await page.screenshot({
                type: 'png',
                path: `./public/images/screenshots/${screenshotDataTime}_${name}.png`
            });
        }
        await takeScreenshot(page, 'pick3Screenshot');

        await page.waitForSelector('.col-md-2');

        const scrape = await page.evaluate(async () => {
            const elements: {
                drawEvent: string | null | undefined;
                winNumbers: string;
                fireNum: string | null | undefined;
            }[] = [];
            // | undefined = [{ drawEvent: '', winNumbers: '', fireNum: '' }];

            const elementsQuery: NodeListOf<HTMLElement> =
                document.querySelectorAll('.col-md-2');

            for (const element of elementsQuery) {
                const dataEvent: HTMLElement | null | undefined =
                    element?.querySelector<HTMLElement>('.numbers-date');
                const numbers: NodeListOf<HTMLElement> =
                    element.querySelectorAll<HTMLElement>('.number-circle');
                const fireballNumber: HTMLElement | null | undefined =
                    element.querySelector<HTMLElement>(
                        '.number-circle-fireball-pick3'
                    );

                let convertNumbers: string[];
                if (numbers == null) {
                    convertNumbers = [];
                } else {
                    convertNumbers = [
                        // numbers[0]?.textContent, // 1st number
                        // numbers[1]?.textContent, // 2nd number
                        // numbers[2]?.textContent // 3rd number
                        numbers[0]?.textContent ?? '', // 1st number
                        numbers[1]?.textContent ?? '', // 2nd number
                        numbers[2]?.textContent ?? '' // 3rd number
                    ];
                }

                if (dataEvent && convertNumbers && fireballNumber == null) {
                    null;
                } else {
                    elements.push({
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
            // await browser.close();

            return elements;
        });
        console.log({ scraper: scrape });

        return {
            scrapeData: scrape as unknown as Promise<
                Awaited<
                    ReturnType<
                        () => {
                            drawEvent: string | null | undefined;
                            winNumbers: string;
                            fireNum: string | null | undefined;
                        }[]
                    >
                >
            >
        };
    }
};
// export { scraper as default };
export default scraper;

// const preparePageForTests = async (page: any) => {
// 	const userAgent =
// 		'Mozilla/5.0 (X11; Linux x86_64)' +
// 		'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36';
// 	await page.setUserAgent(userAgent);
// };

// await preparePageForTests(page);
