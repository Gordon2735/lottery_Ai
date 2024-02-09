'use strict';

// Copyright 2023-2024 Team-Webelistics Component

import { CopyrightWebelisticsTemplate } from './copyright-webelistics_template.js';
import { RegisterComponent } from '../../componentTools/general_helpers.js';

class CopyrightWebelistics extends CopyrightWebelisticsTemplate {
	constructor() {
		super();

		this.activateShadowDOM = true;
	}

	override get template(): string {
		return /*html*/ `

			<section id="copyrightSection" class="copyright-section">
				<p id="copyrightParagraph" class="copyright-paragraph">
					© COPYRIGHT 2021-2024 LOTTERY Ai<sup class="sup-TM">™️</sup> | Team-Webelistics<sup class="sup-TM">™️</sup>, LLC. All rights reserved.
				</p>			
			</section>
		
			<style>

				.copyright-section {
					container-type: inline-size;
					container-name: copyright_container;
				} 

				.copyright-section {
					padding: 0.5em;
					position: absolute;
					display: inline-block;
					bottom: 0.1rem;
					width: 100%;
					color: hsla(0, 0%, 0%, 0.993);
					z-index: 1000;
				}
				.copyright-paragraph {
					margin: 0 auto 0 auto;
					text-align: center;
					font-family: 'Source Code Pro', monospace;
					font-size: 0.77em;
					font-weight: bold;
					text-shadow: 0.1em 0.1em 0.1em hsla(0, 0%, 0%, 0.393);
				}
				.sup-TM {
					font-size: 1.177em;
					text-shadow: none;
				}

				/* 3) */
				@container copyright_container (max-width: 1250px) {        

					.copyright-paragraph {
						font-size: 0.57em;        
					}
				}

				/* 4) */
				@container copyright_container (max-width: 1080px) {
          
					.copyright-paragraph {
							font-size: 0.47em;        
						}
				}

				/* 5) */
				@container copyright_container (max-width: 840px) {
 
					.copyright-paragraph {
						font-size: 0.37em;        
					}
				}

				/* 6) */
				@container copyright_container (max-width: 600px) {
					
					.copyright-paragraph {
						font-size: 0.3em;        
					}
				}

			</style>
		
		
		`;
	}

	connectedCallback(): void {
		super.connectedCallback();

		console.info(
			`
			👋 Hello! This is the Copyright Webelistics Component.
			`
		);
	}
}
RegisterComponent('copyright-webelistics', CopyrightWebelistics);

export { CopyrightWebelistics };
