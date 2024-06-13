'use strict';
import Pick3DataObject from '../../../components/game_components/pick3_components/pick3_logic/pick3_data/pick3Data.js';

const getMidDayProcessDataObject = async (
    object: IPick3DataObject,
    collectionMidDay: number[],
    indexes: number[]
): Promise<number[]> => {
    for (const year in Pick3DataObject) {
        if (Object.prototype.hasOwnProperty.call(object, year)) {
            const objectYear = object[year];
            const yearStr = objectYear.year[0]; // Single element array, so accessing first element
            console.log(`Year: ${yearStr}`);

            objectYear.midDay.forEach(async (midDayValue, index) => {
                collectionMidDay.push(parseInt(midDayValue));
                indexes.push(index);
            });
        }
    }
    // Calculate the sum of indexes using reduce
    const indexSumMidDay: number = collectionMidDay.reduce(
        (sum, _, index) => sum + index,
        0
    );
    console.info(
        `indexSum MidDay reduces to effect the sum of Indexes: ${indexSumMidDay}`
    );
    return collectionMidDay;
};
export default getMidDayProcessDataObject;
