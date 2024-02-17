'use strict';

import { PowerBallGameTemplate } from './powerball-game_template.js';
import {
	RegisterComponent,
	setAttributes
} from '../../../componentTools/general_helpers.js';
import { powerballGame_sharedHTML } from './powerball-game_sharedHTML.js';
import { powerballGame_sharedStyles } from './powerball-game_sharedStyles.js';

class PowerBallGameShell extends PowerBallGameTemplate {
	head: HTMLHeadElement;
	scriptPowerballGame: HTMLScriptElement;
	init: () => Promise<void>;

	constructor() {
		super();

		this.activateShadowDOM = false;

		const head: HTMLHeadElement = document.getElementsByTagName('head')[0];
		const scriptPowerballGame: HTMLScriptElement =
			document.createElement('script');

		this.head = head;
		this.scriptPowerballGame = scriptPowerballGame;

		setAttributes(this.scriptPowerballGame, {
			type: 'module',
			src: '/src/components/game_components/powerBall_components/powerBall_game/powerball-game.js',
			content: 'text/javascript',
			crossOrigin: 'anonymous'
		});

		const init: () => Promise<void> = async (): Promise<void> => {
			try {
				this.head.appendChild(this.scriptPowerballGame);

				console.info(
					`
					
						The powerball-game_shell component's "init()" Function executed successfully!
						The powerball-game component's script was appended to the head element of the document.
					`
				);
			} catch (error: unknown) {
				console.error(
					`
						The powerball-game_shell component's "init()" Function failed,
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
				The powerball-game_shell component was added to the DOM!
			`
		);

		this.init();
	}

	public get template(): string {
		return /*html*/ ` 	
		
			<style>
				${powerballGame_sharedStyles.global}
			</style>

			<style>
				${powerballGame_sharedStyles.root}
			</style>

			<style>
				${powerballGame_sharedStyles.shell}
			</style>			
					
			${powerballGame_sharedHTML.shell}
        
        `;
	}
}
RegisterComponent('powerball-game_shell', PowerBallGameShell);
