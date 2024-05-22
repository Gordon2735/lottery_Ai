'use strict';

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
export function pick3RandomInts(numsQuantity: number, maxNums: number): number {
    const numbersArray: number[] = [];
    while (numbersArray.length < numsQuantity) {
        const newInt = Math.floor(Math.random() * maxNums) + 1;
        if (numbersArray.indexOf(newInt) === -1) numbersArray.push(newInt);
    }
    const modifyArray: string = numbersArray.toString();
    const convertArrayToNumber: number = parseInt(
        modifyArray.replaceAll(',', '')
    );

    return convertArrayToNumber;
}
console.log(pick3RandomInts(3, 9));
