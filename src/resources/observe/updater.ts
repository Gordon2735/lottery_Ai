'use strict';

import { Observable } from './observable.js';

const selectedObject: Promise<{
	value: string | void;
	update: (updater: string | ((values: string | void) => void)) => void;
	subscribe: (
		subscriber: (values: string | void, oldVals: string | void) => void
	) => void;
	unsubscribe: (
		subscriber: (values: string | void, oldVals: string | void) => void
	) => number;
}> = Observable('');

const showInConsole = (newValue: string | void, oldValue: string | void) => {
	if (newValue && oldValue) {
		console.log(
			`Switched from ${listOfObjects[oldValue]?.name} to ${listOfObjects[newValue]?.name}`
		);
	}
};

selectedObject.then((observable) => {
	return observable.subscribe(showInConsole);
});
