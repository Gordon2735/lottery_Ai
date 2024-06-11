'use strict';

import * as ss from 'simple-statistics';

async function processLotteryCollection(
    dataArray: number[]
): Promise<number[]> {
    // Calculate basic statistics
    const mean = ss.mean(dataArray);
    const median = ss.median(dataArray);
    const standardDeviation = ss.standardDeviation(dataArray);

    console.log(
        `Mean: ${mean}, Median: ${median}, Standard Deviation: ${standardDeviation}`
    );
    const statisticsArray: number[] = [mean, median, standardDeviation];
    return statisticsArray;
}

// Create a chart to visualize the data

export { processLotteryCollection as default };
