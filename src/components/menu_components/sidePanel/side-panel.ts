/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use strict';

import { SidePanelTemplate } from './side-panel_template.js';
import { sidePanel_sharedStyles } from './side-panel_sharedStyles.js';
import { sidePanel_sharedHTML } from './side-panel_sharedHTML.js';
import { RegisterComponent } from '../../componentTools/general_helpers.js';

export class SidePanel extends SidePanelTemplate {
	override activateShadowDOM: boolean;
	// body: HTMLBodyElement | null | undefined;
	document: Document | null = this.ownerDocument;
	landingAnchor: HTMLElement | null | undefined;
	historyAnchor: HTMLElement | null | undefined;
	resumeAnchor: HTMLElement | null | undefined;
	projectsAnchor: HTMLElement | null | undefined;
	goalsAnchor: HTMLElement | null | undefined;
	codeExAnchor: HTMLElement | null | undefined;
	root: ShadowRoot | null;
	// declare root: ShadowRoot;
	menuContainer: HTMLElement | any;

	constructor() {
		super();

		const root: ShadowRoot | null = this.shadowRoot;

		this.activateShadowDOM = false;
		this.root = root;

		let menuContainer: HTMLElement | any;
		this.menuContainer = menuContainer;
	}
	override connectedCallback() {
		super.connectedCallback();

		class Menu {
			container: HTMLElement | null | undefined;
			big3: HTMLElement | null | undefined;
			vanilla: HTMLElement | null | undefined;
			isMenuShown: boolean;
			tsSymbol: HTMLElement | undefined | null;
			jsSymbol: HTMLElement | undefined | null;
			menuBody: HTMLBodyElement | null | undefined;
			menuContainer: HTMLElement | any;
			itemHTML: HTMLElement | string | undefined;
			declare root: ShadowRoot;

			slide(): void {
				this.container = document.getElementById('container');
				this.big3 = document.getElementById('big-3');
				this.vanilla = document.getElementById('vanilla');
				this.jsSymbol = document.getElementById('js-symbol');
				this.tsSymbol = document.getElementById('ts-symbol');

				!menu.isMenuShown
					? ((this.container!.style.transform = 'translateX(0px)'),
						(this.big3!.style.transform = 'rotate(360deg)'),
						(this.big3!.style.animation = 'FadeIn 2s'),
						(this.jsSymbol!.style.transform = 'rotate(360deg)'),
						(this.jsSymbol!.style.animation = 'FadeIn 2s'),
						(this.tsSymbol!.style.transform = 'rotate(360deg)'),
						(this.tsSymbol!.style.animation = 'FadeIn 2s'),
						(this.vanilla!.style.animation = 'FadeIn 4s'),
						(this.isMenuShown = true))
					: ((this.container!.style.transform = 'translateX(-210px)'),
						(this.big3!.style.transform = 'rotate(-360deg)'),
						(this.big3!.style.animation = 'FadeOut 500ms'),
						(this.jsSymbol!.style.transform = 'rotate(-360deg)'),
						(this.jsSymbol!.style.animation = 'FadeOut 500ms'),
						(this.tsSymbol!.style.transform = 'rotate(-360deg)'),
						(this.tsSymbol!.style.animation = 'FadeOut 500ms'),
						(this.vanilla!.style.animation = 'FadeOut 1s'),
						(this.isMenuShown = false));
			}
			elementID(doc: Document, element: string): HTMLElement | any {
				const getElement: HTMLElement | null =
					doc.getElementById(element);
				return getElement;
			}

			constructor() {
				this.isMenuShown = false;

				// const menuBody: ShadowRoot = this.shadowRoot;
				const menuBody: HTMLBodyElement | null =
					document.querySelector('body');
				this.menuContainer = menuBody?.querySelector('#container') as
					| HTMLElement
					| any;
				// menuBody?.querySelector('#container');

				const itemHTML: HTMLElement | string | undefined = /*html*/ `
                    <div id="landingDiv" class="item">&#127915;&nbsp;&nbsp;&nbsp;<a id="landingA" class="landing-a" href="/landing">Landing Page</a></div>
                    <div id="historyDiv" class="item" >&#127915;&nbsp;&nbsp;&nbsp;<a id="historyA" class="history-a" href="/history">Gordon's History</a></div>
                    <div class="item">&#128203;&nbsp;&nbsp;&nbsp;<a id="resume" class="resume" href="/resume">Resume</a></div>
                    <div  id:="projects"  class="item">&#128230;&nbsp;&nbsp;&nbsp;<a id="projectsAnchor" class="project-anchor"
                        href="/projects">Projects</a></div>
                    <div  id:="goals"  class="item">&#128211;&nbsp;&nbsp;&nbsp;<a id="goalsAnchor" class="goals-anchor"
                        href="/goals">Gordon's Goals</a></div>
                    <div class="item">&lambda;&nbsp;&nbsp;&nbsp;<a id="codeEx" class="code-ex">Code Examples &#160 <&#160|&#160></a></div>
                    <img id="big-3" src="/src/components/componentTools/resources/images/html-js-css_transparent.png"
                        alt="big three languages image" class="big-3">
                    <hr id="line" class="line">
                    <img id="js-symbol" src="/src/components/componentTools/resources/images/javascript-transparent.png"
                        alt="big three languages image" class="js-symbol">
                    <img id="ts-symbol" src="/src/components/componentTools/resources/images/typescript-transparent_tall.png"
                        alt="big three languages image" class="ts-symbol">
                    <hr id="line2" class="line2">
                    <h3 id="vanilla" class="vanilla">Vanilla is BEST!</h3>
                `;
				this.menuContainer?.insertAdjacentHTML('afterbegin', itemHTML);
			}
		}

		const menu: Menu = new Menu();
		const hamburgers: HTMLElement | null | undefined =
			document.getElementById('hamburgers');
		function conLog(): void {
			// const conLogging: void = console.log(
			//     'Side-Panel is Rendered :::: HooT™️ Webelistics®️ '
			// );null;
			// return conLogging;
			return;
		}

		hamburgers?.addEventListener(
			'click',
			(event: {
				preventDefault: () => void;
				stopPropagation: () => void;
			}) => {
				event.preventDefault();

				!menu.isMenuShown
					? (menu.slide(), conLog(), (menu.isMenuShown = true))
					: (menu.slide(), (menu.isMenuShown = false));

				event.stopPropagation();
				// console.log(event);
			}
		);
		const sliderContainer: HTMLElement | null | undefined =
			document.getElementById('container');
		sliderContainer?.addEventListener('click', (event) => {
			event.preventDefault();

			menu.isMenuShown
				? (menu.slide(),
					(menu.isMenuShown = false),
					event.stopPropagation())
				: (event.stopPropagation(),
					console.info(`Menu-Shown: ${menu.isMenuShown}`));
			event.stopImmediatePropagation();
		});

		// Landing Page
		const landingAnchor: HTMLElement | null | undefined =
			document.getElementById('landingA');

		landingAnchor?.addEventListener('click', (event) => {
			event.preventDefault();
			window.location.href = '/landing';
			menu.slide(), (menu.isMenuShown = false);
			event.stopPropagation();
		});

		// History Page
		const historyAnchor: HTMLElement | null | undefined =
			document.getElementById('historyA');

		historyAnchor?.addEventListener('click', (event) => {
			event.preventDefault();
			window.location.href = '/history';
			menu.slide(), (menu.isMenuShown = false);
			event.stopPropagation();
		});

		// Resume Page
		const resumeAnchor: HTMLElement | null | undefined =
			document.getElementById('resume');

		resumeAnchor?.addEventListener('click', (event) => {
			event.preventDefault();
			window.location.href = '/resume';
			menu.slide(), (menu.isMenuShown = false);
			event.stopPropagation();
		});

		// Projects Page
		const projectsAnchor: HTMLElement | null | undefined =
			document.getElementById('projectsAnchor');

		projectsAnchor?.addEventListener('click', (event) => {
			event.preventDefault();
			window.location.href = '/projects';
			menu.slide(), (menu.isMenuShown = false);
			event.stopPropagation();
		});

		// Goals Page
		const goalsAnchor: HTMLElement | null | undefined =
			document.getElementById('goalsAnchor');

		goalsAnchor?.addEventListener('click', (event) => {
			event.preventDefault();
			window.location.href = '/goals';
			menu.slide(), (menu.isMenuShown = false);
			event.stopPropagation();
		});

		// Code Examples Page
		const codeExAnchor: HTMLElement | null | undefined =
			document.getElementById('codeEx');

		codeExAnchor?.addEventListener('click', (event) => {
			event.preventDefault();
			window.location.href = '/code_examples';
			menu.slide(), (menu.isMenuShown = false);
			event.stopPropagation();
		});
	}

	static get observedAttributes() {
		return ['window.location.href'];
	}
	public attributeChangedCallback(
		name: string,
		_oldValue: string,
		_newValue: string
	) {
		_oldValue !== _newValue
			? console.info(`old location: ${_oldValue},
				${name} has a new location of: ${_newValue}
				which should be equal to: ${window.location} `)
			: console.info(`old location: ${_oldValue}`);
	}
	override get template() {
		return /*html*/ `
            ${sidePanel_sharedHTML.panel} 
            ${sidePanel_sharedHTML.home} 
            <style>${sidePanel_sharedStyles.panel}</style>
            
            `;
	}
}
RegisterComponent('side-panel', SidePanel);
// <style>${sidePanel_sharedStyles.panel}</style>
