/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import { StateObervableBase } from './state-observable_base.js';

class UserBitElement extends StateObervableBase {
	constructor() {
		super(`${null}`);
		this.template = document.createElement('template');
		this.template.innerHTML = `<slot name="in"></slot>
    <slot name="out"></slot>`;
		this.attachShadow({ mode: 'open' });
		this.shadowRoot?.append(this.template.content.cloneNode(true));

		this.inSlot = this.shadowRoot?.querySelector('slot[name="in"]');
		this.outSlot = this.shadowRoot?.querySelector('slot[name="out"]');
	}

	private inSlot: HTMLElement | null | undefined;
	private outSlot: HTMLElement | null | undefined;

	private template: HTMLTemplateElement;

	updateUI(data: any): void {
		if ((data as boolean) === true) {
			if (this.inSlot !== undefined && this.inSlot !== null) {
				this.inSlot.style.display = this.style.display;
			}
			if (this.outSlot !== undefined && this.outSlot !== null) {
				this.outSlot.style.display = 'none';
			}
		} else {
			if (this.inSlot !== undefined && this.inSlot !== null) {
				this.inSlot.style.display = 'none';
			}
			if (this.outSlot !== undefined && this.outSlot !== null) {
				this.outSlot.style.display = this.style.display;
			}
		}
	}
}
customElements.define('user-bit_base', UserBitElement);

export { UserBitElement };
