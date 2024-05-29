'use strict';

import { Ipick3Scrape_sharedHTML } from './Ipick3-scrape.js';

const pick3Scrape_sharedHTML: Ipick3Scrape_sharedHTML = {
    container: ``,
    header: ``,
    numbers: ``
};

pick3Scrape_sharedHTML.container = /* html */ `


	

`;

pick3Scrape_sharedHTML.header = /* html */ `

	<main id="pick3ScrapeMainContainer" class="pick3-scrape-main-container">
		<header id="pick3ScrapeHeader" class="pick3-scrape-header">
			<img id="scrapePick3Logo" class="scrape-pick3-logo" 
				src="/components/game_components/pick3_components/pick3_resources/images/GamePagesLogos_Pick3.png" />
			
			<h2 id="scrapeH2" class="scrape-h2">Current Winning Numbers</h2>
			
			<p id="paraPick3ScrapeDate" class="para-pick3-scrape-date"></p>
			<p id="paraPick3ScrapeNumbers" class="para-pick3-scrape-numbers"></p>
			<h4 id="scrapeH4" class="scrape-h4">Fireball</h4>
			<p id="paraPick3ScrapeFireball" class="para-pick3-scrape-fireball"></p>

			<button id="pick3ScrapeDataButton" class="pick3-scrape-button">
				Update
			</button>
		</header>
	</main>	

`;

pick3Scrape_sharedHTML.numbers = /* html */ `

	

`;

export { pick3Scrape_sharedHTML };

// <h1 id="scrapeH1" class="scrape-h1 header1">Pick 3</h1>
