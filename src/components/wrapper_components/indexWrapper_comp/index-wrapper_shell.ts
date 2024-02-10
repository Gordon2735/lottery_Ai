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
	scriptLotterySlip: HTMLScriptElement;
	scriptWhiteNumberBalls: HTMLScriptElement;
	init: () => Promise<void>;

	constructor() {
		super();

		this.activateShadowDOM = false;

		const head: HTMLHeadElement = document.getElementsByTagName('head')[0];

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

		this.head = head;
		this.scriptWrapper = scriptWrapper;
		this.scriptHeaderShell = scriptHeaderShell;
		this.scriptLotterySlip = scriptLotterySlip;
		this.scriptWhiteNumberBalls = scriptWhiteNumberBalls;

		const init: () => Promise<void> = async (): Promise<void> => {
			try {
				await appendChildren(head, [
					this.scriptWrapper,
					this.scriptHeaderShell,
					this.scriptLotterySlip,
					this.scriptWhiteNumberBalls
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
				${indexWrapperSharedStyles.root}
			</style>

			<style>
				${indexWrapperSharedStyles.global}
			</style>        

			${indexWrapperSharedHTML.shell}
        
        `;
	}
}
RegisterComponent('index-wrapper_shell', IndexWrapperShell);
