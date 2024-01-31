// TypeScript Index File

'use strict';

import {
	appendChildren,
	setAttributes
} from '../components/componentTools/general_helpers.js';

console.log('Lottery Ai Index');

const currentLocation: Location = document.location;
const currentPage: string = currentLocation.hash;

console.info(`currentPage: ${currentPage}`);

// const button: HTMLElement | null = document.getElementById('indexBtn');

// button?.addEventListener('click', (event: MouseEvent) => {
// 	event.preventDefault();
// 	console.log('indexBtn EventListener fired');
// 	window.location.href = '/register';
// });

const head: HTMLHeadElement = document.getElementsByTagName('head')[0];
// const indexerHeaderAi_shell: string = /*html*/ `
//     <script type="module" src="/src/components/header_components/lottery_ai_header/lotteryai-header_shell.js"
//         content="text/javascript">
//     </script>
// `;

const scriptHeader: HTMLScriptElement = document.createElement('script');
setAttributes(scriptHeader, {
	type: 'module',
	src: '/src/components/header_components/lottery_ai_header/lotteryai-header_shell.js',
	content: 'text/javascript',
	crossOrigin: 'anonymous'
});

// head.insertAdjacentHTML('beforeend', scriptHeader);

appendChildren(head, [scriptHeader]);
