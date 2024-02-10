'use strict';

import { LotterySlipTemplate } from './lottery-slip_template.js';
import { RegisterComponent } from '../../../componentTools/general_helpers.js';

class LotterySlip extends LotterySlipTemplate {
	activateShadowDOM: boolean = false;

	constructor() {
		super();

		this.activateShadowDOM = false;
	}

	connectedCallback(): void {
		super.connectedCallback();

		console.info(
			`
                The Lottery Slip Web Component has fired is now active!            
            `
		);
	}

	public get template(): string {
		return /*html*/ `

            <figure id="figureSlip" class="figure-slip">
                <img id="imgSlip" class="img-slip" src="../images/lottery-slip-640x451.png" alt="Lottery Slip" />
                <figcaption id="figCapSlip" class="fig-cap-slip figcap">
                    <p id="figCapSlipP" class="fig-cap-slip-p figcap-p">
                        Lottery Slip
                    </p>
                </figcaption>
            </figure>

            <style>

                .figure-slip {
                    display: var(--display-wc-inline-block);
                    padding: var(--padding-wc-0);
                    position: var(--position-wc-absolute);
                    z-index: var(--z-index-wc-10);    
                }

                .img-slip {
                    width: var(--width-wc-xxxl-9);
                    aspect-ratio: 180/127; 
                    border-radius: var(--radius-wc-sm);
                    filter: var(--filter-shadow-wc-xmd);
                    rotate: var(--rotate-wc-10);
                }

            </style>

        `;
	}
}
RegisterComponent('lottery-slip', LotterySlip);
