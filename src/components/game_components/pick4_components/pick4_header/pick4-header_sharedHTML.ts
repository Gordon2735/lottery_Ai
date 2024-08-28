'use strict';

import type { Ipick4_header_sharedHTML } from './Ipick4_header.js';

const pick4_header_sharedHTML: Ipick4_header_sharedHTML = {
    shell: '',
    header: '',
    currentPick4: ''
};

pick4_header_sharedHTML.shell = /*html*/ `

	<pick4-header type="module" id="pick4Header" class="pick4-header"
		data-pick4="non-active">
	</pick4-header>

`;

pick4_header_sharedHTML.header = /*html*/ `

`;

pick4_header_sharedHTML.currentPick4 = /*html*/ `

`;

export { pick4_header_sharedHTML };
