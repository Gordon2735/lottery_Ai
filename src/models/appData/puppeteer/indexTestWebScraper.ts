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
            const response: Response = await fetch('/pick3Test', {
                method: 'POST'
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // const data: {
            //     scrapeData: Promise<
            //         Awaited<
            //             ReturnType<
            //                 () => {
            //                     drawEvent: string | null | undefined;
            //                     winNumbers: string;
            //                     fireNum: string | null | undefined;
            //                 }[]
            //             >
            //         >
            //     >[];
            // }[] = [{ scrapeData: [Promise.resolve(await response.json())] }];

            const data: {
                scrapeData: Promise<
                    Awaited<
                        ReturnType<
                            () => {
                                drawEvent: string;
                                winNumbers: string;
                                fireNum: string;
                            }[]
                        >
                    >
                >[];
            }[] = await response.json();

            console.log(`JSON.stringify(data): ${JSON.stringify(data)}`);

            const dataString = data;

            const dataStringer = dataString[0].scrapeData.map((element) => {
                return element;
            });

            console.log(`dataStringer: ${dataStringer}`);

            // const dataStringer: Promise<
            //     {
            //         drawEvent: string;
            //         winNumbers: string;
            //         fireNum: string;
            //     }[]
            // >[] = await data.scrapeData;

            const dataEvent: string = 'dataEvent';
            const numbers: string = 'winNumbers';
            const fireballNumber: string = 'fireNum';

            const searchData = async (keyword: any) => {
                const result = dataStringer.filter(async (element) => {
                    switch (keyword) {
                        case 'drawEvent':
                            return (await element)[0].drawEvent;
                        case 'winNumbers':
                            return (await element)[0].winNumbers;
                        case 'fireNum':
                            return (await element)[0].fireNum;
                        default:
                            return null;
                    }
                });
                return result;
            };

            if (paragraph) {
                paragraph.textContent = `
            			Draw Time: ${await searchData(dataEvent)}
            			Winning Numbers: ${await searchData(numbers)}
            			Fireball Number: ${await searchData(fireballNumber)}
            		`;
            }
        } catch (error: unknown) {
            console.error(`Button Event Listener Error: ${error}`);
        }
    });
    return;
});
