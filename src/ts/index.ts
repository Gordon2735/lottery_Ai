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
			The Index.ts is testing the 'currentPage': ${currentPage}
	`,
	'color: chartreuse; font-size: 1.25em; font-weight: bold;'
);

async function init(): Promise<void> {
	try {
		const head: HTMLHeadElement = document.getElementsByTagName('head')[0];

		const scriptSidePanelShell: HTMLScriptElement =
			document.createElement('script');
		setAttributes(scriptSidePanelShell, {
			type: 'module',
			src: '/src/components/menu_components/sidePanel/side-panel_shell.js',
			content: 'text/javascript',
			crossOrigin: 'anonymous'
		});

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

		// Append the all component 'flat & shell' scripts to the head tag
		await appendChildren(head, [
			scriptSidePanelShell,
			scriptWrapperShell,
			scriptCopyright
		]);

		console.info(
			`%cThe Index.ts file's "init()" Function has "FIRED"!`,
			`color: chartreuse; font-size: 1em; font-weight: bold; background-color: black; padding: 5px; border: 2px solid red;`
		);

		return;
	} catch (error: unknown) {
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
