/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import { Pick3PredictionsTemplate } from './pick3-predictions_template.js';
import { pick3_predictions_sharedHTML } from './pick3-predictions_sharedHTML.js';
import { pick3_predictions_sharedStyles } from './pick3-predictions_sharedStyles.js';
import { RegisterComponent } from '../../../componentTools/general_helpers.js';
// import { Chart } from 'chart.js';
// import { Chart } from '../../../../node_modules/chart.js/dist/chart.js';

// declare module 'chart.js' {}

class Pick3Predictions extends Pick3PredictionsTemplate {
    activateShadowDOM: boolean = false;
    lotteryData: number[];
    ctx: HTMLCanvasElement;
    getPredictionsBtn: HTMLButtonElement;

    public get template(): string {
        return /*html*/ `
        
            <style>${pick3_predictions_sharedStyles.root}</style>
            <style>${pick3_predictions_sharedStyles.container}</style>
            <style>${pick3_predictions_sharedStyles.predictions}</style>
            <style>${pick3_predictions_sharedStyles.results}</style>

            ${pick3_predictions_sharedHTML.container} 
            ${pick3_predictions_sharedHTML.predictions}       
        
        `;
    }

    static get observedAttributes(): string[] {
        return ['data-predictions'];
    }

    constructor() {
        super();

        this.activateShadowDOM = false;

        // Data: historical lottery numbers@
        const lotteryData: number[] = [];
        const ctx: HTMLCanvasElement = document.getElementById(
            'historicalChart'
        ) as HTMLCanvasElement;

        const getPredictionsBtn = document.getElementById(
            'getPredictionsBtn'
        ) as HTMLButtonElement;

        this.lotteryData = lotteryData;
        this.ctx = ctx;
        this.getPredictionsBtn = getPredictionsBtn;
    }

    override connectedCallback(): void {
        super.connectedCallback();

        try {
            console.info(
                `
                The Pick-3 Predictions Component has Fired 
                    and the connectedCallback() has been 'invoked' ...                
            `
            );
            // const predictionsChart: Chart<'bar', number[], string> = new Chart(
            //     this.ctx,
            //     {
            //         type: 'bar',
            //         data: {
            //             labels: this.lotteryData.map(
            //                 (_, index) => `Draw ${index + 1}`
            //             ),
            //             datasets: [
            //                 {
            //                     label: '# of Draws',
            //                     data: this.lotteryData,
            //                     backgroundColor: 'rgba(75, 192, 192, 0.2)',
            //                     borderColor: 'rgba(75, 192, 192, 1)',
            //                     borderWidth: 1
            //                 }
            //             ]
            //         },
            //         options: {
            //             scales: {
            //                 y: {
            //                     beginAtZero: true
            //                 }
            //             }
            //         }
            //     }
            // );
            // console.log(predictionsChart);
        } catch (error: unknown) {
            console.info(
                `
                The Pick-3 Predictions Component has been 'caught' in the connectedCallback()
                    try/catch Block...
                ERROR: ${error}                
            `
            );
            return;
        } finally {
            console.info(
                `
                The Pick-3 Predictions Component has finalized...                
            `
            );
        }
        return;
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

    disconnectedCallback(): void {}
}
RegisterComponent('pick3-predictions', Pick3Predictions);
