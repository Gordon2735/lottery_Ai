'use strict';

import { IIndexWrapperSharedStyles } from './Iindex-wrapper.js';

const indexWrapperSharedStyles: IIndexWrapperSharedStyles = {
	global: '',
	root: '',
	shell: '',
	container: '',
	queries: ''
};

indexWrapperSharedStyles.global = /*css*/ `
    
    body {
        background-image: var(--gradient-wc-bckgrnd-dark-0);
        overflow: var(--overflow-wc-hidden);
    }

`;

indexWrapperSharedStyles.root = /*css*/ `

    @import url('https://fonts.googleapis.com/css2?family=Chango&family=Source+Code+Pro:ital,wght@0,200;0,400;0,600;0,700;0,900;1,200;1,400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&family=Titillium+Web:ital,wght@0,200;0,400;0,700;1,200&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Allerta+Stencil&family=Bagel+Fat+One&family=Black+Ops+One&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap');
    /* 
        font-family: 'Source Code Pro', monospace;
        font-family: 'Titillium Web', sans-serif; 
        font-family: 'Alberta Stencil', monospace;
        font-family: 'Bagel Fat One', sans-serif; 
        font-family: 'Black Ops One', sans-serif; 
        font-family: 'Chango', sans-serif;
        font-family: 'Saira Stencil One', sans-serif;
    */

    /* Custom Properties for the Web Component only -wc- */
    /* CSS is 'ISOLATED' and is Rendered within the ShadowRoot of the Component  */
    :root {

        /* Various Color Variables */

        /* Backgrounds */
        --clr-wc-bckgrnd-dark: #333;
        --clr-wc-bckgrnd_light: hsla(187, 52%, 80%, 0.993);

        /* --gradient-wc-bckgrnd-dark-0: linear-gradient(90deg, hsla(0, 0%, 20%, 0.993 100%) 0%, hsla(187, 52%, 80%, 0.993) 100%); */
        --gradient-wc-bckgrnd-dark-0: linear-gradient(178.25deg, hsla(0, 0%, 20%, 0.993), 87%, hsla(188, 35%, 58%, 0.993));
        --gradient-wc-bckgrnd-dark-1: linear-gradient(178.35deg, hsla(188, 98%, 34%, 0.993), 34.5%, hsla(187, 52%, 80%, 0.993));
        --gradient-wc-bckgrnd-dark-2: linear-gradient(178.25deg, hsla(0, 0%, 20%, 0.993), 87%, hsla(188, 35%, 58%, 0.993));
        --gradient-wc-2: linear-gradient(90deg, #f12711 0%, #f5af19 100%);

        --clr-fc-wc-1: hsla(240, 64%, 27%, 0.993);

        /* Gradient Variables */
        --gradient-wc-dark-0: linear-gradient(90deg, hsla(187, 52%, 80%, 0.993) 0%, hsla(0, 0%, 20%, 0.993 100%) 100%);
        --gradient-wc-dark-1: linear-gradient(90deg, hsla(187, 52%, 80%, 0.993) 0%, hsla(188, 98%, 34%, 0.993) 100%);
        --gradient-wc-2: linear-gradient(90deg, #f12711 0%, #f5af19 100%);
        --gradient-wc-3: linear-gradient(90deg, #f12711 0%, #f5af19 100%);
        --gradient-wc-4: linear-gradient(90deg, #f12711 0%, #f5af19 100%);

        /* Font Family Variables */
        --ff-wc-src-code-pro: 'Source Code Pro', monospace;
        --ff-wc-titillium-web: 'Titillium Web', sans-serif;
        --ff-wc-allerta-stencil: 'Allerta Stencil', monospace;
        --ff-wc-bagel-fat-one: 'Bagel Fat One', sans-serif;
        --ff-wc-black-ops-one: 'Black Ops One', sans-serif;
        --ff-wc-chango: 'Chango', sans-serif;
        --ff-wc-saira-stencil-one: 'Saira Stencil One', sans-serif;

        /* Font Size Variables */
        --fs-wc-xxs: 0.5rem;
        --fs-wc-xs: 0.65rem;
        --fs-wc-sm: 0.875rem;
        --fs-wc-md: 1rem;
        --fs-wc-lg: 1.125rem;
        --fs-wc-xl: 1.25rem;
        --fs-wc-xxl: 1.5rem;
        --fs-wc-xxxl: 1.875rem;
        --fs-wc-xxxl-0: 2rem;
        --fs-wc-xxxl-1: 2.25rem;
        --fs-wc-xxxl-2: 3rem;
        --fs-wc-xxxl-3: 3.75rem;
        --fs-wc-xxxl-4: 4.5rem;
        --fs-wc-xxxl-5: 5.25rem;

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

        /* Text Variables */
        --text-wc-1: 0.5rem;
        --text-wc-2: 0.75rem;

        /* Font Color Variables */
        /* Text Color Variables */
        --text-wc-color-1: #000;
        --text-wc-color-2: #fff;
        --text-wc-color-3: #f4f4f4;
        --text-wc-color-4: #333;

        /* Text Background Color Variables */
        --text-wc-bckgrnd-color-1: #000;
        --text-wc-bckgrnd-color-2: #fff;
        --text-wc-bckgrnd-color-3: #f4f4f4;
        --text-wc-bckgrnd-color-4: #333;

        /* Text Hover Color Variables */
        --text-wc-hover-color-1: #000;
        --text-wc-hover-color-2: #fff;
        --text-wc-hover-color-3: #f4f4f4;
        --text-wc-hover-color-4: #333;

        /* Text Hover Background Color Variables */
        --text-wc-hover-bckgrnd-color-4: #333;

        /* Text Active Color Variables */
        --text-wc-active-color-1: #000;
        --text-wc-active-color-2: #fff;
        --text-wc-active-color-3: #f4f4f4;
        --text-wc-active-color-4: #333;

        /* Text Active Background Color Variables */
        --text-wc-active-bckgrnd-color-1: #000;
        --text-wc-active-bckgrnd-color-2: #fff;
        --text-wc-active-bckgrnd-color-3: #f4f4f4;
        --text-wc-active-bckgrnd-color-4: #333;

        /* Text Focus Color Variables */
        --text-wc-focus-color-1: #000;
        --text-wc-focus-color-2: #fff;
        --text-wc-focus-color-3: #f4f4f4;
        --text-wc-focus-color-4: #333;

        /* Text Focus Background Color Variables */
        --text-wc-focus-bckgrnd-color-1: #000;
        --text-wc-focus-bckgrnd-color-2: #fff;
        --text-wc-focus-bckgrnd-color-3: #f4f4f4;
        --text-wc-focus-bckgrnd-color-4: #333;

        /* Text Active Hover Color Variables */
        --text-wc-active-hover-color-1: #000;
        --text-wc-active-hover-color-2: #fff;
        --text-wc-active-hover-color-3: #f4f4f4;
        --text-wc-active-hover-color-4: #333;

        /* Text Active Hover Background Color Variables */
        --text-wc-active-hover-bckgrnd-color-4: #333;

        /* Text Active Focus Color Variables */
        --text-wc-active-focus-color-1: #000;
        --text-wc-active-focus-color-2: #fff;
        --text-wc-active-focus-color-3: #f4f4f4;
        --text-wc-active-focus-color-4: #333;

        /* Text Active Focus Background Color Variables */
        --text-wc-active-focus-bckgrnd-color-1: #000;
        --text-wc-active-focus-bckgrnd-color-2: #fff;
        --text-wc-active-focus-bckgrnd-color-3: #f4f4f4;
        --text-wc-active-focus-bckgrnd-color-4: #333;

        /* Text Active Hover Focus Color Variables */
        --text-wc-active-hover-focus-color-1: #000;
        --text-wc-active-hover-focus-color-2: #fff;
        --text-wc-active-hover-focus-color-3: #f4f4f4;
        --text-wc-active-hover-focus-color-4: #333;

        /* Text Active Hover Focus Background Color Variables */
        --text-wc-active-hover-focus-bckgrnd-color-4: #333;

        /* Line Height Variables */
        --lh-wc-1: 1;
        --lh-wc-2: 1.25;
        --lh-wc-3: 1.5;
        --lh-wc-4: 1.75;
        --lh-wc-5: 2;

        /* Spacing Variables */
        --spacing-wc-xxs: 0.25rem;
        --spacing-wc-xxsa: 0.38rem;
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
        --text-shadow-wc-xmda: 3.2px 3.8px 8px hsla(0, 0%, 0%, 0.69);
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
        
        /* Margin Variables */
        --margin-wc--3: -3rem;
        --margin-wc--2: -2rem;
        --margin-wc--1: -1rem;
        --margin-wc-0: 0rem;
        --margin-wc-auto: auto;
        --margin-wc-xxs: 0.25rem;
        --margin-wc-xs: 0.5rem;
        --margin-wc-sm: 0.75rem;
        --margin-wc-md: 1rem;
        --margin-wc-lg: 1.5rem;
        --margin-wc-xl: 2rem;
        --margin-wc-xxl: 3rem;
        --margin-wc-xxl-1: 4rem;
        --margin-wc-xxl-2: 5rem;
        --margin-wc-xxl-3: 6rem;
        --margin-wc-xxl-4: 7rem;
        --margin-wc-xxl-5: 8rem;
        --margin-wc-xxl-6: 9rem;
        --margin-wc-xxl-7: 10rem;

        /* Padding Variables */
        --padding-wc-0: 0;
        --padding-wc-xxs: 0.25rem;
        --padding-wc-xs: 0.5rem;
        --padding-wc-sm: 0.75rem;
        --padding-wc-md: 1rem;
        --padding-wc-lg: 1.5rem;
        --padding-wc-xl: 2rem;
        --padding-wc-xxl: 3rem;

        /* Width Variables */
        --width-wc-100a: 100%;
        --width-wc-75: 75%;
        --width-wc-50: 50%;
        --width-wc-35: 35%;
        --width-wc-25: 25%;
        --width-wc-20: 20%;
        --width-wc-19: 19%;
        --width-wc-18: 18%;
        --width-wc-17: 17%;
        --width-wc-16: 16%;
        --width-wc-15: 15%;
        --width-wc-14: 14%;
        --width-wc-13: 13%;
        --width-wc-12: 12%;
        --width-wc-11: 11%;
        --width-wc-10: 10%;
        --width-wc-9: 9%;
        --width-wc-8: 8%;
        --width-wc-7: 7%;
        --width-wc-6: 6%;
        --width-wc-5: 5%;
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
        --width-wc-xxxl-1: 6rem;
        --width-wc-xxxl-2: 7rem;
        --width-wc-xxxl-3: 8rem;
        --width-wc-xxxl-4: 9rem;
        --width-wc-xxxl-4a: 9.3rem;
        --width-wc-xxxl-5: 10rem;
        --width-wc-xxxl-5a: 11rem;
        --width-wc-xxxl-6: 12rem;
        --width-wc-xxxl-7: 14rem;
        --width-wc-xxxl-8: 16rem;
        --width-wc-xxxl-9: 18rem;
        --width-wc-xxxl-10: 20rem;
        --width-wc-100: 100px;
        --width-wc-200: 200px;
        --width-wc-280: 280px;
        --width-wc-300: 300px;
        --width-wc-400: 400px;
        --width-wc-450: 450px;
        --width-wc-500: 500px;
        --width-wc-550: 550px;
        --width-wc-600: 600px;
        --width-wc-680: 680px;
        --width-wc-780: 780px;
        --width-wc-840: 840px;
        --width-wc-880: 880px;
        --width-wc-950: 950px;
        --width-wc-1050: 1050px;
        --width-wc-1100: 1100px;
        --width-wc-1200: 1200px;
        --width-wc-1300: 1300px;
        --width-wc-1400: 1400px;
        --width-wc-1500: 1500px;
        --width-wc-1600: 1600px;
        --width-wc-1700: 1700px;
        --width-wc-1800: 1800px;
        --width-wc-1900: 1900px;
        --width-wc-1950: 1950px;
        --width-wc-minimum: 320px;
        
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
        --height-wc-xxxl-1: 6rem;
        --height-wc-xxxl-2: 7rem;
        --height-wc-xxxl-3: 8rem;
        --height-wc-xxxl-4: 9rem;
        --height-wc-xxxl-5: 10rem;
        
        /* Position Variables */
        --position-wc-static: static;
        --position-wc-relative: relative;
        --position-wc-absolute: absolute;
        --position-wc-fixed: fixed;
        --position-wc-sticky: sticky;

        /* Top Variables */
        --top-wc-auto: auto;
        --top-wc-0: 0;
        --top-wc-100: 100%;
        --top-wc-98: 98%;
        --top-wc-95: 95%;
        --top-wc-90: 90%;
        --top-wc-85: 85%;
        --top-wc-75: 75%;
        --top-wc-50: 50%;
        --top-wc-35: 35%;
        --top-wc-33: 33%;
        --top-wc-31-5: 31.5%;
        --top-wc-25: 25%;
        --top-wc-20: 20%;
        --top-wc-15: 15%;
        --top-wc-10: 10%;
        --top-wc-5: 5%;
        --top-wc-0: 0;
        --top-wc-xxs: 0.125rem;
        --top-wc-xs: 0.25rem;
        --top-wc-sm: 0.5rem;
        --top-wc-sma: 0.75rem;
        --top-wc-md: 1rem;
        --top-wc-mdlg: 1.15rem;
        --top-wc-lg: 2rem;
        --top-wc-xlg: 2.25rem;
        --top-wc-xl: 3rem;
        --top-wc-xxl: 4rem;
        --top-wc-xxxl: 5rem;
        --top-wc-xxxl-1: 6rem;
        --top-wc-xxxl-2: 7rem;
        --top-wc-xxxl-3: 8rem;
        --top-wc-xxxl-4: 9rem;
        --top-wc-xxxl-5: 10rem;
        --top-wc-xxxl-6: 11rem;
        --top-wc-xxxl-7: 12rem;
        --top-wc-xxxl-8: 13rem;
        --top-wc-xxxl-9: 14rem;
        --top-wc-xxxl-10: 15rem;
        --top-wc-xxxl-11: 16rem;
        --top-wc-xxxl-12: 17rem;
        --top-wc-xxxl-13: 18rem;
        --top-wc-xxxl-14: 19rem;
        --top-wc-xxxl-15: 20rem;
        --top-wc-xxxl-16: 21rem;
        --top-wc-xxxl-17: 22rem;
        --top-wc-xxxl-18: 23rem;
        --top-wc-xxxl-19: 24rem;
        --top-wc-xxxl-20: 25rem;
        --top-wc-xxxl-21: 26rem;
        --top-wc-xxxl-22: 27rem;
        --top-wc-xxxl-23: 28rem;
        --top-wc-xxxl-24: 29rem;
        --top-wc-xxxl-25: 30rem;
        --top-wc-xxxl-26a: 35rem;
        --top-wc-xxxl-26: 40rem;
        --top-wc-xxxl-27: 50rem;

        /* Right Variables */
        --right-wc-auto: auto;
        --right-wc-0: 0;
        --right-wc-100: 100%;
        --right-wc-75: 75%;
        --right-wc-50: 50%;
        --right-wc-25: 25%;
        --right-wc-35: 35%;
        --right-wc-15: 15%;
        --right-wc-10: 10%;
        --right-wc-5: 5%;
        --right-wc-xxs: 0.125rem;
        --right-wc-xs: 0.25rem;
        --right-wc-sm: 0.5rem;
        --right-wc-md: 1rem;
        --right-wc-lg: 2rem;
        --right-wc-xl: 3rem;
        --right-wc-xxl: 4rem;
        --right-wc-xxxl: 5rem;
        --right-wc-xxxl-1: 6rem;
        --right-wc-xxxl-2: 7rem;

        /* bottom Variables */
        --bottom-wc-5pc: 5%;
        --bottom-wc-10pc: 10%;
        --bottom-wc-15pc: 15%;
        --bottom-wc-20pc: 20%;
        --bottom-wc-25pc: 25%;
        --bottom-wc-30pc: 30%;
        --bottom-wc-35pc: 35%;
        --bottom-wc-40pc: 40%;
        --bottom-wc-45pc: 45%;
        --bottom-wc-50pc: 50%;
        --bottom-wc-55pc: 55%;
        --bottom-wc-60pc: 60%;
        --bottom-wc-65pc: 65%;
        --bottom-wc-70pc: 70%;
        --bottom-wc-75pc: 75%;
        --bottom-wc-80pc: 80%;
        --bottom-wc-85pc: 85%;
        --bottom-wc-90pc: 90%;
        --bottom-wc-95pc: 95%;
        --bottom-wc-100pc: 100%;
        --bottom-wc-0: 0rem;
        --bottom-wc-xxs: 0.125rem;
        --bottom-wc-xs: 0.25rem;
        --bottom-wc-sm: 0.5rem;
        --bottom-wc-md: 1rem;
        --bottom-wc-lg: 2rem;
        --bottom-wc-xl: 3rem;
        --bottom-wc-xxl: 4rem;
        --bottom-wc-xxxl: 5rem;
        --bottom-wc-xxxl-1: 6rem;
        --bottom-wc-xxxl-2: 7rem;

        /* Left Variables */
        --left-wc-auto: auto;
        --left-wc-0: 0;
        --left-wc-100: 100%;
        --left-wc-75: 75%;
        --left-wc-50: 50%;
        --left-wc-40: 40%;
        --left-wc-35: 35%;
        --left-WC-30: 30%;
        --left-wc-25: 25%;
        --left-wc-24: 24%;
        --left-wc-23: 23%;
        --left-wc-22: 22%;
        --left-wc-20: 20%;
        --left-wc-19: 19%;
        --left-wc-18: 18%;
        --left-wc-17: 17%;
        --left-wc-16: 16%;
        --left-wc-15: 15%;
        --left-wc-10: 10%;
        --left-wc-xxs: 0.125rem;
        --left-wc-xs: 0.25rem;
        --left-wc-sm: 0.5rem;
        --left-wc-sma: 0.75rem;
        --left-wc-md: 1rem;
        --left-wc-mda: 1.45rem;
        --left-wc-lg: 2rem;
        --left-wc-mdlg: 2.65rem;
        --left-wc-xl: 3rem;
        --left-wc-xxl: 4rem;
        --left-wc-xxxl: 5rem;
        --left-wc-xxxl-1: 6rem;
        --left-wc-xxxl-2: 7rem;
        --left-wc-xxxl-3: 8rem;
        --left-wc-xxxl-4: 9rem;
        --left-wc-xxxl-5: 10rem;
        --left-wc-xxxl-6: 11rem;
        --left-wc-xxxl-7: 12rem;
        --left-wc-xxxl-8: 13rem;
        --left-wc-xxxl-9: 14rem;
        --left-wc-xxxl-10: 15rem;
        --left-wc-xxxl-11: 16rem;
        --left-wc-xxxl-12: 17rem;
        --left-wc-xxxl-13: 18rem;
        --left-wc-xxxl-14: 19rem;
        --left-wc-xxxl-15: 20rem;
        --left-wc-xxxl-16: 21rem;
        --left-wc-xxxl-17: 22rem;
        --left-wc-xxxl-18: 23rem;
        --left-wc-xxxl-19: 24rem;
        --left-wc-xxxl-20: 25rem;
        --left-wc-xxxl-21: 26rem;
        --left-wc-xxxl-22: 27rem;
        --left-wc-xxxl-23: 28rem;
        --left-wc-xxxl-24: 29rem;
        --left-wc-xxxl-25: 30rem;
        --left-wc-xxxl-26: 40rem;
        --left-wc-xxxl-27: 50rem;
        --left-wc-xxxl-27a: 55rem;
        --left-wc-xxxl-28: 60rem;
        --left-wc-xxxl-29: 70rem;
        --left-wc-xxxl-30: 80rem;
        --left-wc-xxxl-31: 90rem;
        --left-wc-xxxl-32: 100rem;

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

        /* Flex Direction Variables */
        --flex-direction-wc-row: row;
        --flex-direction-wc-row-reverse: row-reverse;
        --flex-direction-wc-column: column;
        --flex-direction-wc-column-reverse: column-reverse;

        /* Flex Wrap Variables */
        --flex-wrap-wc: wrap;
        --flex-nowrap-wc: nowrap;
        --flex-wrap-reverse-wc: wrap-reverse;

        /* Visibility Variables */
        --visibility-wc-visible: visible;
        --visibility-wc-hidden: hidden;
        --visibility-wc-collapse: collapse;

        /* Opacity Variables */
        --opacity-wc-0: 0;
        --opacity-wc-25: 0.25;
        --opacity-wc-35: 0.35;
        --opacity-wc-50: 0.5;
        --opacity-wc-75: 0.75;
        --opacity-wc-100: 1;
        
        /* Border Variables */
        --border-wc-thin: 1px solid hsla(0, 0%, 0%, 0.993);
        --border-wc-thick: 2px solid hsla(0, 0%, 0%, 0.993);
        --border-wc-xthick: 3px solid hsla(188, 98%, 34%, 0.993);
        --border-wc-xxthick: 4px solid hsla(0, 0%, 0%, 0.993);
        --border-wc-xxxthick: 10px solid hsla(188, 98%, 34%, 0.993);

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
        --shadow-wc-inset: inset 0 2px 4px 0 hsla(0, 0%, 0%, 0.69);
        --shadow-wc-inset-md: inset 0 4px 8px 0 hsla(0, 0%, 0%, 0.69);
        --shadow-wc-inset-lg: inset 0 6px 12px 0 hsla(0, 0%, 0%, 0.69);
        --shadow-wc-inset-xl: inset 0 8px 16px 0 hsla(0, 0%, 0%, 0.69);
        --shadow-wc-inset-xxl: inset 0 12px 24px 0 hsla(0, 0%, 0%, 0.69);
        --shadow-wc-inset-xxl-1: inset 0 16px 32px 0 hsla(0, 0%, 0%, 0.69);
        --shadow-wc-inset-xxl-1a: inset 0 9px 33px 25px hsla(0, 0%, 0%, 0.19);
        --shadow-wc-inset-xxl-2: inset 0 24px 48px 0 hsla(0, 0%, 0%, 0.69);
        --shadow-wc-inset-xxl-3: inset 0 32px 64px 0 hsla(0, 0%, 0%, 0.69);

        
        /* Filter Variables */
        --filter-shadow-wc-sm: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.5));
        --filter-shadow-wc-md: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.5));
        --filter-shadow-wc-xmd: drop-shadow(0 0 1rem hsla(0, 0%, 0%, 0.69));
        --filter-shadow-wc-xmda: drop-shadow(0 0 1.9rem hsla(0, 0%, 0%, 0.69));
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

        /* Rotate */
        --rotate-wc-0: 0;
        --rotate-wc-1: 1deg;
        --rotate-wc-2: 2deg;
        --rotate-wc-5: 5deg;
        --rotate-wc-10: 10deg;
        --rotate-wc-15: 15deg;
        --rotate-wc-45: 45deg;
        --rotate-wc-90: 90deg;
        --rotate-wc-180: 180deg;
        --rotate-wc-270: 270deg;
        --rotate-wc-359: 359deg;
        --rotate-wc-358: 358deg;
        --rotate-wc-355: 355deg;
        --rotate-wc-350: 350deg;
        --rotate-wc-345: 345deg;


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

        /* Container Query Variables */
        --container-query-wc-1: 1;
        --container-query-wc-2: 2;
        --container-query-wc-3: 3;
        --container-query-wc-4: 4;
        --container-query-wc-5: 5;
        --container-query-wc-6: 6;
        --container-query-wc-7: 7;
        --container-query-wc-8: 8;
        --container-query-wc-9: 9;
        --container-query-wc-10: 10;
        --container-query-wc-11: 11;
        --container-query-wc-12: 12;
        --container-query-wc-13: 13;
        --container-query-wc-14: 14;
        --container-query-wc-15: 15;
        --container-query-wc-16: 16;
        --container-query-wc-17: 17;
        --container-query-wc-18: 18;
        --container-query-wc-19: 19;
        --container-query-wc-20: 20;

        /* Container Query Breakpoint Variables */
        --container-query-breakpoint-wc-1: 1;
        --container-query-breakpoint-wc-2: 2;
        --container-query-breakpoint-wc-3: 3;
        --container-query-breakpoint-wc-4: 4;
        --container-query-breakpoint-wc-5: 5;
        --container-query-breakpoint-wc-6: 6;
        --container-query-breakpoint-wc-7: 7;
        --container-query-breakpoint-wc-8: 8;
        --container-query-breakpoint-wc-9: 9;
        --container-query-breakpoint-wc-10: 10;
        --container-query-breakpoint-wc-11: 11;
        --container-query-breakpoint-wc-12: 12;
        --container-query-breakpoint-wc-13: 13;
        --container-query-breakpoint-wc-14: 14;
        --container-query-breakpoint-wc-15: 15;
        --container-query-breakpoint-wc-16: 16;
        --container-query-breakpoint-wc-17: 17;
        --container-query-breakpoint-wc-18: 18;
        --container-query-breakpoint-wc-19: 19;
        --container-query-breakpoint-wc-20: 20;

        /* Container-Type */
        --container-type-wc-1: inline-size;
        --container-type-wc-2: block-size;
        --container-type-wc-3: min-inline-size;
        --container-type-wc-4: min-block-size;
        --container-type-wc-5: max-inline-size;
        --container-type-wc-6: max-block-size;
        --container-type-wc-7: width;
        --container-type-wc-8: height;
        --container-type-wc-9: min-width;
        --container-type-wc-10: min-height;
        --container-type-wc-11: max-width;
        --container-type-wc-12: max-height;
        --container-type-wc-13: aspect-ratio;
        --container-type-wc-14: min-aspect-ratio;
        --container-type-wc-15: max-aspect-ratio;

        /* Container Name */
        --container-name-wc-1: Index_Main_Container;
        --container-name-wc-2: About_Main_Container;
        --container-name-wc-3: Projects_Main_Container;
        --container-name-wc-4: Contact_Main_Container;
        --container-name-wc-5: Footer_Main_Container;

        /* UTILITY CLASSES */

    }

`;

