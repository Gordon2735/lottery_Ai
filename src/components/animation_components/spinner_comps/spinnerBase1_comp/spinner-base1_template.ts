'use strict';

import { setAttributes } from '../../../componentTools/general_helpers.js';

class SpinnerBase1Template extends HTMLElement {
	activateShadowDOM: boolean = false;
	root: ShadowRoot | undefined | null;

	public set template(value: string) {
		this.template = value;
	}

	public get template(): string {
		return this.template;
	}

	connectedCallback(): void {
		if (this.activateShadowDOM === true)
			this.attachShadow({ mode: 'open' });

		this.render(this.template);
	}

	render(template: string): void {
		const root: ShadowRoot | null | undefined = this.shadowRoot;
		this.root = root;

		if (this.activateShadowDOM === false) {
			this.innerHTML = template || this.template;
			return;
		} else {
			this.root!.innerHTML = template || this.template;
			return;
		}
	}

	public progressSpinner(containerId: string) {
		let spinnerElement: HTMLElement | null = null;
		let isLoading: boolean = false;

		init(containerId);

		function startLoading(): void {
			if (isLoading || !spinnerElement) return;

			isLoading = true;
			spinnerElement.style.display = 'block';
			spinnerElement?.classList.add('loading');
		}

		function stopLoading(): void {
			if (!isLoading || !spinnerElement) return;

			isLoading = false;
			spinnerElement.style.display = 'none';
			spinnerElement?.classList.remove('loading');
		}

		function init(ID: string): void {
			try {
				// Initialize spinner element
				spinnerElement = document.createElement('label');
				setAttributes(spinnerElement, {
					id: 'spinnerBase1Label',
					class: 'spinner-base1-label'
				});

				// let slotId: string;
				// <slot name="getID"></slot>

				const loadHTML: string = /*html*/ `
					<progress id="spinnerBase1Progress" class="spinner-base1-progress"
						aria-label="Loading Page...">
					</progress>
				`;

				spinnerElement.innerHTML = loadHTML;

				document.getElementById(ID)?.appendChild(spinnerElement);
			} catch (error: unknown) {
				console.error(
					`
						Initializing Component Method 'progressSpinner' had ERROR: ${error} 
					`
				);
			}
		}

		return {
			startLoading,
			stopLoading
		};
	}
}

export { SpinnerBase1Template };
