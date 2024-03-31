'use strict';

import { Ipick3_header_sharedHTML } from './Ipick3_header.js';

const pick3_header_sharedHTML: Ipick3_header_sharedHTML = {
	shell: '',
	header: '',
	currentPick3: ''
};

pick3_header_sharedHTML.shell = /*html*/ `

	<pick3-header type="module" id="pick3Header" class="pick3-header"
		data-pick3="non-active">
	</pick3-header>

`;

pick3_header_sharedHTML.header = /*html*/ `

`;

pick3_header_sharedHTML.currentPick3 = /*html*/ `

`;

export { pick3_header_sharedHTML };
