/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

const dragula = [] as any;

if (dragula) {
	const drg = dragula(
		Array.from(document.querySelectorAll('.js-drag-container'))
	);
	drg.on(
		'drop',
		(
			el: { getAttribute: (arg0: string) => any },
			target: {
				classList: { contains: (arg0: string) => any };
				style: { setProperty: (arg0: string, arg1: any) => void };
			},
			source: { appendChild: (arg0: any) => void },
			sibling: { tagName: string }
		) => {
			if (target.classList.contains('stage')) {
				const color: string = el.getAttribute('color');
				target.style.setProperty('--bg-color', color);

				if (
					sibling &&
					sibling.tagName.toLowerCase() === 'book-element'
				) {
					source.appendChild(sibling);
				}
			}
		}
	);
}

// Custom Element Definition
class BookElement extends HTMLElement {
	template: HTMLTemplateElement | null;
	attrName: string | undefined;
	color: string | undefined;
	constructor() {
		super();
		this.template = document.getElementById(
			'book-template'
		) as HTMLTemplateElement;

		if (this.template) {
			this.attachShadow({ mode: 'open' }).appendChild(
				this.template.content.cloneNode(true)
			);
		}
	}

	static get observedAttributes() {
		return ['color'];
	}

	attributeChangedCallback(
		attrName: string,
		oldValue: string,
		newValue: string
	) {
		if (newValue !== oldValue) {
			this.attrName = this.getAttribute(attrName) as string;
			this.update();
		}
	}

	connectedCallback() {
		this.update();
	}

	update() {
		if (this.color) {
			this.style.setProperty('--cover-color', this.color);
		}
	}
}

if ('customElements' in window) {
	customElements.define('book-element', BookElement);
}
