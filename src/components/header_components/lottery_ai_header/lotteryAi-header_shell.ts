'use strict';

import {
	RegisterComponent,
	setAttributes,
	appendChildren
} from '../../componentTools/general_helpers.js';
import { LotAiHeaderTemplate } from './lotteryai-header_template.js';
import { lotteryAiHeaderSharedStyles } from './lotteryai-header_sharedStyles.js';
import { lotteryAiHeaderSharedHTML } from './lotteryai-header_sharedHTML.js';

class LotAiHeaderShell extends LotAiHeaderTemplate {
	head: HTMLHeadElement;
	scriptHeader: HTMLScriptElement;
	init: () => void;

	constructor() {
		super();

		this.activateShadowDOM = false;

		const head: HTMLHeadElement = document.getElementsByTagName('head')[0];
		const scriptHeader: HTMLScriptElement =
			document.createElement('script');

		setAttributes(scriptHeader, {
			type: 'module',
			src: '/src/components/header_components/lottery_ai_header/lotteryai-header.js',
			content: 'text/javascript',
			crossOrigin: 'anonymous'
		});

		this.head = head;
		this.scriptHeader = scriptHeader;

		const init: () => void = async (): Promise<void> => {
			try {
				return await appendChildren(this.head, [this.scriptHeader]);
			} catch (error: unknown) {
				console.error(
					`
						An error has occurred in the Lottery Ai Header "init()" Function :::: ERROR: ${error}
					`
				);
				return;
			}
		};
		this.init = init;
	}
	connectedCallback(): void {
		super.connectedCallback();

		this.init();

		console.info(
			`
				The Lottery Ai Header Shell component has been connected to the DOM!
			`
		);
	}

	override get template(): string {
		return /*html*/ `

            ${lotteryAiHeaderSharedHTML.shell}

            <style>
                ${lotteryAiHeaderSharedStyles.shell}
            </style>

        `;
	}
}
RegisterComponent('lotteryai-header_shell', LotAiHeaderShell);
