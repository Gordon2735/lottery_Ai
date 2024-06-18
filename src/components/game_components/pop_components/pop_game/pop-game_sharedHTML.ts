'use strict';

import type { IpopGameSharedHTML } from './Ipop_game.js';

const popGame_sharedHTML: IpopGameSharedHTML = {
    shell: ``,
    container: ``,
    results: ``
};

popGame_sharedHTML.shell = /*html*/ `

    <pop-game id="popGame" class="pop-game"></pop-game>

`;

popGame_sharedHTML.container = /*html*/ `

<main id="mainContainer" class="main-container">
    
        <pop-header_shell id="popHeaderShell" class="pop-header-shell">
        </pop-header_shell>
        
        <button id="getPopPredictionsBtn" class="get-pop-predictions-btn pop-predict_btn">
            Pop Predictions
        </button>

    </main>

`;

popGame_sharedHTML.results = /*html*/ `




`;

export { popGame_sharedHTML };
