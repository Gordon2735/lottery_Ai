/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

const WatchProperty = (target: any, memberName: string) => {
	let currentValue = target[memberName];
	Object.defineProperty(target, memberName, {
		set(this: typeof target, newValue: string) {
			console.log(
				'watchProperty called on ' +
					memberName +
					' with value ' +
					newValue
			);
			currentValue = newValue;
			this.notify(memberName);
		},
		get() {
			return currentValue;
		}
	});
};

export { WatchProperty };
