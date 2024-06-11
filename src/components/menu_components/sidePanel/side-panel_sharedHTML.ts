'use strict';

import type { IsidePanelSharedHTML } from './IsidePanel.js';

const sidePanel_sharedHTML: IsidePanelSharedHTML = {
    shell: ``,
    panel: ``,
    lottery: ``
};

sidePanel_sharedHTML.shell = /*html*/ `

	<side-panel id="side-panel" class="side-panel"></side-panel>
    
`;

sidePanel_sharedHTML.panel = /*html*/ `

    <div id="hamburgers" class="hamburgers">&#9776;</div>
    <div id="container" class="container" data-testid="containertestid" name="slide-container">
    </div>
`;

sidePanel_sharedHTML.lottery = /*html*/ `



`;

export { sidePanel_sharedHTML };
