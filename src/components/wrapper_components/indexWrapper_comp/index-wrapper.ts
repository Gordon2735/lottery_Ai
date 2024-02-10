'use strict';

import { IndexWrapperTemplate } from './index-wrapper_template.js';
import { RegisterComponent } from '../../componentTools/general_helpers.js';
import { indexWrapperSharedHTML } from './index-wrapper_sharedHTML.js';
import { indexWrapperSharedStyles } from './index-wrapper_sharedStyles.js';

class IndexWrapper extends IndexWrapperTemplate {
	constructor() {
		super();

		this.activateShadowDOM = false;
	}

	connectedCallback(): void {
		super.connectedCallback();

		console.info(
			`
                The Index Wrapper Component Shell has Fired and is now active!            
            `
		);
	}

	public get template(): string {
		return /*html*/ `            

			<style>
				${indexWrapperSharedStyles.container}
			</style>

			${indexWrapperSharedHTML.container}

            <style>
                ${indexWrapperSharedStyles.queries}
            </style>
        
        `;
	}
}
RegisterComponent('index-wrapper', IndexWrapper);
