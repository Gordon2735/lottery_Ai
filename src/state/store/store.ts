/* eslint-disable no-unused-vars */
'use strict';

import PubSub from '../lib/pubsub.js';
export default class Store {
	actions: Actions;
	mutations: Mutations;
	state: State;
	status: string;
	events: PubSub;
	// events: any;
	constructor(params: {
		actions: Actions;
		mutations: Mutations;
		state: State;
	}) {
		// const self = this;

		// Add some default objects to hold our actions, mutations and state
		this.actions = {};
		this.mutations = {};
		this.state = {};

		// A status enum to set during actions and mutations
		this.status = 'resting';

		// Attach our PubSub module as an `events` element
		this.events = new PubSub();

		// Look in the passed params object for actions and mutations
		// that might have been passed in
		if (Object.prototype.hasOwnProperty.call(params, 'actions')) {
			this.actions = params.actions;
		}
		// if (params.hasOwnProperty('actions')) {
		// 	this.actions = params.actions;
		// }

		if (Object.prototype.hasOwnProperty.call(params, 'mutations')) {
			this.mutations = params.mutations;
		}

		// Set our state to be a Proxy. We are setting the default state by
		// checking the params and defaulting to an empty object if no default
		// state is passed in
		this.state = new Proxy(params.state || {}, {
			set: (
				state,
				key,
				value: string | number | object | Array<never>
			) => {
				// Set the value as we would normally
				state[key as string] = value as object;

				// Add index signature to state object

				// Update state object to use the State interface
				this.state = new Proxy(params.state || ({} as State), {
					set: (
						state,
						key,
						value: string | number | object | never[]
					) => {
						// Set the value as we would normally
						state[key as string] = value as object;

						// Trace out to the console. This will be grouped by the related action
						console.log(`stateChange: ${String(key)}: ${value}`);

						// Publish the change event for the components that are listening
						this.events.publish('stateChange', this.state);

						// Reset the status ready for the next operation
						this.status = 'resting';

						return true;
					}
				});

				// Give the user a little telling off if they set a value directly
				if (this.status !== 'mutation') {
					console.warn(
						`You should use a mutation to set ${key as string}`
					);
				}

				// Reset the status ready for the next operation
				this.status = 'resting';

				return true;
			}
		});
	}

	/**
	 * A dispatcher for actions that looks in the actions
	 * collection and runs the action if it can find it
	 *
	 * @param {string} actionKey
	 * @param {mixed} payload
	 * @returns {boolean}
	 * @memberof Store
	 */
	dispatch(actionKey: string, payload: mixed | number | string): boolean {
		// let self = this;

		// Run a quick check to see if the action actually exists
		// before we try to run it
		if (typeof this.actions[actionKey] !== 'function') {
			console.error(`Action "${actionKey} doesn't exist.`);
			return false;
		}

		// Create a console group which will contain the logs from our Proxy etc
		console.groupCollapsed(`ACTION: ${actionKey}`);

		// Let anything that's watching the status know that we're dispatching an action
		this.status = 'action';

		// Actually call the action and pass it the Store context and the payload
		(
			this.actions[actionKey] as (
				store: Store,
				payload: mixed | number | string
			) => void
		)(this, payload);

		// Close our console group to keep things nice and neat
		console.groupEnd();

		return true;
	}

	/**
	 * Look for a mutation and modify the state object
	 * if that mutation exists by calling it
	 *
	 * @param {string} mutationKey
	 * @param {mixed} payload
	 * @returns {boolean}
	 * @memberof Store
	 */
	commit(mutationKey: string, payload: mixed) {
		// Run a quick check to see if this mutation actually exists
		// before trying to run it
		if (typeof this.mutations[mutationKey] !== 'function') {
			console.log(`Mutation "${mutationKey}" doesn't exist`);
			return false;
		}

		// Let anything that's watching the status know that we're mutating state
		this.status = 'mutation';

		// const states: Record<string, never> = this.state;
		// Get a new version of the state by running the mutation and storing the result of it
		const newState = // eslint-disable-next-line no-unused-vars
			(
				this.mutations[mutationKey] as (
					state: State,
					payload: mixed
				) => void
			)(this.state, payload);

		// Merge the old and new together to create a new state and set it
		this.state = Object.assign(this.state, newState);

		return true;
	}
}
