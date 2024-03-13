/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
'use strict';

interface Events {
	[key: string]: Function[];
}

export default class PubSub {
	events: Events;
	constructor() {
		this.events = {};
	}

	/**
	 * Either create a new event instance for passed `event` name
	 * or push a new callback into the existing collection
	 *
	 * @param {string} event
	 * @param {function} callback
	 * @returns {number} A count of callbacks for this event
	 * @memberof PubSub
	 */

	subscribe(event: string, callback: Function) {
		if (!Object.prototype.hasOwnProperty.call(this.events, event)) {
			this.events[event] = [];
		}

		return this.events[event].push(callback);
	}

	/**
	 * If the passed event has callbacks attached to it, loop through each one
	 * and call it
	 *
	 * @param {string} event
	 * @param {object} [data = {}]
	 * @returns {array} The callbacks for this event, or an empty array if no event exits
	 * @memberof PubSub
	 */
	publish(event: string, data: NonNullable<unknown>) {
		// There's no event to publish to, so bail out
		if (!Object.prototype.hasOwnProperty.call(this.events, event)) {
			return [];
		}

		// Get each subscription and call its callback with the passed data
		return (
			this.events[event] as ((data: NonNullable<unknown>) => void)[]
		).map((callback) => callback(data));
	}
}
