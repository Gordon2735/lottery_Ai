/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use strict';

import { SidePanelTemplate } from './side-panel_template.js';
import { sidePanel_sharedStyles } from './side-panel_sharedStyles.js';
import { sidePanel_sharedHTML } from './side-panel_sharedHTML.js';
import { RegisterComponent } from '../../componentTools/general_helpers.js';
class SidePanel extends SidePanelTemplate {
    document: Document | null = this.ownerDocument;
    lotteryAnchor: HTMLElement | null | undefined;
    powerballAnchor: HTMLElement | null | undefined;
    mega_milAnchor: HTMLElement | null | undefined;
    cash5Anchor: HTMLElement | null | undefined;
    pick3Anchor: HTMLElement | null | undefined;
    pick4Anchor: HTMLElement | null | undefined;
    cash_popAnchor: HTMLElement | null | undefined;
    winningsAnchor: HTMLElement | null | undefined;
    today_numsAnchor: HTMLElement | null | undefined;
    historiesAnchor: HTMLElement | null | undefined;
    termsAnchor: HTMLElement | null | undefined;
    q_aAnchor: HTMLElement | null | undefined;
    securityAnchor: HTMLElement | null | undefined;
    aboutAnchor: HTMLElement | null | undefined;
    contactAnchor: HTMLElement | null | undefined;
    menuContainer: HTMLElement | undefined;

