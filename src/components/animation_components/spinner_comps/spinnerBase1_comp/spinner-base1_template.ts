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
		startLoading: () => Promise<void>;
		stopLoading: () => Promise<void>;
	} {
		let spinnerElement: HTMLElement | null = null;
		let isLoading: boolean = false;

		async function startLoading(): Promise<void> {
			try {
				if (isLoading || !spinnerElement) return;

				isLoading = true;
				spinnerElement.style.display = 'block';
				spinnerElement?.classList.add('loading');

				// return await new Promise(
				// 	(resolve: (value: void | PromiseLike<void>) => void) => {
				// 		resolve();
				// 	}
				// );
				return;
			} catch (error: unknown) {
				console.error(
					`
				Initializing Component Method 'progressSpinner startLoading' had ERROR: ${error} 
				`
				);
				return;
			}
		}

		async function stopLoading(): Promise<void> {
			try {
				if (!isLoading || !spinnerElement) return;

				isLoading = false;
				spinnerElement.style.display = 'none';
				spinnerElement?.classList.remove('loading');

				// return await new Promise(
				// 	(resolve: (value: void | PromiseLike<void>) => void) => {
				// 		resolve();
				// 	}
				// );
				return;
			} catch (error: unknown) {
				console.error(
					`
				Initializing Component Method 'progressSpinner stopLoading' had ERROR: ${error} 
				`
				);
				return;
			}
		}

		try {
			const spinnerBase1Label: HTMLElement | null =
				document.getElementById('spinnerBase1Label');

			if (spinnerBase1Label === null) {
				// Initialize spinner element
				spinnerElement = document.createElement('label');
				setAttributes(spinnerElement, {
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
			} else {
				null;
			}
		} catch (error: unknown) {
			console.error(
				`
				Initializing Component Method 'progressSpinner' had ERROR: ${error} 
				`
			);
		}
		return {
			startLoading,
			stopLoading
		};
	}
}

export { SpinnerBase1Template };
