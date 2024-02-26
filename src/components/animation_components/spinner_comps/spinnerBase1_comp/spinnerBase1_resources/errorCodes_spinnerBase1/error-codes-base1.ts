'use strict';

import { ErrorCodesBase1Template } from './error-codes-base1_template.js';
import { RegisterComponent } from '../../../../../componentTools/general_helpers.js';
import { ErrorCodesBase1Data } from './error-codes-base1_data.js';

class ErrorCodesBase1 extends ErrorCodesBase1Template {
	errorData: { [key: string]: string }[];
	spinnerErrorCodeIndex: string;

	constructor() {
		super();

		this.activateShadowDOM = false;

		const spinnerErrorCodeIndex: string = '0';
		this.spinnerErrorCodeIndex = spinnerErrorCodeIndex;

		const errorData = new ErrorCodesBase1Data();
		this.errorData = errorData.codeData;
	}

	public get template(): string {
		return /*html*/ `

			<span id="slotSpanErrorCode" class="slot-span-error-code">
				<slot id="slotErrorCode" name="error_code_base" class="slot-error-code">
					<p id="slotPErrorCode" class="slot-p-error-code">
						${this.spinnerErrorCodeIndex}
					</p>
				</slot>
			</span>

			<style>

				.slot-span-error-code {
					display: none;
				}

			</style>

		`;
	}

	static get observedAttributes(): string[] | undefined {
		try {
			return ['data-error_code_base'];
		} catch (error: unknown) {
			console.error(
				`
					Component <error-code-base1> 'observedAttributes' had ERROR: ${error} 
				`
			);
		}
	}

	connectedCallback(): void {
		super.connectedCallback();

		try {
			console.info(
				`
					The <error-code-base1> Component has Rendered and is now monitoring error codes!            
				`
			);

			return;
		} catch (error: unknown) {
			console.error(
				`
					Component <error-code-base1> 'connectedCallback' had ERROR: ${error} 
				`
			);
			return;
		}
	}

	public attributeChangedCallback(
		name: string[],
		oldValue: string,
		newValue: string
	): void {
		try {
			const getSlotParagraph: HTMLElement | null =
				document.getElementById('slotPErrorCode');
			const slotContent: string | null | undefined =
				getSlotParagraph?.textContent;

			console.info(`slotContent: ${slotContent}`);

			if (slotContent === null || slotContent === undefined) {
				console.error(
					`
						Component <error-code-base1>: The iteration query response failed its objective of sending the error code!
							SLOT CONTENT: ${slotContent} 
					`
				);
				return;
			}
			const compErrorCodeBase1: HTMLElement | null =
				document.getElementById('compErrorCodeBase1');

			const getDataSetValue: string | null | undefined =
				this.getAttribute('data-error_code_base');

			name = ['data-error_code_base'];

			if (getDataSetValue === null || getDataSetValue === undefined) {
				console.error(
					`
						Component <error-code-base1>: The iteration query response failed its objective of sending the error code!
						DATALIST VALUE: ${getDataSetValue} 
						`
				);
				return;
			}
			oldValue = getDataSetValue;

			compErrorCodeBase1?.setAttribute(
				'data-error_code_base',
				slotContent
			);
			const getNewDataSetValue: string | null | undefined =
				this.getAttribute('data-error_code_base');

			if (
				getNewDataSetValue === null ||
				getNewDataSetValue === undefined
			) {
				console.error(
					`
						Component <error-code-base1>: The iteration query response failed its objective of sending the error code!
						NEW DATALIST VALUE: ${getNewDataSetValue} 
					`
				);
				return;
			}
			newValue = getNewDataSetValue;

			const codeIndex: number = parseInt(newValue);

			this.errorData.forEach(
				(key: { [key: string]: string }, index: number) => {
					switch (key) {
						case this.errorData[codeIndex]:
							console.log(
								`%cComponent <error-code-base1>: The iteration query response has sent the error code! ${key}`,
								'color: chartreuse; font-size: 0.85em; font-weight: 700; background: black; padding: 0.50em;'
							);
							console.log(
								`%cCode Index: [${index}]`,
								'color: chartreuse; font-size: 0.85em; font-weight: 700; background: black; padding: 0.50em;'
							);
							break;
						case this.errorData[parseInt(oldValue)]:
							console.log(
								`%cComponent <error-code-base1>: The iteration query response has sent the error code! ${key}`,
								'color: chartreuse; font-size: 0.85em; font-weight: 700; background: black; padding: 0.50em;'
							);
							console.log(
								`%cCode Index: [${index}]`,
								'color: chartreuse; font-size: 0.85em; font-weight: 700; background: black; padding: 0.50em;'
							);
							break;
						default:
							console.info(
								`%cComponent <error-code-base1>: The iteration query response failed its objective of sending the error code!`,
								'color: red; font-size: 0.85em; font-weight: 700; background: black; padding: 0.50em;'
							);
					}
				}
			);
			console.info(
				`
					Component <error-code-base1> 'attributeChangedCallback': 
						name: ${name}, 
						oldValue: ${oldValue}, 
						newValue: ${newValue},
						  
					this.errorData[newValue]: ${this.errorData[parseInt(newValue)]}
				`
			);

			return;
		} catch (error: unknown) {
			console.error(
				`
					component <error-code-base1>: The iteration query response failed its objective
						of sending the error code!
						!
				`
			);
			return;
		}
	}

	disconnectedCallback(): void {
		const slotSpanErrorCode: HTMLElement | null =
			document.getElementById('slotSpanErrorCode');

		slotSpanErrorCode?.parentNode?.removeChild(slotSpanErrorCode);

		console.info(
			`DISCONNECTEDCALLBACK for error-codes-base1 : ${slotSpanErrorCode}`
		);
	}
}
RegisterComponent('error-codes-base1', ErrorCodesBase1);
