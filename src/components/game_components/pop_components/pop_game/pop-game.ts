// Cash Pop Game

'use strict';

import { PopGameTemplate } from './pop-game_template.js';
import { popGame_sharedHTML } from './pop-game_sharedHTML.js';
import { popGame_sharedStyle } from './pop-game_sharedStyles.js';
import {
    RegisterComponent
    // setAttributes,
    // appendChildren
} from '../../../componentTools/general_helpers.js';

class PopGame extends PopGameTemplate {
    activateShadowDOM: boolean = false;

    public get template(): string {
        return /*html*/ `        

            <style>
                ${popGame_sharedStyle.container}
            </style>
            <style>
                ${popGame_sharedStyle.results}
            </style>       
            
            ${popGame_sharedHTML.container}
        
        `;
    }
    constructor() {
        super();

        this.activateShadowDOM = false;
    }
    connectedCallback(): void {
        super.connectedCallback();
    }
    disConnectedCallback(): void {}
}
RegisterComponent('pop-game', PopGame);
