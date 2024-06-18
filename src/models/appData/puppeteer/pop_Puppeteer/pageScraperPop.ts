'use strict';

import puppeteer from 'puppeteer';
import fileName_date_time from '../../../../tools/date_time/file_date_template.js';

//! Implement a Try-Catch in the Scraper
//! Refactor Code for this FILE...
const popScraper = {
    url: 'https://www.sceducationlottery.com/Games/CashPOP',
    async scrapers(browser: puppeteer.Browser): Promise<{
        scrapeData: Promise<
            Awaited<
                ReturnType<
                    () =>
                        | {
                              dataDate: string | null | undefined;
                              drawEvent: string | null | undefined;
                              popNumber: string | null | undefined;
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
        await takeScreenshot(page, 'popScreenshot');

        await page.waitForSelector('.col-md-2', {
            timeout: 5000
        });

        const scrape = await page.evaluate(async () => {
            const elements: {
                dataDate: string | null | undefined;
                drawEvent: string | null | undefined;
                popNumber: string | null | undefined;
            }[] = [];

            const elementsQuery: NodeListOf<HTMLElement> =
                document.querySelectorAll('.col-md-2');

            for (const element of elementsQuery) {
                const dataDate: HTMLElement | null | undefined =
                    element?.querySelector<HTMLElement>(
                        '.CashPOPDrawResultsFont_White'
                    );
                const dataEvent: HTMLElement | null | undefined =
                    element?.querySelector<HTMLElement>(
                        '.CashPOPDrawResultsFont_Purple'
                    );
                const popNumber: HTMLElement | null | undefined =
                    element.querySelector<HTMLElement>(
                        '.cashPOPInstructionCircle'
                    );

                elements.push({
                    dataDate: dataDate?.textContent,
                    drawEvent: dataEvent?.textContent,
                    popNumber: popNumber?.textContent
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
            dataDate: string | null | undefined;
            drawEvent: string | null | undefined;
            popNumber: string | null | undefined;
        }[] = [];

        const data: {
            dataDate: string | null | undefined;
            drawEvent: string | null | undefined;
            popNumber: string | null | undefined;
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
                                  dataDate: string | null | undefined;
                                  drawEvent: string | null | undefined;
                                  popNumber: string | null | undefined;
                              }[]
                            | null
                            | undefined
                    >
                >
            >;
        };
    }
};
export default popScraper;
