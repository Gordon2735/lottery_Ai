'use strict';

import { NavMenuTemplate } from './nav-menu_template.js';
import { RegisterComponent } from '../../componentTools/general_helpers.js';
import { navMenu_sharedHTML } from './nav-menu_sharedHTML.js';
import { navMenu_sharedStyles } from './nav-menu_sharedStyles.js';

class NavMenu extends NavMenuTemplate {
	activateShadowDOM: boolean;
	navMenu: HTMLElement | null;
	clickToggle: HTMLAnchorElement | null;
	clickNavbarLinks: HTMLDivElement | null;
	viewportWidth: number;
	getViewportWidth: () => Promise<number>;
	currentWidth: () => Promise<number>;
	init: () => Promise<void>;

	static get observedAttributes(): string[] {
		return ['state'];
	}

	public get template(): string {
		return /* html */ `

            ${navMenu_sharedHTML.navbar}

            <style>
                ${navMenu_sharedStyles.navbar}
            </style>

            <style>
                ${navMenu_sharedStyles.navHamBtn}
            </style>

            <style>
                ${navMenu_sharedStyles.navbarQueries}
            </style>

        `;
	}

	constructor() {
		super();

		this.activateShadowDOM = false;

		const navMenu: HTMLElement | null =
			document.getElementById('navMenuComp');
		const clickToggle: HTMLAnchorElement | null | undefined =
			navMenu?.querySelector('.toggle-button');

		const clickNavbarLinks: HTMLDivElement | null =
			document.querySelector('.nav-menu-links');
		const viewportWidth: number = 0;

		this.navMenu = navMenu;
		this.clickToggle = clickToggle as HTMLAnchorElement | null;
		this.clickNavbarLinks = clickNavbarLinks;
		this.viewportWidth = viewportWidth;

		const getViewportWidth: () => Promise<
			number | void
		> = async (): Promise<number | void> => {
			try {
				this.viewportWidth =
					window.innerWidth || document.documentElement.clientWidth;

				return await Promise.resolve(this.viewportWidth);
			} catch (error: unknown) {
				console.error(
					`
                        %cError with the getViewportWidth function: **** ${error} ****
                    `,
					'color: red; font-weight: bold;'
				);
				return await Promise.reject(error);
			}
		};

		const currentWidth: () => Promise<
			number | undefined
		> = async (): Promise<number | undefined> => {
			try {
				const currentState = this.navMenu?.getAttribute('state');
				if (this.viewportWidth >= 140 && this.viewportWidth <= 399) {
					currentState !== 'micronized'
						? this.navMenu?.setAttribute('state', 'micronized')
						: null;
				} else if (
					this.viewportWidth >= 400 &&
					this.viewportWidth <= 1179
				) {
					currentState !== 'minimized'
						? this.navMenu?.setAttribute('state', 'minimized')
						: null;
				} else if (this.viewportWidth >= 1180) {
					currentState !== 'maximized'
						? this.navMenu?.setAttribute('state', 'maximized')
						: null;
				}
				return await Promise.resolve(undefined);
			} catch (error: unknown) {
				console.error(
					`
                        %cError with the current Width function: **** ${error} ****
                    `,
					'color: red; font-weight: bold;'
				);
				return await Promise.resolve(undefined);
			}
		};

		const init: () => Promise<void> = async (): Promise<void> => {
			try {
				await this.getViewportWidth();

				await this.currentWidth();
				return await Promise.resolve();
			} catch (error: unknown) {
				console.error(
					`
                        %cError with the init function: **** ${error} ****
                    `,
					'color: red; font-weight: bold;'
				);
				return await Promise.reject(error);
			}
		};

		this.getViewportWidth = getViewportWidth as () => Promise<number>;
		this.currentWidth = currentWidth as () => Promise<number>;
		this.init = init;
	}

