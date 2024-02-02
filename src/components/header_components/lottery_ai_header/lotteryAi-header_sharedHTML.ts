// Lottery Ai Header Shared HTML

import { ILotteryAiHeaderSharedHTML } from './Ilotteryai_header.js';

const lotteryAiHeaderSharedHTML: ILotteryAiHeaderSharedHTML = {
	global: '',
	shell: '',
	queries: '',
	container: ''
};

lotteryAiHeaderSharedHTML.global = /*html*/ `
`;

lotteryAiHeaderSharedHTML.shell = /*html*/ `
    
    <lotteryai-header id="lotteryAiHeader" class="lotteryAi-header"></lotteryai-header>
    
`;

lotteryAiHeaderSharedHTML.queries = /*html*/ `
    
    
`;

lotteryAiHeaderSharedHTML.container = /*html*/ `

	<header id="header" class="header">
		<figure id="figureLogo" class="figure-logo">
			<img id="imgLogo" class="img-logo" src="../images/lotteryAi_logo_TRANS-AQUA.png" alt="LotteryAi Logo" />
			<figcaption id="figCapLogo" class="fig-cap-logo">
				<p id="figCapLogoP" class="fig-cap-logo-p">
					LotteryAi
				</p>
			</figcaption>
		</figure>
		<section id="sectionHeader1" class="section-header-1">			
			<h1 id="headerH1" class="header-h1">
				Lottery Ai
			</h1>
			<br />
			<br />
			<br />
			<p id="headerPara1" class="header-para-1">
				You have been &nbsp;  <strong> ENABLED </strong>&nbsp;  || &nbsp;  to WIN!
			</p>
			<br />
			<br />
			<p id="headerPara2" class="header-para-2">
				<strong>Congratulations</strong>: &nbsp;&nbsp;  you &nbsp; NOW POSSESS &nbsp; a very advanced personal tool!
			<br />
					With cutting-edge A.I. technology built-in,  
					as well as a series of powerful and intuitive algorithms,
					this tool equips you with enormous &nbsp; ENABLING POWER!
			</p>  
		</section> 
	</header>

`;

export { lotteryAiHeaderSharedHTML };
