'use strict';

import Store from './store.js';

export default {
	addItem(context: Store, payload: mixed) {
		context.commit('addItem', payload);
	},
	clearItem(context: Store, payload: mixed) {
		context.commit('clearItem', payload);
	}
};