	connectedCallback(): void {
		super.connectedCallback();

		this.init();

		console.info('The Navigation Menu Component is loaded!');

		const toggleClick: HTMLAnchorElement | null =
			document.querySelector('.toggle-button');

		toggleClick?.addEventListener(
			'click',
			async (event: MouseEvent): Promise<void> => {
				try {
					const navbarLinks: HTMLDivElement | null =
						document.querySelector('.nav-menu-links');
					navbarLinks?.classList.toggle('active');

					const active: boolean | undefined =
						navbarLinks?.classList.contains('active');

					active === true
						? console.log(
								`
							%c The BOOLEAN for the TOGGLE EVENT LISTENER is switching to true:  ${active}
						`,
								`color: Orange; font-weight: bold; font-family: 'One Day', sans-serif;`
							)
						: console.log(
								`
							%c The BOOLEAN for the TOGGLE EVENT LISTENER is switching to false:  ${active}
						`,
								`color: red; font-weight: bold; font-family: 'One Day', sans-serif;`
							);
					/*event.stopPropagation();*/
					console.info(
						`
							clickToggle Event Listener pinged: ${event.type}
						`
					);
					return await Promise.resolve();
				} catch (error: unknown) {
					console.error(
						`
								%cError with the click-toggle event listener: **** ${error} ****
								`,
						'color: red; font-weight: bold;'
					);
					return await Promise.reject(error);
				}
			}
		);

		window.addEventListener(
			'resize',
			async (event: Event): Promise<PageTransitionEvent> => {
				try {
					this.getViewportWidth();
					this.currentWidth();

					const getState: string | null | undefined =
						this.navMenu?.getAttribute('state');

					console.log(
						`
                            %c The Current Status of component State:  ${getState}
                        `,
						'color: chartreuse font-weight: bold;'
					);
					event.stopPropagation();
					return await Promise.resolve(event as PageTransitionEvent);
				} catch (error: unknown) {
					console.error(
						`
                            %cError with the window resize event listener: **** ${error} ****
                        `,
						'color: red; font-weight: bold;'
					);
					return await Promise.reject(error);
				}
			},
			false
		);
	}
	attributeChangedCallback(
		name: string,
		oldValue: string,
		newValue: string
	): Promise<{ name: string; oldValue: string; newValue: string }> {
		try {
			switch (newValue) {
				case 'maximized':
					console.info(
						`
                            %cMenuNavbar ${name}: Component State changed from ${oldValue} to ${newValue}
                        `,
						'color: gold; font-weight: bold;'
					);
					break;
				case 'minimized':
					console.info(
						`
                            %cMenuNavbar ${name}: Component State changed from ${oldValue} to ${newValue}
                        `,
						'color: fuchsia; font-weight: bold;'
					);
					break;
				case 'micronized':
					console.info(
						`
                            %cMenuNavbar ${name}: Component State changed from ${oldValue} to ${newValue}
                        `,
						'color: lime; font-weight: bold;'
					);
					break;
				case 'startup':
					console.warn(
						`
                            %cMenuNavbar ${name}: Component State has been initialized || ${newValue} ||
                        `,
						'color: cyan; font-weight: bold;'
					);
					break;
				default:
					console.error(
						`
                            %c attributeChangedCallback:  **** Error || Warning ****`,
						'color: red; font-weight: bold;'
					);
					break;
			}
			return Promise.resolve({ name, oldValue, newValue });
		} catch (error: unknown) {
			console.error(
				`
                    %c attributeChangedCallback:  **** Switch Error || Warning ****,
                    **** ${error} ****
                `,
				'color: red; font-weight: bold;'
			);
			return Promise.reject(error);
		}
	}

	disconnectedCallback(): Promise<unknown> {
		try {
			this.clickToggle?.removeEventListener(
				'click',
				(event: MouseEvent) => {
					this.clickNavbarLinks?.classList.toggle('active');
					event.stopPropagation();
				}
			);
			window.removeEventListener('resize', (event: UIEvent) => {
				event.stopPropagation();
			});
			return Promise.resolve(undefined);
		} catch (error: unknown) {
			console.error(
				`
                    %c disconnectedCallback:  **** Error || Warning ****,
                        **** ${error} ****
                `,
				'color: red; font-weight: bold;'
			);
			return Promise.reject(error);
		}
	}
}
RegisterComponent('nav-menu', NavMenu);
