/* eslint-disable no-unused-vars */
('use strict');

import { Pick3ScrapeTemplate } from './pick3-scrape_template.js';
import { pick3Scrape_sharedStyles } from './pick3-scrape_sharedStyles.js';
import { pick3Scrape_sharedHTML } from './pick3-scrape_sharedHTML.js';
import {
    RegisterComponent
    // setAttributes,
    // appendChildren
} from '../../../componentTools/general_helpers.js';

// import { dataPick3 } from '../../../../models/appData/pick3ScrapingsData/pick3_scrapeData.js';
// import ScrapePicks from '../../../../models/appData/pick3ScrapingsData/01_scrapePick3.js';

class Pick3Scrape extends Pick3ScrapeTemplate {
    activateShadowDOM: boolean = false;
    body: HTMLBodyElement;
    pick3Scrape_dataset: string;
    _attribute: string | undefined;
    datasetAttributes: (
        _attribute: string | undefined
    ) => Promise<string | undefined>;
    currentAttribute: string;
    yieldScrape:
        | Promise<IteratorResult<6 | 5 | 1 | 4 | 3 | 2, undefined>>
        | undefined;

    // pullPick3Data: Promise<
    // 	{
    // 		dateTime: string | null | undefined;
    // 		winningNumbers: string[];
    // 		fireballNumber: string | null | undefined;
    // 	}[]
    // >;

    public get template(): string {
        return /*html*/ `

            ${pick3Scrape_sharedHTML.container}
			${pick3Scrape_sharedHTML.header}

            <style>
                ${pick3Scrape_sharedStyles.root}
            </style>
            <style>
                ${pick3Scrape_sharedStyles.container}
            </style>
            <style>
                ${pick3Scrape_sharedStyles.header}
            </style>
            <style>
                ${pick3Scrape_sharedStyles.numbers}
            </style>            

       `;
    }

    static get observedAttributes(): string[] {
        return ['data-scrape'];
    }

    constructor() {
        super();
        this.activateShadowDOM = false;

        const body: HTMLBodyElement = document.getElementsByTagName('body')[0];
        const pick3Scrape_dataset: string =
            this.getAttribute('data-scrape') || 'non-active';

        const currentAttribute: string | undefined = '';

        // const pullPick3Data: Promise<
        // 	{
        // 		dateTime: string | null | undefined;
        // 		winningNumbers: string[];
        // 		fireballNumber: string | null | undefined;
        // 	}[]
        // > = {} // dataPick3();

        const datasetAttributes = async (
            _attribute: string | undefined
        ): Promise<string | undefined> => {
            try {
                switch (_attribute) {
                    case 'non-active':
                        this.setAttribute('data-scrape', 'active');
                        console.info(
                            `
                            data-scrape was changed to 'active'
                        `
                        );
                        break;
                    case 'active':
                        this.setAttribute('data-scrape', 'non-active');
                        console.info(
                            `
                            data-scrape was changed to 'non-active'
                        `
                        );
                        break;
                    default:
                        this.setAttribute('data-scrape', 'non-active');
                        console.info(
                            `
                            Switch Statement defaulted and data-scrape was changed to 'active'
                        `
                        );
                        break;
                }
                Promise.resolve();
                return _attribute;
            } catch (error: unknown) {
                console.error(
                    `
                        datsetAttributes(attribute) Async Function's Try/Catch Error: ${error}
                    `
                );
                return Promise.reject(error);
            }
        };

        this.root = this.shadowRoot;
        this.body = body;
        this.pick3Scrape_dataset = pick3Scrape_dataset;
        this.datasetAttributes = datasetAttributes;
        this.currentAttribute = currentAttribute;
    }

