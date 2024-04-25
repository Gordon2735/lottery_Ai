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

			const data: any[] = await response.json();

			const resolvedData: {
				draw: any;
				winNums: any;
				fBall: any;
			}[] = data.map((element: any) => ({
				draw: element.dataEvent,
				winNums: element.numbers,
				fBall: element.fireballNumber
			}));

			const dataEvent = resolvedData.slice(0, 1).join('');
			const numbers = resolvedData.slice(1, 2).join('');
			const fireballNumber = resolvedData.slice(2, 3).join('');

			if (data !== null && paragraph !== null) {
				paragraph.textContent = `
					Draw Time: ${dataEvent}
					Winning Numbers: ${numbers}
					Fireball Number: ${fireballNumber}

				`;
			} else {
				paragraph !== null
					? (paragraph.textContent = 'No Data Returned')
					: console.error(
							`
							No data returned from the server...
						`
						);
			}
			console.info(
				`
					indexTestWebScraper' data: ${data},
					resolvedData: ${resolvedData}
				
				`
			);
		} catch (error: unknown) {
			console.error(`Button Event Listener Error: ${error}`);
		}
	});
});
