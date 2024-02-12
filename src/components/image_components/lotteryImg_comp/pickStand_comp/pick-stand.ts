'use strict';

import { PickStandTemplate } from './pick-stand_template.js';
import { RegisterComponent } from '../../../componentTools/general_helpers.js';

class PickStand extends PickStandTemplate {
	constructor() {
		super();

		this.activateShadowDOM = false;
	}

	connectedCallback(): void {
		super.connectedCallback();

		console.info(
			`
                The Pick 3 & 4 Tickets Stand Web-Component has fired and is now active!
            `
		);
	}

	public get template(): string {
		return /*html*/ `

            <section id="sectionPickStand" class="section-pick-stand">
                <figure id="figurePickStand" class="figure-pick-stand">
                    <img id="imgPickStand" class="img-pick-stand" src="../../components/image_components/lotteryImg_comp/pickStand_comp/pickStand_resources/pickStand_imgs/f-05_sc_lottery.webp"
                        alt="Pick 3 & 4 Tickets Stand Image" />
                    <figcaption id="figCapPickStand" class="fig-cap-pick-stand">
                        <p id="figCapPickStandPara" class="fig-cap-pick-stand-para figcap-p">
                            South Carolina Education Lottery Pick 3 & 4 Ticket Stand
                        </p>
                    </figcaption>
                </figure>
            </section>

            <style>
                .section-pick-stand {
                    padding: var(--padding-wc-0);
                    position: var(--position-wc-absolute);
                    display: var(--display-wc-inline-block);
                    width: var(--width-wc-100a);
                    z-index: var(--z-index-wc-10);
                }

                .img-pick-stand {
                    display: var(--display-wc-inline-block);
                    width: var(--width-wc-160);
                    border-radius: var(--radius-wc-smmd);
                    rotate: var(--rotate-wc-330);
                    filter: var(--filter-shadow-wc-xmda);
                    aspect-ratio: 2/3;
                    opacity: var(--opacity-wc-75);
                }
            </style>
        
        
        
        `;
	}
}
RegisterComponent('pick-stand', PickStand);
