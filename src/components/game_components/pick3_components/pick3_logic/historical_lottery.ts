'use strict';

import IPick3AnnualData from '../pick3_types/Ipick3.js';
import zero_three_mid_dayWinNums from './pick3_data/pick3Data.js';
// import * as ss from 'simple-statistics';
// import { Chart } from 'chart.js';

// Data: historical lottery numbers
const lotteryData: number[] = [];

// Object created with Lottery Data for Persistency
const pick3AnnualData: IPick3AnnualData = {};

queryPick3DataPeriod(
    pick3AnnualData,
    '2003',
    'midDay',
    zero_three_mid_dayWinNums
);

async function queryPick3DataPeriod(
    pick3Data: IPick3AnnualData,
    year: string,
    period: string,
    datasets: string[]
): Promise<void> {
    // ): Promise<number[]> {
    try {
        const eventYear: number = parseInt(year);
        const eventPeriod: string = period;
        const eventData: string[] = datasets;

        console.info(
            `
            queryPick3DataPeriod() Function for Event Period: Year- ${year} Period- ${eventPeriod} is processing...  
        `
        );

        eventData.map((numbers) => {
            const strgToNums: number = parseInt(numbers);
            lotteryData.push(strgToNums);
        });
        console.info(
            `
            Lottery Data/lotteryData: ${lotteryData}    
        `
        );

        addPick3PeriodData(pick3Data, eventYear, eventData, null);
    } catch (error: unknown) {
        console.error(
            `
            The Historical Lottery File's queryPick3DataPeriod() Function had an error...
            ERROR: ${error}
        `
        );
        return;
    } finally {
        console.info(
            `
            The Historical Lottery File's queryPick3DataPeriod() Function Promise has been resolved...
            Event Period: ${period},
            Pick-3 Data Object: ${JSON.stringify(pick3AnnualData)} 
        `
        );
    }
    return;
}

async function addPick3PeriodData(
    pick3CurrentData: IPick3AnnualData,
    newYear: number,
    midDayResults: string[] | null,
    eveningResults: string[] | null
): Promise<void> {
    try {
        if (!pick3CurrentData[newYear]) {
            pick3CurrentData[newYear] = {
                year: newYear,
                periods: {
                    midDay: midDayResults,
                    evening: eveningResults
                }
            };
        } else {
            console.log(
                `Year ${newYear} already exists in the lottery results.`
            );
        }
    } catch (error: unknown) {
        console.error(
            `
            The addPick3PeriodData() Function had an error...
            ERROR: ${error}
        `
        );
    } finally {
        console.info(
            `
                The addPick3PeriodData() Function has been resolved...

                New Input, pick3CurrentData[newYear]: ${JSON.stringify(
                    pick3CurrentData[newYear]
                )}
            `
        );
    }
}

// Calculate basic statistics
// const mean = ss.mean(lotteryData);
// const median = ss.median(lotteryData);
// const standardDeviation = ss.standardDeviation(lotteryData);

// console.log(
//     `Mean: ${mean}, Median: ${median}, Standard Deviation: ${standardDeviation}`
// );

// // Create a chart to visualize the data
// const ctx = document.getElementById('historicalChart') as HTMLCanvasElement;
// const myChart: Chart<'bar', number[], string> = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: lotteryData.map((_, index) => `Draw ${index + 1}`),
//         datasets: [
//             {
//                 label: '# of Draws',
//                 data: lotteryData,
//                 backgroundColor: 'rgba(75, 192, 192, 0.2)',
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
// console.log(myChart);
