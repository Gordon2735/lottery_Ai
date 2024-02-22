'use strict';

import { SidePanelTemplate } from './side-panel_template.js';
import { sidePanel_sharedStyles } from './side-panel_sharedStyles.js';
import { sidePanel_sharedHTML } from './side-panel_sharedHTML.js';
import {
	RegisterComponent,
	setAttributes
} from '../../componentTools/general_helpers.js';

class SidePanelShell extends SidePanelTemplate {
	override activateShadowDOM: boolean;
	head: HTMLHeadElement | null;
	scriptSidePanel: HTMLScriptElement;
	renderPanel!: {
		lottery: string;
		powerball: string;
		megamil: string;
		cash5: string;
		pick3: string;
		pick4: string;
		cash_pop: string;
		winnings: string;
		today_nums: string;
		histories: string;
		terms: string;
		contact: string;
		security: string;
		q_a: string;
		about: string;
	};
	/*renderStyles: string | undefined;*/
	powerball!: string;

	constructor() {
		super();

		this.activateShadowDOM = false;

		const head: HTMLHeadElement = document.getElementsByTagName('head')[0];
		const scriptSidePanel: HTMLScriptElement =
			document.createElement('script');

		this.head = head;
		this.scriptSidePanel = scriptSidePanel;

		setAttributes(this.scriptSidePanel, {
			content: 'text/javascript',
			type: 'module',
			src: '/src/components/menu_components/sidePanel/side-panel.js',
			crossOrigin: 'anonymous'
		});
	}
	connectedCallback() {
		super.connectedCallback();

		const currentLocation = window.location.href;

		this.head?.appendChild(this.scriptSidePanel);
		this.sidePanelStyleMod(currentLocation);

		return;
	}
	public sidePanelStyleMod(url: string) {
		super.sidePanelStyleMod(
			(this.locationHREF = url),
			(this.checkLocation = window.location.href),
			(this.lotteryHREF = `${sidePanel_sharedStyles.lottery}`),
			(this.powerballHREF = `${sidePanel_sharedStyles.powerball}`),
			(this.mega_milHREF = `${sidePanel_sharedStyles.mega_mil}`),
			(this.cash5HREF = `${sidePanel_sharedStyles.cash5}`),
			(this.pick3HREF = `${sidePanel_sharedStyles.pick3}`),
			(this.pick4HREF = `${sidePanel_sharedStyles.pick4}`),
			(this.cash_popHREF = `${sidePanel_sharedStyles.cash_pop}`),
			(this.winningsHREF = `${sidePanel_sharedStyles.winnings}`),
			(this.today_numsHREF = `${sidePanel_sharedStyles.today_nums}`),
			(this.historiesHREF = `${sidePanel_sharedStyles.histories}`),
			(this.termsHREF = `${sidePanel_sharedStyles.terms}`),
			(this.securityHREF = `${sidePanel_sharedStyles.security}`),
			(this.q_aHREF = `${sidePanel_sharedStyles.q_a}`),
			(this.aboutHREF = `${sidePanel_sharedStyles.about}`),
			(this.contactHREF = `${sidePanel_sharedStyles.contact}`),
			this.renderStyles
		);

		return this.renderStyles;
	}
	public get template() {
		return /*html*/ `
        
            <style>
				${sidePanel_sharedStyles.global}
			</style>
            <style>
				${sidePanel_sharedStyles.root}
			</style>
            ${sidePanel_sharedHTML.shell}
        `;
	}
}
RegisterComponent('side-panel_shell', SidePanelShell);
