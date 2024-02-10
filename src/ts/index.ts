// TypeScript Index File

'use strict';

import {
	appendChildren,
	setAttributes
} from '../components/componentTools/general_helpers.js';

init();

console.log(
	`
		Lottery Ai Index file has fired!
	`
);

const currentLocation: Location = document.location;
const currentPage: string = currentLocation.hash;

console.info(
	`
		%c:::::::: TESTING * TESTING * TESTING ::::::::
			currentPage: ${currentPage}
	`,
	'color: chartreuse; font-size: 1.25em; font-weight: bold;'
);

async function init(): Promise<void> {
	try {
		const head: HTMLHeadElement = document.getElementsByTagName('head')[0];

		const scriptWrapperShell: HTMLScriptElement =
			document.createElement('script');
		setAttributes(scriptWrapperShell, {
			type: 'module',
			src: '/src/components/wrapper_components/indexWrapper_comp/index-wrapper_shell.js',
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

		appendChildren(head, [scriptWrapperShell, scriptCopyright]);

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
