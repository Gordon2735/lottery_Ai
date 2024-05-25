'use strict';

// import * as ss from 'simple-statistics';
// import { Chart } from 'chart.js';

export default class LCG {
    private seed: number;
    private modulus: number;
    private multiplier: number;
    private increment: number;

    constructor(seed: number) {
        this.seed = seed;
        this.modulus = 2 ** 31 - 1;
        this.multiplier = 48271;
        this.increment = 0;
    }

    next(): number {
        this.seed =
            (this.multiplier * this.seed + this.increment) % this.modulus;
        return this.seed / this.modulus;
    }
}

const lcg = new LCG(12345);
console.log(lcg.next());
console.log(lcg.next());

// Pick 3 Random Numbers
export async function pick3RandomInts(
    numsQuantity: number,
    maxNums: number
): Promise<number> {
    let convertArrayToNumber: number = 0;
    try {
        const numbersArray: number[] = [];
        while (numbersArray.length < numsQuantity) {
            const newInt = Math.floor(Math.random() * maxNums) + 1;
            if (numbersArray.indexOf(newInt) === -1) numbersArray.push(newInt);
        }
        const modifyArray: string = numbersArray.toString();
        convertArrayToNumber = parseInt(modifyArray.replaceAll(',', ''));
        return convertArrayToNumber;
    } catch (error: unknown) {
        console.error(
            `
            The pick3RandomInts() Function had an error...
            ERROR: ${error}    
        `
        );
    } finally {
        console.info(
            `
                The pick3RandomInts() Function has been invoked and resolved...
            `
        );
    }
    const newPick3Number: number = (
        await Promise.resolve(convertArrayToNumber)
    ).valueOf();

    return newPick3Number;
}
console.log(pick3RandomInts(3, 9));

// Example data: historical lottery numbers
// const lotteryData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Calculate basic statistics
// const mean = ss.mean(lotteryData);
// const median = ss.median(lotteryData);
// const standardDeviation = ss.standardDeviation(lotteryData);

// console.log(
//     `Mean: ${mean}, Median: ${median}, Standard Deviation: ${standardDeviation}`
// );

// Create a chart to visualize the data
// const ctx = document.getElementById('myChart') as HTMLCanvasElement;
// const myChart = new Chart(ctx, {
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

// ctx.myChart;
