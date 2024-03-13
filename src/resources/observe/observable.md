'use strict';

const Observable = async (
	_initialValue: string | void
): Promise<{
	value: string | void;
	update: (updater: string | ((values: string | void) => void)) => void;
	subscribe: (
		subscriber: (values: string | void, oldVals: string | void) => void
	) => void;
	unsubscribe: (
		subscriber: (values: string | void, oldVals: string | void) => void
	) => number;
}> => {
	try {
		let value: string | void = _initialValue;
		let subscribers: ((
			values: string | void,
			oldVals: string | void
		) => void)[] = [];

		const subscribe = (
			subscriber: (values: string | void, oldVals: string | void) => void
		) => subscribers.push(subscriber);

		const unsubscribe = (
			subscriber: (values: string | void, oldVals: string | void) => void
		) => {
			subscribers = subscribers.filter((fn) => fn !== subscriber);
			return subscribers.length;
		};
		const update: (
			updater: string | ((values: string | void) => void)
		) => void = (updater: string | ((values: string | void) => void)) => {
			// we store the value as it is, and then we update.
			const oldVal: string | void = value;
			value = typeof updater === 'function' ? updater(value) : updater;

			// next, we call each subscriber function with both!
			subscribers?.forEach((subscriber) => subscriber(value, oldVal));
		};

		return Object.freeze({
			get value() {
				return value;
			},
			update,
			subscribe,
			unsubscribe
		});
	} catch (error: unknown) {
		console.error(
			`
                %cError in State Observable Prescription: ${error}
            `,
			'color: orange; font-size: 1.5em; padding: 5px; border: 2px solid chartreuse; font-family: "chango", sans-serif; font-weight: 700; text-shadow: 1px 1px 1px #000'
		);
		return {
			value: undefined,
			update: () => {},
			subscribe: () => {},
			unsubscribe: () => 0
		};
	}
};

export { Observable };
