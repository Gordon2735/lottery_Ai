'use strict';

import { RegisterComponent } from '../../componentTools/general_helpers.js';
import { Browser404Template } from './browser-404_template.js';

class Browser404 extends Browser404Template {
	activateShadowDOM: boolean = false;
	spanErrorCode: HTMLElement | null | undefined;

	public get template(): string {
		return /*html*/ `
            ${this.spanErrorCode}
        `;
	}

	static get observedAttributes(): string[] {
		return ['data-section_404'];
	}

	constructor() {
		super();

		this.activateShadowDOM = false;

		return;
	}

	connectedCallback(): void {
		super.connectedCallback();

		console.info(`<browser-404> ConnectedCallback has fired!`);

		console.info(
			`
                The Browser404 Web Component has fired 
                    and is now active!            
            `
		);
	}
}
RegisterComponent('browser-404', Browser404);
