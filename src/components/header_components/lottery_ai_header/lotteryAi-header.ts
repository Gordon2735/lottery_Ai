'use strict';

import { RegisterComponent } from '../../componentTools/general_helpers.js';
import { LotAiHeaderTemplate } from './lotteryai-header_template.js';
import { lotteryAiHeaderSharedStyles } from './lotteryai-header_sharedStyles.js';
import { lotteryAiHeaderSharedHTML } from './lotteryai-header_sharedHTML.js';

class LotteryAiHeader extends LotAiHeaderTemplate {
	constructor() {
		super();

		this.activateShadowDOM = false;
	}
	connectedCallback(): void {
		super.connectedCallback();

		console.info(
			`
				The Lottery Ai Header component has been connected to the DOM!
			`
		);
	}

	override get template(): string {
		return /*html*/ `

            ${lotteryAiHeaderSharedHTML.contents}

			<style>
				${lotteryAiHeaderSharedStyles.contents}
			</style>

			<style>
                ${lotteryAiHeaderSharedStyles.queries}
			</style>
        `;
	}
}
RegisterComponent('lotteryai-header', LotteryAiHeader);
