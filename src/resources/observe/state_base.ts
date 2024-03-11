'use strict';

// Declare this globally so instances of ElementBase can find it by name. Properties to watch require the @WatchProperty attribute.
class StateBase {
	constructor() {
		this._subs = new Map<string, Array<() => void>>();
	}

	private _subs: Map<string, Array<() => void>>;

	subscribe(propertyName: string, eventHandler: () => void) {
		if (!this._subs.has(propertyName))
			this._subs.set(propertyName, new Array<() => void>());
		const callbacks: (() => void)[] | undefined =
			this._subs.get(propertyName);
		if (callbacks) {
			callbacks.push(eventHandler);
		}
	}

	notify(propertyName: string) {
		const callbacks: (() => void)[] | undefined =
			this._subs.get(propertyName);
		if (callbacks)
			for (const i of callbacks) {
				i();
			}
	}
}

export { StateBase };
