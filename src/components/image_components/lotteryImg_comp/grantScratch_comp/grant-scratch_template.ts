'use strict';

class GrantScratchTemplate extends HTMLElement {
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
}

export { GrantScratchTemplate };
