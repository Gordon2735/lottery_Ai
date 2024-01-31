'use strict';

import {
	RegisterComponent,
	setAttributes,
	appendChildren
} from '../../componentTools/general_helpers.js';
import { LotAiHeaderTemplate } from './lotteryai-header_template.js';
import { lotteryAiHeaderSharedStyles } from './lotteryai-header_sharedStyles.js';
import { lotteryAiHeaderSharedHTML } from './lotteryai-header_sharedHTML.js';

export class LotAiHeaderShell extends LotAiHeaderTemplate {
	head: HTMLHeadElement;
	scriptHeader: HTMLScriptElement;

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
	}
	connectedCallback(): void {
		super.connectedCallback();

		appendChildren(this.head, [this.scriptHeader]);
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
