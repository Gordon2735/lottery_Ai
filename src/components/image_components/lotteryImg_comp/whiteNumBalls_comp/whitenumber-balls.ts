'use strict';

import { WhiteNumberBallsTemplate } from './whitenumber-balls_template.js';
import { RegisterComponent } from '../../../componentTools/general_helpers.js';

class WhiteNumberBalls extends WhiteNumberBallsTemplate {
	constructor() {
		super();

		this.activateShadowDOM = false;
	}

	public get template(): string {
		return /*html*/ `

            <section id="sectionBalls" class="section-balls">
                <figure id="figureLotteryBalls" class="figure-lottery-balls">
                    <img id="imgLotteryBalls" class="img-lottery-balls" src="../../components/image_components/lotteryImg_comp/whiteNumBalls_comp/whtNumBalls_resources/whiteNumBalls_imgs/lottery-balls-2.png" 
                        alt="White Number Balls" />
                    <figcaption id="figCapBalls" class="fig-cap-balls figcap">
                        <p id="figCapBallsP" class="fig-cap-balls-p figcap-p">
                            Lottery Balls
                        </p>
                    </figcaption>
                </figure>
            </section>

            <style>

                .section-balls {
                    position: var(--position-wc-absolute);
                    display: var(--display-wc-inline-block);
                    top: var(--top-wc-xxxl-25az);
                    left: var(--left-wc-xxxl-27a);
                    width: var(--width-wc-100a);
                    z-index: var(--z-index-wc-10);
                    opacity: var(--opacity-wc-05);
                }

                .figure-lottery-balls {
                    padding: var(--padding-wc-0);
                    width: var(--width-wc-100a);                    
                }

                .img-lottery-balls {
                    width: var(--width-wc-780);
                    aspect-ratio: 325/146; 
                    filter: var(--filter-shadow-wc-xmd);  
                }

                .figcap-p {
                    display: var(--display-wc-none);
                }

                .figcap-p:hover,
                .figcap-p:focus {
                    display: var(--display-wc-inline-block);
                    cursor: pointer;
                }            
            
            </style>

        `;
	}

	connectedCallback(): void {
		super.connectedCallback();

		console.info(
			`
                White Number Balls Web Component has fired and is now active!            
            `
		);
	}
}
RegisterComponent('whitenumber-balls', WhiteNumberBalls);
