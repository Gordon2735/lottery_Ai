'use strict';

import { IIndexWrapperSharedHTML } from './Iindex-wrapper.js';

const indexWrapperSharedHTML: IIndexWrapperSharedHTML = {
	global: '',
	shell: '',
	container: ''
};

indexWrapperSharedHTML.global = /*html*/ `

`;

indexWrapperSharedHTML.shell = /*html*/ `

    <index-wrapper id="indexWrapper" class="index-wrapper"></index-wrapper>

`;

indexWrapperSharedHTML.container = /*html*/ `

	<main id="mainContainer" class="main-container">
        
        <lotteryai-header_shell id="lotteryAiHeaderShell" class="lotteryAi-header-shell"></lotteryai-header_shell>            
        <lottery-slip id="lotterySlip" class="lottery-slip"></lottery-slip>
        <whitenumber-balls id="whiteNumberBalls" class="white-number-balls"></whitenumber-balls>

	</main>

`;

export { indexWrapperSharedHTML };
