// Pick Three Header

'use strict';

import { Pick3HeaderTemplate } from './pick3-header_template.js';
import {
	RegisterComponent
	// appendChildren,
	// setAttributes
} from '../../../componentTools/general_helpers.js';
import { pick3_header_sharedStyles } from './pick3-header_sharedStyles.js';
import { pick3_header_sharedHTML } from './pick3-header_sharedHTML.js';

class Pick3Header extends Pick3HeaderTemplate {
	activateShadowDOM: boolean = false;
	body: HTMLBodyElement;
	pick3Component: HTMLElement | null | undefined;
	pick3Dataset: string | null;

	public get template(): string {
		return /*html*/ `

            ${pick3_header_sharedHTML.header}

            <style>
                ${pick3_header_sharedStyles.header}
            </style>

        `;
	}
	static get observedAttributes(): string[] {
		return ['dataPick3'];
	}

	constructor() {
		super();

		this.activateShadowDOM = true;

		const body: HTMLBodyElement = document.getElementsByTagName('body')[0];
		const pick3Component: HTMLElement | null =
			document.getElementById('pick3Header');

		this.body = body;
		this.pick3Component = pick3Component;

		const pick3Dataset: string | null =
			this.pick3Component?.dataset.pick3 ?? null;

		this.pick3Dataset = pick3Dataset;
	}
	connectedCallback(): void {
		super.connectedCallback();

		if (this.pick3Dataset === 'non-active') {
			// might have to use setAttributes here
			this.pick3Dataset = 'active';
			console.info('pick3Dataset is now active');
		} else {
			this.pick3Dataset = 'non-active';
			console.info('pick3Dataset is now non-active');
		}
	}

	public attributeChangedCallback(
		name: string,
		oldValue: string,
		newValue: string
	): void {
		if (name === 'dataPick3') {
			console.info(
				`
                    DATASET dataPick3 attribute has changed: 
                        oldValue: ${oldValue},
                        newValue: ${newValue} 
                `
			);
		}
	}

	disConnectedCallback(): void {
		super.disConnectedCallback();

		// this.body.removeChild(this.pick3Component)
	}
}
RegisterComponent('pick3-header', Pick3Header);
