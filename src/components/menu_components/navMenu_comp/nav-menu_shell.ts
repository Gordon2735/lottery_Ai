'use strict';

import { NavMenuTemplate } from './nav-menu_template.js';
import {
	RegisterComponent,
	setAttributes,
	appendChildren
} from '../../componentTools/general_helpers.js';
import { navMenu_sharedHTML } from './nav-menu_sharedHTML.js';
import { navMenu_sharedStyles } from './nav-menu_sharedStyles.js';

class NavMenuShell extends NavMenuTemplate {
	activateShadowDOM: boolean;
	head: HTMLHeadElement;
	scriptNavMenu: HTMLScriptElement;
	init: () => Promise<void>;

	constructor() {
		super();

		this.activateShadowDOM = false;

		const head: HTMLHeadElement | null =
			document.getElementsByTagName('head')[0];

		const scriptNavMenu: HTMLScriptElement =
			document.createElement('script');
		setAttributes(scriptNavMenu, {
			type: 'module',
			src: '/src/components/menu_components/navMenu_comp/nav-menu.js',
			content: 'text/javascript',
			crossOrigin: 'anonymous'
		});

		this.head = head;
		this.scriptNavMenu = scriptNavMenu;

		const init: () => Promise<void> = async () => {
			try {
				// this.head.appendChild(this.scriptNavMenu);
				await appendChildren(this.head, [this.scriptNavMenu]);
			} catch (error: unknown) {
				console.error(
					`
						The Navigation Menu Component Shell Initialization "Init Function" 
							has experienced the following error: ${error}
					`
				);
			}
		};
		this.init = init;
	}

	connectedCallback(): void {
		super.connectedCallback();

		console.info('The Navigation Menu Component Shell is loaded!');

		this.init();
	}

	public get template(): string {
		return /*html*/ `
		
			${navMenu_sharedHTML.shell} 

			<style>
				${navMenu_sharedStyles.shell}
			</style>			
		
		`;
	}
}
RegisterComponent('nav-menu_shell', NavMenuShell);

export { NavMenuShell };
