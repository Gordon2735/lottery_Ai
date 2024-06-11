'use strict';

import type IPick3AnnualData from '../pick3_types/Ipick3.js';
import { zero_three_midDayWinNums } from './pick3_data/pick3Data.js';

// Data: historical lottery numbers
const lotteryData: number[] = [];

// Object created with Lottery Data for Persistency
const pick3AnnualData: IPick3AnnualData = {};

queryPick3DataPeriod(
    pick3AnnualData,
    '2003',
    'midDay',
    zero_three_midDayWinNums
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
