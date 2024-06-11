'use strict';

// Pick 3 Predictions Component Interfaces

interface Ipick3PredictionsSharedHTML {
    container: string;
    predictions: string;
    results: string;
}
interface Ipick3PredictionsSharedStyles {
    root: string;
    container: string;
    predictions: string;
    results: string;
}

export type { Ipick3PredictionsSharedHTML, Ipick3PredictionsSharedStyles };
