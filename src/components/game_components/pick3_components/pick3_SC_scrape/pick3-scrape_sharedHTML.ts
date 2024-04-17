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
			<img id="scrapePick3Logo" class="scrape-pick3-logo image" 
				src="/components/game_components/pick3_components/pick3_resources/images/GamePagesLogos_Pick3.png" />
			<h1 id="scrapeH1" class="scrape-h1 header1">Pick 3</h1>
			<h2 id="scrapeH2" class="scrape-h2 header2">Current Winning Numbers</h2>
			
			<p id="paraPick3ScrapeDate" class="para-pick3-scrape-date when-event">
				{{!-- Winning Date / Time of Pick 3 Event --}}
			
			</p>
			<p id="paraPick3ScrapeNumbers" class="para-pick3-scrape-numbers numbers">
				{{!-- Winning Numbers --}}
			
			</p>
			<h4 id="scrapeH4" class="scrape-h4 header4">Fireball</h4>
			<p id="paraPick3ScrapeFireball" class="para-pick3-scrape-fireball">
				{{!-- Fireball Number --}}
			</p>

			<button id="pick3ScrapeButton" class="pick3-scrape-button button">
				Check Pick 3
			</button>
		</header>
	</main>
	

`;

pick3Scrape_sharedHTML.numbers = /* html */ `

	

`;

export { pick3Scrape_sharedHTML };
