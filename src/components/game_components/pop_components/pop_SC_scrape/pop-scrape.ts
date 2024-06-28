'use strict';

import { PopScrapeTemplate } from './pop-scrape_template.js';

import {
    RegisterComponent
    // setAttributes,
    // appendChildren
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

        this.root = this.shadowRoot;
        this.popScrape_dataset = popScrape_dataset;
        this.currentAttribute = currentAttribute;
        this.datasetAttributes = datasetAttributes;
        this.data = data;
    }
    connectedCallback() {
        super.connectedCallback();
    }
}
RegisterComponent('pop-scrape', PopScrape);
