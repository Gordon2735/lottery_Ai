'use strict';

// Node.js EventEmitter Handler Functions Module

import { EventEmitter } from 'events';

class LotteryAiEmitter extends EventEmitter {
	constructor() {
		super();
	}

	// Event Handler for 'error' Event
	async errorHandler(error: Error): Promise<void> {
		throw (
			(new Error(`Error: ${error}`),
			async () => {
				error.message = 'Emitter Error: An error has occurred.';
				error.name = 'Emitter Error';
				error.stack = 'Emitter Error: An error has occurred.';
				return error;
			})
		);
	}

	// Event Handler for 'data' Event
	async dataHandler(data: object[] | string): Promise<object[] | string> {
		try {
			console.log(`Data: ${data}`);

			return Promise.resolve(data);
		} catch (error: unknown) {
			console.error(
				`
                        Class LotteryAiEmitter's dataHandler Method error...
                        ERROR MESSAGE: ${error}
                    `
			);

			return Promise.reject(error);
		}
	}

	// Event Handler for 'close' Event
	async closeHandler(): Promise<void> {
		try {
			console.log('Close Event: The emitter has been closed.');

			return Promise.resolve();
		} catch (error: unknown) {
			console.error(
				`
                    Class LotteryAiEmitter's closeHandler Method error...
                    ERROR MESSAGE: ${error}
                `
			);

			return Promise.reject(error);
		}
	}

	// Event Handler for 'end' Event
	async endHandler(): Promise<void> {
		try {
			console.log('End Event: The emitter has ended.');

			return Promise.resolve();
		} catch (error: unknown) {
			console.error(
				`
                    Class LotteryAiEmitter's endHandler Method error...
                    ERROR MESSAGE: ${error}
                `
			);

			return Promise.reject(error);
		}
	}
}

const EventEmitterHandlers = new LotteryAiEmitter();

export { EventEmitterHandlers as default };
