// Scrapes the pick 3 data from the website
// first I will Render results to page
// finally to save it to the MySQL database

'use strict';

import puppeteer from 'puppeteer';
// import puppeteer, { HTTPResponse } from 'puppeteer';
// import { setTimeout } from 'timers/promises';

class ScrapePicks {
    URL: string;
    colClass: string;
    timeClass: string;
    numsClass: string;
    numFireballClass: string;
    browser: puppeteer.Browser | undefined;
    page: puppeteer.Page | null | undefined;

    constructor(
        URL: string,
        colClass: string,
        timeClass: string,
        numsClass: string,
        numFireballClass: string
    ) {
        this.URL = URL;
        this.colClass = colClass;
        this.timeClass = timeClass;
        this.numsClass = numsClass;
        this.numFireballClass = numFireballClass;

        let browser: puppeteer.Browser | undefined;
        let page: puppeteer.Page | null | undefined;

        this.browser = browser;
        this.page = page;
    }

    async launchBrowser(): Promise<puppeteer.Page | undefined | null> {
        try {
            this.browser = await puppeteer.launch({
                headless: false,
                // defaultViewport: null,
                slowMo: 1250,
                devtools: true
            }); //as unknown as typeof puppeteer.Browser | null;

            this.page = await this.browser?.newPage();

            await this.page?.goto(this.URL);

            await this.page.waitForSelector(this.colClass);

            // await this.page?.setViewport({ width: 1920, height: 1080 });

            console.info(`hookUpSiteURL() || this.URL: ${this.URL}`);

            console.warn(`this.browser: ${JSON.stringify(this.browser)}`);
            console.warn(`this.page: ${JSON.stringify(this.page)}`);

            return this.page;
        } catch (error: unknown) {
            console.error(
                `
                Class ScrapePicks' launchBrowser Method error...
                ERROR MESSAGE: ${error}
                `
            );

            return;
            // return Promise.reject();
        }
    }
    async dataScrape(): Promise<
        | {
              datePeriod: string | undefined | null;
              numsSet: string | undefined | null;
              fireball: string | undefined | null;
              // eslint-disable-next-line no-mixed-spaces-and-tabs
          }[]
        | undefined
    > {
        try {
            const dataDetails:
                | {
                      datePeriod: string | undefined | null;
                      numsSet: string | undefined | null;
                      fireball: string | undefined | null;
                      // eslint-disable-next-line no-mixed-spaces-and-tabs
                  }[]
                | undefined = [];
            const data = await this.page?.$$eval(
                this.colClass,
                async (elements: Element[]) => {
                    elements.map(async (times: Element) => {
                        const pickTime: Element | null = times.querySelector(
                            this.timeClass
                        );
                        const numbersSpans: NodeListOf<Element> =
                            times.querySelectorAll(this.numsClass);

                        const getNumbers: string[] = Array.from(
                            numbersSpans
                        ).map((numbers: Element) => numbers.textContent ?? '');

                        const numFireball: Element | null = times.querySelector(
                            this.numFireballClass
                        );

                        const scrapedDetails = await this.page?.evaluate(() => {
                            const datePeriod: string | undefined | null =
                                pickTime?.textContent ?? null;
                            const numsSet: string | undefined | null =
                                getNumbers.join('');
                            const fireball: string | undefined | null =
                                numFireball?.textContent ?? null;

                            return {
                                datePeriod,
                                numsSet,
                                fireball
                            };
                        });

                        if (scrapedDetails !== undefined) {
                            dataDetails.push(scrapedDetails);
                        }
                        console.log(
                            `dataDetails.fireball: ${JSON.stringify(
                                scrapedDetails?.fireball
                            )}`
                        );
                        console.log(JSON.stringify(scrapedDetails));
                    });
                    console.log(`dataDetails: ${JSON.stringify(dataDetails)}`);
                    return dataDetails;
                }
            );

            await this.browser?.close();
            return data;
        } catch (error: unknown) {
            console.error(
                `
                Class ScrapePicks' dataScrape Method error...
                ERROR MESSAGE: ${error}
                `
            );
            return Promise.reject();
        } finally {
            Promise.resolve();
        }
    }
}
export { ScrapePicks as default };
