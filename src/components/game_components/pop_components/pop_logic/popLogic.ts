'use strict';

async function getRandomPopNumber(): Promise<number> {
    async function randomNumInterval(
        min: number,
        max: number
    ): Promise<number> {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const roundNum: number = await randomNumInterval(0, 16);
    // const roundNumJsonfied = JSON.stringify(roundNum);

    return roundNum;
}

export default getRandomPopNumber;
