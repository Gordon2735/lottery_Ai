'use strict';

import { Ipick3Scrape_sharedHTML } from './Ipick3-scrape.js';

const pick3Scrape_sharedHTML: Ipick3Scrape_sharedHTML = {
	container: ``,
	header: ``,
	numbers: ``
};

pick3Scrape_sharedHTML.container = /* html */ `

	<main id="pick3ScrapeMainContainer" class="pick3-scrape-main-container">
		<header id="pick3ScrapeHeader" class="pick3-scrape-header">
			<img id="scrapePick3Logo" class="scrape-pick3-logo image" 
				src="/components/game_components/pick3_components/pick3_resources/images/GamePagesLogos_Pick3.png" />
			<h1 id="scrapeH1" class="scrape-h1 header1">Pick 3</h1>
			<h2 id="scrapeH2" class="scrape-h2 header2">Current Winning Numbers</h2>
			<p id="paraPick3ScrapeNumbers" class="para-pick3-scrape-numbers numbers"></p>
			<p id="paraPick3ScrapeFireball" class="para-pick3-scrape-fireball">
				<span id="spanScrapeFireball" class="span-scrape-fireball fireball">
					Fireball
				</span>
			</p>
		</header>
	
	</main>

`;

pick3Scrape_sharedHTML.header = /* html */ `

	

`;

pick3Scrape_sharedHTML.numbers = /* html */ `

	

`;

export { pick3Scrape_sharedHTML };