indexWrapperSharedStyles.shell = /*css*/ `

    .lotteryAi-header-shell {
        margin: var(--margin-wc-0);
        padding: var(--padding-wc-0);
    }

`;

indexWrapperSharedStyles.container = /*css*/ `

    .main-container {
        container-type: inline-size;
        container-name: index_main_container;
    } 

    /* short-hand */
    /*
    .main-container {
        container: index_main_container / inline-size;
    }
    */

`;

indexWrapperSharedStyles.queries = /*css*/ `

   /* Container Queries */

    /* 1) */
    @container index_main_container (max-width: 1950px) {

        .figure-logo{
            top: var(--top-wc-sm);
            left: var(--left-wc-mdlg);
        }
        .img-logo {
            width: var(--width-wc-xxxl-9);
        }
        
        .header {
            width: var(--width-wc-1050);
        }

        .header-h1 {
            font-size: var(--fs-wc-xxxl-5);
        }

        .figure-slip {
            top: var(--top-wc-xxl);
            right: var(--right-wc-xxl);
        }
    } 

    /* 1a */
    @container index_main_container (max-width: 1750px) {

        .figure-slip {
            right: var(--right-wc-lg);
        }

        .img-slip {
            width: var(--width-wc-xxxl-7);  
        }

        .section-balls {
            top: var(--top-wc-xxxl-26a);
            left: var(--left-wc-xxxl-26);
        }

        .img-lottery-balls {
            width: var(--width-wc-680);
        }

    }

    /* 2) */
    @container index_main_container (max-width: 1550px) {

        .figure-logo{
            top: var(--top-wc-sma);
            left: var(--left-wc-mdlg);
        }
        .img-logo {
            width: var(--width-wc-xxxl-8);
        }

        .header {
            width: var(--width-wc-880);
        }

        .header-h1 {
            margin: var(--margin-wc-md) var(--margin-wc-0) var(--margin-wc-0) var(--margin-wc-xxl);
            font-size: var(--fs-wc-xxxl-4);
        }

        .header-para-1 {
            margin: var(--margin-wc-0) var(--margin-wc-auto) var(--margin-wc-0) var(--margin-wc-auto);
            font-size: var(--fs-wc-sm);
        }
    
        .header-para-2 {
            margin: var(--margin-wc-md) var(--margin-wc-auto);
            font-size: var(--fs-wc-xxs);
        } 
        
        .figure-slip {
            right: var(--right-wc-xs);
        }

        .img-slip {
            width: var(--width-wc-xxxl-4);  
        }

        .section-balls {
            top: var(--top-wc-xxxl-26a);
            left: var(--left-wc-xxxl-20);
        }
    }

    /* 2a) */
    @container index_main_container (max-width: 1535px) {
        .figure-slip {
            right: var(--right-wc-md);
        }

        .img-slip {
            width: var(--width-wc-xxxl-3);  
        }
    }

    /* 3) */
    @container index_main_container (max-width: 1250px) {
        
        .figure-logo{
            top: var(--top-wc-lg);
            left: var(--left-wc-mdlg);
        }
        .img-logo {
            width: var(--width-wc-xxxl-7);
        }

        .header {
            width: var(--width-wc-680);
        }

        .header-h1 {
            font-size: var(--fs-wc-xxxl-3);
        }

        .header-para-1 {
            margin: var(--margin-wc-0) var(--margin-wc-auto) var(--margin-wc-0) var(--margin-wc-auto);
            font-size: var(--fs-wc-xs);
        }

        .figure-slip {
            top: var(--top-wc-xxl);
            right: var(--right-wc-xxl);
        }       

        .img-slip {
            width: var(--width-wc-xxxl-2);  
        }

        .section-balls {
            top: var(--top-wc-xxxl-26a);
            left: var(--top-wc-xxxl-15);
        }

        .img-lottery-balls {
            width: var(--width-wc-500);
        }

    }

    /* 4) */
    @container index_main_container (max-width: 1080px) {
          
        .figure-logo{
            top: var(--top-wc-xlg);
            left: var(--left-wc-mdlg);
        }
        .img-logo {
            width: var(--width-wc-xxxl-6);
        }

        .header {
            width: var(--width-wc-550);
        }

        .header-h1 {
            font-size: var(--fs-wc-xxxl-2);
        }
        
        .header-para-1 {
            margin: var(--margin-wc-0) var(--margin-wc-auto) var(--margin-wc-0) var(--margin-wc-auto);
            font-size: var(--fs-wc-xxs);
        }

        .section-balls {
            top: var(--top-wc-xxxl-26a);
            left: var(--top-wc-xxxl-11);
        }

    }

    /* 5) */
    @container index_main_container (max-width: 840px) {
          
        .figure-logo{
            top: var(--top-wc-xlg);
            left: var(--left-wc-mda);
        }
        .img-logo {
            width: var(--width-wc-xxxl-5a);
        }

        .header {
            margin: var(--margin-wc-md) var(--margin-wc-xl) var(--margin-wc-0) var(--margin-wc--3);
            width: var(--width-wc-450);
        }

        .header-h1 {
            font-size: var(--fs-wc-xxxl-1);
        }

        .section-balls {
            top: var(--top-wc-xxxl-26a);
            left: var(--top-wc-xxxl-7);
        }

        .img-lottery-balls {
            width: var(--width-wc-400);
        }

    }

    /* 6) */
    @container index_main_container (max-width: 600px) {
          
        .figure-logo{
            top: var(--top-wc-xlg);
            left: var(--left-wc-mda);
        }
        .img-logo {
            width: var(--width-wc-xxxl-5);
        }

        .header {
            width: var(--width-wc-400);
        }

        .header-h1 {
            font-size: var(--fs-wc-xxxl-0);
        }

        .section-balls {
            top: var(--top-wc-xxxl-26a);
            left: var(--top-wc-xxxl-2);
        }

    }

    /* Media Queries */

    /* 1) */
    @media screen and (max-width: 315px) {
        .header {
            width: var(--width-wc-300);
        }

        .main-container {
            width: var(--width-wc-minimum);
        }

        body {
            width: var(--width-wc-minimum);
        }
    }

`;

export { indexWrapperSharedStyles };