    connectedCallback(): void {
        super.connectedCallback();

        document.addEventListener('DOMContentLoaded', () => {
            const drawPeriod: HTMLElement | null = document.getElementById(
                'paraPick3ScrapeDate'
            );
            const drawNumbers: HTMLElement | null = document.getElementById(
                'paraPick3ScrapeNumbers'
            );
            const drawFireball: HTMLElement | null = document.getElementById(
                'paraPick3ScrapeFireball'
            );
            const getButton: HTMLElement | null = document.getElementById(
                'pick3ScrapeDataButton'
            );

            getButton?.addEventListener('click', async () => {
                try {
                    const response: Response = await fetch('/pick3', {
                        method: 'POST'
                    });

                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }

                    const data: Promise<{
                        time3: string | undefined | null;
                        numbers: string | undefined | null;
                        fireball: string | undefined | null;
                    }> = await response.json();

                    console.log(await data);

                    const asyncIterator = {
                        [Symbol.asyncIterator]() {
                            let index = 0;
                            const values = Object.values(data);
                            return {
                                async next() {
                                    if (index < values.length) {
                                        return {
                                            value: values[index++],
                                            done: false
                                        };
                                    } else {
                                        return { done: true };
                                    }
                                }
                            };
                        }
                    };
                    for await (const value of asyncIterator) {
                        drawPeriod?.append(value.time3),
                            drawNumbers?.append(value.numbers),
                            drawFireball?.append(value.fireball),
                            console.info(
                                `
									time3: ${value.time3},
									numbers: ${value.numbers},
								   fireball: ${value.fireball}
								`
                            );
                    }
                    return;
                } catch (error: unknown) {
                    console.error(
                        `
							Pick 3 Scrape Component's getButton EventListener Error: ${error}
						`
                    );
                }
            });
        });

        const dataStart = async (valueStart: string): Promise<string> => {
            const nonActive = 'non-active';

            nonActive !== valueStart
                ? (valueStart = this.currentAttribute)
                : (valueStart = this.pick3Scrape_dataset);

            return valueStart;
        };
        const valueSwitch = dataStart(this.currentAttribute);

        this.datasetAttributes(valueSwitch as unknown as string);

        const winningNumbers: HTMLElement | null = document.getElementById(
            'paraPick3ScrapeNumbers'
        );
        const winningFireball: HTMLElement | null = document.getElementById(
            'para-pick3-scrape-fireball'
        );

        const dataArray: object[] = [];
        // this.pullPick3Data
        // 	.then((value) => {
        // 		dataArray.push(...value);
        // 	})
        // 	.catch((error) => {
        // 		console.error(error);
        // 	});
        dataArray.forEach((value) => {
            winningNumbers?.append(value.toString()[0][1]),
                winningFireball?.append(value.toString()[2]);
        });
    }
    public attributeChangedCallback(
        name: string,
        oldValue: string,
        newValue: string
    ): void {
        const datasetName: string | undefined = this.dataset.keyname;
        const getAttribute: string | null = this.getAttribute('pick3-scrape');

        if (name === datasetName) {
            switch (getAttribute) {
                case 'non-active':
                    console.info(
                        `
                            ${name} has dataset attribute value of non-active { 
                                newValue: ${newValue},
                                oldValue: ${oldValue},
                                getAttribute: ${getAttribute},
                                datasetName: ${datasetName}
                            }
                        `
                    );
                    break;
                case 'active':
                    console.info(
                        `
                            ${name} has dataset attribute value of active { 
                                newValue: ${newValue},
                                oldValue: ${oldValue},
                                getAttribute: ${getAttribute},
                                datasetName: ${datasetName}
                            }
                        `
                    );
                    break;
                default:
                    console.info(
                        `
                            ${name} has dataset attribute value @ Switch Statement Default { 
                                newValue: ${newValue},
                                oldValue: ${oldValue},
                                getAttribute: ${getAttribute},
                                datasetName: ${datasetName}
                            }
                        `
                    );
                    break;
            }
        }
        this.currentAttribute = newValue;
        return;
    }

    disConnectedCallback(): void {
        super.disConnectedCallback();
        return;
    }
}
RegisterComponent('pick3-scrape', Pick3Scrape);
