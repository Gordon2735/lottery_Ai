'use strict';

import * as ss from 'simple-statistics';
import { Chart } from 'chart.js';

// Data: historical lottery numbers@
const lotteryData: number[] = [];

// Calculate basic statistics
const mean = ss.mean(lotteryData);
const median = ss.median(lotteryData);
const standardDeviation = ss.standardDeviation(lotteryData);

console.log(
    `Mean: ${mean}, Median: ${median}, Standard Deviation: ${standardDeviation}`
);

// Create a chart to visualize the data
const ctx: HTMLCanvasElement = document.getElementById(
    'historicalChart'
) as HTMLCanvasElement;
const predictionsChart: Chart<'bar', number[], string> = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: lotteryData.map((_, index) => `Draw ${index + 1}`),
        datasets: [
            {
                label: '# of Draws',
                data: lotteryData,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
console.log(predictionsChart);

export { predictionsChart as default, ctx, lotteryData };
