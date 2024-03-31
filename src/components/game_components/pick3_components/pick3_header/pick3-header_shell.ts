'use strict';

import { Pick3HeaderTemplate } from './pick3-header_template.js';
import {
	RegisterComponent,
	appendChildren,
	setAttributes
} from '../../../componentTools/general_helpers.js';
import { pick3_header_sharedStyles } from './pick3-header_sharedStyles.js';
import { pick3_header_sharedHTML } from './pick3-header_sharedHTML.js';

class Pick3HeaderShell extends Pick3HeaderTemplate {
	activateShadowDOM: boolean = false;
	head: HTMLHeadElement;
	scriptPick3Header: HTMLScriptElement;
	// root: ShadowRoot | null | undefined;

	public get template(): string {
		return /*html*/ `

            ${pick3_header_sharedHTML.shell}

            <style>
                ${pick3_header_sharedStyles.root}
                ${pick3_header_sharedStyles.shell}
            </style>

        `;
	}
	constructor() {
		super();

		this.activateShadowDOM = true;

		const head: HTMLHeadElement = document.getElementsByTagName('head')[0];
		const scriptPick3Header: HTMLScriptElement =
			document.createElement('script');

		this.head = head;
		this.scriptPick3Header = scriptPick3Header;

		setAttributes(scriptPick3Header, {
			type: 'module',
			src: 'src/components/game_components/pick3_components/pick3_header/pick3-header.js',
			content: 'text/javascript',
			crossorigin: 'anonymous'
		});
	}
	connectedCallback(): void {
		super.connectedCallback();

		appendChildren(this.head, [this.scriptPick3Header]);
	}
	disConnectedCallback(): void {
		super.disConnectedCallback();

		this.head.removeChild(this.scriptPick3Header);
	}
}
RegisterComponent('pick3-header_shell', Pick3HeaderShell);
