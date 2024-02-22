'use strict';

import { SpinnerBase1Template } from './spinner-base1_template.js';
import { RegisterComponent } from '../../../componentTools/general_helpers.js';
import { spinnerBase1_SharedHTML } from './spinner-base1_sharedHTML.js';
import { spinnerBase1_SharedStyles } from './spinner-base1_sharedStyles.js';

class SpinnerBase1 extends SpinnerBase1Template {
	activateShadowDOM: boolean = false;
	code_1: string;
	init: (wrapper: {
		startLoading: () => void;
		stopLoading: () => void;
	}) => Promise<void>;
	// spinner: { startLoading: () => void; stopLoading: () => void };

	public get template(): string {
		return /*html*/ `

			${spinnerBase1_SharedHTML.construct}

			<style>
				${spinnerBase1_SharedStyles.construct}
			</style>

            <style>
				${spinnerBase1_SharedStyles.queries}
            </style>

        `;
	}

	constructor() {
		super();

		this.activateShadowDOM = false;

		const code_1: string =
			'Possible Component Method "ProgressSpinner" failed!';

		// this.spinner = spinner;
		this.code_1 = code_1;

		const init: (wrapper: {
			startLoading: () => void;
			stopLoading: () => void;
		}) => Promise<void> = async (wrapper: {
			startLoading: () => void;
			stopLoading: () => void;
		}) => {
			try {
				wrapper.startLoading();

				console.info(
					`
					The progressSpinner 'METHOD' from template has loaded!            
					`
				);

				// Simulate a task that takes 5 seconds to complete
				setTimeout(() => {
					wrapper.stopLoading();
					console.info(
						`
							The progressSpinner 'METHOD' from template has stop loading!            
						`
					);
				}, 20000);
			} catch (error: unknown) {
				console.error(
					`
						${this.code_1},
						Initializing Component Method 'init' had ERROR: ${error} 
					`
				);
			}
		};
		this.init = init;
	}

	connectedCallback(): void {
		super.connectedCallback();

		const spinner: { startLoading: () => void; stopLoading: () => void } =
			this.progressSpinner('spinnerBase1Section');
		this.init(spinner);

		console.info(
			`
				The SpinnerBase1 Web Component has fired and is now active!            
			`
		);
	}
}
RegisterComponent('spinner-base1', SpinnerBase1);
