'use strict';

export default {
	addItem(state: State, payload: mixed) {
		const items: object[] = Array.isArray(state.items) ? state.items : [];
		items.push(payload);

		return state;
	},
	clearItem(
		state: Record<string, [string | number | boolean]>,
		payload: { index: number }
	) {
		state.items.splice(payload.index, 1);

		return state;
	}
};
