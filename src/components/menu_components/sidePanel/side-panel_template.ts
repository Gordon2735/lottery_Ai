/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use strict';

import { sidePanel_sharedStyles } from './side-panel_sharedStyles.js';

class SidePanelTemplate extends HTMLElement {
	activateShadowDOM: boolean = false;
	root: ShadowRoot | undefined | null;
	sidePanel: HTMLElement | undefined;
	styleSheetMod: string | null | undefined;
	sidePanelContainer: HTMLElement | undefined;
	locationHREF: string | undefined;
	checkLocation: string | undefined;
	lotteryHREF: string | undefined;
	powerballHREF: string | undefined;
	mega_milHREF: string | undefined;
	cash5HREF: string | undefined;
	pick3HREF: string | undefined;
	pick4HREF: string | undefined;
	cash_popHREF: string | undefined;
	winningsHREF: string | undefined;
	today_numsHREF: string | undefined;
	historiesHREF: string | undefined;
	termsHREF: string | undefined;
	contactHREF: string | undefined;
	securityHREF: string | undefined;
	q_aHREF: string | undefined;
	aboutHREF: string | undefined;
	renderStyles: string | undefined;

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

	public sidePanelStyleMod(
		locationHREF: string,
		checkLocation: string,
		lotteryHREF: string,
		powerballHREF: string,
		mega_milHREF: string,
		cash5HREF: string,
		pick3HREF: string,
		pick4HREF: string,
		cash_popHREF: string,
		winningsHREF: string,
		today_numsHREF: string,
		historiesHREF: string,
		termsHREF: string,
		contactHREF: string,
		securityHREF: string,
		q_aHREF: string,
		aboutHREF: string,
		renderStyles: string | undefined
	) {
		this.locationHREF = locationHREF;
		this.checkLocation = checkLocation;
		this.lotteryHREF = lotteryHREF;
		this.powerballHREF = powerballHREF;
		this.mega_milHREF = mega_milHREF;
		this.cash5HREF = cash5HREF;
		this.pick3HREF = pick3HREF;
		this.pick4HREF = pick4HREF;
		this.cash_popHREF = cash_popHREF;
		this.winningsHREF = winningsHREF;
		this.today_numsHREF = today_numsHREF;
		this.historiesHREF = historiesHREF;
		this.termsHREF = termsHREF;
		this.contactHREF = contactHREF;
		this.securityHREF = securityHREF;
		this.q_aHREF = q_aHREF;
		this.aboutHREF = aboutHREF;
		this.renderStyles = renderStyles;

		const sidePanel = document.getElementById(
			'sidePanelShell'
		) as HTMLElement;
		this.sidePanel = sidePanel;

		const sidePanelContainer = document.getElementById(
			'container'
		) as HTMLElement;
		this.sidePanelContainer = sidePanelContainer;

		const localization: Location = document.location;

		this.locationHREF = localization.pathname;

		console.info(`locationHREF:  ${this.locationHREF}`);

		try {
			switch (this.locationHREF) {
				case '/':
					sidePanel_sharedStyles.panel = this.lotteryHREF;
					break;
				case '/powerball':
					sidePanel_sharedStyles.panel = this.powerballHREF;
					break;
				case '/mega_mil':
					sidePanel_sharedStyles.panel = this.mega_milHREF;
					break;
				case '/cash5':
					sidePanel_sharedStyles.panel = this.cash5HREF;
					break;
				case '/pick3':
					sidePanel_sharedStyles.panel = this.pick3HREF;
					break;
				case '/pick4':
					sidePanel_sharedStyles.panel = this.pick4HREF;
					break;
				case '/cash_pop':
					sidePanel_sharedStyles.panel = this.cash_popHREF;
					break;
				case '/winnings':
					sidePanel_sharedStyles.panel = this.winningsHREF;
					break;
				case '/today_nums':
					sidePanel_sharedStyles.panel = this.today_numsHREF;
					break;
				case '/histories':
					sidePanel_sharedStyles.panel = this.historiesHREF;
					break;
				case '/terms':
					sidePanel_sharedStyles.panel = this.termsHREF;
					break;
				case '/security':
					sidePanel_sharedStyles.panel = this.securityHREF;
					break;
				case '/q_a':
					sidePanel_sharedStyles.panel = this.q_aHREF;
					break;
				case '/about':
					sidePanel_sharedStyles.panel = this.aboutHREF;
					break;
				case '/contact':
					sidePanel_sharedStyles.panel = this.contactHREF;
					break;
				default:
					console.error(
						`%cNo Switch for styling Side-Panel Component with Specificity had an ERROR an switched to DEFAULT?`,
						'color: #ff0000; font-size: 0.75rem; font-weight: light;'
					);
					break;
			}
		} catch (error) {
			console.error(
				`%cThere has been an ERROR choosing Side-Panel Styles within the side-panel shell`,
				'color: #ff0000; font-size: 0.75rem; font-weight: light;'
			);
		}
		return;
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

export { SidePanelTemplate };
