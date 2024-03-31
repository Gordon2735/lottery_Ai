'use strict';

interface Ipick3Scrape {
	scrape: () => Promise<void>;
}

interface Ipick3Scrape_sharedHTML {
	container: string;
	header: string;
	numbers: string;
}

interface Ipick3Scrape_sharedStyles {
	// shared styles
	root: string;
	container: string;
	header: string;
	numbers: string;
}

export { Ipick3Scrape, Ipick3Scrape_sharedHTML, Ipick3Scrape_sharedStyles };
