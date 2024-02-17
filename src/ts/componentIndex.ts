// TypeScript Index File

'use strict';

import {
	appendChildren,
	setAttributes
} from '../components/componentTools/general_helpers.js';

init();

const currentLocation: Location = document.location;
const currentPage: string = currentLocation.hash;

console.info(
	`
		%c:::::::: TESTING * TESTING * TESTING ::::::::
			The componentIndex.ts is testing 'currentPage': ${currentPage}
	`,
	'color: chartreuse; font-size: 1.25em; font-weight: bold;'
);

async function init(): Promise<void> {
	try {
		const head: HTMLHeadElement = document.getElementsByTagName('head')[0];

		const scriptCopyright: HTMLScriptElement =
			document.createElement('script');
		setAttributes(scriptCopyright, {
			type: 'module',
			src: '/src/components/legal_components/copyright_comp/copyright-webelistics.js',
			content: 'text/javascript',
			crossOrigin: 'anonymous'
		});

		await appendChildren(head, [scriptCopyright]);

		console.info(
			`%cThe componentIndex.ts file's "init()" Function has "FIRED"!`,
			`color: chartreuse; font-size: 1em; font-weight: bold; background-color: black; padding: 5px; border: 2px solid red;`
		);

		return;
	} catch (error: unknown) {
		console.error(
			`%c
				The componentIndex.ts file's "init()" Function has produced an Error!
		
				ERROR: ${error}
			`,
			`color: red; font-size: 2.25em; font-weight: bold; background-color: black; padding: 10px; border: 5px solid red;`
		);

		return;
	}
}
