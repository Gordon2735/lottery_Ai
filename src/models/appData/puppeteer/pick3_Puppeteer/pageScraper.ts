/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import puppeteer from 'puppeteer';
import fileName_date_time from '../../../../tools/date_time/file_date_template.js';

//! Implement a Try-Catch in the Scraper
//! Refactor Code for this FILE...
const scraper = {
    url: 'https://www.sceducationlottery.com/Games/Pick3',
    async scrapers(browser: puppeteer.Browser): Promise<{
        scrapeData: Promise<
            Awaited<
                ReturnType<
                    () =>
                        | {
                              drawEvent: string | null | undefined;
                              winNumbers: string;
                              fireNum: string | null | undefined;
                          }[]
                        | null
                        | undefined
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
        await page.goto(this.url, {
            waitUntil: 'domcontentloaded'
        });

        const screenshotDataTime: string = fileName_date_time;

        async function takeScreenshot(page: puppeteer.Page, name?: string) {
            return await page.screenshot({
                type: 'png',
                path: `./public/images/screenshots/${screenshotDataTime}_${name}.png`
            });
        }
        await takeScreenshot(page, 'pick3Screenshot');

        await page.waitForSelector('.col-md-2', {
            timeout: 5000
        });

        const scrape = await page.evaluate(async () => {
            const elements: {
                drawEvent: string | null | undefined;
                winNumbers: string;
                fireNum: string | null | undefined;
            }[] = [];

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

                const convertNumbers: any[] = [];

                Array.from(numbers).map((number) => {
                    return convertNumbers.push(number.textContent);
                });

                elements.push({
                    drawEvent: dataEvent?.textContent,
                    winNumbers: convertNumbers.join(''),
                    fireNum: fireballNumber?.textContent
                });
            }
            const stringifyElements: string = JSON.stringify(elements);

            console.log(
                `						
    				stringifyElements: ${stringifyElements}                
    			`
            );

            return elements;
        });

        const scrapedCollection: {
            drawEvent: string | null | undefined;
            winNumbers: string;
            fireNum: string | null | undefined;
        }[] = [];

        const data: {
            drawEvent: string | null | undefined;
            winNumbers: string;
            fireNum: string | null | undefined;
        }[] = scrape;

        scrapedCollection.push(...data);

        // console.log(scrapedCollection);

        /* 
            Need to find why the following is never resolved and gives the error:        
            Could not resolve the browser instance =>  ProtocolError: Target.createTarget 
            timed out. Increase the 'protocolTimeout' setting in launch/connect calls for a 
            higher timeout if needed at <instance_members_initializer> 
            (file:///C:/Users/gordo/Desktop/Team_Webelistics_LLC/lottery_Ai/node_modules/puppeteer-core/
                lib/esm/puppeteer/common/CallbackRegistry.js:89:14)
        */
        Promise.resolve(await browser.close()),
            () => {
                try {
                    console.log(
                        `The 'browser.close()' Promise.resolve() has been solved...`
                    );
                } catch (error: unknown) {
                    console.error(
                        `
                        The Promise.resolve() with the browser.close() method has 
                        produced an error...
                        ERROR: ${error}
                    `
                    );
                }
            };
        return { scrapeData: scrapedCollection } as unknown as {
            scrapeData: Promise<
                Awaited<
                    ReturnType<
                        () =>
                            | {
                                  drawEvent: string | null | undefined;
                                  winNumbers: string;
                                  fireNum: string | null | undefined;
                              }[]
                            | null
                            | undefined
                    >
                >
            >;
        };
    }
};
export default scraper;

// const preparePageForTests = async (page: any) => {
// 	const userAgent =
// 		'Mozilla/5.0 (X11; Linux x86_64)' +
// 		'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36';
// 	await page.setUserAgent(userAgent);
// };

// await preparePageForTests(page);
