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

			const data: string | null = await response.text();

			if (data !== null && paragraph !== null) {
				paragraph.textContent = data;
			} else {
				data !== null && paragraph !== null
					? (paragraph.textContent = 'No Data Returned')
					: console.error('No Data Returned');
			}
		} catch (error: unknown) {
			console.error(`Button Event Listener Error: ${error}`);
		}
	});
});
