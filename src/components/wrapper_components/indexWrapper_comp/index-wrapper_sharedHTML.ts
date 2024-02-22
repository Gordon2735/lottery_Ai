'use strict';
+63;
0.0;

import { IIndexWrapperSharedHTML } from './Iindex-wrapper.js';

const indexWrapperSharedHTML: IIndexWrapperSharedHTML = {
	global: '',
	shell: '',
	container: ''
};

indexWrapperSharedHTML.global = /*html*/ `

	<spinner-base1 id="spinnerBase1" class="spinner-base1"></spinner-base1>

`;

indexWrapperSharedHTML.shell = /*html*/ `

    <index-wrapper id="indexWrapper" class="index-wrapper"></index-wrapper>

`;

indexWrapperSharedHTML.container = /*html*/ `

	<nav-menu_shell id="navMenuShell" class="nav-menu-shell"></nav-menu_shell>

	<main id="mainContainer" class="main-container">
        
        <lotteryai-header_shell id="lotteryAiHeaderShell" class="lotteryAi-header-shell"></lotteryai-header_shell>            
        <lottery-slip id="lotterySlip" class="lottery-slip"></lottery-slip>
        <whitenumber-balls id="whiteNumberBalls" class="white-number-balls"></whitenumber-balls>
		<power-ball id="powerBall" class="power-ball"></power-ball>
		<mega-millions id="megaMillion" class="mega-million"></mega-millions>
		<grant-scratch id="grantScratch" class="grant-scratch"></grant-scratch>
		<hit-250 id="hit250" class="hit-250"></hit-250>
		<pick-stand id="pickStand" class="pick-stand"></pick-stand>
		<money-pile id="moneyPile" class="money-pile"></money-pile>

	</main>

`;

export { indexWrapperSharedHTML };
