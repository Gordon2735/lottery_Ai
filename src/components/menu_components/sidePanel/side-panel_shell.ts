'use strict';

import { SidePanelTemplate } from './side-panel_template.js';
import { sidePanel_sharedStyles } from './side-panel_sharedStyles.js';
import { sidePanel_sharedHTML } from './side-panel_sharedHTML.js';
import {
	RegisterComponent,
	setAttributes
} from '../../componentTools/general_helpers.js';

export class SidePanelShell extends SidePanelTemplate {
	override activateShadowDOM: boolean;
	head: HTMLHeadElement | null;
	scriptSidePanel: HTMLScriptElement;
	renderPanel!: {
		global: string;
		panel: string;
		landing: string;
		home: string;
		letter: string;
		about: string;
		projects: string;
		history: string;
		resume: string;
		codeEx: string;
		goals: string;
		contact: string;
		spacex: string;
		library: string;
		chatbox: string;
	};
	landing!: string;

	constructor() {
		super();

		this.activateShadowDOM = false;

		const head: HTMLHeadElement | null = document.getElementById('head');
		const scriptSidePanel: HTMLScriptElement =
			document.createElement('script');

		this.head = head;
		this.scriptSidePanel = scriptSidePanel;

		setAttributes(this.scriptSidePanel, {
			type: 'module',
			content: 'text/javascript',
			src: '/src/components/sidePanel/side-panel.js'
		});
	}
	override connectedCallback() {
		super.connectedCallback();

		const currentLocation = window.location.href;

		this.head?.appendChild(this.scriptSidePanel);
		this.sidePanelStyleMod(currentLocation);

		return;
	}
	public override sidePanelStyleMod(url: string) {
		super.sidePanelStyleMod(
			(this.locationHREF = url),
			(this.checkLocation = window.location.href),
			(this.landingHREF = `${sidePanel_sharedStyles.landing}`),
			(this.homeStartHREF = `${sidePanel_sharedStyles.home}`),
			(this.coverLetterHREF = `${sidePanel_sharedStyles.letter}`),
			(this.aboutHREF = `${sidePanel_sharedStyles.about}`),
			(this.projectsHREF = `${sidePanel_sharedStyles.projects}`),
			(this.projectsHtmlCode = `${sidePanel_sharedHTML.projects}`),
			(this.historyHREF = `${sidePanel_sharedStyles.history}`),
			(this.resumeHREF = `${sidePanel_sharedStyles.resume}`),
			(this.codeExHREF = `${sidePanel_sharedStyles.codeEx}`),
			(this.goalsHREF = `${sidePanel_sharedStyles.goals}`),
			(this.contactHREF = `${sidePanel_sharedStyles.contact}`),
			(this.spacexHREF = `${sidePanel_sharedStyles.spacex}`),
			(this.libraryHREF = `${sidePanel_sharedStyles.library}`),
			(this.chatboxHREF = `${sidePanel_sharedStyles.chatbox}`),
			this.renderStyles
		);

		return this.renderStyles;
	}
	override get template() {
		return /*html*/ `
        
            <style>${sidePanel_sharedStyles.global}</style>
            ${sidePanel_sharedHTML.shell}
        `;
	}
}
RegisterComponent('side-panel_shell', SidePanelShell);
