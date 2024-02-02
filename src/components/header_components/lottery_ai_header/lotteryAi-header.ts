'use strict';

import { RegisterComponent } from '../../componentTools/general_helpers.js';
import { LotAiHeaderTemplate } from './lotteryai-header_template.js';
import { lotteryAiHeaderSharedStyles } from './lotteryai-header_sharedStyles.js';
import { lotteryAiHeaderSharedHTML } from './lotteryai-header_sharedHTML.js';

export class LotteryAiHeader extends LotAiHeaderTemplate {
	constructor() {
		super();

		this.activateShadowDOM = false;
	}
	connectedCallback(): void {
		super.connectedCallback();
	}

	override get template(): string {
		return /*html*/ `
            ${lotteryAiHeaderSharedHTML.container}
            <style>
                ${lotteryAiHeaderSharedStyles.root}
                ${lotteryAiHeaderSharedStyles.container}
                ${lotteryAiHeaderSharedStyles.queries}
            </style>
        `;
	}
}
RegisterComponent('lotteryai-header', LotteryAiHeader);
