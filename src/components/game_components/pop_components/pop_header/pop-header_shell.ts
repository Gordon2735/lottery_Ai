'use strict';

import { PopHeaderTemplate } from './pop-header_template.js';
import { popHeader_sharedHTML } from './pop-header_sharedHTML.js';
import { popHeader_sharedStyles } from './pop-header_sharedStyles.js';
import {
    RegisterComponent,
    setAttributes,
    appendChildren
} from '../../../componentTools/general_helpers.js';

class PopHeaderShell extends PopHeaderTemplate {
    activateShadowDOM: boolean = false;
    head: HTMLHeadElement;
    popHeaderScript: HTMLScriptElement;

    public get template(): string {
        return /*html*/ `        
        
            <style>
                ${popHeader_sharedStyles.root}
            </style>
            <style>
                ${popHeader_sharedStyles.shell}
            </style>        

            ${popHeader_sharedHTML.shell}
        
        `;
    }
    constructor() {
        super();

        this.activateShadowDOM = false;

        const head: HTMLHeadElement = document.getElementsByTagName('head')[0];
        const popHeaderScript: HTMLScriptElement =
            document.createElement('script');

        this.head = head;
        this.popHeaderScript = popHeaderScript;

        setAttributes(popHeaderScript, {
            type: 'module',
            src: '/src/components/game_components/pop_components/pop_header/pop-header.js',
            content: 'text/javascript',
            crossOrigin: 'anonymous'
        });
    }
    connectedCallback(): void {
        super.connectedCallback();

        appendChildren(this.head, [this.popHeaderScript]);
    }
}
RegisterComponent('pop-header_shell', PopHeaderShell);
