// Lottery Ai Header Shared Styles

import { ILotteryAiHeaderSharedStyles } from './Ilotteryai_header.js';

const lotteryAiHeaderSharedStyles: ILotteryAiHeaderSharedStyles = {
	global: '',
	root: '',
	shell: '',
	queries: '',
	container: ''
};

lotteryAiHeaderSharedStyles.global = /*css*/ `

    :host {
        display: block;
    }


`;

lotteryAiHeaderSharedStyles.root = /*css*/ `

    @import url('https://fonts.googleapis.com/css2?family=Chango&family=Source+Code+Pro:ital,wght@0,200;0,400;0,600;0,700;0,900;1,200;1,400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&family=Titillium+Web:ital,wght@0,200;0,400;0,700;1,200&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Allerta+Stencil&family=Bagel+Fat+One&family=Black+Ops+One&display=swap');
    /* 
        font-family: 'Source Code Pro', monospace;
        font-family: 'Titillium Web', sans-serif; 
        font-family: 'Alberta Stencil', monospace;
        font-family: 'Bagel Fat One', sans-serif; 
        font-family: 'Black Ops One', sans-serif; 
        font-family: 'Chango', sans-serif;
    */

    /* Custom Properties for the Web Component only -wc- */
    /* CSS is 'ISOLATED' and is Rendered within the ShadowRoot of the Component  */
    :root {

        /* Color Variables */
        --clr-wc-bckgrnd_light: hsla(187, 52%, 80%, 0.993);

        --clr-fc-wc-1: hsla(240, 64%, 27%, 0.993);

        /* Margin Variables */
        --margin-wc-0: 0rem;
        --margin-wc-auto: auto;
        --margin-wc-xxs: 0.25rem;
        --margin-wc-xs: 0.5rem;
        --margin-wc-sm: 0.75rem;
        --margin-wc-md: 1rem;
        --margin-wc-lg: 1.5rem;
        --margin-wc-xl: 2rem;
        --margin-wc-xxl: 3rem;

        /* Padding Variables */
        --padding-wc-xxs: 0.25rem;
        --padding-wc-xs: 0.5rem;
        --padding-wc-sm: 0.75rem;
        --padding-wc-md: 1rem;
        --padding-wc-lg: 1.5rem;
        --padding-wc-xl: 2rem;
        --padding-wc-xxl: 3rem;

        /* Font Variables */
        --ff-wc-src-code-pro: 'Source Code Pro', monospace;
        --ff-wc-titillium-web: 'Titillium Web', sans-serif;
        --ff-wc-alberta-stencil: 'Alberta Stencil', monospace;
        --ff-wc-bagel-fat-one: 'Bagel Fat One', sans-serif;
        --ff-wc-black-ops-one: 'Black Ops One', sans-serif;
        --ff-wc-chango: 'Chango', sans-serif;

        /* Font Size Variables */
        --fs-wc-xxs: 0.5rem;
        --fs-wc-xs: 0.75rem;
        --fs-wc-sm: 0.875rem;
        --fs-wc-md: 1rem;
        --fs-wc-lg: 1.125rem;
        --fs-wc-xl: 1.25rem;
        --fs-wc-xxl: 1.5rem;
        --fs-wc-xxxl: 1.875rem;
        --fs-wc-xxxxl: 2.25rem;
        --fs-wc-xxxxxl: 3rem;
        --fs-wc-xxxxxl-2: 3.75rem;
        --fs-wc-xxxxxl-3: 4.5rem;
        --fs-wc-xxxxxl-4: 5.25rem;

        /* Font Weight Variables */
        --fw-wc-thin: 100;
        --fw-wc-extra_light: 200;
        --fw-wc-light: 300;
        --fw-wc-normal: 400;
        --fw-wc-medium: 500;
        --fw-wc-semibold: 600;
        --fw-wc-bold: 700;
        --fw-wc-extra_bold: 800;
        --fw-wc-black: 900;

        /* Line Height Variables */
        --lh-wc-1: 1;
        --lh-wc-2: 1.25;
        --lh-wc-3: 1.5;
        --lh-wc-4: 1.75;
        --lh-wc-5: 2;

        /* Spacing Variables */
        --spacing-wc-xxs: 0.25rem;
        --spacing-wc-xs: 0.5rem;
        --spacing-wc-sm: 0.75rem;
        --spacing-wc-md: 1rem;
        --spacing-wc-lg: 1.5rem;
        --spacing-wc-xl: 2rem;
        --spacing-wc-xxl: 3rem;

        /* Text Shadow Variables */
        --text-shadow-wc-sm: 0 2px 5px rgba(0, 0, 0, 0.5);
        --text-shadow-wc-md: 0 4px 10px rgba(0, 0, 0, 0.5);
        --text-shadow-wc-xmd: 0.2px 0.4px 3px hsla(0, 0%, 0%, 0.69);
        --text-shadow-wc-lg: 0 6px 15px rgba(0, 0, 0, 0.5);
        --text-shadow-wc-xl: 0 8px 20px rgba(0, 0, 0, 0.5);
        --text-shadow-wc-xxl: 0 10px 25px rgba(0, 0, 0, 0.5);
        --text-shadow-wc-inset: 0 2px 5px rgba(0, 0, 0, 0.5) inset;
        --text-shadow-wc-inset-md: 0 4px 10px rgba(0, 0, 0, 0.5) inset;
        --text-shadow-wc-inset-lg: 0 6px 15px rgba(0, 0, 0, 0.5) inset;
        --text-shadow-wc-inset-xl: 0 8px 20px rgba(0, 0, 0, 0.5) inset;
        --text-shadow-wc-inset-xxl: 0 10px 25px rgba(0, 0, 0, 0.5) inset;
        --text-shadow-wc-inset-xxxl: 0 12px 30px rgba(0, 0, 0, 0.5) inset;
        --text-shadow-wc-inset-xxxxl: 0 14px 35px rgba(0, 0, 0, 0.5) inset;
        --text-shadow-wc-inset-xxxxxl: 0 16px 40px rgba(0, 0, 0, 0.5) inset;

        /* Text Align Variables */
        --text-align-wc-left: left;
        --text-align-wc-right: right;
        --text-align-wc-center: center;
        --text-align-wc-justify: justify;

        /* Text Transform Variables */
        --text-transform-wc-uppercase: uppercase;
        --text-transform-wc-lowercase: lowercase;
        --text-transform-wc-capitalize: capitalize;
        --text-transform-wc-none: none;

        /* Text Decoration Variables */
        --text-decoration-wc-none: none;
        --text-decoration-wc-underline: underline;
        --text-decoration-wc-overline: overline;
        --text-decoration-wc-line-through: line-through;

        /* Text Overflow Variables */
        --text-overflow-wc-clip: clip;
        --text-overflow-wc-ellipsis: ellipsis;

        /* Text White Space Variables */
        --white-space-wc-normal: normal;
        --white-space-wc-nowrap: nowrap;
        --white-space-wc-pre: pre;
        --white-space-wc-pre-line: pre-line;
        --white-space-wc-pre-wrap: pre-wrap;

        /* Text Break Variables */
        --word-break-wc-normal: normal;
        --word-break-wc-break-all: break-all;
        --word-break-wc-keep-all: keep-all;
        --word-break-wc-break-word: break-word;

        /* Width Variables */
        --width-wc-100: 100%;
        --width-wc-75: 75%;
        --width-wc-50: 50%;
        --width-wc-25: 25%;
        --width-wc-15: 15%;
        --width-wc-10: 10%;
        --width-wc-auto: auto;
        --width-wc-px: 1px;
        --width-wc-xxs: 0.125rem;
        --width-wc-xs: 0.25rem;
        --width-wc-sm: 0.5rem;
        --width-wc-md: 1rem;
        --width-wc-lg: 2rem;
        --width-wc-xl: 3rem;
        --width-wc-xxl: 4rem;
        --width-wc-xxxl: 5rem;
        --width-wc-xxxxl: 6rem;
        --width-wc-xxxxxl: 7rem;
        --width-wc-xxxxxl-2: 8rem;
        --width-wc-xxxxxl-3: 9rem;
        --width-wc-xxxxxl-4: 10rem;

        /* Height Variables */
        --height-wc-100: 100%;
        --height-wc-75: 75%;
        --height-wc-50: 50%;
        --height-wc-25: 25%;
        --height-wc-15: 15%;
        --height-wc-10: 10%;
        --height-wc-auto: auto;
        --height-wc-px: 1px;
        --height-wc-xxs: 0.125rem;
        --height-wc-xs: 0.25rem;
        --height-wc-sm: 0.5rem;
        --height-wc-md: 1rem;
        --height-wc-lg: 2rem;
        --height-wc-xl: 3rem;
        --height-wc-xxl: 4rem;
        --height-wc-xxxl: 5rem;
        --height-wc-xxxxl: 6rem;
        --height-wc-xxxxxl: 7rem;
        --height-wc-xxxxxl-2: 8rem;
        --height-wc-xxxxxl-3: 9rem;
        --height-wc-xxxxxl-4: 10rem;
        
        /* Position Variables */
        --position-wc-static: static;
        --position-wc-relative: relative;
        --position-wc-absolute: absolute;
        --position-wc-fixed: fixed;
        --position-wc-sticky: sticky;

        /* Overflow Variables */
        --overflow-wc-visible: visible;
        --overflow-wc-hidden: hidden;
        --overflow-wc-scroll: scroll;
        --overflow-wc-auto: auto;

        /* Display Variables */
        --display-wc-none: none;
        --display-wc-inline: inline;
        --display-wc-inline-block: inline-block;
        --display-wc-block: block;
        --display-wc-table: table;
        --display-wc-table-cell: table-cell;
        --display-wc-flex: flex;
        --display-wc-inline-flex: inline-flex;

        /* Visibility Variables */
        --visibility-wc-visible: visible;
        --visibility-wc-hidden: hidden;
        --visibility-wc-collapse: collapse;

        /* Border Variables */
        --border-wc-thin: 1px solid #000;
        --border-wc-thick: 2px solid #000;
        --border-wc-radius: 5px;
        --border-wc-radius-sm: 3px;
        --border-wc-radius-lg: 10px;

        /* Border Radius Variables */
        --radius-wc-0: 0rem;
        --radius-wc-xxs: 0.125rem;
        --radius-wc-sm: 0.25rem;
        --radius-wc-md: 0.5rem;
        --radius-wc-lg: 1rem;
        --radius-wc-xl: 2rem;
        --radius-wc-xxl: 3rem;

        /* Box Shadow Variables */
        --shadow-wc-sm: 0 5px 15px rgba(0, 0, 0, 0.1);
        --shadow-wc-md: 0 8px 30px rgba(0, 0, 0, 0.1);
        --shadow-wc-xmd: 7px 5px 9px hsla(0, 0%, 0%, 0.69);
        --shadow-wc-lg: 0 12px 35px rgba(0, 0, 0, 0.15);
        --shadow-wc-xl: 0 16px 50px rgba(0, 0, 0, 0.15);
        --shadow-wc-xxl: 0 24px 60px rgba(0, 0, 0, 0.2);
        --shadow-wc-inset: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
        --shadow-wc-inset-md: inset 0 4px 8px 0 rgba(0, 0, 0, 0.06);
        --shadow-wc-inset-lg: inset 0 6px 12px 0 rgba(0, 0, 0, 0.06);
        --shadow-wc-inset-xl: inset 0 8px 16px 0 rgba(0, 0, 0, 0.06);
        --shadow-wc-inset-xxl: inset 0 12px 24px 0 rgba(0, 0, 0, 0.06);
        --shadow-wc-inset-xxxl: inset 0 16px 32px 0 rgba(0, 0, 0, 0.06);
        --shadow-wc-inset-xxxxl: inset 0 24px 48px 0 rgba(0, 0, 0, 0.06);
        --shadow-wc-inset-xxxxxl: inset 0 32px 64px 0 rgba(0, 0, 0, 0.06);

        
        /* Filter Variables */
        --filter-shadow-wc-sm: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.5));
        --filter-shadow-wc-md: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.5));
        --filter-shadow-wc-xmd: drop-shadow(0 0 1rem hsla(0, 0%, 0%, 0.69););
        --filter-shadow-wc-lg: drop-shadow(0 0 2rem rgba(0, 0, 0, 0.5));
        --filter-shadow-wc-xl: drop-shadow(0 0 3rem rgba(0, 0, 0, 0.5));
        --filter-shadow-wc-xxl: drop-shadow(0 0 4rem rgba(0, 0, 0, 0.5));
        --filter-shadow-wc-inset: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.5)) inset;
        --filter-shadow-wc-inset-md: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.5)) inset;
        --filter-shadow-wc-inset-lg: drop-shadow(0 0 2rem rgba(0, 0, 0, 0.5)) inset;
        --filter-shadow-wc-inset-xl: drop-shadow(0 0 3rem rgba(0, 0, 0, 0.5)) inset;
        --filter-shadow-wc-inset-xxl: drop-shadow(0 0 4rem rgba(0, 0, 0, 0.5)) inset;
        --filter-shadow-wc-inset-xxxl: drop-shadow(0 0 5rem rgba(0, 0, 0, 0.5)) inset;
        --filter-shadow-wc-inset-xxxxl: drop-shadow(0 0 6rem rgba(0, 0, 0, 0.5)) inset;
        --filter-shadow-wc-inset-xxxxxl: drop-shadow(0 0 7rem rgba(0, 0, 0, 0.5)) inset;

        /* Transition Variables */
        --transition-wc-fast: all 0.1s ease-in-out;
        --transition-wc-moderate: all 0.3s ease-in-out;
        --transition-wc-xmoderate: all 0.5s ease-in-out;
        --transition-wc-slow: all 0.7s ease-in-out;

        /* Grid Variables */
        --grid-wc-gap: 1rem;
        --grid-wc-gap-sm: 0.5rem;
        --grid-wc-gap-lg: 1.5rem;
        --grid-wc-gap-xl: 2rem;
        --grid-wc-gap-xxl: 3rem;
        --grid-wc-gap-xxxl: 4rem;
        --grid-wc-gap-xxxxl: 5rem;
        --grid-wc-gap-xxxxxl: 6rem;
        --grid-wc-gap-xxxxxl-2: 7rem;
        --grid-wc-gap-xxxxxl-3: 8rem;
        --grid-wc-gap-xxxxxl-4: 9rem;
        --grid-wc-gap-xxxxxl-5: 10rem;
        --grid-wc-gap-xxxxxl-6: 11rem;
        --grid-wc-gap-xxxxxl-7: 12rem;

        /* Grid Template Variables */
        --grid-template-wc-1: repeat(1, 1fr);
        --grid-template-wc-2: repeat(2, 1fr);
        --grid-template-wc-3: repeat(3, 1fr);
        --grid-template-wc-4: repeat(4, 1fr);
        --grid-template-wc-5: repeat(5, 1fr);
        --grid-template-wc-6: repeat(6, 1fr);
        --grid-template-wc-7: repeat(7, 1fr);
        --grid-template-wc-8: repeat(8, 1fr);
        --grid-template-wc-9: repeat(9, 1fr);
        --grid-template-wc-10: repeat(10, 1fr);
        --grid-template-wc-11: repeat(11, 1fr);
        --grid-template-wc-12: repeat(12, 1fr);
        --grid-template-wc-13: repeat(13, 1fr);
        --grid-template-wc-14: repeat(14, 1fr);
        --grid-template-wc-15: repeat(15, 1fr);
        --grid-template-wc-16: repeat(16, 1fr);
        --grid-template-wc-17: repeat(17, 1fr);

        /* Grid Template Columns Variables */
        --grid-template-columns-wc-1: repeat(1, 1fr);
        --grid-template-columns-wc-2: repeat(2, 1fr);
        --grid-template-columns-wc-3: repeat(3, 1fr);
        --grid-template-columns-wc-4: repeat(4, 1fr);
        --grid-template-columns-wc-5: repeat(5, 1fr);
        --grid-template-columns-wc-6: repeat(6, 1fr);
        --grid-template-columns-wc-7: repeat(7, 1fr);
        --grid-template-columns-wc-8: repeat(8, 1fr);
        --grid-template-columns-wc-9: repeat(9, 1fr);
        --grid-template-columns-wc-10: repeat(10, 1fr);
        --grid-template-columns-wc-11: repeat(11, 1fr);
        --grid-template-columns-wc-12: repeat(12, 1fr);
        --grid-template-columns-wc-13: repeat(13, 1fr);

        /* Grid Template Rows Variables */
        --grid-template-rows-wc-1: repeat(1, 1fr);
        --grid-template-rows-wc-2: repeat(2, 1fr);
        --grid-template-rows-wc-3: repeat(3, 1fr);
        --grid-template-rows-wc-4: repeat(4, 1fr);
        --grid-template-rows-wc-5: repeat(5, 1fr);
        --grid-template-rows-wc-6: repeat(6, 1fr);
        --grid-template-rows-wc-7: repeat(7, 1fr);
        --grid-template-rows-wc-8: repeat(8, 1fr);
        --grid-template-rows-wc-9: repeat(9, 1fr);
        --grid-template-rows-wc-10: repeat(10, 1fr);
        --grid-template-rows-wc-11: repeat(11, 1fr);
        --grid-template-rows-wc-12: repeat(12, 1fr);
        --grid-template-rows-wc-13: repeat(13, 1fr);

        /* Flex Variables */
        --flex-wc-1: 1;
        --flex-wc-2: 2;
        --flex-wc-3: 3;
        --flex-wc-4: 4;
        --flex-wc-5: 5;
        --flex-wc-6: 6;
        --flex-wc-7: 7;
        --flex-wc-8: 8;
        --flex-wc-9: 9;
        --flex-wc-10: 10;
        --flex-wc-11: 11;
        --flex-wc-12: 12;
        --flex-wc-13: 13;
        --flex-wc-14: 14;
        --flex-wc-15: 15;
        --flex-wc-16: 16;
        --flex-wc-17: 17;
        --flex-wc-18: 18;
        --flex-wc-19: 19;
        --flex-wc-20: 20;
        --flex-wc-21: 21;

        /* Flex Direction Variables */
        --flex-direction-wc-row: row;
        --flex-direction-wc-row-reverse: row-reverse;
        --flex-direction-wc-column: column;
        --flex-direction-wc-column-reverse: column-reverse;

        /* Flex Wrap Variables */
        --flex-wc-wrap: wrap;
        --flex-wc-nowrap: nowrap;
        --flex-wc-wrap-reverse: wrap-reverse;

        /* Flex Justify Content Variables */
        --justify-content-wc-flex-start: flex-start;
        --justify-content-wc-flex-end: flex-end;
        --justify-content-wc-center: center;
        --justify-content-wc-space-between: space-between;
        --justify-content-wc-space-around: space-around;
        --justify-content-wc-space-evenly: space-evenly;

        /* Flex Align Items Variables */
        --align-items-wc-flex-start: flex-start;
        --align-items-wc-flex-end: flex-end;
        --align-items-wc-center: center;
        --align-items-wc-baseline: baseline;
        --align-items-wc-stretch: stretch;

        /* Flex Align Content Variables */
        --align-content-wc-flex-start: flex-start;
        --align-content-wc-flex-end: flex-end;
        --align-content-wc-center: center;
        --align-content-wc-space-between: space-between;
        --align-content-wc-space-around: space-around;
        --align-content-wc-stretch: stretch;

        /* Flex Align Self Variables */
        --align-self-wc-auto: auto;
        --align-self-wc-flex-start: flex-start;
        --align-self-wc-flex-end: flex-end;
        --align-self-wc-center: center;
        --align-self-wc-baseline: baseline;
        --align-self-wc-stretch: stretch;

        /* Flex Order Variables */
        --order-wc-1: 1;
        --order-wc-2: 2;
        --order-wc-3: 3;
        --order-wc-4: 4;
        --order-wc-5: 5;
        --order-wc-6: 6;
        --order-wc-7: 7;
        --order-wc-8: 8;
        --order-wc-9: 9;
        --order-wc-10: 10;
        --order-wc-11: 11;
        --order-wc-12: 12;
        --order-wc-13: 13;
        --order-wc-14: 14;
        --order-wc-15: 15;
        --order-wc-16: 16;
        --order-wc-17: 17;
        --order-wc-18: 18;
        --order-wc-19: 19;
        --order-wc-20: 20;
        --order-wc-21: 21;

        /* Z-Index Variables */
        --z-index-wc-1: 100;
        --z-index-wc-2: 200;
        --z-index-wc-3: 300;
        --z-index-wc-4: 400;
        --z-index-wc-5: 500;
        --z-index-wc-6: 600;
        --z-index-wc-7: 700;
        --z-index-wc-8: 800;
        --z-index-wc-9: 900;
        --z-index-wc-10: 1000;
    }


`;

