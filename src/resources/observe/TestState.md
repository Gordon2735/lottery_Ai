'use strict';

/// <reference path="watchProperty.ts" />
import { StateBase } from './state_base.js';
import { WatchProperty } from './WatchProperty.js';

class TestState extends StateBase {
	constructor() {
		super();
		this.texty = '';
		this.numbery = 0;
	}

	@WatchProperty
	texty: string;

	@WatchProperty
	numbery: number;

	@WatchProperty
	is: boolean | undefined;
}

export { TestState };
