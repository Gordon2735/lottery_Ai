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

	public progressSpinner(containerId: string): {
		startLoading(element: HTMLLabelElement | null): Promise<void>;
		stopLoading(element: HTMLLabelElement | null): Promise<void>;
		init: () => Promise<void>;
	} {
		let isLoading: boolean = false;

		async function startLoading(
			element: HTMLLabelElement | null
		): Promise<void> {
			try {
				if (isLoading === true) return;

				isLoading = true;
				console.info(`STARTLOADING isLoading: ${isLoading}`);
				if (element) {
					element.style.display = 'block';
					element.classList.add('loading');
				}

				Promise.resolve(element);
				return;
			} catch (error: unknown) {
				console.error(
					`
				Initializing Component Method 'progressSpinner startLoading' had ERROR: ${error} 
				`
				);
				return Promise.reject(error);
			}
		}

		async function stopLoading(
			element: HTMLLabelElement | null
		): Promise<void> {
			try {
				if (isLoading === false) return;

				isLoading = false;
				console.info(`STOPLOADING isLoading: ${isLoading}`);
				if (element) {
					element.style.display = 'none';
					element.classList.remove('loading');
				}

				Promise.resolve(element);
				return;
			} catch (error: unknown) {
				console.error(
					`
				Initializing Component Method 'progressSpinner stopLoading' had ERROR: ${error} 
				`
				);
				return Promise.reject(error);
			}
		}

		async function init(): Promise<void> {
			try {
				// Initialize spinner element
				const spinnerElement: HTMLLabelElement =
					document.createElement('label');

				await setAttributes(spinnerElement, {
					id: 'spinnerBase1Label',
					class: 'spinner-base1-label'
				});

				const loadHTML: string = /*html*/ `
					<progress id="spinnerBase1Progress" class="spinner-base1-progress"
						aria-label="Loading Page...">
					</progress>
				`;

				spinnerElement.innerHTML = loadHTML;

				document
					.getElementById(containerId)
					?.appendChild(spinnerElement);

				return Promise.resolve();
			} catch (error: unknown) {
				console.error(
					`
					Initializing Component Method 'progressSpinner' had ERROR: ${error} 
				`
				);
				return Promise.reject(error);
			}
		}
		Promise.resolve({ startLoading, stopLoading, init });
		return { startLoading, stopLoading, init };
	}
}

export { SpinnerBase1Template };
