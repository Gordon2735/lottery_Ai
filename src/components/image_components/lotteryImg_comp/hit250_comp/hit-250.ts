'use strict';

import { Hit250Template } from './hit-250_template.js';
import { RegisterComponent } from '../../../componentTools/general_helpers.js';

class Hit250 extends Hit250Template {
	constructor() {
		super();

		this.activateShadowDOM = false;
	}

	connectedCallback(): void {
		super.connectedCallback();

		console.info(
			`
                The Hit $250 Scratch Web-Component has fired and is now active!
            `
		);
	}

	public get template(): string {
		return /*html*/ `

            <section id="sectionHit250" class="section-hit-250">
                <figure id="figureHit250" class="figure-hit-250">
                    <img id="imgHit250" class="img-hit-250" src="../../components/image_components/lotteryImg_comp/Hit250_comp/Hit250_resources/Hit250_imgs/f-04_sc_lottery.webp"
                        alt="Hit $250 Scratch-Off Ticket Image" />
                    <figcaption id="figCapHit250" class="fig-cap-hit-250">
                        <p id="figCapHit250Para" class="fig-cap-hit-250-para figcap-p">
                            South Carolina Education Lottery Hit $250 Scratch-Off Ticket
                        </p>
                    </figcaption>
                </figure>
            </section>

            <style>
                .section-hit-250 {
                    padding: var(--padding-wc-0);
                    position: var(--position-wc-absolute);
                    display: var(--display-wc-inline-block);
                    width: var(--width-wc-100a);
                    z-index: var(--z-index-wc-10);
                }

                .img-hit-250 {
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
RegisterComponent('hit-250', Hit250);
