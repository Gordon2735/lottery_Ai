'use strict';

import Component from '../lib/component.js';
import store from '../store/index.js';

export default class Status extends Component {
	constructor() {
		super({
			store,
			element: document.querySelector('.js-status') as
				| HTMLElement
				| object
		});
	}

	/**
	 * React to state changes and render the component's HTML
	 *
	 * @returns {void}
	 */
	render = (): void => {
		const items: object[] = Array.isArray(store.state.items)
			? store.state.items
			: [];
		const suffix: string = items.length !== 1 ? 's' : '';

		this.element.innerHTML = `${items.length} item${suffix}`;
	};
}
