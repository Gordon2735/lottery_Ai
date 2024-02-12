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
				&#169; COPYRIGHT 2023-2024 LOTTERY Ai<sup class="sup-TM">™️</sup> || Team-Webelistics<sup class="sup-TM">™️</sup>, LLC || All rights reserved.
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
					font-size: 0.60em;
					font-weight: bold;
					text-shadow: 0.1em 0.1em 0.1em hsla(0, 0%, 0%, 0.493);
					letter-spacing: 0.1em;
					cursor: pointer;
				}
				.sup-TM {
					font-size: 1.227em;
					text-shadow: none;
				}

				.copyright-paragraph:hover,
				.copyright-paragraph:focus {
					color: hsla(203, 56%, 82%, 0.893);
					letter-spacing: 0.17em;
				}

				.copyright-paragraph:active {
					color: hsla(0, 98%, 50%, 0.793);
					letter-spacing: 0.21em;
					opacity: 0.7;
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
							font-size: 0.50em;        
						}
				}

				/* 5) */
				@container copyright_container (max-width: 840px) {
 
					.copyright-paragraph {
						font-size: 0.47em;        
					}
				}

				/* 6) */
				@container copyright_container (max-width: 600px) {
					
					.copyright-paragraph {
						font-size: 0.40em;        
					}
				}

			</style>
		
		
		`;
	}

	connectedCallback(): void {
		super.connectedCallback();

		console.info(
			`
			👋 Hello! The Copyright Webelistics Component has fired and is now active.
			`
		);
	}
}
RegisterComponent('copyright-webelistics', CopyrightWebelistics);
