// Pop Header

'use strict';
// Cash Pop Game

'use strict';

import { PopHeaderTemplate } from './pop-header_template.js';
import { popHeader_sharedHTML } from './pop-header_sharedHTML.js';
import { popHeader_sharedStyles } from './pop-header_sharedStyles.js';
import {
    RegisterComponent
    // setAttributes,
    // appendChildren
} from '../../../componentTools/general_helpers.js';

class PopHeader extends PopHeaderTemplate {
    activateShadowDOM: boolean = false;

    public get template(): string {
        return /*html*/ `
        
        
            <style>
                ${popHeader_sharedStyles.container}
            </style>
            <style>
                ${popHeader_sharedStyles.results}
            </style> 
                   
            ${popHeader_sharedHTML.container}
        
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
RegisterComponent('pop-header', PopHeader);
