'use strict';

import { Ipick3GameSharedHTML } from './Ipick3_game.js';

const pick3Game_sharedHTML: Ipick3GameSharedHTML = {
    shell: ``,
    container: ``,
    game: ``,
    results: ``
};

pick3Game_sharedHTML.shell = /*html*/ `

    <pick3-game type="module" id="pick3Game" class="pick3-game" data-transmit="non-transmission"></pick3-game>


`;

pick3Game_sharedHTML.container = /*html*/ `

    <pick3-scrape type="module" id="pick3Scrape" class="pick3-scrape" data-scrape="non-active"></pick3-scrape>    

`;

pick3Game_sharedHTML.game = /*html*/ `



`;

pick3Game_sharedHTML.results = /*html*/ `



`;

export { pick3Game_sharedHTML };
