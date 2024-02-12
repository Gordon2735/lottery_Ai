// Lottery Ai Header Shared HTML

import { ILotteryAiHeaderSharedHTML } from './Ilotteryai_header.js';

const lotteryAiHeaderSharedHTML: ILotteryAiHeaderSharedHTML = {
	global: '',
	shell: '',
	contents: ''
};

lotteryAiHeaderSharedHTML.global = /*html*/ `
`;

lotteryAiHeaderSharedHTML.shell = /*html*/ `
    
    	<lotteryai-header id="lotteryAiHeader" class="lotteryAi-header"></lotteryai-header>
    
`;

lotteryAiHeaderSharedHTML.contents = /*html*/ `

		<figure id="figureLogo" class="figure-logo">
			<img id="imgLogo" class="img-logo" src="../images/lotteryAi_logo_TRANS-AQUA.png" alt="LotteryAi Logo" />
			<figcaption id="figCapLogo" class="fig-cap-logo figcap">
				<p id="figCapLogoP" class="fig-cap-logo-p figcap-p">
					LotteryAi
				</p>
			</figcaption>
		</figure>
		<header id="header" class="header">
			<section id="sectionHeader1" class="section-header-1">			
				<h1 id="headerH1" class="header-h1">
					LOTTERY Ai
				</h1>	
				<p id="headerPara1" class="header-para-1">
					You have been <strong> ENABLED </strong> || to WIN!
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
