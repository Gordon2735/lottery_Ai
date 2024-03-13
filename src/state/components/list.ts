'use strict';

import Component from '../lib/component.js';
import store from '../store/index.js';

export default class List extends Component {
	// Pass our store instance and the HTML element up to the parent Component
	constructor() {
		super({
			store,
			element: document.querySelector('.js-items') as HTMLElement | object
		});
	}

	/**
	 * React to state changes and render the component's HTML
	 *
	 * @returns {void}
	 */
	render = (): void => {
		// If there are no items to show, render a little status instead
		const items: object[] = Array.isArray(store.state.items)
			? store.state.items
			: [];
		if (items.length === 0) {
			this.element.innerHTML = `<p class="no-items">You've done nothing yet 😢</p>`;
			return;
		}

		// Loop the items and generate a list of elements
		this.element.innerHTML = `
            <ul class="app__items">
                ${items
					.map((item) => {
						return `
                        <li>${item}<button aria-label="Delete this item">×</button></li>
                    `;
					})
					.join('')}
            </ul>
        `;

		// Find all the buttons in the list and when they are clicked, we dispatch a
		// `clearItem` action which we pass the current item's index to
		this.element.querySelectorAll('button').forEach((button, index) => {
			button.addEventListener('click', () => {
				store.dispatch('clearItem', index);
			});
		});
	};
}
