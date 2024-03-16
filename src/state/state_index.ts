'use strict';

import store from './store/index.js';

// Load up components
import Count from './components/count.js';
import List from './components/list.js';
import Status from './components/status.js';

// Load up some DOM elements
const formElement: HTMLFormElement | null = document.querySelector('.js-form');
const inputElement = document.getElementById(
	'new-item-field'
) as HTMLInputElement;

// Add a submit event listener to the form and prevent it from posting back
formElement?.addEventListener('submit', (event: SubmitEvent) => {
	event.preventDefault();

	// Grab the text value of the text box and trim any whitespace off it
	const value: string | null = inputElement.value.trim();

	// If there's some content, trigger the action and clear the field, ready for the next item
	if (value?.length) {
		store.dispatch('addItem', value);
		inputElement.value = ''; // Remove optional chaining operator
		inputElement.focus();
	}
});

// Instantiate components
const countInstance = new Count();
const listInstance = new List();
const statusInstance = new Status();

// Initial renders
countInstance.render();
listInstance.render();
statusInstance.render();
