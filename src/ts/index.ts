// TypeScript Index File

'use strict';

import {
	appendChildren,
	setAttributes
} from '../components/componentTools/general_helpers.js';

console.log('Lottery Ai Index');

init();

const currentLocation: Location = document.location;
const currentPage: string = currentLocation.hash;

console.info(`currentPage: ${currentPage}`);

async function init(): Promise<void> {
	try {
		const head: HTMLHeadElement = document.getElementsByTagName('head')[0];

		const scriptHeader: HTMLScriptElement =
			document.createElement('script');
		setAttributes(scriptHeader, {
			type: 'module',
			src: '/src/components/header_components/lottery_ai_header/lotteryai-header_shell.js',
			content: 'text/javascript',
			crossOrigin: 'anonymous'
		});

		const scriptCopyright: HTMLScriptElement =
			document.createElement('script');
		setAttributes(scriptCopyright, {
			type: 'module',
			src: '/src/components/legal_components/copyright_comp/copyright-webelistics.js',
			content: 'text/javascript',
			crossOrigin: 'anonymous'
		});

		await appendChildren(head, [scriptHeader, scriptCopyright]);

		console.info(
			`%cThe Index.ts file's "init()" Function has "FIRED"!`,
			`color: chartreuse; font-size: 1em; font-weight: bold; background-color: black; padding: 5px; border: 2px solid red;`
		);

		return;
	} catch (error) {
		console.error(
			`%c
				The Index.ts file's "init()" Function has produced an Error!
		
				ERROR: ${error}
			`,
			`color: red; font-size: 2.25em; font-weight: bold; background-color: black; padding: 10px; border: 5px solid red;`
		);

		return;
	}
}
