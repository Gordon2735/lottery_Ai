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
    scriptPick3Scrape: HTMLScriptElement;
    scriptHeaderShell: HTMLScriptElement;

    public get template(): string {
        return /*html*/ `
        
            ${pick3Game_sharedHTML.container}

            <style>
                ${pick3Game_sharedStyles.container}
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
        const scriptPick3Scrape: HTMLScriptElement =
            document.createElement('script');
        const scriptHeaderShell: HTMLScriptElement =
            document.createElement('script');

        this.head = head;
        this.scriptPick3Scrape = scriptPick3Scrape;
        this.scriptHeaderShell = scriptHeaderShell;

        setAttributes(this.scriptPick3Scrape, {
            type: 'module',
            src: '/src/components/game_components/pick3_components/pick3_SC_scrape/pick3-scrape.js',
            content: 'text/javascript',
            crossOrigin: 'anonymous'
        });
        setAttributes(scriptHeaderShell, {
            type: 'module',
            src: '/src/components/header_components/lottery_ai_header/lotteryai-header_shell.js',
            content: 'text/javascript',
            crossOrigin: 'anonymous'
        });
    }

    connectedCallback(): void {
        super.connectedCallback();

        appendChildren(this.head, [
            this.scriptPick3Scrape,
            this.scriptHeaderShell
        ]);

        const lcg = new LCG(12345);
        console.log('lcg.next():  ', lcg.next());

        console.log('Pick 3 - 8:  ', pick3RandomInts(3, 9));
        console.log('Pick 3 - 9:  ', pick3RandomInts(3, 9));
        console.log('Pick 3 - 10: ', pick3RandomInts(3, 9));
        console.log('Pick 3 - 11: ', pick3RandomInts(3, 9));
        console.log('Pick 3 - 12: ', pick3RandomInts(3, 9));
        console.log('Pick 3 - 13: ', pick3RandomInts(3, 9));
        console.log('Pick 3 - 14: ', pick3RandomInts(3, 9));
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
