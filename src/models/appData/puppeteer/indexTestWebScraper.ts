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

            const data = await response.json();

            const dataNull = null;

            data !== null || !''
                ? paragraph !== null
                    ? (paragraph.textContent = JSON.stringify({ data }))
                    : dataNull
                : dataNull;

            // console.info(
            //     `
            //         JSON.stringify(data): ${JSON.stringify({ data })}
            //     `
            // );

            // const dataEvent = data[0];
            // const numbers = data[1];
            // const fireballNumber = data[2];

            // if (data !== null && paragraph !== null) {
            // if (paragraph !== null) {
            //     paragraph.textContent = `
            // 			Draw Time: ${dataEvent}
            // 			Winning Numbers: ${numbers}
            // 			Fireball Number: ${fireballNumber}
            // 		`;
            // }

            // console.info(
            //     `
            // 		indexTestWebScraper' data: ${JSON.stringify({ data })}
            // 	`
            // );
            return { data };
            // return [dataEvent, numbers, fireballNumber];
        } catch (error: unknown) {
            console.error(`Button Event Listener Error: ${error}`);
        }
    });
    return;
});
