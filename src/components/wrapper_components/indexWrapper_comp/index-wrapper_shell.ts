'use strict';

import { IndexWrapperTemplate } from './index-wrapper_template.js';
import {
	RegisterComponent,
	setAttributes,
	appendChildren
} from '../../componentTools/general_helpers.js';
import { indexWrapperSharedStyles } from './index-wrapper_sharedStyles.js';
import { indexWrapperSharedHTML } from './index-wrapper_sharedHTML.js';

class IndexWrapperShell extends IndexWrapperTemplate {
	head: HTMLHeadElement;
	scriptWrapper: HTMLScriptElement;
	scriptHeaderShell: HTMLScriptElement;
	scriptNavMenuShell: HTMLScriptElement;
	scriptLotterySlip: HTMLScriptElement;
	scriptWhiteNumberBalls: HTMLScriptElement;
	scriptPowerBall: HTMLScriptElement;
	scriptMegaMil: HTMLScriptElement;
	scriptGrantScratch: HTMLScriptElement;
	scriptHit250: HTMLScriptElement;
	scriptPickStand: HTMLScriptElement;
	scriptMoneyPile: HTMLScriptElement;
	init: () => Promise<void>;
	scriptSpinnerBase1: HTMLScriptElement;

	constructor() {
		super();

		this.activateShadowDOM = false;

		const head: HTMLHeadElement = document.getElementsByTagName('head')[0];

		const scriptSpinnerBase1: HTMLScriptElement =
			document.createElement('script');
		setAttributes(scriptSpinnerBase1, {
			type: 'module',
			src: '/src/components/animation_components/spinner_comps/spinnerBase1_comp/spinner-base1.js',
			content: 'text/javascript',
			crossOrigin: 'anonymous'
		});

		const scriptWrapper: HTMLScriptElement =
			document.createElement('script');
		setAttributes(scriptWrapper, {
			type: 'module',
			src: '/src/components/wrapper_components/indexWrapper_comp/index-wrapper.js',
			content: 'text/javascript',
			crossOrigin: 'anonymous'
		});

		const scriptHeaderShell: HTMLScriptElement =
			document.createElement('script');
		setAttributes(scriptHeaderShell, {
			type: 'module',
			src: '/src/components/header_components/lottery_ai_header/lotteryai-header_shell.js',
			content: 'text/javascript',
			crossOrigin: 'anonymous'
		});

		const scriptNavMenuShell: HTMLScriptElement =
			document.createElement('script');
		setAttributes(scriptNavMenuShell, {
			type: 'module',
			src: '/src/components/menu_components/navMenu_comp/nav-menu_shell.js',
			content: 'text/javascript',
			crossOrigin: 'anonymous'
		});

		const scriptLotterySlip: HTMLScriptElement =
			document.createElement('script');
		setAttributes(scriptLotterySlip, {
			type: 'module',
			src: '/src/components/image_components/lotteryImg_comp/lotterySlip_comp/lottery-slip.js',
			content: 'text/javascript',
			crossOrigin: 'anonymous'
		});

		const scriptWhiteNumberBalls: HTMLScriptElement =
			document.createElement('script');
		setAttributes(scriptWhiteNumberBalls, {
			type: 'module',
			src: '/src/components/image_components/lotteryImg_comp/whiteNumBalls_comp/whitenumber-balls.js',
			content: 'text/javascript',
			crossOrigin: 'anonymous'
		});

		const scriptPowerBall: HTMLScriptElement =
			document.createElement('script');
		setAttributes(scriptPowerBall, {
			type: 'module',
			src: '/src/components/image_components/lotteryImg_comp/powerball_comp/power-ball.js',
			content: 'text/javascript',
			crossOrigin: 'anonymous'
		});

		const scriptMegaMil: HTMLScriptElement =
			document.createElement('script');
		setAttributes(scriptMegaMil, {
			type: 'module',
			src: '/src/components/image_components/lotteryImg_comp/megaMil_comp/mega-mil.js',
			content: 'text/javascript',
			crossOrigin: 'anonymous'
		});

		const scriptGrantScratch: HTMLScriptElement =
			document.createElement('script');
		setAttributes(scriptGrantScratch, {
			type: 'module',
			src: '/src/components/image_components/lotteryImg_comp/grantScratch_comp/grant-scratch.js',
			content: 'text/javascript',
			crossOrigin: 'anonymous'
		});

		const scriptHit250: HTMLScriptElement =
			document.createElement('script');
		setAttributes(scriptHit250, {
			type: 'module',
			src: '/src/components/image_components/lotteryImg_comp/hit250_comp/hit-250.js',
			content: 'text/javascript',
			crossOrigin: 'anonymous'
		});

		const scriptPickStand: HTMLScriptElement =
			document.createElement('script');
		setAttributes(scriptPickStand, {
			type: 'module',
			src: '/src/components/image_components/lotteryImg_comp/pickStand_comp/pick-stand.js',
			content: 'text/javascript',
			crossOrigin: 'anonymous'
		});

		const scriptMoneyPile: HTMLScriptElement =
			document.createElement('script');
		setAttributes(scriptMoneyPile, {
			type: 'module',
			src: '/src/components/image_components/lotteryImg_comp/moneyPile_comp/money-pile.js',
			content: 'text/javascript',
			crossOrigin: 'anonymous'
		});

		this.head = head;
		this.scriptSpinnerBase1 = scriptSpinnerBase1;
		this.scriptWrapper = scriptWrapper;
		this.scriptHeaderShell = scriptHeaderShell;
		this.scriptNavMenuShell = scriptNavMenuShell;
		this.scriptLotterySlip = scriptLotterySlip;
		this.scriptWhiteNumberBalls = scriptWhiteNumberBalls;
		this.scriptPowerBall = scriptPowerBall;
		this.scriptMegaMil = scriptMegaMil;
		this.scriptGrantScratch = scriptGrantScratch;
		this.scriptHit250 = scriptHit250;
		this.scriptPickStand = scriptPickStand;
		this.scriptMoneyPile = scriptMoneyPile;

		const init: () => Promise<void> = async (): Promise<void> => {
			try {
				await appendChildren(this.head, [
					this.scriptSpinnerBase1,
					this.scriptWrapper,
					this.scriptHeaderShell,
					this.scriptNavMenuShell,
					this.scriptLotterySlip,
					this.scriptWhiteNumberBalls,
					this.scriptPowerBall,
					this.scriptMegaMil,
					this.scriptGrantScratch,
					this.scriptHit250,
					this.scriptPickStand,
					this.scriptMoneyPile
				]);
				return;
			} catch (error: unknown) {
				console.error(
					`
                        The Index Wrapper Shell Component's "init()" Function has produced an Error!
                
                        ERROR: ${error}
                    `
				);
				return;
			}
		};

		this.init = init;
	}

	connectedCallback(): void {
		super.connectedCallback();

		console.info(
			`
                The Index Wrapper Shell Component Shell has Fired and is now active!            
            `
		);

		this.init();
	}

	public get template(): string {
		return /*html*/ `
		
			<style>
				${indexWrapperSharedStyles.global}
			</style>

			<style>
				${indexWrapperSharedStyles.root}
			</style>

			${indexWrapperSharedHTML.global}
			${indexWrapperSharedHTML.shell}
        
        `;
	}
}
RegisterComponent('index-wrapper_shell', IndexWrapperShell);
