// Pick 3 Main Component

'use strict';

import { Pick3GameTemplate } from './pick3-game_template.js';
import { pick3Game_sharedHTML } from './pick3-game_sharedHTML.js';
import { pick3Game_sharedStyles } from './pick3-game_sharedStyles.js';
import {
    RegisterComponent,
    setAttributes,
    appendChildren
} from '../../../componentTools/general_helpers.js';
import LCG, { pick3RandomInts } from '../pick3_logic/pick3_logic.js';

class Pick3Game extends Pick3GameTemplate {
    activateShadowDOM: boolean = false;
    head: HTMLHeadElement;
    body: HTMLBodyElement;
    scriptHeaderShell: HTMLScriptElement;
    getPick3Container: HTMLElement;
    lotteryAiPalmetto: HTMLImageElement;
    descripSection: HTMLElement;
    descripSectionPara: HTMLParagraphElement;
    breaks: HTMLBRElement;
    pick3Logo: HTMLImageElement;
    grabPick3NumberH1: HTMLHeadingElement;
    grab_StandardPick3H2: HTMLHeadingElement;
    private _StandardPick3Para: HTMLParagraphElement;
    private _StandardPick3Span: HTMLSpanElement;

    public get template(): string {
        return /*html*/ `
        
            ${pick3Game_sharedHTML.container}

            <style>
                ${pick3Game_sharedStyles.container}
            </style>    

            <style>
                ${pick3Game_sharedStyles.results}
            </style>

        `;
    }

    static get observedAttributes(): string[] {
        return ['data-transmit'];
    }

    constructor() {
        super();

        this.activateShadowDOM = false;

        const head: HTMLHeadElement = document.getElementsByTagName('head')[0];
        const body: HTMLBodyElement = document.getElementsByTagName('body')[0];
        const scriptHeaderShell: HTMLScriptElement =
            document.createElement('script');
        const getPick3Container: HTMLElement | null =
            document.createElement('section');
        const lotteryAiPalmetto: HTMLImageElement =
            document.createElement('img');
        const descripSection: HTMLElement | null =
            document.createElement('section');
        const descripSectionPara: HTMLParagraphElement | null =
            document.createElement('p');
        const breaks: HTMLBRElement | null = document.createElement('br');
        const pick3Logo: HTMLImageElement = document.createElement('img');
        const grabPick3NumberH1: HTMLHeadingElement | null =
            document.createElement('h1');
        const grab_StandardPick3H2: HTMLHeadingElement =
            document.createElement('h2');
        const _StandardPick3Para: HTMLParagraphElement | null =
            document.createElement('p');
        const _StandardPick3Span: HTMLSpanElement | null =
            document.createElement('span');

        this.head = head;
        this.body = body;
        this.scriptHeaderShell = scriptHeaderShell;
        this.getPick3Container = getPick3Container;
        this.lotteryAiPalmetto = lotteryAiPalmetto;
        this.descripSection = descripSection;
        this.descripSectionPara = descripSectionPara;
        this.breaks = breaks;
        this.pick3Logo = pick3Logo;
        this.grabPick3NumberH1 = grabPick3NumberH1;
        this.grab_StandardPick3H2 = grab_StandardPick3H2;
        this._StandardPick3Para = _StandardPick3Para;
        this._StandardPick3Span = _StandardPick3Span;

        setAttributes(this.scriptHeaderShell, {
            type: 'module',
            src: '/src/components/header_components/lottery_ai_header/lotteryai-header_shell.js',
            content: 'text/javascript',
            crossOrigin: 'anonymous'
        });
        setAttributes(this.getPick3Container, {
            id: 'getPick3Container',
            class: 'get-pick3-container'
        });
        setAttributes(this.lotteryAiPalmetto, {
            src: '/components/game_components/pick3_components/pick3_resources/images/lotteryAi_logo_TRANS-AQUA.png',
            id: 'lotteryAiPalmetto',
            class: 'lottery-Ai-palmetto'
        });
        setAttributes(this.descripSection, {
            id: 'descripSection',
            class: 'descrip-section'
        });
        setAttributes(this.descripSectionPara, {
            id: 'descripSectionPara',
            class: 'descrip-section-para'
        });
        setAttributes(this.breaks, {
            id: 'this.breaks',
            class: 'this.breaks'
        });
        setAttributes(this.pick3Logo, {
            id: 'pick3Logo',
            class: 'pick3-logo',
            src: '/components/game_components/pick3_components/pick3_resources/images/GamePagesLogos_Pick3.png',
            crossOrigin: 'anonymous'
        });
        setAttributes(this.grabPick3NumberH1, {
            id: 'grabPick3NumberH1',
            class: 'grab-pick3-number-h1'
        });
        setAttributes(this.grab_StandardPick3H2, {
            id: 'grab_StandardPick3H2',
            class: 'grab-_Standard-pick3-h2'
        });
        setAttributes(this._StandardPick3Para, {
            id: '_StandardPick3Para',
            class: '_standard-pick3-para'
        });
        setAttributes(this._StandardPick3Span, {
            id: '_StandardPick3Span',
            class: '_standard-pick3-span blink'
        });
    }

