'use strict';

import { v4 as uuidv4 } from 'uuid';
 

const randomId = async (): Promise<string> => {
	return uuidv4();
};


const listOfObjects: {
    id: string;
	name: string;

}[] = [
    {

	}
];

const objectPlusOne = async (): Promise<void> => {
    const id: string = await randomId();
    listOfObjects.push({
        id,
        name: `Object_${001++}`,
    });
};