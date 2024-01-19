// Lottery Ai Header Template

'use strict';

export class LotAiHeaderTemplate {
	activateShadowDOM: boolean = false;
	root: ShadowRoot | null | undefined;

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
}
