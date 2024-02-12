'use strict';

import { MegaMillionsTemplate } from './mega-mil_template.js';
import { RegisterComponent } from '../../../componentTools/general_helpers.js';

class MegaMillions extends MegaMillionsTemplate {
	constructor() {
		super();

		this.activateShadowDOM = false;
	}

	connectedCallback(): void {
		super.connectedCallback();

		console.info(
			`
                The Mega Millions Web-Component has fired and is now active!
            `
		);
	}

	public get template(): string {
		return /*html*/ `

            <section id="sectionMegaMil" class="section-mega-mil">
                <figure id="figureMegaMil" class="figure-mega-mil">
                    <img id="imgMegaMil" class="img-mega-mil" src="../../components/image_components/lotteryImg_comp/megaMil_comp/megaMil_resources/megaMil_images/Mega-Millions-1280x720.jpg"
                        alt="Mega Millions Logo Image" />
                    <figcaption id="figCapMegaMil" class="fig-cap-mega-mil">
                        <p id="figCapMegaMilPara" class="fig-cap-mega-mil-para figcap-p">
                        South Carolina Education Lottery Mega Millions Logo
                        </p>
                    </figcaption>
                </figure>
            </section>

            <style>
                .section-mega-mil {
                    padding: var(--padding-wc-0);
                    position: var(--position-wc-absolute);
                    display: var(--display-wc-inline-block);
                    width: var(--width-wc-100a);
                    z-index: var(--z-index-wc-10);
                }

                .img-mega-mil {
                    display: var(--display-wc-inline-block);
                    width: var(--width-wc-450);
                    border-radius: var(--radius-wc-smmd);
                    rotate: var(--rotate-wc-355);
                    filter: var(--filter-shadow-wc-xmda);
                    aspect-ratio: 16/9;
                    opacity: var(--opacity-wc-45);
                }
            </style>
        
        
        
        `;
	}
}
RegisterComponent('mega-millions', MegaMillions);
