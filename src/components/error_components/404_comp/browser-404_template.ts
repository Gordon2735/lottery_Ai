'use strict';

// Path: src/components/error_components/404_comp/browser-404_template.ts
import {
	setAttributes,
	appendChildren
} from '../../componentTools/general_helpers.js';

class Browser404Template extends HTMLElement {
	activateShadowDOM: boolean = false;
	root: ShadowRoot | undefined | null;

	public set template(value: string) {
		this.template = value;
	}

	public get template(): string {
		return this.template;
	}

	connectedCallback(): void {
		try {
			if (this.activateShadowDOM === true)
				this.attachShadow({ mode: 'open' });

			return this.render(this.template);
		} catch (error: unknown) {
			console.error(
				`
					<browser-404> error in connectedCallback... 
					ERROR: ${error}
					MESSAGE: ${(error as Error).message}
				`
			);
			return;
		}
	}

	render(template: string): void {
		try {
			const root: ShadowRoot | null | undefined = this.shadowRoot;
			this.root = root;

			if (this.activateShadowDOM === false) {
				this.innerHTML = template || this.template;
				return;
			} else {
				this.root!.innerHTML = template || this.template;
				return;
			}
		} catch (error: unknown) {
			console.error(
				`
					<browser-404> error in render... 
					ERROR: ${error}
					MESSAGE: ${(error as Error).message}
				`
			);
			return;
		}
	}

	spanErrorCode(
		h1Element: HTMLHeadingElement,
		pElement: HTMLParagraphElement,
		aElement: HTMLAnchorElement
	): void {
		try {
			const spanError: HTMLSpanElement = document.createElement('span');

			setAttributes(spanError, {
				id: 'spanErrorCode',
				class: 'span-error-code'
			});
			const sectionBrowser404: HTMLElement | null =
				document.getElementById('sectionH1404');

			h1Element.textContent = '404';
			pElement.textContent =
				'Sorry: Apparently, it seems the page you are looking for does not exist.';
			aElement.textContent = 'Return to the Lottery Ai home page';

			if (sectionBrowser404 === null) return;
			appendChildren(sectionBrowser404, [h1Element, pElement, aElement]);

			sectionBrowser404?.appendChild(spanError);

			return;
		} catch (error: unknown) {
			console.error(
				`
				<browser-404> error in spanErrorCode... 
				ERROR: ${error}
				MESSAGE: ${(error as Error).message}
			`
			);
			return;
		}
	}
}
export { Browser404Template };
