'use strict';

import { Pick3GameTemplate } from './pick3-game_template.js';
import { pick3Game_sharedHTML } from './pick3-game_sharedHTML.js';
// import { pick3Game_sharedStyles } from './pick3-game_sharedStyles.js';
import {
    RegisterComponent,
    setAttributes,
    appendChildren
} from '../../../componentTools/general_helpers.js';

class Pick3GameShell extends Pick3GameTemplate {
    activateShadowDOM: boolean = false;
    head: HTMLHeadElement;
    scriptPick3Game: HTMLScriptElement;
    scriptSpinnerBase1: HTMLScriptElement;

    public get template(): string {
        return /*html*/ `

            ${pick3Game_sharedHTML.shell}
            

        `;
    }

    constructor() {
        super();

        this.activateShadowDOM = false;

        const head: HTMLHeadElement = document.getElementsByTagName('head')[0];
        const scriptPick3Game: HTMLScriptElement =
            document.createElement('script');
        const scriptSpinnerBase1: HTMLScriptElement =
            document.createElement('script');

        this.head = head;
        // this.body = body;
        this.scriptPick3Game = scriptPick3Game;
        this.scriptSpinnerBase1 = scriptSpinnerBase1;

        setAttributes(this.scriptPick3Game, {
            type: 'module',
            src: '/src/components/game_components/pick3_components/pick3_game/pick3-game.js',
            content: 'text/javascript',
            crossOrigin: 'anonymous'
        });
        setAttributes(this.scriptSpinnerBase1, {
            type: 'module',
            src: '/src/components/animation_components/spinner_comps/spinnerBase1_comp/spinner-base1.js',
            content: 'text/javascript',
            crossOrigin: 'anonymous'
        });
    }

    connectedCallback(): void {
        super.connectedCallback();

        try {
            appendChildren(this.head, [
                this.scriptSpinnerBase1,
                this.scriptPick3Game
            ]);
            // this.head.insertAdjacentHTML('beforeend', `${this.scriptPick3Game}`);
            // this.head.appendChild(this.scriptPick3Game);

            console.info(
                `
					this.head: ${this.head}
					this.scriptPick3Game: ${this.scriptPick3Game}
				`
            );
            return;
        } catch (error: unknown) {
            console.error(
                `
				Pick3 Component Shell's "connectedCallback() {}" had an error:
				ERROR: ${error}
			`
            );
            return;
        } finally {
            console.info(
                `The component pick3-game_shell's 'connectedCallback()' has fired...`
            );
        }
    }
}
RegisterComponent('pick3-game_shell', Pick3GameShell);
