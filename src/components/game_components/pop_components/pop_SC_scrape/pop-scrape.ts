'use strict';

import { PopScrapeTemplate } from './pop-scrape_template.js';

import {
    RegisterComponent,
    // setAttributes,
    appendChildren
} from '../../../componentTools/general_helpers.js';

// Pop Scrape Component
class PopScrape extends PopScrapeTemplate {
    activateShadowDOM: boolean = false;
    data: scrapeData;
    popScrape_dataset: string;
    datasetAttributes: (
        _attribute: string | undefined
    ) => Promise<string | undefined>;
    currentAttribute: string;
    getScrapeContainer: HTMLElement;
    getScrapeH1: HTMLHeadingElement;
    getScrapeNumbers: HTMLParagraphElement;
    // getScrapePopButton: HTMLButtonElement | undefined;
    response: Response | undefined;

    public get template(): string {
        return /*html*/ `
        
        
        `;
    }

    static get observedAttributes(): string[] {
        return ['data-scrapePop'];
    }

    constructor() {
        super();

        this.activateShadowDOM = false;

        const popScrape_dataset: string =
            this.getAttribute('data-scrapePop') || 'non-active';

        const currentAttribute: string | undefined = '';

        const datasetAttributes = async (
            _attribute: string | undefined
        ): Promise<string | undefined> => {
            try {
                switch (_attribute) {
                    case 'non-active':
                        this.setAttribute('data-scrapePop', 'active');
                        console.info(
                            `
                                data-scrapePop was changed to 'active'
                            `
                        );
                        break;
                    case 'active':
                        this.setAttribute('data-scrapePop', 'non-active');
                        console.info(
                            `
                                data-scrapePop was changed to 'non-active'
                            `
                        );
                        break;
                    default:
                        this.setAttribute('data-scrapePop', 'active');
                        console.info(
                            `
                                Switch Statement defaulted and data-scrapePop was changed to 'active'
                            `
                        );
                        break;
                }
                Promise.resolve();
                return;
            } catch (error: unknown) {
                console.error(
                    `
                        pop-scrape components datsetAttributes(attribute) Async Function's Try/Catch Error: ${error}
                    `
                );
                return Promise.reject(error);
            }
        };

        const data: scrapeData = {};
        const getScrapeContainer: HTMLElement =
            document.getElementById('scrapeContainer')!;
        const getScrapeH1 = document.getElementById(
            'scrapeH1'
        ) as HTMLHeadingElement;
        const getScrapeNumbers = document.getElementById(
            'scrapeNumbers'
        ) as HTMLParagraphElement;

        this.root = this.shadowRoot;
        this.popScrape_dataset = popScrape_dataset;
        this.currentAttribute = currentAttribute;
        this.datasetAttributes = datasetAttributes;
        this.data = data;
        this.getScrapeContainer = getScrapeContainer;
        this.getScrapeH1 = getScrapeH1;
        this.getScrapeNumbers = getScrapeNumbers;
    }
    override connectedCallback() {
        super.connectedCallback();

        const getScrapePopButton = document.getElementById(
            'getPopPredictionsBtn'
        ) as HTMLButtonElement;
        // this.getScrapePopButton = getScrapePopButton;

        //Create a Recursive Logic to iterate the Scraped Data.
        const getPopScrapeData = async (
            _data: scrapeData
        ): Promise<scrapeData> => {
            try {
                this.getScrapeH1.textContent = 'Current Pop Scraped Data';

                appendChildren(this.getScrapeContainer, [
                    this.getScrapeH1,
                    this.getScrapeNumbers
                ]);

                for (const prop in _data) {
                    if (typeof _data[prop] === 'object') {
                        const dataProp = _data[prop] as unknown as scrapeData;
                        await getPopScrapeData(dataProp);
                    } else {
                        // console.info(
                        //     `
                        //         prop: _data[prop]:   ${prop}: ${_data[prop]}
                        //     `
                        // );
                        const popSpan: HTMLSpanElement =
                            document.createElement('span');

                        const breakElement: HTMLBRElement =
                            document.createElement('br');

                        const line: HTMLHRElement =
                            document.createElement('hr');

                        popSpan.textContent = ` ${prop}:  ${_data[prop]}  `;

                        if (prop != 'popNumber') {
                            appendChildren(this.getScrapeNumbers, [
                                breakElement,
                                popSpan,
                                breakElement
                            ]);
                        } else {
                            appendChildren(this.getScrapeNumbers, [
                                breakElement,
                                popSpan,
                                breakElement,
                                breakElement,
                                line,
                                breakElement,
                                breakElement
                            ]);
                        }
                    }
                }
                return _data;
            } catch (error: unknown) {
                console.error(
                    `
                        pop-scrape components getPopScrapeData(data) Async Function's Try/Catch Error: ${error}
                    `
                );
                return Promise.reject(error);
            }

            //End of getPopScrapeData Function.
        };

        const scrapePopFetchResponse = async (
            _url: string
        ): Promise<Response> => {
            try {
                const response: Response = await fetch(_url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'javascript/json'
                        // 'Content-Type': 'application/json'
                    }
                    // body: JSON.stringify(this.data)
                });
                this.response = response;

                if (!this.response.ok) {
                    throw new Error(
                        `
                            pop-scrape components
                            scrapePopFetchResponse(url) Fetch Response Not Okay: ${response.status}
                        `
                    );
                }

                this.data = await this.response.json();

                const popData: Promise<scrapeData> = getPopScrapeData(
                    this.data
                );

                popData.then((data: scrapeData) => {
                    console.info(
                        `
                            pop-scrape components
                            popData.then(data: scrapeData) Data: ${data}
                        `
                    );
                });

                return popData as unknown as Response;
            } catch (error: unknown) {
                console.error(
                    `
                    pop-scrape components
                    scrapePopFetchResponse(url) Async Function's Try/Catch Error: ${error}
                    `
                );
                return Promise.reject(error);
            }
        };
        // this.getScrapePopButton?.addEventListener(
        getScrapePopButton?.addEventListener(
            'click',
            async (event: MouseEvent) => {
                try {
                    event.preventDefault();
                    console.info(
                        `getScrapePopButton.addEventListener('click')`
                    );
                    const url: string = '/pop';
                    const popFetch: Response =
                        await scrapePopFetchResponse(url);
                    console.info(
                        `
                        pop-scrape components
                        getScrapePopButton.addEventListener('click') Fetch Response: ${this.response}
                    `
                    );
                    return popFetch;
                } catch (error: unknown) {
                    console.error(
                        `
                        pop-scrape components
                        getScrapePopButton.addEventListener('click') Fetch Response Error: ${error}
                    `
                    );
                    console.warn(`scrapePopFetchResponse Error: ??`);
                    return Promise.reject(error);
                }
                // finally {
                //     console.info(
                //         `
                //         pop-scrape components
                //         getScrapePopButton.addEventListener('click') Fetch Response Finally Block: ???
                //     `
                //     );
                // }
            }
        );

        //End of connectedCallback Function
    }
}
RegisterComponent('pop-scrape', PopScrape);
