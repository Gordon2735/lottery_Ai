// Lottery Ai Header Shared HTML

import { ILotteryAiHeaderSharedHTML } from './Ilotteryai_header.js';

const lotteryAiHeaderSharedHTML: ILotteryAiHeaderSharedHTML = {
	global: '',
	shell: '',
	container: '',
	queries: ''
};

lotteryAiHeaderSharedHTML.global = /*html*/ `
`;

lotteryAiHeaderSharedHTML.shell = /*html*/ `
    
    <lotteryai-header id="lotteryAiHeader" class="lotteryAi-header"></lotteryai-header>
    
`;

lotteryAiHeaderSharedHTML.container = /*html*/ `

	<main id="mainContainer" class="main-container">
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
		<figure id="figureSlip" class="figure-slip">
			<img id="imgSlip" class="img-slip" src="../images/lottery-slip-640x451.png" alt="Lottery Slip" />
			<figcaption id="figCapSlip" class="fig-cap-slip figcap">
				<p id="figCapSlipP" class="fig-cap-slip-p figcap-p">
					Lottery Slip
				</p>
			</figcaption>
		</figure>
		<figure id="figureLotteryBalls" class="figure-lottery-balls">
			<img id="imgLotteryBalls" class="img-lottery-balls" src="../images/lottery-balls-2.png" alt="Lottery Balls" />
			<figcaption id="figCapBalls" class="fig-cap-balls figcap">
				<p id="figCapBallsP" class="fig-cap-balls-p figcap-p">
					Lottery Balls
				</p>
			</figcaption>
		</figure>
	</main>

`;

lotteryAiHeaderSharedHTML.queries = /*html*/ `
    
    
`;

export { lotteryAiHeaderSharedHTML };
