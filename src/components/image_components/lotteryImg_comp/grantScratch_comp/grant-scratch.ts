'use strict';

import { GrantScratchTemplate } from './grant-scratch_template.js';
import { RegisterComponent } from '../../../componentTools/general_helpers.js';

class GrantScratch extends GrantScratchTemplate {
	constructor() {
		super();

		this.activateShadowDOM = false;
	}

	connectedCallback(): void {
		super.connectedCallback();

		console.info(
			`
                The Grant Scratch Web-Component has fired and is now active!
            `
		);
	}

	public get template(): string {
		return /*html*/ `

            <section id="sectionGrantScratch" class="section-grant-scratch">
                <figure id="figureGrantScratch" class="figure-grant-scratch">
                    <img id="imgGrantScratch" class="img-grant-scratch" src="../../components/image_components/lotteryImg_comp/grantScratch_comp/grantScratch_resources/grantScratch_imgs/f-02_sc_lottery.webp"
                        alt="Grant Scratch-Off Ticket Image" />
                    <figcaption id="figCapGrantScratch" class="fig-cap-grant-scratch">
                        <p id="figCapGrantScratchPara" class="fig-cap-grant-scratch-para figcap-p">
                            South Carolina Education Lottery Grant Scratch-Off Ticket
                        </p>
                    </figcaption>
                </figure>
            </section>

            <style>
                .section-grant-scratch {
                    padding: var(--padding-wc-0);
                    position: var(--position-wc-absolute);
                    display: var(--display-wc-inline-block);
                    width: var(--width-wc-100a);
                    z-index: var(--z-index-wc-10);
                }

                .img-grant-scratch {
                    display: var(--display-wc-inline-block);
                    width: var(--width-wc-150);
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
RegisterComponent('grant-scratch', GrantScratch);
