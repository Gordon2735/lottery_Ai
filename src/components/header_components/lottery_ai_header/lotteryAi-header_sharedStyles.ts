// Lottery Ai Header Shared Styles

import { ILotteryAiHeaderSharedStyles } from './Ilotteryai_header.js';

const lotteryAiHeaderSharedStyles: ILotteryAiHeaderSharedStyles = {
	global: '',
	shell: '',
	contents: '',
	queries: ''
};

lotteryAiHeaderSharedStyles.global = /*css*/ `

    :host {
        display: block;
    }


`;

lotteryAiHeaderSharedStyles.shell = /*css*/ `
    
    /* The Web Component Shell did not 'ACTIVATE' the Shadow DOM/Root */
    
`;

lotteryAiHeaderSharedStyles.contents = /*css*/ `


    .figure-logo {
        display: var(--display-wc-inline-block);
        padding: var(--padding-wc-0);
        position: var(--position-wc-absolute);
        z-index: var(--z-index-wc-10);
    }

    .img-logo {
        width: var(--width-wc-xxxl-9);
        aspect-ratio: 335/349;
        filter: var(--filter-shadow-wc-xmd);
        rotate: var(--rotate-wc-345);
    }

    .fig-cap-logo {
        text-align: var(--text-align-wc-center);
        cursor: pointer;
        z-index: var(--z-index-wc-4);
    }

    .fig-cap-logo-p {
        display: var(--display-wc-none);
        font-family: var(--ff-wc-src-code-pro);
        font-size: var(--fs-wc-md);
        font-weight: var(--fw-wc-normal);
        text-align: var(--text-align-wc-center);
        cursor: pointer;
    }

    .fig-cap-logo-p:hover,
    .fig-cap-logo-p:focus {
        display: var(--display-wc-block);
        cursor: pointer;
    }

    .header {
        padding: var(--radius-wc-0) var(--radius-wc-md);
        display: var(--display-wc-inline-block);
        flex-direction: var(--flex-direction-wc-row);
        position: var(--position-wc-absolute);
        top: var(--top-wc-xl);
        left: var(--left-wc-xxxl-5);        
        border-radius: var(--radius-wc-md);
        border: var(--border-wc-xxxthick);
        background-image: var(--gradient-wc-bckgrnd-dark-1);
        box-shadow: var(--shadow-wc-inset-xxl-1a);
        filter: var(--filter-shadow-wc-xmda);
        color: var(--clr-fc-wc-1);
        text-shadow: var(--text-shadow-wc-xmd);
        /*overflow: var(--overflow-wc-hidden);*/
        /*z-index: var(--z-index-wc-10);*/
    }
 
    .section-header-1 {
        text-align: var(--text-align-wc-center);
    }
    
    .header-h1 {
        margin: var(--margin-wc-md) var(--margin-wc-0) var(--margin-wc-0) var(--margin-wc-xxl-1);
        text-align: var(--text-align-wc-center);
        font-family: var(--ff-wc-saira-stencil-one);  
        font-weight: var(--fw-wc-black);
        text-shadow: var(--text-shadow-wc-xmda);
        letter-spacing: var(--spacing-wc-xxsa);
    }

    .header-para-1 {
        margin: var(--margin-wc-0) var(--margin-wc-auto);
        text-align: var(--text-align-wc-center);
        font-family: var(--ff-wc-src-code-pro);
        font-size: var(--fs-wc-md);
        font-weight: var(--fw-wc-normal);
    }

    .header-para-2 {
        margin: var(--margin-wc-md) var(--margin-wc-auto);
        text-align: var(--text-align-wc-center);
        font-family: var(--ff-wc-bagel-fat-one);
        font-size: var(--fs-wc-xxs);
        font-weight: var(--fw-wc-normal);
    }     

`;

lotteryAiHeaderSharedStyles.queries = /*css*/ `
    
   /* Container Queries */
    
`;

export { lotteryAiHeaderSharedStyles };
