'use strict';

import Component from '../lib/component.js';
import store from '../store/index.js';

export default class Count extends Component {
	constructor() {
		super({
			store,
			element: document.querySelector('.js-count') as HTMLElement | object
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
		const emoji = items.length > 0 ? '🙌' : '😢';

		this.element.innerHTML = `
            <small>You've done</small>
            <span>${items.length}</span>
            <small>thing${suffix} today ${emoji}</small>
        `;
	};
}
