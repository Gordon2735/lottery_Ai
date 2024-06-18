'use strict';

import { PopGameTemplate } from './pop-game_template.js';
import { popGame_sharedHTML } from './pop-game_sharedHTML.js';
import { popGame_sharedStyle } from './pop-game_sharedStyles.js';
import {
    RegisterComponent,
    setAttributes,
    appendChildren
} from '../../../componentTools/general_helpers.js';

class PopGameShell extends PopGameTemplate {
    activateShadowDOM: boolean = false;
    head: HTMLHeadElement;
    popHeaderShellScript: HTMLScriptElement;
    scriptPopGame: HTMLScriptElement;

    public get template(): string {
        return /*html*/ `        
        
            <style>
                ${popGame_sharedStyle.root}
            </style>
            <style>
                ${popGame_sharedStyle.shell}
            </style>        
        
            ${popGame_sharedHTML.shell}
        `;
    }
    constructor() {
        super();

        this.activateShadowDOM = false;

        const head: HTMLHeadElement = document.getElementsByTagName('head')[0];
        const scriptPopGame: HTMLScriptElement =
            document.createElement('script');
        const popHeaderShellScript: HTMLScriptElement =
            document.createElement('script');

        this.head = head;
        this.scriptPopGame = scriptPopGame;
        this.popHeaderShellScript = popHeaderShellScript;

        setAttributes(scriptPopGame, {
            type: 'module',
            src: '/src/components/game_components/pop_components/pop_game/pop-game.js',
            content: 'text/javascript',
            crossOrigin: 'anonymous'
        });
        setAttributes(popHeaderShellScript, {
            type: 'module',
            src: '/src/components/game_components/pop_components/pop_header/pop-header_shell.js',
            content: 'text/javascript',
            crossOrigin: 'anonymous'
        });
    }
    connectedCallback(): void {
        super.connectedCallback();

        appendChildren(this.head, [
            this.scriptPopGame,
            this.popHeaderShellScript
        ]);
    }
}
RegisterComponent('pop-game_shell', PopGameShell);
