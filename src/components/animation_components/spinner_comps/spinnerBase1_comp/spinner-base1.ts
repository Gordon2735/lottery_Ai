'use strict';

import { SpinnerBase1Template } from './spinner-base1_template.js';
import { RegisterComponent } from '../../../componentTools/general_helpers.js';
import { spinnerBase1_SharedHTML } from './spinner-base1_sharedHTML.js';
import { spinnerBase1_SharedStyles } from './spinner-base1_sharedStyles.js';

class SpinnerBase1 extends SpinnerBase1Template {
	activateShadowDOM: boolean = false;
	spinnerBase1: HTMLElement | null;
	// init: (wrapper: {
	// 	startLoading: () => void;
	// 	stopLoading: () => void;
	// }) => Promise<void>;

	public get template(): string {
		return /*html*/ `

			${spinnerBase1_SharedHTML.construct}
			${spinnerBase1_SharedHTML.logic}

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

		const spinnerBase1: HTMLElement | null =
			document.getElementById('spinnerBase1');
		this.spinnerBase1 = spinnerBase1;

		// const init: (spinnerProgress: {
		// 	startLoading: () => void;
		// 	stopLoading: () => void;
		// }) => Promise<void> = async (spinnerProgress: {
		// 	startLoading: () => void;
		// 	stopLoading: () => void;
		// }) => {
		// 	try {
		// 		// document.onreadystatechange = function () {
		// 		// 	const state: string | null = document.readyState;

		// 		// 	if (state === 'interactive') {
		// 		// 		spinnerProgress.startLoading();

		// 		// 		console.info(
		// 		// 			`The progressSpinner 'METHOD' from template is loading!`
		// 		// 		);
		// 		// 	} else if (state === 'complete') {
		// 		// 		setTimeout(() => {
		// 		// 			spinnerProgress.stopLoading();

		// 		// 			console.info(
		// 		// 				`
		// 		// 					The progressSpinner 'METHOD' from template has stop loading!
		// 		// 				`
		// 		// 			);
		// 		// 		}, 1000);
		// 		// 	}
		// 		// };
		// 		return;
		// 	} catch (error: unknown) {
		// 		console.error(
		// 			`
		// 				Initializing Component Method 'init' had ERROR: ${error}
		// 			`
		// 		);
		// 		return;
		// 	}
		// };
		// this.init = init;
	}

	static get observedAttributes(): string[] {
		return ['data-section_spinner'];
	}

	connectedCallback(): void {
		super.connectedCallback();

		console.info(`ConnectedCallback has fired!`);
		// this.init(spinner);

		console.info(
			`
				The SpinnerBase1 Web Component has fired and is now active/spinning!            
			`
		);
	}

	public attributeChangedCallback(
		name: string | undefined,
		oldValue: string,
		newValue: string
	): void {
		// try {
		// const getOldValue: string | null | undefined = this.getAttribute(
		// 	'data-section_spinner'
		// );
		// oldValue = getOldValue || '';

		console.log(
			`
					The attributeChangedCallback has fired!
					Dataset: ${name}
					Old value: ${oldValue}
					New value: ${newValue}
				`
		);

		const spinner: { startLoading: () => void; stopLoading: () => void } =
			this.progressSpinner('spinnerBase1Section');

		document.onreadystatechange = function () {
			const spinnerBase1: HTMLElement | null =
				document.getElementById('spinnerBase1');

			const state: string | null = document.readyState;

			console.info(`Document initial state: ${state}`);

			if (state === 'interactive') {
				spinner.startLoading();
				spinnerBase1?.setAttribute('data-section_spinner', 'loading');
				console.info(
					`The progressSpinner 'METHOD' from template is loading!`
				);
				console.info(`Document interactive state: ${state}`);
			} else if (state === 'complete') {
				setTimeout(() => {
					spinner.stopLoading();
					spinnerBase1?.setAttribute(
						'data-section_spinner',
						'not-loading'
					);
					console.info(`Document complete state: ${state}`);

					console.info(
						`
							The progressSpinner 'METHOD' from template has stop loading!            
						`
					);
				}, 1000);
			}
		};

		// const spinnerBase1Label: HTMLLabelElement | null =
		// 	document.querySelector('#spinnerBase1Label');

		// const spinnerBase1: HTMLElement | null =
		// 	document.getElementById('spinnerBase1');

		// spinnerBase1Label?.getAttribute('class') !== 'loading'
		// 	? spinnerBase1?.setAttribute('data-section_spinner', 'not-loading')
		// 	: spinnerBase1?.setAttribute('data-section_spinner', 'loading');
		// } catch (error: unknown) {
		// 	console.error(
		// 		`
		// 		Initializing Component Method 'attributeChangedCallback' had ERROR: ${error}
		// 	`
		// 	);
		// 	return;
		// }
	}

	disconnectedCallback(): void {
		const spanErrorCode: HTMLElement | null =
			document.getElementById('spanErrorCode');

		spanErrorCode?.parentNode?.removeChild(spanErrorCode);

		console.info(
			`DISCONNECTEDCALLBACK for spinner-base1 : ${spanErrorCode}`
		);
	}
}
RegisterComponent('spinner-base1', SpinnerBase1);
