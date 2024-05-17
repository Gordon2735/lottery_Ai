/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

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

async function searchFetchResponse(
    key: string,
    value: string[],
    element: HTMLElement | null
): Promise<void> {
    try {
        const response: Response = await fetch('/pick3Test', {
            method: 'POST'
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data: scrapeData = await response.json();

        console.log(`JSON.stringify(data): ${JSON.stringify(data)}`);

        searchScrapeDataNestedObjects(data, key, value, element);
    } catch (error: unknown) {
        console.error(`searchFetchResponse Error: ${error}`);
    } finally {
        console.log('searchFetchResponse function has been executed');
    }
}

function searchScrapeDataNestedObjects(
    data: scrapeData,
    key: string,
    value: string[],
    element: HTMLElement | null
): void {
    for (const prop in data) {
        if (typeof data[prop] === 'object') {
            const dataProp: scrapeData = data[prop] as unknown as scrapeData;
            // const dataProp = JSON.parse(data[prop]);
            // const dataProp = JSON.parse(`{"${prop}": "${data[prop]}"}`);
            searchScrapeDataNestedObjects(dataProp, key, value, element);
        } else if (typeof data[prop] === 'string' && data[prop].trim() === '') {
            continue; // Skip empty strings
        } else if (
            (prop === key && data[prop] === value[0]) ||
            value[1] ||
            value[2] ||
            value[3]
        ) {
            const dataProp = [JSON.parse(`{"${prop}": "${data[prop]}"}`)];

            const dataPropCollection: scrapeData[] = [];

            dataProp.map((value) => {
                dataPropCollection.push(value);
            });

            // dataPropCollection.push(...dataProp);

            element!.innerHTML = /*html*/ `
                <p id="dataPara" class="data-para">${[
                    dataPropCollection.entries().return?.arguments(),
                    dataPropCollection.entries().return?.arguments(),
                    dataPropCollection.entries().return?.arguments().prototype()
                ]}</p><br />
            `;
            console.log(
                'Found matching key-value pair:',
                dataPropCollection.values().next().value,
                dataPropCollection.entries().return?.arguments().prototype()
            );
            if (element != null) {
                element.textContent = `${[
                    dataPropCollection.entries().return?.arguments(),
                    dataPropCollection
                        .entries()
                        .return?.arguments()
                        .prototype(),
                    dataPropCollection.entries().return?.arguments().prototype()
                ]}
                `;
            }
        }
    }
}
