'use strict';

// Pick 3 Component Interfaces

interface Ipick3GameSharedHTML {
	shell: string;
	container: string;
	game: string;
	results: string;
}
interface Ipick3GameSharedStyles {
	root: string;
	shell: string;
	container: string;
	game: string;
	results: string;
}

export { Ipick3GameSharedHTML, Ipick3GameSharedStyles };
