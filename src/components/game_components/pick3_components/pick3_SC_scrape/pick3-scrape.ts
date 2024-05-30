/* eslint-disable no-unused-vars */
('use strict');

import { Pick3ScrapeTemplate } from './pick3-scrape_template.js';
import { pick3Scrape_sharedStyles } from './pick3-scrape_sharedStyles.js';
import { pick3Scrape_sharedHTML } from './pick3-scrape_sharedHTML.js';
import {
    RegisterComponent,
    setAttributes,
    insertStyle
    // appendChildren,
} from '../../../componentTools/general_helpers.js';
class Pick3Scrape extends Pick3ScrapeTemplate {
    activateShadowDOM: boolean = false;
    body: HTMLBodyElement;
    addingKeyframes: string;
    pick3Scrape_dataset: string;
    _attribute: string | undefined;
    datasetAttributes: (
        _attribute: string | undefined
    ) => Promise<string | undefined>;
    currentAttribute: string;
    data: scrapeData;

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

        const addingKeyframes: string = /*css*/ `
            @keyframes blink {
                0% {
                    color: hsla(90, 100%, 50%, 0.993);
                }
                25% {
                    color: hsla(90, 100%, 50%, 0.1193);
                }
                50% {
                    color: hsla(348, 83%, 47%, 0.993);
                }
                75% {
                    color: hsla(90, 100%, 50%, 0.1193); 
                }
                100% {
                    color: hsla(90, 100%, 50%, 0.993);
                }
            }
        `;

        const pick3Scrape_dataset: string =
            this.getAttribute('data-scrape') || 'non-active';

        const currentAttribute: string | undefined = '';

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
                        this.setAttribute('data-scrape', 'active');
                        console.info(
                            `
                            Switch Statement defaulted and data-scrape was changed to 'active'
                        `
                        );
                        break;
                }
                Promise.resolve();
                return;
            } catch (error: unknown) {
                console.error(
                    `
                        datsetAttributes(attribute) Async Function's Try/Catch Error: ${error}
                    `
                );
                return Promise.reject(error);
            }
        };

        const data: scrapeData = {};

        this.root = this.shadowRoot;
        this.body = body;
        this.addingKeyframes = addingKeyframes;
        this.pick3Scrape_dataset = pick3Scrape_dataset;
        this.currentAttribute = currentAttribute;
        this.datasetAttributes = datasetAttributes;
        this.data = data;
    }

    connectedCallback(): void {
        super.connectedCallback();

        const paraDrawNumbers: HTMLElement | null = document.getElementById(
            'paraPick3ScrapeNumbers'
        );
        const getButton: HTMLElement | null = document.getElementById(
            'pick3ScrapeDataButton'
        );

        const searchScrapeDataNestedObjects = async (
            data: scrapeData,
            key: string,
            value: string[],
            element: HTMLElement | null
        ): Promise<void> => {
            try {
                for (const prop in data) {
                    if (typeof data[prop] === 'object') {
                        const dataProp: scrapeData = data[
                            prop
                        ] as unknown as scrapeData;

                        await searchScrapeDataNestedObjects(
                            dataProp,
                            key,
                            value,
                            element
                        );
                    } else if (
                        typeof data[prop] === 'string' &&
                        data[prop].trim() === ''
                    ) {
                        continue; // Skip empty strings
                    } else if (
                        (prop === key && data[prop] === value[0]) ||
                        value[1] ||
                        value[2] ||
                        value[3]
                    ) {
                        const dataProp = [
                            JSON.parse(`{"${prop}": "${data[prop]}"}`)
                        ];

                        const dataPropCollection: scrapeData[] = [];

                        dataProp.map((value) => {
                            dataPropCollection.push(value);

                            const currentUL: HTMLElement | null =
                                document.createElement('ul');
                            const currentLi: HTMLElement | null =
                                document.createElement('li');

                            setAttributes(currentUL, {
                                id: 'currentUL',
                                class: 'current-UL'
                            });
                            setAttributes(currentLi, {
                                id: 'currentLi',
                                class: 'current-li',
                                style: `margin: 0.1em auto 0em auto; display: inline-flex; font-family: 'Black Han Sans', sans-serif; font-size: 1.2em; 
                                            color: hsla(174, 72%, 56%, 0.996); text-shadow: 2px 1px 6px hsla(0, 0%, 0%, 0.993);
                                            letter-spacing: 0.17em; justify: center; text-align: center;`
                            });
                            paraDrawNumbers?.appendChild(currentUL);
                            currentUL?.appendChild(currentLi);

                            switch (
                                value['drawEvent'] ||
                                value['winNumbers'] ||
                                value['fireNum']
                            ) {
                                case value.drawEvent:
                                    currentLi.innerHTML = JSON.stringify(
                                        value.drawEvent
                                    ).replace(/"/g, '');
                                    console.log(`Drawing: ${data.drawEvent}`);
                                    break;
                                case value.winNumbers:
                                    (currentLi.innerHTML = `${JSON.stringify(
                                        value.winNumbers
                                    ).replace(/"/g, '')}`),
                                        insertStyle(
                                            'currentLi',
                                            {
                                                animation:
                                                    'blink 1.5s linear infinite;'
                                            },
                                            currentLi,
                                            this.addingKeyframes
                                        );
                                    console.log(
                                        `Win: ${JSON.stringify(
                                            value.winNumbers
                                        )}`
                                    );
                                    break;
                                case value.fireNum:
                                    currentLi.innerHTML = `Fireball: ${JSON.stringify(
                                        value.fireNum
                                    ).replace(/"/g, '')}`;

                                    console.log(
                                        `Fireball: ${JSON.stringify(
                                            value.fireNum
                                        )}`
                                    );
                                    break;

                                default:
                                    console.warn(
                                        `
                                       WARNING: The Function searchScrapeDataNestedObjects()
                                       Scraped Data Map-Iterator Function's 
                                       Switch Statement deferred to Default... 
                                    `
                                    );
                            }
                        });
                    }
                }
            } catch (error: unknown) {
                console.error(
                    `Async Function searchScrapeDataNestedObjects() Error: ${error}`
                );
                return;
            } finally {
                console.log(
                    'Async Function searchScrapeDataNestedObjects() has been executed'
                );
            }
            return;
        };

        const searchFetchResponse = async (
            key: string,
            value: string[],
            element: HTMLElement | null
        ): Promise<void> => {
            try {
                const response: Response = await fetch('/pick3', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.data)
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                this.data = await response.json();

                // Recursive Function to ITERATE Fetched Data Object...
                searchScrapeDataNestedObjects(this.data, key, value, element);
            } catch (error: unknown) {
                console.error(`searchFetchResponse Error: ${error}`);
            } finally {
                console.log('searchFetchResponse function has been executed');
            }
        };

        getButton?.addEventListener('click', async () => {
            try {
                setTimeout(async () => {
                    await searchFetchResponse(
                        'scrapeData',
                        ['drawEvent', 'winNumbers', 'fireNum'],
                        paraDrawNumbers
                    );
                }, 1500);

                return;
            } catch (error: unknown) {
                console.error(`Button Event Listener Error: ${error}`);
                console.warn(`searchFetchResponse Error: ??`);
            } finally {
                console.log('searchFetchResponse function has been executed');
            }
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
    }
    public attributeChangedCallback(
        name: string,
        oldValue: string,
        newValue: string
    ): void {
        const datasetName: string | undefined = this.dataset.keyname;
        const getAttribute: string | null = this.getAttribute('data-scrape');

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
