'use strict';

import { Pick4HeaderTemplate } from './pick4-header_template.js';
import {
    RegisterComponent
    //   appendChildren,
    //   setAttributes
} from '../../../componentTools/general_helpers.js';
import { pick4_header_sharedHTML } from './pick4-header_sharedHTML.js';
import { pick4_header_sharedStyles } from './pick4-header_sharedStyles.js';

class Pick4HeaderShell extends Pick4HeaderTemplate {
    activateShadowDOM: boolean = false;
    //  head: HTMLHeadElement;
    // scriptPick4Header: HTMLScriptElement;
    // root: ShadowRoot | null | undefined;

    public get template(): string {
        return /*html*/ `
            ${pick4_header_sharedHTML.shell}

            <style>
                ${pick4_header_sharedStyles.root}
                ${pick4_header_sharedStyles.shell}
            </style>
        
        
        `;
    }
    constructor() {
        super();

        this.activateShadowDOM = false;
    }
}

RegisterComponent('pick4-header_shell', Pick4HeaderShell);