    connectedCallback(): void {
        super.connectedCallback();

        appendChildren(this.head, [this.scriptHeaderShell]);

        const pick3Window: () => Promise<void> = async () => {
            try {
                const getPick3: Promise<number> = pick3RandomInts(3, 9);
                console.log(getPick3);

                await appendChildren(this.body, [
                    this.descripSection,
                    this.getPick3Container
                ]);
                this._StandardPick3Para.appendChild(this._StandardPick3Span);
                this.descripSection.appendChild(this.descripSectionPara);

                // const renderBreak: HTMLBRElement =
                //     this.descripSectionPara.appendChild(this.breaks);
                //     ${renderBreak}

                this.descripSectionPara.innerHTML = `By leveraging complex scientific and professional methodologies,
                    <br />
                    Lottery Ai is a robust and reliable tool for predicting lottery numbers!`;

                this.grabPick3NumberH1.textContent =
                    'Grab Your New Pick 3 Number!';

                this.grab_StandardPick3H2.textContent = 'Standard Grab';
                this._StandardPick3Span.innerHTML = (await getPick3).toString();

                `keeping in mind that while statistical 
                techniques can increase the odds, the inherent randomness of lottery draws 
                means that predictions will never be certain.`;

                await appendChildren(this.getPick3Container, [
                    this.pick3Logo,
                    this.lotteryAiPalmetto,
                    this.grabPick3NumberH1,
                    this.grab_StandardPick3H2,
                    this._StandardPick3Para
                ]);
                return await Promise.resolve();
            } catch (error: unknown) {
                console.error(
                    `
                        The Pick 3 Window generator function was 'CAUGHT' in the try/catch block...
                        ERROR: ${error}                
                    `
                );
                return await Promise.reject();
            } finally {
                console.info(
                    `
                        The Pick 3 Window generator function was 'Invoked' and its Promise
                            has been resolved...                
                    `
                );
            }
        };

        const lcg = new LCG(12345);
        console.log('lcg.next():  ', lcg.next());

        console.log('Pick 3 - 8:  ', pick3RandomInts(3, 9));

        pick3Window();
    }

    public attributeChangedCallback(
        name: string,
        oldValue: string,
        newValue: string
    ) {
        try {
            console.info(
                `
                    Pick 3 Component's "attributeChangedCallback() {}" method Properties:
                        name: ${name},
                        oldValue: ${oldValue},
                        newValue: ${newValue}
                `
            );
        } catch (error: unknown) {
            console.error(
                `
                    Pick 3 Component's "attributeChangedCallback() {}" had an error,
                    ERROR: ${error}
                `
            );
        }
    }
}
RegisterComponent('pick3-game', Pick3Game);
