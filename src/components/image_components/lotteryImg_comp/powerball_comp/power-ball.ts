'use strict';

import { PowerBallTemplate } from './power-ball_template.js';
import { RegisterComponent } from '../../../componentTools/general_helpers.js';

class PowerBall extends PowerBallTemplate {
	constructor() {
		super();

		this.activateShadowDOM = false;
	}

	connectedCallback(): void {
		super.connectedCallback();

		console.info(
			`
                The PowerBall Web-Component has Fired and is now active!
            `
		);
	}

	public get template(): string {
		return /*html*/ `
        
            <section id="sectionPowerBall" class="section-power-ball">
                <figure id="figurePowerBall" class="figure-power-ball">
                    <img id="imgPowerBall" class="img-power-ball" src="../../components/image_components/lotteryImg_comp/powerball_comp/powerball_resources/powerball_imgs/powerball-680×383.png"
                        alt="Power Ball Logo Image" />
                    <figcaption id="figCapPowerBall" class="fig-cap-power-ball">
                        <p id="figCapPowerBallPara" class="fig-cap-power-ball-para figcap-p">
                        South Carolina Education Lottery Power Ball Logo
                        </p>
                    </figcaption>
                </figure>
            </section>

            <style>
                .section-power-ball {
                    padding: var(--padding-wc-0);
                    position: var(--position-wc-absolute);
                    display: var(--display-wc-inline-block);
                    width: var(--width-wc-100a);
                    z-index: var(--z-index-wc-10);
                }

                .img-power-ball {
                    display: var(--display-wc-inline-block);
                    width: var(--width-wc-240);
                    border-radius: var(--radius-wc-smmd);
                    rotate: var(--rotate-wc-3);
                    filter: var(--filter-shadow-wc-xmda);
                    aspect-ratio: 680/383;
                    opacity: var(--opacity-wc-50);
                }
            </style>
        
        
        `;
	}
}
RegisterComponent('power-ball', PowerBall);