    constructor() {
        super();

        this.activateShadowDOM = false;

        let menuContainer: HTMLElement | undefined;
        this.menuContainer = menuContainer;
    }
    connectedCallback() {
        super.connectedCallback();

        conLog();

        class Menu {
            container: HTMLElement | null | undefined;
            big3: HTMLElement | null | undefined;
            vanilla: HTMLElement | null | undefined;
            isMenuShown: boolean;
            tsSymbol: HTMLElement | undefined | null;
            jsSymbol: HTMLElement | undefined | null;
            menuBody: HTMLBodyElement | null | undefined;
            menuContainer: HTMLElement | undefined;
            itemHTML: HTMLElement | string | undefined;

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
            elementID(doc: Document, element: string): HTMLElement | null {
                const getElement: HTMLElement | null =
                    doc.getElementById(element);
                return getElement;
            }

            constructor() {
                this.isMenuShown = false;

                const menuBody: HTMLBodyElement | null =
                    document.querySelector('body');
                this.menuContainer = menuBody?.querySelector('#container') as
                    | HTMLElement
                    | undefined;

                const itemHTML: HTMLElement | string | undefined = /*html*/ `
                    <div id="lotteryDiv" class="item">&#127915;&nbsp;&nbsp;&nbsp;<a id="lotteryA" class="lottery-a" 
						href="/">Lottery</a></div>
                    <div id="powerballDiv" class="item" >&#127915;&nbsp;&nbsp;&nbsp;<a id="powerballAnchor" class="powerball-a" href="/powerball">Powerball</a></div>
                    <div id="mega_milDiv" class="item">&#128203;&nbsp;&nbsp;&nbsp;<a id="mega_mil" class="mega_mil" 
						href="/mega_mil">Mega-Millions</a></div>
                    <div  id:="cash5Div"  class="item">&#128230;&nbsp;&nbsp;&nbsp;<a id="cash5Anchor" class="cash5-anchor"
                        href="/cash5">Cash 5</a></div>
                    <div  id:="pick3Div"  class="item">&#128211;&nbsp;&nbsp;&nbsp;<a id="pick3Anchor" class="pick3-anchor"
                        href="/pick3">Pick 3</a></div>
                    <div id="pick4Div" class="item">&#127915;&nbsp;&nbsp;&nbsp;<a id="pick4Anchor" class="pick4-anchor"
					 	href="/pick4">Pick 4<&#160|&#160></a></div>
                    <div id="cash_popDiv" class="item">&#127915;&nbsp;&nbsp;&nbsp;<a id="cash_popAnchor" class="cash_pop-anchor"
					 	href="/cash_pop">Cash Pop<&#160|&#160></a></div>
                    <div id="winningsDiv" class="item">&#127915;&nbsp;&nbsp;&nbsp;<a id="winningsAnchor" class="winnings-anchor" 
						href="/winnings">Lottery Ai Winnings<&#160|&#160></a></div>
                    <div id="today_numsDiv" class="item">&#127915;&nbsp;&nbsp;&nbsp;<a id="today_numsAnchor" class="today_nums-anchor" 
						href="/today_nums">Today's Numbers<&#160|&#160></a></div>
                    <div id="historiesDiv" class="item">&#127915;&nbsp;&nbsp;&nbsp;<a id="historiesAnchor" class="histories-anchor" 
						href="/histories">Win History<&#160|&#160></a></div>
                    <div id="termsDiv" class="item">&#127915;&nbsp;&nbsp;&nbsp;<a id="termsAnchor" class="terms-anchor" 
						href="/terms">Terms & Cond.<&#160|&#160></a></div>
                    <div id="q_aDiv" class="item">&#127915;&nbsp;&nbsp;&nbsp;<a id="q_aAnchor" class="q_a-anchor" 
						href="/q-a">Q & A<&#160|&#160></a></div>
                    <div id="securityDiv" class="item">&#127915;&nbsp;&nbsp;&nbsp;<a id="securityAnchor" class="security-anchor" 
						href="/security">Security<&#160|&#160></a></div>
                    <div id="aboutDiv" class="item">&#127915;&nbsp;&nbsp;&nbsp;<a id="aboutAnchor" class="about-anchor" 
						href="/about">About Us<&#160|&#160></a></div>
                    <div id="contactDiv" class="item">&#127915;&nbsp;&nbsp;&nbsp;<a id="contactAnchor" class="contact-anchor" 
						href="/contact">Contact Us<&#160|&#160></a></div>
                    <img id="big-3" src="/components/menu_components/sidePanel/sidePanel_resources/sidePanel_imgs/html-js-css_transparent.png" alt="big three languages image" class="big-3" />
                    <hr id="line" class="line" />
                    <img id="js-symbol" src="/components/menu_components/sidePanel/sidePanel_resources/sidePanel_imgs/javascript-transparent.png" alt="big three languages image" class="js-symbol" />
                    <img id="ts-symbol" src="/components/menu_components/sidePanel/sidePanel_resources/sidePanel_imgs/typescript-transparent_tall.png" alt="big three languages image" class="ts-symbol" />
                    <hr id="line2" class="line2" />
                    <h3 id="vanilla" class="vanilla">Vanilla is BEST!</h3>
                `;
                this.menuContainer?.insertAdjacentHTML('afterbegin', itemHTML);
            }
        }

        const menu: Menu = new Menu();
        const hamburgers: HTMLElement | null | undefined =
            document.getElementById('hamburgers');

        async function conLog(): Promise<void> {
            try {
                const conLogging: void = console.info(
                    'Side-Panel is Rendered :::: HooT™️ Webelistics®️ '
                );
                null;
                return conLogging;
            } catch (error: unknown) {
                console.error(
                    `
						%cThere appears to be an error in the side-panel component's conLog Function; ERROR: ${error}
					`,
                    'color: red; font-size: 0.85rem; font-weight: bold;'
                );
            }
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
        sliderContainer?.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault();

            menu.isMenuShown
                ? (menu.slide(),
                  (menu.isMenuShown = false),
                  event.stopPropagation())
                : (event.stopPropagation(),
                  console.info(`Menu-Shown: ${menu.isMenuShown}`));
            event.stopImmediatePropagation();
        });

        // Lottery Page
        const lotteryDiv: HTMLElement | null | undefined =
            document.getElementById('lotteryDiv');
        const lotteryAnchor: HTMLElement | null | undefined =
            document.getElementById('lotteryA');

