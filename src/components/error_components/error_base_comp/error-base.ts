'use strict';

import { ErrorBaseTemplate } from './error-base_template.js';
import {
	RegisterComponent,
	setAttributes
} from '../../componentTools/general_helpers.js';
import { errorBase_sharedHTML } from './error-base_sharedHTML.js';
import { errorBase_sharedStyles } from './error-base_sharedStyles.js';

class ErrorBase extends ErrorBaseTemplate {
	error404H1: HTMLHeadingElement;
	error404Paragraph: HTMLParagraphElement;
	error404Anchor: HTMLAnchorElement;

	public get template(): string {
		return /*html*/ `

			${errorBase_sharedHTML.base}

			<style>

				${errorBase_sharedStyles.root}

			</style>
	    `;
	}

	static get observedAttributes(): string[] {
		return ['data-error_base'];
	}

	constructor() {
		super();

		this.activateShadowDOM = false;

		const error404H1: HTMLHeadingElement = document.createElement('h1');
		const error404Paragraph: HTMLParagraphElement =
			document.createElement('p');
		const error404Anchor: HTMLAnchorElement = document.createElement('a');

		this.error404H1 = error404H1;
		this.error404Paragraph = error404Paragraph;
		this.error404Anchor = error404Anchor;

		setAttributes(this.error404H1, {
			id: 'h1404',
			class: 'h1-404'
		});
		setAttributes(this.error404Paragraph, {
			id: 'p404',
			class: 'p-404'
		});
		setAttributes(this.error404Anchor, {
			href: '/',
			id: 'a404',
			class: 'a-404 browser-404__link'
		});

		return;
	}

	connectedCallback(): void {
		super.connectedCallback();

		try {
			console.info(
				`
				<browser-404> ConnectedCallback has fired!
				`
			);
			console.info(
				`
					The Browser404 Web Component has fired 
                    and is now active!            
					`
			);

			const currentURL: string = window.location.href;
			const error404_component = document.getElementById(
				'browser-404'
			) as HTMLElement;

			this.fetch404Data(currentURL, error404_component);

			return this.spanErrorCode(
				this.error404H1,
				this.error404Paragraph,
				this.error404Anchor
			);
		} catch (error: unknown) {
			console.error(
				`
					<browser-404> error in connectedCallback... 
					ERROR: ${(error as Error).message}
				`
			);
			return;
		}
	}

	async fetch404Data(url: string, component: HTMLElement): Promise<void> {
		try {
			const response: Response = await fetch(url);
			const status: number = response.status;

			switch (status) {
				case 500:
					if (component !== null) {
						component.style.display = 'block';
						component.dataset.error_404 = 'active';
					}
					break;
				default:
					if (component !== null) {
						component.style.display = 'none';
						component.dataset.error_404 = 'inActive';
					}
					break;
			}
			return;
		} catch (error: unknown) {
			console.error(
				`
					<browser-404> fetch404Data error... 
					ERROR: ${error}
					MESSAGE: ${(error as Error).message}
				`
			);
			return;
		}
	}

	public attributeChangedCallback(
		name: string,
		oldValue: string,
		newValue: string
	): void {
		console.info(
			`
				<browser-404> attributeChanged... 
				NAME: ${name}
				OLD VALUE: ${oldValue}
				NEW VALUE: ${newValue}
			`
		);
	}
}
RegisterComponent('error-base', ErrorBase);
