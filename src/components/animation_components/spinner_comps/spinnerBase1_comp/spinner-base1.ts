'use strict';

import { SpinnerBase1Template } from './spinner-base1_template.js';
import { RegisterComponent } from '../../../componentTools/general_helpers.js';
import { spinnerBase1_SharedHTML } from './spinner-base1_sharedHTML.js';
import { spinnerBase1_SharedStyles } from './spinner-base1_sharedStyles.js';

class SpinnerBase1 extends SpinnerBase1Template {
	activateShadowDOM: boolean = false;
	document: Document;
	state: string;
	spinner: {
		startLoading(element: HTMLLabelElement | null): Promise<void>;
		stopLoading(element: HTMLLabelElement | null): Promise<void>;
	};
	initialize: () => Promise<void>;
	spinnerLabel: HTMLLabelElement | null;
	spinnerBase1: HTMLElement | null;
	spanErrorCode: HTMLElement | null;

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

	static get observedAttributes(): string[] {
		return ['data-section_spinner'];
	}

	constructor() {
		super();

		this.activateShadowDOM = false;
		this.document = document;

		const state: DocumentReadyState = document.readyState;

		const spinner: {
			startLoading(element: HTMLLabelElement | null): Promise<void>;
			stopLoading(element: HTMLLabelElement | null): Promise<void>;
			init: () => Promise<void>;
		} = this.progressSpinner('spinnerBase1Section');

		const initialize: () => Promise<void> = spinner.init;

		const spinnerLabel: HTMLLabelElement | null =
			this.document.getElementById(
				'spinnerBase1Label'
			) as HTMLLabelElement | null;

		const spinnerBase1: HTMLElement | null =
			this.document.getElementById('spinnerBase1');

		const spanErrorCode: HTMLElement | null =
			document.getElementById('spanErrorCode');

		this.state = state;
		this.spinner = spinner;
		this.initialize = initialize;
		this.spinnerLabel = spinnerLabel;
		this.spinnerBase1 = spinnerBase1;
		this.spanErrorCode = spanErrorCode;
	}

	connectedCallback(): void {
		super.connectedCallback();

		// this.state;

		this.initialize();

		console.info(`ConnectedCallback has fired!`);

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
		console.log(
			`
					The attributeChangedCallback has fired!
					Dataset: ${name}
					Old value: ${oldValue}
					New value: ${newValue}
				`
		);

		window.document.addEventListener(
			'readystatechange',
			async (): Promise<void> => {
				try {
					console.info(`Document initial state: ${this.state}`);

					if (
						this.state === 'loading' ||
						this.state === 'interactive'
					) {
						await this.spinner.startLoading(this.spinnerLabel);
						this.spinnerBase1?.setAttribute(
							'data-section_spinner',
							'loading'
						);
						console.info(
							`The progressSpinner 'METHOD' from template is loading!`
						);
						console.info(
							`Document interactive state: ${this.state}`
						);
						console.info(`SPINNER: LOADING`);
						// return Promise.resolve();
						return;
					} else if (this.state === 'complete') {
						setTimeout(() => {
							this.spinner.stopLoading(this.spinnerLabel);
							this.spinnerBase1?.setAttribute(
								'data-section_spinner',
								'not-loading'
							);
							console.info(
								`Document complete state: ${this.state}`
							);
							console.info(`SPINNER: NOT-LOADING`);
							console.info(
								`
							The progressSpinner 'METHOD' from template has stop loading!            
						`
							);
						}, 300);
						return Promise.resolve();
					}
				} catch (error: unknown) {
					console.error(
						`
						Method 'attributeChangedCallback' readystatechange listener
							had ERROR: ${error}
					`
					);
					return Promise.reject(error);
				}
			}
		);
	}

	disconnectedCallback(): void {
		this.spanErrorCode?.parentNode?.removeChild(this.spanErrorCode);

		console.info(
			`DISCONNECTEDCALLBACK for spinner-base1 : ${this.spanErrorCode}`
		);
	}
}
RegisterComponent('spinner-base1', SpinnerBase1);

// init: (wrapper: {
// 	startLoading: () => void;
// 	stopLoading: () => void;
// }) => Promise<void>;
//
//
// this.init(spinner);
//
//
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

// try {
// const getOldValue: string | null | undefined = this.getAttribute(
// 	'data-section_spinner'
// );
// oldValue = getOldValue || '';
