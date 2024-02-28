'use strict';

import { IspinnerBase1SharedHTML } from './Ispinner-base1.js';

const spinnerBase1_SharedHTML: IspinnerBase1SharedHTML = {
	construct: '',
	logic: ''
};

spinnerBase1_SharedHTML.construct = /*html*/ `

    <section id="spinnerBase1Section" class="spinner-base1-section"></section>

`;

spinnerBase1_SharedHTML.logic = /*html*/ `
	<!--
	<error-codes-base1 id="compErrorCodeBase1" data-error_code_base="0">
		<span id="spanErrorCode" class="span-error-code">
			<div id="divErrorCode" class="spinner-base1" slot="error_code_base">
				<p id="pErrorCode" class="p-error-code">
					0
				</p>
			</div>
		</span>
	</error-codes-base1>
	-->


`;

export { spinnerBase1_SharedHTML };