        lotteryDiv?.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault();
            window.location.href = '/';
            menu.slide(), (menu.isMenuShown = false);
            event.stopPropagation();
        });
        lotteryAnchor?.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault();
            window.location.href = '/';
            menu.slide(), (menu.isMenuShown = false);
            event.stopPropagation();
        });

        // Powerball Game Page
        const powerballAnchor: HTMLElement | null | undefined =
            document.getElementById('powerballAnchor');

        powerballAnchor?.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault();
            window.location.href = '/powerball';
            menu.slide(), (menu.isMenuShown = false);
            event.stopPropagation();
        });

        // Mega-Millions Game Page
        const mega_milAnchor: HTMLElement | null | undefined =
            document.getElementById('mega_mil');

        mega_milAnchor?.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault();
            window.location.href = '/mega_mil';
            menu.slide(), (menu.isMenuShown = false);
            event.stopPropagation();
        });

        // Cash 5 Game Page
        const cash5Anchor: HTMLElement | null | undefined =
            document.getElementById('cash5Anchor');

        cash5Anchor?.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault();
            window.location.href = '/cash5';
            menu.slide(), (menu.isMenuShown = false);
            event.stopPropagation();
        });

        // Pick 3 Game Page
        const pick3Anchor: HTMLElement | null | undefined =
            document.getElementById('pick3Anchor');

        pick3Anchor?.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault();
            window.location.href = '/pick3';
            menu.slide(), (menu.isMenuShown = false);
            event.stopPropagation();
        });

        // Pick 4 Game Page
        const pick4Anchor: HTMLElement | null | undefined =
            document.getElementById('pick4Anchor');

        pick4Anchor?.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault();
            window.location.href = '/pick4';
            menu.slide(), (menu.isMenuShown = false);
            event.stopPropagation();
        });

        // Cash Pop Game Page
        const cash_popAnchor: HTMLElement | null | undefined =
            document.getElementById('cash_popAnchor');

        cash_popAnchor?.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault();
            window.location.href = '/pop';
            menu.slide(), (menu.isMenuShown = false);
            event.stopPropagation();
        });

        // Lottery Ai Past Winning Numbers Page
        const winningsAnchor: HTMLElement | null | undefined =
            document.getElementById('winningsAnchor');

        winningsAnchor?.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault();
            window.location.href = '/winnings';
            menu.slide(), (menu.isMenuShown = false);
            event.stopPropagation();
        });

        // Today's Winning Numbers Page
        const today_numsAnchor: HTMLElement | null | undefined =
            document.getElementById('today_numsAnchor');

        today_numsAnchor?.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault();
            window.location.href = '/today_nums';
            menu.slide(), (menu.isMenuShown = false);
            event.stopPropagation();
        });

        // Winning Numbers Histories Page
        const historiesAnchor: HTMLElement | null | undefined =
            document.getElementById('historiesAnchor');

        historiesAnchor?.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault();
            window.location.href = '/histories';
            menu.slide(), (menu.isMenuShown = false);
            event.stopPropagation();
        });

        // Terms & Conditions Page
        const termsAnchor: HTMLElement | null | undefined =
            document.getElementById('termsAnchor');

        termsAnchor?.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault();
            window.location.href = '/terms';
            menu.slide(), (menu.isMenuShown = false);
            event.stopPropagation();
        });

        // Questions & Answers Page
        const q_aAnchor: HTMLElement | null | undefined =
            document.getElementById('q_aAnchor');

        q_aAnchor?.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault();
            window.location.href = '/q_a';
            menu.slide(), (menu.isMenuShown = false);
            event.stopPropagation();
        });

        // Application Security Provisions Page
        const securityAnchor: HTMLElement | null | undefined =
            document.getElementById('securityAnchor');

        securityAnchor?.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault();
            window.location.href = '/security';
            menu.slide(), (menu.isMenuShown = false);
            event.stopPropagation();
        });

        // About Us Page
        const aboutAnchor: HTMLElement | null | undefined =
            document.getElementById('aboutAnchor');

        aboutAnchor?.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault();
            window.location.href = '/about';
            menu.slide(), (menu.isMenuShown = false);
            event.stopPropagation();
        });

        // Contact Us Page
        const contactAnchor: HTMLElement | null | undefined =
            document.getElementById('contactAnchor');

        contactAnchor?.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault();
            window.location.href = '/contact';
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
    public get template() {
        return /*html*/ `
            ${sidePanel_sharedHTML.panel} 
            <!-- ${sidePanel_sharedHTML.lottery} -->
            <style>${sidePanel_sharedStyles.panel}</style>
            
            `;
    }
}
RegisterComponent('side-panel', SidePanel);
