'use strict';

import { Pick3PredictionsTemplate } from './pick3-predictions_template.js';
import { pick3_predictions_sharedHTML } from './pick3-predictions_sharedHTML.js';
import { pick3_predictions_sharedStyles } from './pick3-predictions_sharedStyles.js';
import { RegisterComponent } from '../../../componentTools/general_helpers.js';

class Pick3Predictions extends Pick3PredictionsTemplate {
    activateShadowDOM: boolean = false;

    public get template(): string {
        return /*html*/ `
        
            <style>
                ${pick3_predictions_sharedStyles.root}
                ${pick3_predictions_sharedStyles.container}
                ${pick3_predictions_sharedStyles.predictions}
                ${pick3_predictions_sharedStyles.results}
            </style>

            ${pick3_predictions_sharedHTML.container}        
        
        `;
    }

    static get observedAttributes(): string[] {
        return ['data-predictions'];
    }

    constructor() {
        super();

        this.activateShadowDOM = false;
    }

    public attributeChangedCallback(
        name: string,
        oldValue: string,
        newValue: string
    ) {
        try {
            console.info(
                `
                the Public AttributeChangedCallback() method has been fired and is processing...
                The Promise is Open!
            `
            );

            console.log(
                `
                 Name: ${name},
                 Old Value: ${oldValue},
                 New Value: ${newValue}
            `
            );
        } catch (error: unknown) {
            console.error(
                `
                The Public AttributeChangedCallback() method has been caught in the try/catch block...
                ERROR: ${error}
            `
            );
        } finally {
            console.info(
                `
                the Public AttributeChangedCallback() method has been fired and changed...
                The Promise has been resolved!
            `
            );
        }
    }
}
RegisterComponent('pick3-predictions', Pick3Predictions);

export { Pick3Predictions };
