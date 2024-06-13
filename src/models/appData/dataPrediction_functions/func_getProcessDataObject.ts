'use strict';

import Pick3DataObject from '../../../components/game_components/pick3_components/pick3_logic/pick3_data/pick3Data.js';

const getProcessDataObject = async (
    object: IPick3DataObject,
    collection: number[],
    indexes: number[]
): Promise<number[]> => {
    for (const year in Pick3DataObject) {
        if (Object.prototype.hasOwnProperty.call(object, year)) {
            const objectYear = object[year];
            const yearStr = objectYear.year[0]; // Single element array, so accessing first element
            console.log(`Year: ${yearStr}`);

            objectYear.midDay.forEach(async (midDayValue, index) => {
                collection.push(parseInt(midDayValue));
                indexes.push(index);
            });
            objectYear.evening.forEach(async (eveningValue, index) => {
                collection.push(parseInt(eveningValue));
                indexes.push(index);
            });
        }
    }
    // Calculate the sum of indexes using reduce
    const indexSum: number = collection.reduce(
        (sum, _, index) => sum + index,
        0
    );
    console.info(`indexSum reduces to effect the sum of Indexes: ${indexSum}`);
    return collection;
};
export default getProcessDataObject;
