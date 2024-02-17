// Power Ball Main Component

'use strict';

import { PowerBallGameTemplate } from './powerball-game_template.js';
import { RegisterComponent } from '../../../componentTools/general_helpers.js';
import { powerballGame_sharedHTML } from './powerball-game_sharedHTML.js';
import { powerballGame_sharedStyles } from './powerball-game_sharedStyles.js';

class PowerBallGame extends PowerBallGameTemplate {
	init: () => Promise<void>;

	constructor() {
		super();

		this.activateShadowDOM = false;

		const init: () => Promise<void> = async (): Promise<void> => {
			try {
				console.info(
					`
						The powerball-game component's "init()" Function executed successfully!
					`
				);
			} catch (error: unknown) {
				console.error(
					`
						The powerball-game component's "init()" Function failed,
							ERROR:  ${error}
					`
				);
			}
		};
		this.init = init;
	}

	connectedCallback(): void {
		super.connectedCallback();

		console.info(
			`
				The powerball-game component was added to the DOM!
			`
		);

		this.init();
	}

	public get template(): string {
		return /*html*/ `
        
			${powerballGame_sharedHTML.container}

			<style>
				${powerballGame_sharedStyles.container}
			</style>        
        
        `;
	}
}
RegisterComponent('powerball-game', PowerBallGame);
