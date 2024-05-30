/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import {
    setAttributes,
    appendChildren,
    insertStyle
} from '../../../components/componentTools/general_helpers.js';

//! Refactor the Code for this FILE / Especially in the DOM Element creations
//! and most definitely the styles in the <li></li> element which upon each iteration
//! the li elements render repeating styles...

// Pick3 Test Web Scraper
document.addEventListener('DOMContentLoaded', async () => {
    const button: HTMLElement | null =
        document.getElementById('pick3TestButton1');

    const paragraph: HTMLElement | null =
        document.getElementById('pick3TestPara1');

    button?.addEventListener('click', async () => {
        try {
            return await searchFetchResponse(
                'scrapeData',
                ['drawEvent', 'winNumbers', 'fireNum'],
                paragraph
            );
        } catch (error: unknown) {
            console.error(`Button Event Listener Error: ${error}`);
        }
    });
    return;
});

let data: scrapeData = {};

async function searchFetchResponse(
    key: string,
    value: string[],
    element: HTMLElement | null
): Promise<void> {
    try {
        const response: Response = await fetch('/pick3Test', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        data = await response.json();

        // Recursive Function to ITERATE Fetched Data Object...
        searchScrapeDataNestedObjects(data, key, value, element);
    } catch (error: unknown) {
        console.error(`searchFetchResponse Error: ${error}`);
    } finally {
        console.log('searchFetchResponse function has been executed');
    }
}

// Set up Current Pick3 DOM Elements and Append them...
const container: HTMLElement | null = document.getElementById(
    'pick3TestMainContainer'
);
const section: HTMLElement | null = document.createElement('section');
const currentH1: HTMLElement | null = document.createElement('h1');
const currentH2: HTMLElement | null = document.createElement('h2');
const currentUL: HTMLElement | null = document.createElement('ul');

setAttributes(section, {
    id: 'currentPick3Section',
    class: 'current-pick3-section',
    style: 'justify: center; display: block; text-align: center; justify-self: center;'
});
setAttributes(currentH1, {
    id: 'currentH1',
    class: 'current-h1',
    style: 'margin: 2.7em auto 0em auto; color: hsla(196, 95%, 85%, 0.993);'
});
setAttributes(currentUL, {
    id: 'currentUL',
    class: 'current-UL'
});
(currentH1.innerHTML = 'Last Two Winning Pick3 Draws'), `<br />`;

container?.appendChild(section);
appendChildren(section, [currentH1, currentH2, currentUL]);

async function searchScrapeDataNestedObjects(
    data: scrapeData,
    key: string,
    value: string[],
    element: HTMLElement | null
): Promise<void> {
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
                const dataProp = [JSON.parse(`{"${prop}": "${data[prop]}"}`)];

                const dataPropCollection: scrapeData[] = [];

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

                dataProp.map((value) => {
                    dataPropCollection.push(value);

                    const currentLi: HTMLElement | null =
                        document.createElement('li');

                    setAttributes(currentLi, {
                        id: 'currentLi',
                        class: 'current-li',
                        style: `margin: 2.111em auto 0em auto; display: block; font-family: fantasy; font-size: 1.2em; 
                                    color: hsla(90, 100%, 50%, 0.993); text-shadow: 2px 1px 6px hsla(0, 0%, 0%, 0.993);
                                    letter-spacing: 0.15em; justify: center; text-align: center;`
                    });
                    currentUL?.appendChild(currentLi);

                    switch (
                        value['drawEvent'] ||
                        value['winNumbers'] ||
                        value['fireNum']
                    ) {
                        case value.drawEvent:
                            currentLi.innerHTML =
                                `Drawing: ` +
                                JSON.stringify(value.drawEvent).replace(
                                    /"/g,
                                    ''
                                );
                            console.log(`Drawing: ${data.drawEvent}`);
                            break;
                        case value.winNumbers:
                            (currentLi.innerHTML = `Win: ${JSON.stringify(
                                value.winNumbers
                            ).replace(/"/g, '')}`),
                                insertStyle(
                                    'currentLi',
                                    {
                                        animation: 'blink 1.5s linear infinite;'
                                    },
                                    currentLi,
                                    addingKeyframes
                                );
                            console.log(
                                `Win: ${JSON.stringify(value.winNumbers)}`
                            );
                            break;
                        case value.fireNum:
                            currentLi.innerHTML = `Fireball: ${JSON.stringify(
                                value.fireNum
                            ).replace(
                                /"/g,
                                ''
                            )} <br /> <hr style="margin: 1.777em auto 0em auto; color: hsla(180, 100%, 100%, 0.993); 
                                        width: 48%; filter: drop-shadow(0px 2px 7px hsla(0, 0%, 0%, 0.693));" />
                                <br />
                                `;

                            console.log(
                                `Fireball: ${JSON.stringify(value.fireNum)}`
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
}
