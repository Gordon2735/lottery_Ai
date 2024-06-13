/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import { Pick3PredictionsTemplate } from './pick3-predictions_template.js';
import { pick3_predictions_sharedHTML } from './pick3-predictions_sharedHTML.js';
import { pick3_predictions_sharedStyles } from './pick3-predictions_sharedStyles.js';
import {
    RegisterComponent,
    setAttributes,
    appendChildren
} from '../../../componentTools/general_helpers.js';
// import * as Chart from 'chart.js/auto';
// import * as Chart from '../../../../../node_modules/chart.js/auto/auto.js';

class Pick3Predictions extends Pick3PredictionsTemplate {
    activateShadowDOM: boolean = false;
    getPredictionsBtn: HTMLButtonElement | undefined;
    getPredictionsMidDayBtn: HTMLButtonElement | undefined;

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
    }

    override connectedCallback(): void {
        super.connectedCallback();

        // Data: historical lottery numbers@
        const pick3AllPredictionsData: number[] = [];
        const pick3MidDayPredictionsData: number[] = [];
        // const ctx: HTMLCanvasElement = document.getElementById(
        //     'historicalChart'
        // ) as HTMLCanvasElement;

        const getPredictionsBtn = document.getElementById(
            'getPredictionsBtn'
        ) as HTMLButtonElement;
        const getPredictionsMidDayBtn = document.getElementById(
            'getPredictionsMidDayBtn'
        ) as HTMLButtonElement;

        this.getPredictionsBtn = getPredictionsBtn;
        this.getPredictionsMidDayBtn = getPredictionsMidDayBtn;

        try {
            console.info(
                `
                The Pick-3 Predictions Component has Fired 
                    and the connectedCallback() has been 'invoked' ...                
            `
            );

            this.getPredictionsBtn.addEventListener(
                'click',
                async (event: MouseEvent): Promise<void> => {
                    event.preventDefault();

                    console.info(`Event: ${JSON.stringify(event)}`);
                    const processedDataObject = async (
                        allData: number[]
                    ): Promise<number[]> => {
                        const response: Response = await fetch(
                            '/pick3_predictions',
                            {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'javascript/json'
                                }
                                // body: JSON.stringify(data)
                                // The body to be used only with the fetch from (node-fetch)
                                //      to send a data object to the server
                            }
                        );
                        if (!response.ok) {
                            throw new Error(`
                                            The processedDataObject() Function's fetch
                                            logic has thrown as Error in the 'response'....
                                            `);
                        }
                        console.info(`data: ${allData}`);
                        allData = await response.json();

                        return allData;
                    };

                    const container: HTMLElement | null =
                        document.getElementById('pick3PredictionsMain');
                    const section: HTMLElement =
                        document.createElement('section');
                    const sectionH1: HTMLHeadingElement =
                        document.createElement('h1');
                    const sectionPara: HTMLParagraphElement =
                        document.createElement('p');

                    setAttributes(section, {
                        id: 'predictionsAllSection',
                        class: 'predictions-section predict-section'
                    });
                    setAttributes(sectionH1, {
                        id: 'predictionsH1',
                        class: 'predictions-h1'
                    });
                    setAttributes(sectionPara, {
                        id: 'sectionPara',
                        class: 'section-para'
                    });

                    const pick3AllPostedData: number[] =
                        await processedDataObject(pick3AllPredictionsData);

                    container?.appendChild(section);
                    await appendChildren(section, [sectionH1, sectionPara]);

                    sectionH1.textContent = 'Pick-3 All Numbers Predictions';

                    const dataNumbersRounded: number[] = [];

                    pick3AllPostedData.forEach((num: number) => {
                        dataNumbersRounded.push(Math.ceil(num));
                    });

                    const modifiedPostedData: string =
                        dataNumbersRounded.join(', ');
                    const paraText: Text =
                        document.createTextNode(modifiedPostedData);
                    sectionPara.appendChild(paraText);

                    console.info(`Predictions: ${modifiedPostedData}`);
                }
            );

            this.getPredictionsMidDayBtn.addEventListener(
                'click',
                async (event: MouseEvent): Promise<void> => {
                    event.preventDefault();

                    console.info(`Event: ${JSON.stringify(event)}`);
                    const processedMidDayDataObject = async (
                        midDayData: number[]
                    ): Promise<number[]> => {
                        const response: Response = await fetch(
                            '/pick3_predictions',
                            {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'javascript/json'
                                }
                            }
                        );
                        if (!response.ok) {
                            throw new Error(`
                                            The processedDataObject() Function's fetch
                                            logic has thrown as Error in the 'response'....
                                            `);
                        }
                        console.info(`data: ${midDayData}`);
                        midDayData = await response.json();

                        return midDayData;
                    };

                    const container: HTMLElement | null =
                        document.getElementById('pick3PredictionsMain');
                    const sectionMidDay: HTMLElement =
                        document.createElement('section');
                    const sectionMidDayH1: HTMLHeadingElement =
                        document.createElement('h1');
                    const sectionMidDayPara: HTMLParagraphElement =
                        document.createElement('p');

                    setAttributes(sectionMidDay, {
                        id: 'predictionsMidDaySection',
                        class: 'predictions-MidDay-section predict-section'
                    });
                    setAttributes(sectionMidDayH1, {
                        id: 'predictionsMidDayH1',
                        class: 'predictions-h1'
                    });
                    setAttributes(sectionMidDayPara, {
                        id: 'sectionMidDayPara',
                        class: 'section-para'
                    });

                    const postedMidDayData: number[] =
                        await processedMidDayDataObject(
                            pick3MidDayPredictionsData
                        );

                    container?.appendChild(sectionMidDay);
                    await appendChildren(sectionMidDay, [
                        sectionMidDayH1,
                        sectionMidDayPara
                    ]);

                    sectionMidDayH1.textContent = 'Pick-3 Mid-Day Predictions';

                    const dataNumbersRounded: number[] = [];

                    postedMidDayData.forEach((num: number) => {
                        dataNumbersRounded.push(Math.ceil(num));
                    });

                    const modifiedMidDayPostedData: string =
                        dataNumbersRounded.join(', ');
                    const paraText: Text = document.createTextNode(
                        modifiedMidDayPostedData
                    );
                    sectionMidDayPara.appendChild(paraText);

                    console.info(
                        `Predictions Mid-Day: ${modifiedMidDayPostedData}`
                    );
                }
            );
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

// const predictionsChart: Chart<'bar', number[], string> =
// const predictionsChart: Chart.Chart<
//     'bar',
//     number[],
//     string
// > = new Chart.Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: lotteryData.map(
//             (_, index) => `Draw ${index + 1}`
//         ),
//         datasets: [
//             {
//                 label: '# of Draws',
//                 data: lotteryData,
//                 backgroundColor:
//                     'rgba(75, 192, 192, 0.2)',
//                 borderColor: 'rgba(75, 192, 192, 1)',
//                 borderWidth: 1
//             }
//         ]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });
// console.log(predictionsChart);
// this.ctx.innerHTML = predictionsChart;
// predictionsChart.render();
// predictionsChart.update();
