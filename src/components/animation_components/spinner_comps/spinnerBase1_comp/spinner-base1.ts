'use strict';

import { SpinnerBase1Template } from './spinner-base1_template.js';
import { RegisterComponent } from '../../../componentTools/general_helpers.js';
import { spinnerBase1_SharedHTML } from './spinner-base1_sharedHTML.js';
import { spinnerBase1_SharedStyles } from './spinner-base1_sharedStyles.js';

class SpinnerBase1 extends SpinnerBase1Template {
	activateShadowDOM: boolean = false;
	spanErrorCode: HTMLElement | null | undefined;

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

		return;
	}

	connectedCallback(): void {
		super.connectedCallback();

		console.info(`<spinner-base1> ConnectedCallback has fired!`);

		console.info(
			`
				The SpinnerBase1 Web Component has fired 
					and is now active/spinning!            
			`
		);

		document.addEventListener(
			'readystatechange',
			// 'DOMContentLoaded',
			async (event: Event): Promise<void> => {
				const state: DocumentReadyState = document.readyState;
				// event.preventDefault();
				console.info(`Document initial event: ${event.target}`);
				console.info(`Document initial state: ${state}`);

				const spinnerProgress = this.progressSpinner(
					'spinnerBase1Section'
				);
				const initialize: () => Promise<void> = spinnerProgress.init;

				await initialize();

				const spinnerComponent: HTMLElement | null =
					document.getElementById('spinnerBase');

				const getSpinnerLabel: HTMLLabelElement =
					document.getElementById(
						'spinnerBase1Label'
					) as HTMLLabelElement;

				// spinnerProgress.startLoading(getSpinnerLabel);
				spinnerComponent?.setAttribute(
					'data-section_spinner',
					'loading'
				);
				console.info(
					`
								The progressSpinner 'METHOD' from template is loading!
							`
				);

				console.info(`SPINNER: LOADING`);

				// Hide spinner when all resources are loaded
				window.addEventListener(
					'load',
					async function (): Promise<void> {
						setTimeout(() => {
							spinnerProgress?.stopLoading(getSpinnerLabel);
							spinnerComponent?.setAttribute(
								'data-section_spinner',
								'not-loading'
							);
							console.info(
								`
								Document complete state: ${state}
							`
							);
							console.info(`SPINNER: NOT-LOADING`);
							console.info(
								`
								The progressSpinner 'METHOD' from template
									has stop loading!
							`
							);
						}, 300);
						await Promise.resolve(state);
					}
				);
				return;
			}
		);
	}

	public attributeChangedCallback(
		name: string,
		oldValue: string,
		newValue: string
	): Promise<{ name: string; oldValue: string; newValue: string }> {
		try {
			console.log(
				`
					The attributeChangedCallback has fired!
					Dataset: ${name}
					Old value: ${oldValue}
					New value: ${newValue}
				`
			);

			return Promise.resolve({ name, oldValue, newValue });
		} catch (error: unknown) {
			console.error(
				`
					AttributeChangedCallback had ERROR: ${error}
				`
			);
			return Promise.reject(error);
		}
	}

	public progressSpinner(containerId: string): {
		startLoading: (element: HTMLLabelElement) => Promise<void>;
		stopLoading: (element: HTMLLabelElement | null) => Promise<void>;
		init: () => Promise<void>;
	} {
		let isLoading: boolean = false;

		async function startLoading(element: HTMLLabelElement): Promise<void> {
			try {
				if (isLoading === true) return;

				isLoading = true;
				console.info(`STARTLOADING isLoading: ${isLoading}`);
				if (isLoading) {
					element.style.display = 'block';
					element.classList.add('loading');
				}
				console.log(element?.style.display);
			} catch (error: unknown) {
				console.error(
					`
						Initializing Component Method 'progressSpinner startLoading' 
							had ERROR: ${error} 
					`
				);
				return await Promise.reject(error);
			}
			console.log(element?.style.display);
			return;
		}

		async function stopLoading(
			element: HTMLLabelElement | null
		): Promise<void> {
			try {
				isLoading = false;
				console.info(`STOPLOADING isLoading: ${isLoading}`);
				if (!isLoading) {
					element!.style.display = 'none';
					element?.classList.remove('loading');
				}

				return;
			} catch (error: unknown) {
				console.error(
					`
						Initializing Component Method 'progressSpinner stopLoading' 
							had ERROR: ${error} 
					`
				);
				return await Promise.reject(error);
			}
		}

		const init: () => Promise<void> = async () => {
			try {
				// Initialize spinner element
				const spinnerElement: HTMLLabelElement | null =
					document.getElementById(
						'spinnerBase1Label'
					) as HTMLLabelElement | null;

				const loadHTML: string = /*html*/ `
					<progress id="spinnerBase1Progress" class="spinner-base1-progress"
						aria-label="Loading Page...">
					</progress>
				`;

				if (spinnerElement) {
					spinnerElement.innerHTML = loadHTML;
					document
						.getElementById(containerId)
						?.appendChild(spinnerElement);
				}

				return await Promise.resolve();
			} catch (error: unknown) {
				console.error(
					`
					Initializing Component Method 'progressSpinner' had ERROR: ${error} 
				`
				);
				return await Promise.reject(error);
			}
		};
		return { startLoading, stopLoading, init };
	}

	disconnectedCallback(): void {
		this.spanErrorCode?.parentNode?.removeChild(this.spanErrorCode);

		document.removeEventListener(
			'readystatechange',
			async (event: Event): Promise<Event> => {
				try {
					console.info(
						`
							The readystatechange event listener 
								has been removed!
						`
					);
					event.stopPropagation();
					return await Promise.resolve(event);
				} catch (error: unknown) {
					console.error(
						`
							DisconnectedCallback had ERROR: ${error}
						`
					);
					return await Promise.reject(error);
				}
			}
		);

		console.info(
			`
				DISCONNECTEDCALLBACK for spinner-base1 : ${this.spanErrorCode}
			`
		);
		return;
	}
}
RegisterComponent('spinner-base1', SpinnerBase1);
