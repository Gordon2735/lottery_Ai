'use strict';

import type { IpopHeaderSharedHTML } from './Ipop_header.js';

const popHeader_sharedHTML: IpopHeaderSharedHTML = {
    shell: ``,
    container: ``,
    results: ``
};

popHeader_sharedHTML.shell = /*html*/ `

    <pop-header id="popHeader" class="pop-header"></pop-header>

`;

popHeader_sharedHTML.container = /*html*/ `

    <figure id="figLot" class="fig-lot">
    <img src="./components/game_components/pop_components/pop_resources/images/scLotteryLogo.png" id="scLotteryLogo" class="sc-lottery-logo"
        alt="SC Education Lottery Logo" />
    <figcaption id="figCapLot" class="fig-cap-lot blink">SC Education Lottery Logo</figcaption>
    </figure>
    <header id="popHeader" class="pop-header">
    <figure id="figHeader" class="fig-header">
        <img src="./components/game_components/pop_components/pop_resources/images/00_pop_logo.png" id="popHeaderLogo" class="pop-header-logo"
            alt="SC Education Lottery Cash Pop" />
        <figcaption id="figCapHeaderPop" class="fig-cap-header-pop blink">Cash Pop</figcaption>
    </figure>

    <style>
     
    </style>

    <h1 id="headerH1" class="header-h1">
        Cash Pop Predictions
    </h1>
    </header>
  

`;

popHeader_sharedHTML.results = /*html*/ ` 


`;

export { popHeader_sharedHTML };