lotteryAiHeaderSharedStyles.shell = /*css*/ `
    
    /* The Web Component Shell did not 'ACTIVATE' the Shadow DOM/Root */
    
`;

lotteryAiHeaderSharedStyles.queries = /*css*/ `
    
    /* Container Name is var(--container-name-1) */
    @container Index_Main_Container (max-width: 500px) {
        .header {
            flex-direction: var(--flex-direction-column);
            width: var(--width-wc-50);
        }
        .figure-logo {
            margin: var(--margin-wc-xxs) var(--margin-wc-0) var(--margin-wc-0) var(--margin-wc-xxs);
            width: var(--width-wc-15);
            text-align: var(--text-align-wc-center);
        }
        .section-header-1 {
            width: var(--width-wc-50);
        }
    }
    
`;

lotteryAiHeaderSharedStyles.container = /*css*/ `

    .header {
        margin: var(--margin-wc-xs) var(--margin-wc-auto);
        padding: var(--radius-wc-0) var(--radius-wc-md);
        display: var(--display-wc-flex);         
        border-radius: var(--radius-wc-sm);
        background: var(--clr-wc-bckgrnd_light);
        border: var(--border-wc-thin);
        box-shadow: var(--shadow-wc-xmd);
        filter: var(--filter-shadow-wc-xmd);
        color: var(--clr-fc-wc-1);
        text-shadow: var(--text-shadow-wc-xmd);
        overflow: var(--overflow-wc-hidden);
    }

    .figure-logo {
        margin: var(--margin-wc-sm) var(--margin-wc-0) var(--margin-wc-0) var(--margin-wc-md);
        padding: var(--padding-wc-xs);
    }
    
    .img-logo {
        width: var(--width-wc-75);
        height: var(--height-wc-75);
        aspect-ratio: 335/349;
        object-fit: cover;
        object-position: center;
    }

    .fig-cap-logo {
        text-align: var(--text-align-wc-center);
        cursor: pointer;
        z-index: var(--z-index-wc-4);
    }
    
    .fig-cap-logo-p {
        display: var(--display-wc-none);
        font-family: var(--ff-wc-black-ops-one);
        font-size: var(--fs-wc-md);
        font-weight: var(--fw-wc-normal);
        text-align: var(--text-align-wc-center);
        cursor: pointer;
    }

    .fig-cap-logo-p:hover,
    .fig-cap-logo-p:focus {
        display: var(--display-wc-inline-flex);
        cursor: pointer;
    }

    .sectionHeader1 {
        align-self: var(--align-self-wc-center);
        align-items: var(--text-align-wc-center);
        justify-content: var(--justify-content-wc-space-between);
        left: 50%;
        position: relative;
    }
    
    .header-h1 {
        display: var(--display-wc-inline-flex);
        text-align: var(--text-align-wc-center);
        font-family: var(--ff-wc-black-ops-one);
        /* font-size: var(--fs-wc-xxxxl); */
        font-size: var(--fs-wc-xxxxxl-4);
        font-weight: var(--fw-wc-semibold);
        text-shadow: var(--text-shadow-wc-xmd);
    }

    .header-para-1 {
        display: var(--display-wc-inline-flex);
        font-family: var(--ff-wc-titillium-web);
        font-size: var(--fs-wc-lg);
        font-weight: var(--fw-wc-normal);
    }

    .header-para-2 {
        display: var(--display-wc-inline-flex);
        font-family: var(--ff-wc-titillium-web);
        font-size: var(--fs-wc-sm);
        font-weight: var(--fw-wc-normal);
    }


`;

export { lotteryAiHeaderSharedStyles };
