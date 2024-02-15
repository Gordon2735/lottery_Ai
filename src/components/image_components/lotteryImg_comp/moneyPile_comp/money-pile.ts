'use strict';

import { MoneyPileTemplate } from './money-pile_template.js';
import { RegisterComponent } from '../../../componentTools/general_helpers.js';

class MoneyPile extends MoneyPileTemplate {
	constructor() {
		super();

		this.activateShadowDOM = false;
	}

	connectedCallback(): void {
		super.connectedCallback();

		console.info(
			`
                The Money Pile Web-Component has fired and is now active!
            `
		);
	}

	public get template(): string {
		return /*html*/ `

            <section id="sectionMoneyPile" class="section-money-pile">
                <figure id="figureMoneyPile" class="figure-money-pile">
                    <img id="imgMoneyPile" class="img-money-pile" src="../../components/image_components/lotteryImg_comp/moneyPile_comp/moneyPile_resources/moneyPile_imgs/052_sc_lottery.webp"
                        alt="Pick 3 & 4 Tickets Stand Image" />
                    <figcaption id="figCapMoneyPile" class="fig-cap-money-pile">
                        <p id="figCapMoneyPilePara" class="fig-cap-money-pile-para figcap-p">
                            Lottery Money Pile
                        </p>
                    </figcaption>
                </figure>
            </section>

            <style>
                .section-money-pile {
                    margin: var(--margin-wc-xs) var(--margin-wc-0) var(--margin-wc-0) var(--margin-wc-0);
                    padding: var(--padding-wc-0);
                    position: var(--position-wc-absolute);
                    display: var(--display-wc-inline-block);
                    width: var(--width-wc-100a);
                    z-index: var(--z-index-wc-10);
                }

                .img-money-pile {
                    display: var(--display-wc-inline-block);
                    width: var(--width-wc-500);
                    border-radius: var(--radius-wc-lg);
                    filter: var(--filter-shadow-wc-xmda);
                    aspect-ratio: 55/31;
                    opacity: var(--opacity-wc-45);
                    rotate: var(--rotate-wc-355);
                    z-index: var(--z-index-wc-10);
                }
            </style>        
        
        `;
	}
}
RegisterComponent('money-pile', MoneyPile);
