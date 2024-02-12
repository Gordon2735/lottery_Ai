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
                <img id="imgSlip" class="img-slip" src="../../components/image_components/lotteryImg_comp/lotterySlip_comp/lotterySlip_resources/lotterySlip_imgs/lottery-slip-640x451.png" 
                    alt="Lottery Slip" />
                <figcaption id="figCapSlip" class="fig-cap-slip figcap">
                    <p id="figCapSlipP" class="fig-cap-slip-p figcap-p">
                        Lottery Slip
                    </p>
                </figcaption>
            </figure>

            <style>
                .figure-slip {
                    padding: var(--padding-wc-0);
                    position: var(--position-wc-absolute);
                    display: var(--display-wc-inline-block);
                    rotate: var(--rotate-wc-10);
                    z-index: var(--z-index-wc-10);  
                }

                .img-slip {
                    width: var(--width-wc-xxxl-9);
                    aspect-ratio: 180/127; 
                    border: var(--border-wc-feather);
                    border-radius: var(--radius-wc-smmd);
                    filter: var(--filter-shadow-wc-xmd);
                    rotate: var(--rotate-wc-10);
                    z-index: var(--z-index-wc-10); 
                    filter: drop-shadow(0px 0px 18px 18px hsla(188, 98%, 34%, 0.993)) inset;
                    opacity: 0.4;
                }
            </style>

        `;
	}
}
RegisterComponent('lottery-slip', LotterySlip);
