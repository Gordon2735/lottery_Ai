'use strict';

// import { buffer } from 'node:stream/consumers';
import { Request } from '../app.js';
// import getConfig from '../../config/config.js';

const req = new Request('/login').body as Request | null;

console.info(`You have routed to the Login page.`);

// const config = await getConfig();

console.info(
	`
        %c
        username: ${req?.body.user_id},
        data: ${req?.body.user} 
    `,
	`
        color: chartreuse;
        font-family: 'Titillium Web', sans-serif; 
        font-size: 0.85rem;
        font-weight: bold;
        background-color: black;						
    `
);

// const body: string | undefined | null = new TextDecoder().decode(buffer);
// const parser = new DOMParser();
// const docs = parser.parseFromString(body, 'text/html');

// async function showSuccess(res: Response, doc: Document): Promise<void> {
// 	const success_section = doc.getElementById('successSection') as HTMLElement;

// 	const success_sectionStyle = success_section.style;

// 	const getStyle: string | null = success_section.getAttribute('style');
// 	console.info(`getStyle: ${getStyle}`);

// 	success_section.setAttribute('style', 'display: block;');
// 	success_sectionStyle.visibility = 'visible';

// 	const successCloseButton = doc.getElementById(
// 		'loginFormButton'
// 	) as HTMLButtonElement;

// 	successCloseButton.addEventListener(
// 		'click',
// 		async (event: MouseEvent): Promise<void> => {
// 			event.preventDefault();
// 			success_section.setAttribute('style', 'display: none;');
// 			// success_section.style.display = 'none';
// 			success_sectionStyle.visibility = 'hidden';

// 			res.redirect('/login_popup');
// 			return;
// 		}
// 	);
// }
// export { showSuccess };
