// Types Interface for Pick 3 Components

'use strict';

// Interface for storing results of a single period/event (mid-day or evening)
interface IPeriodsResults {
    midDay: string[] | null; // Array of strings for mid-day event results
    evening: string[] | null; // Array of strings for evening event results
}

// Interface for storing results of a single year
interface IYearResults {
    year: number; // Year of the results
    periods: IPeriodsResults; // Event results for the year
}

// Main interface for storing annual lottery results
// Pick-3 Type Interfaces
interface IPick3AnnualData {
    [year: number]: IYearResults; // Mapping from year to IYearResults
}

// interface IPick3DataObject {
//     [year: string]: {
//         midDay: string[];
//         evening: string[];
//     };
// }

export type {
    IPick3AnnualData as default,
    IPeriodsResults,
    IYearResults,
    IPick3DataObject
};
