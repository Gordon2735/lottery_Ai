'use strict';

import { Ipick3Scrape_sharedStyles } from './Ipick3-scrape.js';

const pick3Scrape_sharedStyles: Ipick3Scrape_sharedStyles = {
	// shared styles
	root: '',
	container: '',
	header: '',
	numbers: ''
};

pick3Scrape_sharedStyles.root = /*css*/ `

    :root {

        /* CSS Variables */

        /* Background Colors */
        --sp3-bg-color-light: #f4f4f4;
        --sp3-bg-color-dark: #333;
        --sp3-bg-color-button: hsla(209, 13%, 50%, 0.993);
        --sp3-bg-color-button-hover: hsla(209, 13%, 40%, 0.993);
        --sp3-bg-color-button-active: hsla(209, 13%, 30%, 0.993);
        --sp3-bg-color-0: hsla(0, 0%, 0%, 0.993);
        --sp3-bg-color-1: hsla(0, 0%, 41%, 0.997);
        --sp3-bg-color-2: hsla(174, 72%, 56%, 0.996);
        --sp3-bg-color-3: hsla(160, 100%, 75%, 0.993);
        --sp3-bg-color-4: rgba(95, 158, 160, 0.993);
        --sp3-bg-color-4t: rgba(95, 158, 160, 0.393);
        --sp3-bg-color-5: hsla(182, 25%, 50%, 0.993);
        --sp3-bg-color-6: rgba(100, 148, 237, 0.993);
        --sp3-bg-color-7: rgba(176, 196, 222, 0.993);
        --sp3-bg-color-8: hsla(80, 61%, 50%, 0.993);
        --sp3-bg-color-9: rgba(105, 90, 205, 0.993);
        --sp3-bg-color-10: hsla(0, 79%, 72%, 0.993);
        --sp3-bg-color-11: hsl(108, 57%, 51%, 0.993);
    

        /* Background Gradients */
        --sp3-gradient-dark-0: linear-gradient(178.25deg, hsla(0, 0%, 20%, 0.993), 87%, hsla(188, 35%, 58%, 0.993));
        --sp3-gradient-dark-1: linear-gradient(178.35deg, hsla(188, 98%, 34%, 0.993), 34.5%, hsla(187, 52%, 80%, 0.593));
        --sp3-gradient-dark-2: linear-gradient(178.25deg, hsla(0, 0%, 20%, 0.993), 87%, hsla(188, 35%, 58%, 0.993));

        /* Background Image */
        --sp3-bgImage-pick3: url('../images/033e_sc_lottery.webp');

        /* Background Size */
        --sp3-size-1: cover;

        /* --bgRepeat-wc */
        --sp3-repeat-1: repeat;
        --sp3-repeat-2: no-repeat;

        /* --bg-wc-blend-mode */
        --sp3-bg-blend-mode-normal: normal;
        --sp3-bg-blend-mode-overlay: overlay;
        --sp3-bg-blend-mode-screen: screen;

        /* Font Family Variables */
        --sp3-ff-src-code-pro: 'Source Code Pro', monospace;
        --sp3-ff-titillium-web: 'Titillium Web', sans-serif;

        /* Font Size Variables */
        --sp3-fs-xxs: 0.5rem;
        --sp3-fs-xs: 0.65rem;
        --sp3-fs-sm: 0.875rem;
        --sp3-fs-md: 1rem;
        --sp3-fs-lg: 1.125rem;
        --sp3-fs-xl: 1.25rem;
        --sp3-fs-xxl: 1.5rem;
        --sp3-fs-xxxl: 1.875rem;
        --sp3-fs-xxxl-0: 2rem;
        --sp3-fs-xxxl-1: 2.25rem;
        --sp3-fs-xxxl-2: 3rem;
        --sp3-fs-xxxl-3: 3.75rem;
        --sp3-fs-xxxl-4: 4.5rem;
        --sp3-fs-xxxl-5: 5.25rem;
        --sp3-fs-em-0-1: 0.1em;
        --sp3-fs-em-0-2: 0.2em;
        --sp3-fs-em-0-4: 0.4em;
        --sp3-fs-em-0-6: 0.6em;
        --sp3-fs-em-0-8: 0.8em;
        --sp3-fs-em-1: 1em;
        --sp3-fs-em-1-2: 1.2em;
        --sp3-fs-em-1-4: 1.4em;
        --sp3-fs-em-1-6: 1.6em;
        --sp3-fs-em-1-8: 1.8em;
        --sp3-fs-em-2: 2em;
        --sp3-fs-em-2-2: 2.2em;
        --sp3-fs-em-2-4: 2.4em;
        --sp3-fs-em-2-6: 2.6em;
        --sp3-fs-em-2-8: 2.8em;
        --sp3-fs-em-3: 3em;
        --sp3-fs-em-3-2: 3.2em;
        --sp3-fs-em-3-4: 3.4em;
        --sp3-fs-em-3-6: 3.6em;
        --sp3-fs-em-3-8: 3.8em;
        --sp3-fs-em-4: 4em;
        --sp3-fs-em-4-2: 4.2em;
        --sp3-fs-em-4-4: 4.4em;
        --sp3-fs-em-4-6: 4.6em;
        --sp3-fs-em-4-8: 4.8em;
        --sp3-fs-em-5: 5em;

        /* Font Weight Variables */
        --sp3-fw-thin: 100;
        --sp3-fw-extra_light: 200;
        --sp3-fw-light: 300;
        --sp3-fw-normal: 400;
        --sp3-fw-medium: 500;
        --sp3-fw-semibold: 600;
        --sp3-fw-bold: 700;
        --sp3-fw-extra_bold: 800;
        --sp3-fw-black: 900;
        
        /* Font Styles Variables */
        --sp3-f-style-italic: italic;
        --sp3-f-style-normal: normal;
        --sp3-f-style-oblique: oblique;
        --sp3-f-style-initial: initial;


        /* Text Variables */
        --sp3-text-1: 0.5rem;
        --sp3-text-2: 0.75rem;

        /* Font Color Variables */
        /* Text Color Variables */
        --sp3-clr-fc-0: hsla(80, 61%, 50%, 0.993);
        --sp3-clr-fc-0f: hsla(0, 79%, 72%, 0.993);
        --sp3-clr-fc-1: hsla(240, 64%, 27%, 0.993);
        --sp3-clr-fc-2: hsla(198, 53%, 87%, 0.99);
        --sp3-clr-fc-4: hsl(0, 0%, 70%);
        --sp3-clr-fc-5: hsl(0, 38%, 38%);
        --sp3-clr-fc-6: hsl(32, 83%, 54%);
        --sp3-clr-fc-7: hsla(0, 0%, 0%, 0.9963);
        --sp3-clr-fc-8: hsla(240, 64%, 27%, 0.993);
        --sp3-clr-fc-9: hsla(80, 61%, 50%, 0.993);
        --sp3-clr-fc-10: hsla(0, 79%, 72%, 0.593); 
        --sp3-clr-fc-11: hsl(108, 57%, 51%, 0.993);

        /* 
        
        color: hsla(0, 0%, 41%, 0.997);
        color: hsla(174, 72%, 56%, 0.996);
        color: hsla(160, 100%, 75%, 0.993);
        color: rgba(95, 158, 160, 0.993);
        color: hsla(182, 25%, 50%, 0.993);
        color: rgba(100, 148, 237, 0.993);
        color: rgba(176, 196, 222, 0.993);
        color: hsla(80, 61%, 50%, 0.993);
        color: rgba(105, 90, 205, 0.993); 
        color: hsla(0, 79%, 72%, 0.993);      
        
        */

        --sp3-text-color-1: #000;
        --sp3-text-color-2: #fff;
        --sp3-text-color-3: #f4f4f4;
        --sp3-text-color-4: #333;


        /* Text Background Color Variables */
        --sp3-text-bckgrnd-color-1: #000;
        --sp3-text-bckgrnd-color-2: #fff;
        --sp3-text-bckgrnd-color-3: #f4f4f4;
        --sp3-text-bckgrnd-color-4: #333;

        /* Text Hover Color Variables */
        --sp3-text-hover-color-1: #000;
        --sp3-text-hover-color-2: #fff;
        --sp3-text-hover-color-3: #f4f4f4;
        --sp3-text-hover-color-4: #333;

        /* Text Hover Background Color Variables */
        --sp3-text-hover-bckgrnd-color-4: #333;

        /* Text Active Color Variables */
        --sp3-text-active-color-1: #000;
        --sp3-text-active-color-2: #fff;
        --sp3-text-active-color-3: #f4f4f4;
        --sp3-text-active-color-4: #333;

        /* Text Active Background Color Variables */
        --sp3-text-active-bckgrnd-color-1: #000;
        --sp3-text-active-bckgrnd-color-2: #fff;
        --sp3-text-active-bckgrnd-color-3: #f4f4f4;
        --sp3-text-active-bckgrnd-color-4: #333;

        /* Text Focus Color Variables */
        --sp3-text-focus-color-1: #000;
        --sp3-text-focus-color-2: #fff;
        --sp3-text-focus-color-3: #f4f4f4;
        --sp3-text-focus-color-4: #333;

        /* Text Focus Background Color Variables */
        --sp3-text-focus-bckgrnd-color-1: #000;
        --sp3-text-focus-bckgrnd-color-2: #fff;
        --sp3-text-focus-bckgrnd-color-3: #f4f4f4;
        --sp3-text-focus-bckgrnd-color-4: #333;

        /* Text Active Hover Color Variables */
        --sp3-text-active-hover-color-1: #000;
        --sp3-text-active-hover-color-2: #fff;
        --sp3-text-active-hover-color-3: #f4f4f4;
        --sp3-text-active-hover-color-4: #333;

        /* Text Active Hover Background Color Variables */
        --sp3-text-active-hover-bckgrnd-color-4: #333;

        /* Text Active Focus Color Variables */
        --sp3-text-active-focus-color-1: #000;
        --sp3-text-active-focus-color-2: #fff;
        --sp3-text-active-focus-color-3: #f4f4f4;
        --sp3-text-active-focus-color-4: #333;

        /* Text Active Focus Background Color Variables */
        --sp3-text-active-focus-bckgrnd-color-1: #000;
        --sp3-text-active-focus-bckgrnd-color-2: #fff;
        --sp3-text-active-focus-bckgrnd-color-3: #f4f4f4;
        --sp3-text-active-focus-bckgrnd-color-4: #333;

        /* Text Active Hover Focus Color Variables */
        --sp3-text-active-hover-focus-color-1: #000;
        --sp3-text-active-hover-focus-color-2: #fff;
        --sp3-text-active-hover-focus-color-3: #f4f4f4;
        --sp3-text-active-hover-focus-color-4: #333;

        /* Text Active Hover Focus Background Color Variables */
        --sp3-text-active-hover-focus-bckgrnd-color-4: #333;

        /* Line Height Variables */
        --sp3-lh-1: 1;
        --sp3-lh-2: 1.25;
        --sp3-lh-3: 1.5;
        --sp3-lh-4: 1.75;
        --sp3-lh-5: 2;

        /* Spacing Variables */
        --sp3-spacing-xxs: 0.25rem;
        --sp3-spacing-xxsa: 0.38rem;
        --sp3-spacing-xs: 0.5rem;
        --sp3-spacing-sm: 0.75rem;
        --sp3-spacing-md: 1rem;
        --sp3-spacing-lg: 1.5rem;
        --sp3-spacing-xl: 2rem;
        --sp3-spacing-xxl: 3rem;

        /* Text Shadow Variables */
        --sp3-text-shadow-sm: 0 2px 5px rgba(0, 0, 0, 0.5);
        --sp3-text-shadow-md: 0 4px 10px rgba(0, 0, 0, 0.5);
        --sp3-text-shadow-xmd: 0.2px 0.4px 3px hsla(0, 0%, 0%, 0.69);
        --sp3-text-shadow-xmdz: 1.2px 1.4px 4px hsla(0, 0%, 0%, 0.89);
        --sp3-text-shadow-xmda: 3.2px 3.8px 8px hsla(0, 0%, 0%, 0.69);
        --sp3-text-shadow-lg: 0 6px 15px rgba(0, 0, 0, 0.5);
        --sp3-text-shadow-xl: 0 8px 20px rgba(0, 0, 0, 0.5);
        --sp3-text-shadow-xxl: 0 10px 25px rgba(0, 0, 0, 0.5);
        --sp3-text-shadow-inset: 0 2px 5px rgba(0, 0, 0, 0.5) inset;
        --sp3-text-shadow-inset-md: 0 4px 10px rgba(0, 0, 0, 0.5) inset;
        --sp3-text-shadow-inset-lg: 0 6px 15px rgba(0, 0, 0, 0.5) inset;
        --sp3-text-shadow-inset-xl: 0 8px 20px rgba(0, 0, 0, 0.5) inset;
        --sp3-text-shadow-inset-xxl: 0 10px 25px rgba(0, 0, 0, 0.5) inset;
        --sp3-text-shadow-inset-xxxl: 0 12px 30px rgba(0, 0, 0, 0.5) inset;
        --sp3-text-shadow-inset-xxxxl: 0 14px 35px rgba(0, 0, 0, 0.5) inset;
        --sp3-text-shadow-inset-xxxxxl: 0 16px 40px rgba(0, 0, 0, 0.5) inset;

        /* Text Align Variables */
        --sp3-text-align-left: left;
        --sp3-text-align-right: right;
        --sp3-text-align-center: center;
        --sp3-text-align-justify: justify;

        /* Text Transform Variables */
        --sp3-text-transform-uppercase: uppercase;
        --sp3-text-transform-lowercase: lowercase;
        --sp3-text-transform-capitalize: capitalize;
        --sp3-text-transform-none: none;

        /* Text Decoration Variables */
        --sp3-text-decoration-none: none;
        --sp3-text-decoration-underline: underline;
        --sp3-text-decoration-overline: overline;
        --sp3-text-decoration-line-through: line-through;

        /* Text Overflow Variables */
        --sp3-text-overflow-clip: clip;
        --sp3-text-overflow-ellipsis: ellipsis;

        /* Text White Space Variables */
        --sp3-white-space-normal: normal;
        --sp3-white-space-nowrap: nowrap;
        --sp3-white-space-pre: pre;
        --sp3-white-space-pre-line: pre-line;
        --sp3-white-space-pre-wrap: pre-wrap;

        /* Text Break Variables */
        --sp3-word-break-normal: normal;
        --sp3-word-break-break-all: break-all;
        --sp3-word-break-keep-all: keep-all;
        --sp3-word-break-break-word: break-word;
        
        /* Margin Variables */
        --sp3-margin--sp3-3: -3rem;
        --sp3-margin--sp3-2: -2rem;
        --sp3-margin--sp3-1: -1rem;
        --sp3-margin-0: 1.2em 0em 1.2em 0.5em;
        --sp3-margin-0a: 0;
        --sp3-margin-00: 0em 0em 0em 0em;
        --sp3-margin-00a: 5em auto 0em auto;
        --sp3-margin-00b: 0 auto 5em auto;
        --sp3-margin-auto: auto;
        --sp3-margin-xxsm: 0.19rem;
        --sp3-margin-xxs: 0.25rem;
        --sp3-margin-xxsx: 0.28rem;
        --sp3-margin-xs: 0.5rem;
        --sp3-margin-sm: 0.75rem;
        --sp3-margin-md: 1rem;
        --sp3-margin-lg: 1.5rem;
        --sp3-margin-xl: 2rem;
        --sp3-margin-xxl: 3rem;
        --sp3-margin-xxl-1: 4rem;
        --sp3-margin-xxl-2: 5rem;
        --sp3-margin-xxl-3: 6rem;
        --sp3-margin-xxl-4: 7rem;
        --sp3-margin-xxl-5: 8rem;
        --sp3-margin-xxl-6: 9rem;
        --sp3-margin-xxl-7: 10rem;

        /* Padding Variables */
        --sp3-padding-0: 0;
        --sp3-padding-xxs: 0.25rem;
        --sp3-padding-xxsa: 0.35rem;
        --sp3-padding-xxsa1: 0.40rem;
        --sp3-padding-xs: 0.5rem;
        --sp3-padding-sm: 0.75rem;
        --sp3-padding-md: 1rem;
        --sp3-padding-lg: 1.5rem;
        --sp3-padding-xl: 2rem;
        --sp3-padding-xxl: 3rem;

        /* Width Variables */
        --sp3-width-100a: 100%;
        --sp3-width-90: 90%;
        --sp3-width-75: 75%;
        --sp3-width-50: 50%;
        --sp3-width-35: 35%;
        --sp3-width-25: 25%;
        --sp3-width-20: 20%;
        --sp3-width-19: 19%;
        --sp3-width-18: 18%;
        --sp3-width-17: 17%;
        --sp3-width-16: 16%;
        --sp3-width-15: 15%;
        --sp3-width-14: 14%;
        --sp3-width-13: 13%;
        --sp3-width-12: 12%;
        --sp3-width-11: 11%;
        --sp3-width-10: 10%;
        --sp3-width-9: 9%;
        --sp3-width-8: 8%;
        --sp3-width-7: 7%;
        --sp3-width-6: 6%;
        --sp3-width-5: 5%;
        --sp3-width-auto: auto;
        --sp3-width-px: 1px;
        --sp3-width-xxs: 0.125rem;
        --sp3-width-xs: 0.25rem;
        --sp3-width-sm: 0.5rem;
        --sp3-width-md: 1rem;
        --sp3-width-lg: 2rem;
        --sp3-width-xl: 3rem;
        --sp3-width-xxl: 4rem;
        --sp3-width-xxxl: 5rem;
        --sp3-width-xxxl-1: 6rem;
        --sp3-width-xxxl-2: 7rem;
        --sp3-width-xxxl-3: 8rem;
        --sp3-width-xxxl-4: 9rem;
        --sp3-width-xxxl-4a: 9.3rem;
        --sp3-width-xxxl-5: 10rem;
        --sp3-width-xxxl-5a: 11rem;
        --sp3-width-xxxl-6: 12rem;
        --sp3-width-xxxl-7: 14rem;
        --sp3-width-xxxl-8: 16rem;
        --sp3-width-xxxl-9: 18rem;
        --sp3-width-xxxl-10: 20rem;
        --sp3-width-80: 80px;
        --sp3-width-85: 85px;
        --sp3-width-90: 90px;
        --sp3-width-95: 95px;
        --sp3-width-100: 100px;
        --sp3-width-110: 110px;
        --sp3-width-120: 120px;
        --sp3-width-130: 130px;
        --sp3-width-140: 140px;
        --sp3-width-150: 150px;
        --sp3-width-160: 160px;
        --sp3-width-180: 180px;
        --sp3-width-200: 200px;
        --sp3-width-240: 240px;
        --sp3-width-280: 280px;
        --sp3-width-300: 300px;
        --sp3-width-350: 350px;
        --sp3-width-375: 375px;
        --sp3-width-400: 400px;
        --sp3-width-450: 450px;
        --sp3-width-475: 475px;
        --sp3-width-500: 500px;
        --sp3-width-550: 550px;
        --sp3-width-600: 600px;
        --sp3-width-680: 680px;
        --sp3-width-780: 780px;
        --sp3-width-840: 840px;
        --sp3-width-880: 880px;
        --sp3-width-950: 950px;
        --sp3-width-1050: 1050px;
        --sp3-width-1080: 1080px;
        --sp3-width-1100: 1100px;
        --sp3-width-1200: 1200px;
        --sp3-width-1250: 1250px;
        --sp3-width-1300: 1300px;
        --sp3-width-1400: 1400px;
        --sp3-width-1500: 1500px;
        --sp3-width-1535: 1535px;
        --sp3-width-1550: 1550px;
        --sp3-width-1600: 1600px;
        --sp3-width-1700: 1700px;
        --sp3-width-1750: 1750px;
        --sp3-width-1800: 1800px;
        --sp3-width-1900: 1900px;
        --sp3-width-1950: 1950px;
        --sp3-width-minimum: 320px;
        --sp3-width-em-75: 75em;
        
        /* Height Variables */
        --sp3-height-100: 100%;
        --sp3-height-75: 75%;
        --sp3-height-50: 50%;
        --sp3-height-25: 25%;
        --sp3-height-15: 15%;
        --sp3-height-10: 10%;
        --sp3-height-auto: auto;
        --sp3-height-px: 1px;
        --sp3-height-xxs: 0.125rem;
        --sp3-height-xs: 0.25rem;
        --sp3-height-sm: 0.5rem;
        --sp3-height-md: 1rem;
        --sp3-height-lg: 2rem;
        --sp3-height-xl: 3rem;
        --sp3-height-xxl: 4rem;
        --sp3-height-xxxl: 5rem;
        --sp3-height-xxxl-1: 6rem;
        --sp3-height-xxxl-2: 7rem;
        --sp3-height-xxxl-3: 8rem;
        --sp3-height-xxxl-4: 9rem;
        --sp3-height-xxxl-5: 10rem;
        --sp3-height-10: 10px;
        --sp3-height-20: 20px;
        --sp3-height-25: 25px;
        --sp3-height-30: 30px;
        --sp3-height-35: 35px;
        --sp3-height-40: 40px;
        --sp3-height-45: 45px;
        --sp3-height-50: 50px;
        --sp3-height-55: 55px;
        --sp3-height-60: 60px;
        --sp3-height-65: 65px;
        --sp3-height-70: 70px;
        --sp3-height-75: 75px;
        --sp3-height-80: 80px;
        --sp3-height-85: 85px;
        --sp3-height-90: 90px;
        --sp3-height-95: 95px;
        --sp3-height-100: 100px;
        --sp3-height-110: 110px;
        --sp3-height-120: 120px;
        --sp3-height-130: 130px;
        --sp3-height-140: 140px;
        --sp3-height-150: 150px;
        --sp3-height-160: 160px;
        --sp3-height-180: 180px;
        --sp3-height-200: 200px;
        --sp3-height-240: 240px;
        --sp3-height-280: 280px;
        --sp3-height-300: 300px;
        --sp3-height-350: 350px;
        --sp3-height-375: 375px;
        --sp3-height-400: 400px;
        --sp3-height-450: 450px;
        --sp3-height-475: 475px;
        --sp3-height-500: 500px;
        
        /* Position Variables */
        --sp3-position-static: static;
        --sp3-position-relative: relative;
        --sp3-position-absolute: absolute;
        --sp3-position-fixed: fixed;
        --sp3-position-sticky: sticky;

        /* Top Variables */
        --sp3-top-auto: auto;
        --sp3-top-0: 0;
        --sp3-top-100: 100%;
        --sp3-top-98: 98%;
        --sp3-top-95: 95%;
        --sp3-top-90: 90%;
        --sp3-top-85: 85%;
        --sp3-top-75: 75%;
        --sp3-top-50: 50%;
        --sp3-top-35: 35%;
        --sp3-top-33: 33%;
        --sp3-top-31-5: 31.5%;
        --sp3-top-25: 25%;
        --sp3-top-20: 20%;
        --sp3-top-15: 15%;
        --sp3-top-10: 10%;
        --sp3-top-5: 5%;
        --sp3-top-0: 0;
        --sp3-top-xxs: 0.125rem;
        --sp3-top-xs: 0.25rem;
        --sp3-top-sm: 0.5rem;
        --sp3-top-sma: 0.75rem;
        --sp3-top-md: 1rem;
        --sp3-top-mdlg: 1.15rem;
        --sp3-top-lg: 2rem;
        --sp3-top-xlg: 2.25rem;
        --sp3-top-xl: 3rem;
        --sp3-top-xxl: 4rem;
        --sp3-top-xxxl: 5rem;
        --sp3-top-xxxl-1: 6rem;
        --sp3-top-xxxl-2: 7rem;
        --sp3-top-xxxl-3: 8rem;
        --sp3-top-xxxl-4: 9rem;
        --sp3-top-xxxl-5: 10rem;
        --sp3-top-xxxl-6: 11rem;
        --sp3-top-xxxl-7: 12rem;
        --sp3-top-xxxl-8: 13rem;
        --sp3-top-xxxl-9: 14rem;
        --sp3-top-xxxl-10: 15rem;
        --sp3-top-xxxl-11: 16rem;
        --sp3-top-xxxl-12: 17rem;
        --sp3-top-xxxl-13: 18rem;
        --sp3-top-xxxl-14: 19rem;
        --sp3-top-xxxl-15: 20rem;
        --sp3-top-xxxl-16: 21rem;
        --sp3-top-xxxl-17: 22rem;
        --sp3-top-xxxl-18: 23rem;
        --sp3-top-xxxl-19: 24rem;
        --sp3-top-xxxl-20: 25rem;
        --sp3-top-xxxl-21: 26rem;
        --sp3-top-xxxl-22: 27rem;
        --sp3-top-xxxl-23: 28rem;
        --sp3-top-xxxl-24: 29rem;
        --sp3-top-xxxl-25: 30rem;
        --sp3-top-xxxl-25a: 30rem;
        --sp3-top-xxxl-25az: 32rem;
        --sp3-top-xxxl-25b: 35rem;
        --sp3-top-xxxl-25c: 37rem;
        --sp3-top-xxxl-26: 40rem;
        --sp3-top-xxxl-26a: 45rem;
        --sp3-top-xxxl-26b: 48rem;
        --sp3-top-xxxl-27: 50rem;

        /* Right Variables */
        --sp3-right-auto: auto;
        --sp3-right-0: 0;
        --sp3-right-100: 100%;
        --sp3-right-75: 75%;
        --sp3-right-50: 50%;
        --sp3-right-25: 25%;
        --sp3-right-35: 35%;
        --sp3-right-15: 15%;
        --sp3-right-10: 10%;
        --sp3-right-5: 5%;
        --sp3-right-xxs: 0.125rem;
        --sp3-right-xs: 0.25rem;
        --sp3-right-sm: 0.5rem;
        --sp3-right-md: 1rem;
        --sp3-right-lg: 2rem;
        --sp3-right-xl: 3rem;
        --sp3-right-xxl: 4rem;
        --sp3-right-xxxl: 5rem;
        --sp3-right-xxxl-1: 6rem;
        --sp3-right-xxxl-2: 7rem;

        /* bottom Variables */
        --sp3-bottom-5pc: 5%;
        --sp3-bottom-10pc: 10%;
        --sp3-bottom-15pc: 15%;
        --sp3-bottom-20pc: 20%;
        --sp3-bottom-25pc: 25%;
        --sp3-bottom-30pc: 30%;
        --sp3-bottom-35pc: 35%;
        --sp3-bottom-40pc: 40%;
        --sp3-bottom-45pc: 45%;
        --sp3-bottom-50pc: 50%;
        --sp3-bottom-55pc: 55%;
        --sp3-bottom-60pc: 60%;
        --sp3-bottom-65pc: 65%;
        --sp3-bottom-70pc: 70%;
        --sp3-bottom-75pc: 75%;
        --sp3-bottom-80pc: 80%;
        --sp3-bottom-85pc: 85%;
        --sp3-bottom-90pc: 90%;
        --sp3-bottom-95pc: 95%;
        --sp3-bottom-100pc: 100%;
        --sp3-bottom-0: 0rem;
        --sp3-bottom-xxs: 0.125rem;
        --sp3-bottom-xs: 0.25rem;
        --sp3-bottom-sm: 0.5rem;
        --sp3-bottom-md: 1rem;
        --sp3-bottom-lg: 2rem;
        --sp3-bottom-xl: 3rem;
        --sp3-bottom-xxl: 4rem;
        --sp3-bottom-xxxl: 5rem;
        --sp3-bottom-xxxl-1: 6rem;
        --sp3-bottom-xxxl-2: 7rem;

        /* Left Variables */
        --sp3-left-auto: auto;
        --sp3-left-0: 0;
        --sp3-left-100: 100%;
        --sp3-left-75: 75%;
        --sp3-left-50: 50%;
        --sp3-left-40: 40%;
        --sp3-left-35: 35%;
        --sp3-left-30: 30%;
        --sp3-left-25: 25%;
        --sp3-left-24: 24%;
        --sp3-left-23: 23%;
        --sp3-left-22: 22%;
        --sp3-left-20: 20%;
        --sp3-left-19: 19%;
        --sp3-left-18: 18%;
        --sp3-left-17: 17%;
        --sp3-left-16: 16%;
        --sp3-left-15: 15%;
        --sp3-left-10: 10%;
        --sp3-left-xxs: 0.125rem;
        --sp3-left-xs: 0.25rem;
        --sp3-left-sm: 0.5rem;
        --sp3-left-sma: 0.75rem;
        --sp3-left-md: 1rem;
        --sp3-left-mda: 1.45rem;
        --sp3-left-lg: 2rem;
        --sp3-left-mdlg: 2.65rem;
        --sp3-left-xl: 3rem;
        --sp3-left-xxl: 4rem;
        --sp3-left-xxxl: 5rem;
        --sp3-left-xxxl-1: 6rem;
        --sp3-left-xxxl-2: 7rem;
        --sp3-left-xxxl-3: 8rem;
        --sp3-left-xxxl-4: 9rem;
        --sp3-left-xxxl-5: 10rem;
        --sp3-left-xxxl-6: 11rem;
        --sp3-left-xxxl-7: 12rem;
        --sp3-left-xxxl-8: 13rem;
        --sp3-left-xxxl-9: 14rem;
        --sp3-left-xxxl-10: 15rem;
        --sp3-left-xxxl-11: 16rem;
        --sp3-left-xxxl-12: 17rem;
        --sp3-left-xxxl-13: 18rem;
        --sp3-left-xxxl-14: 19rem;
        --sp3-left-xxxl-15: 20rem;
        --sp3-left-xxxl-16: 21rem;
        --sp3-left-xxxl-17: 22rem;
        --sp3-left-xxxl-18: 23rem;
        --sp3-left-xxxl-19: 24rem;
        --sp3-left-xxxl-20: 25rem;
        --sp3-left-xxxl-21: 26rem;
        --sp3-left-xxxl-22: 27rem;
        --sp3-left-xxxl-23: 28rem;
        --sp3-left-xxxl-24: 29rem;
        --sp3-left-xxxl-25: 30rem;
        --sp3-left-xxxl-25a: 31rem;
        --sp3-left-xxxl-25b: 32rem;
        --sp3-left-xxxl-25c: 35rem;
        --sp3-left-xxxl-25d: 38rem;
        --sp3-left-xxxl-26: 40rem;
        --sp3-left-xxxl-26a: 43rem;
        --sp3-left-xxxl-27: 50rem;
        --sp3-left-xxxl-27a: 55rem;
        --sp3-left-xxxl-27b: 57.5rem;
        --sp3-left-xxxl-28: 60rem;
        --sp3-left-xxxl-28a: 62rem;
        --sp3-left-xxxl-28b: 64rem;
        --sp3-left-xxxl-28c: 66rem;
        --sp3-left-xxxl-29: 70rem;
        --sp3-left-xxxl-30: 80rem;
        --sp3-left-xxxl-31: 90rem;
        --sp3-left-xxxl-32: 100rem;

        /* Overflow Variables */
        --sp3-overflow-visible: visible;
        --sp3-overflow-hidden: hidden;
        --sp3-overflow-scroll: scroll;
        --sp3-overflow-auto: auto;
        --sp3-overflow-y-scroll: scroll;

        /* Scroll Behaviour Variables */
        --sp3-scroll-behaviour-auto: auto;
        --sp3-scroll-behaviour-smooth: smooth;
        
        /* Display Variables */
        --sp3-display-none: none;
        --sp3-display-inline: inline;
        --sp3-display-inline-block: inline-block;
        --sp3-display-block: block;
        --sp3-display-table: table;
        --sp3-display-table-cell: table-cell;
        --sp3-display-flex: flex;
        --sp3-display-inline-flex: inline-flex;
        --sp3-display-grid: grid;

        /* Justify Variables */
        --sp3-justify-start: start;
        --sp3-justify-end: end;
        --sp3-justify-center: center;
        --sp3-justify-space-between: space-between;
        --sp3-justify-space-around: space-around;
        --sp3-justify-space-evenly: space-evenly;
        --sp3-justify-right: right;
        --sp3-justify-left: left;



        /* Flex Direction Variables */
        --sp3-flex-direction-row: row;
        --sp3-flex-direction-row-reverse: row-reverse;
        --sp3-flex-direction-column: column;
        --sp3-flex-direction-column-reverse: column-reverse;

        /* Flex Wrap Variables */
        --sp3-flex-wrap-wc: wrap;
        --sp3-flex-nowrap-wc: nowrap;
        --sp3-flex-wrap-reverse-wc: wrap-reverse;

        /* Visibility Variables */
        --sp3-visibility-visible: visible;
        --sp3-visibility-hidden: hidden;
        --sp3-visibility-collapse: collapse;

        /* Opacity Variables */
        --sp3-opacity-0: 0;
        --sp3-opacity-05: 0.05;
        --sp3-opacity-08: 0.08;
        --sp3-opacity-10: 0.10;
        --sp3-opacity-15: 0.15;
        --sp3-opacity-25: 0.25;
        --sp3-opacity-35: 0.35;
        --sp3-opacity-40: 0.40;
        --sp3-opacity-45: 0.45;
        --sp3-opacity-50: 0.50;
        --sp3-opacity-60: 0.60;
        --sp3-opacity-65: 0.65;
        --sp3-opacity-75: 0.75;
        --sp3-opacity-100: 1;
        
        /* Border Variables */
        --sp3-border-thin: 1px solid hsla(0, 0%, 0%, 0.993);
        --sp3-border-thick: 2px solid hsla(0, 0%, 0%, 0.993);
        --sp3-border-xthick: 3px solid hsla(188, 98%, 34%, 0.993);
        --sp3-border-xthicka: 6px solid hsla(188, 98%, 34%, 0.993);
        --sp3-border-xxthick: 4px solid hsla(0, 0%, 0%, 0.993);
        --sp3-border-xxxthick: 10px solid hsla(188, 98%, 34%, 0.993);
        --sp3-border-feather: 10px solid hsla(188, 98%, 34%, 0.993);
        --sp3-border-button: 3px solid hsla(188, 98%, 34%, 0.793);

        /* Border Radius Variables */
        --sp3-radius-0: 0rem;
        --sp3-radius-xxs: 0.125rem;
        --sp3-radius-sm: 0.25rem;
        --sp3-radius-smmd: 0.35rem;
        --sp3-radius-md: 0.5rem;
        --sp3-radius-lg: 1rem;
        --sp3-radius-xl: 2rem;
        --sp3-radius-xxl: 3rem;
        --sp3-radius-em-35: 0.35em;

        /* Box Shadow Variables */
        --sp3-shadow-sm: 0 5px 15px rgba(0, 0, 0, 0.1);
        --sp3-shadow-md: 0 8px 30px rgba(0, 0, 0, 0.1);
        --sp3-shadow-xmd: 7px 5px 9px hsla(0, 0%, 0%, 0.69);
        --sp3-shadow-lg: 0 12px 35px rgba(0, 0, 0, 0.15);
        --sp3-shadow-xl: 0 16px 50px rgba(0, 0, 0, 0.15);
        --sp3-shadow-xxl: 0 24px 60px rgba(0, 0, 0, 0.2);
        --sp3-shadow-inset: inset 0 2px 4px 0 hsla(0, 0%, 0%, 0.69);
        --sp3-shadow-inset-md: inset 0 4px 8px 0 hsla(0, 0%, 0%, 0.69);
        --sp3-shadow-inset-lg: inset 0 6px 12px 0 hsla(0, 0%, 0%, 0.69);
        --sp3-shadow-inset-xl: inset 0 8px 16px 0 hsla(0, 0%, 0%, 0.69);
        --sp3-shadow-inset-xxl: inset 0 12px 24px 0 hsla(0, 0%, 0%, 0.69);
        --sp3-shadow-inset-xxl-1: inset 0 16px 32px 0 hsla(0, 0%, 0%, 0.69);
        --sp3-shadow-inset-xxl-1a: inset 0 9px 33px 25px hsla(0, 0%, 0%, 0.19);
        --sp3-shadow-inset-xxl-2: inset 0 24px 48px 0 hsla(0, 0%, 0%, 0.69);
        --sp3-shadow-inset-xxl-3: inset 0 32px 64px 0 hsla(0, 0%, 0%, 0.69);
        
        /* Filter Variables */
        --sp3-filter-shadow-sm: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.5));
        --sp3-filter-shadow-md: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.5));
        --sp3-filter-shadow-xmd: drop-shadow(0 0 1rem hsla(0, 0%, 0%, 0.69));
        --sp3-filter-shadow-xmda: drop-shadow(0.7rem 0.7rem 1.7rem hsla(0, 0%, 0%, 0.763));
        --sp3-filter-shadow-xmdaz: drop-shadow(2rem 2rem 4.9rem hsla(0, 0%, 0%, 0.963));
        --sp3-filter-shadow-lg: drop-shadow(0 0 2rem rgba(0, 0, 0, 0.5));
        --sp3-filter-shadow-xl: drop-shadow(0 0 3rem rgba(0, 0, 0, 0.5));
        --sp3-filter-shadow-xxl: drop-shadow(0 0 4rem rgba(0, 0, 0, 0.5));
        --sp3-filter-shadow-inset: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.5)) inset;
        --sp3-filter-shadow-inset-md: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.5)) inset;
        --sp3-filter-shadow-inset-lg: drop-shadow(0 0 2rem rgba(0, 0, 0, 0.5)) inset;
        --sp3-filter-shadow-inset-xl: drop-shadow(0 0 3rem rgba(0, 0, 0, 0.5)) inset;
        --sp3-filter-shadow-inset-xxl: drop-shadow(0 0 4rem rgba(0, 0, 0, 0.5)) inset;
        --sp3-filter-shadow-inset-xxxl: drop-shadow(0 0 5rem rgba(0, 0, 0, 0.5)) inset;
        --sp3-filter-shadow-inset-xxxxl: drop-shadow(0 0 6rem rgba(0, 0, 0, 0.5)) inset;
        --sp3-filter-shadow-inset-xxxxxl: drop-shadow(0 0 7rem rgba(0, 0, 0, 0.5)) inset;

        /* Transition Variables */
        --sp3-transition-fast: all 0.1s ease-in-out;
        --sp3-transition-moderate: all 0.3s ease-in-out;
        --sp3-transition-xmoderate: all 0.5s ease-in-out;
        --sp3-transition-slow: all 0.7s ease-in-out;
        --sp3-transition-01s: 0.1s;
        --sp3-transition-02s: 0.2s;
        --sp3-transition-03s: 0.3s;
        --sp3-transition-04s: 0.4s;
        --sp3-transition-05s: 0.5s;
        --sp3-transition-06s: 0.6s;
        --sp3-transition-07s: 0.7s;
        --sp3-transition-08s: 0.8s;
        --sp3-transition-09s: 0.9s;
        --sp3-transition-1s: 1s;
        --sp3-transition-2.1s: 2.1s;
        --sp3-transition-2.5s: 2.5s;
        --sp3-transition-3s: 3s;
        --sp3-transition-4s: 4s;


        /* Transform Variables */
        --sp3-transform-none: none;
        --sp3-transform-rotate-0: rotate(0deg);
        --sp3-transform-rotate-1: rotate(1deg);
        --sp3-transform-rotate-2: rotate(2deg);
        --sp3-transform-rotate-3: rotate(3deg);
        --sp3-transform-rotate-5: rotate(5deg);
        --sp3-transform-rotate-6: rotate(6deg);
        --sp3-transform-rotate-7: rotate(7deg);
        --sp3-transform-rotate-8: rotate(8deg);
        --sp3-transform-rotate-9: rotate(9deg);
        --sp3-transform-rotate-10: rotate(10deg);
        --sp3-transform-rotate-15: rotate(15deg);
        --sp3-transform-rotate-45: rotate(45deg);
        scale(0.95);

        /* Scale */
        --sp3-scale-095: scale(0.95);
        --sp3-scale-0: scale(0);
        --sp3-scale-1: scale(0.10);
        --sp3-scale-2: scale(0.20);
        --sp3-scale-3: scale(0.30);
        --sp3-scale-4: scale(0.40);
        --sp3-scale-5: scale(0.50);
        --sp3-scale-6: scale(0.60);
        --sp3-scale-7: scale(0.70);
        --sp3-scale-8: scale(0.80);
        --sp3-scale-9: scale(0.90);
        --sp3-scale-10: scale(1);

        /* Skew */
        --sp3-skew-0: 0;
        --sp3-skew-1: 1deg;
        --sp3-skew-2: 2deg;
        --sp3-skew-3: 3deg;
        --sp3-skew-5: 5deg;
        --sp3-skew-6: 6deg;

        /* Translate */
        --sp3-translate-0: 0;
        --sp3-translate-1: 1px;
        --sp3-translate-2: 2px;
        --sp3-translate-3: 3px;
        --sp3-translate-5: 5px;
        --sp3-translate-6: 6px;
        --sp3-translate-7: 7px;
        --sp3-translate-8: 8px;
        --sp3-translate-9: 9px;
        --sp3-translate-10: 10px;

        /* cursor */
        --sp3-cursor-pointer: pointer;
        --sp3-cursor-default: default;
        --sp3-cursor-move: move;
        --sp3-cursor-not-allowed: not-allowed;
        --sp3-cursor-auto: auto;
        --sp3-cursor-crosshair: crosshair;
        --sp3-cursor-help: help;
        --sp3-cursor-text: text;
        --sp3-cursor-ew-resize: ew-resize;
        --sp3-cursor-ns-resize: ns-resize;
        --sp3-cursor-nesw-resize: nesw-resize;
        --sp3-cursor-nwse-resize: nwse-resize;
        --sp3-cursor-none: none;



        /* Rotate */
        --sp3-rotate-0: 0;
        --sp3-rotate-1: 1deg;
        --sp3-rotate-2: 2deg;
        --sp3-rotate-3: 3deg;
        --sp3-rotate-5: 5deg;
        --sp3-rotate-6: 6deg;
        --sp3-rotate-7: 7deg;
        --sp3-rotate-8: 8deg;
        --sp3-rotate-9: 9deg;
        --sp3-rotate-10: 10deg;
        --sp3-rotate-15: 15deg;
        --sp3-rotate-45: 45deg;
        --sp3-rotate-90: 90deg;
        --sp3-rotate-180: 180deg;
        --sp3-rotate-270: 270deg;
        --sp3-rotate-359: 359deg;
        --sp3-rotate-358: 358deg;
        --sp3-rotate-355: 355deg;
        --sp3-rotate-350: 350deg;
        --sp3-rotate-345: 345deg;
        --sp3-rotate-335: 335deg;
        --sp3-rotate-330: 330deg;
        --sp3-rotate-325: 325deg;
        --sp3-rotate-320: 320deg;
        --sp3-rotate-315: 315deg;
        --sp3-rotate-310: 310deg;
        --sp3-rotate-305: 305deg;
        --sp3-rotate-300: 300deg;
        --sp3-rotate-295: 295deg;
        --sp3-rotate-290: 290deg;


        /* Grid Type Variables */
        --sp3-grid-template-areas-1: 
            "image"
            "header2"
            "when-event"
            "scrape-numbers"
            "button";

            --sp3-grid-template-areas-2: 
            "image image"
            "header2 header2"
            "when-event when-event"
            "scrape-numbers fireball_number"
            ". button";

            --sp3-grid-template-areas-3: 
            "image image ."
            "image image ."
            ". header2 header2"
            ". when-event ."
            "scrape-numbers header4 fireball_number"
            ". . button";

            --sp3-grid-template-areas-4: 
            "image image . ."
            "image image . ."
            "image image . ."
            ". header2 header2 ."
            ". . when-event ."
            ". scrape-numbers header4 fireball_number"
            ". . . button";
   
            --sp3-grid-template-areas-5: 
            "image image image . ."
            "image image image . ."
            ".  header2 header2 header2 ."
            ". when-event when-event . ."
            ". scrape-numbers scrape-numbers header4 fireball_number"
            ". . . button button";

        --sp3-grid-template-areas-9:
            "image image image image . . . . ."
            "image image image image header2 header2 header2 header2 ."
            ". when-event when-event when-event . . . . ."
            "scrape-numbers scrape-numbers scrape-numbers scrape-numbers scrape-numbers header4 header4 fireball_number"
            ". . . . . button button button button";
            



        /* Grid Gap Variables */
        --sp3-grid-gap: 1rem;
        --sp3-grid-gap-sm: 0.5rem;
        --sp3-grid-gap-lg: 1.5rem;
        --sp3-grid-gap-xl: 2rem;
        --sp3-grid-gap-xxl: 3rem;
        --sp3-grid-gap-xxxl: 4rem;
        --sp3-grid-gap-xxxxl: 5rem;
        --sp3-grid-gap-xxxxxl: 6rem;
        --sp3-grid-gap-xxxxxl-2: 7rem;
        --sp3-grid-gap-xxxxxl-3: 8rem;
        --sp3-grid-gap-xxxxxl-4: 9rem;
        --sp3-grid-gap-xxxxxl-5: 10rem;
        --sp3-grid-gap-xxxxxl-6: 11rem;
        --sp3-grid-gap-xxxxxl-7: 12rem;

        /* Grid Template Variables */
        --sp3-grid-template-1: repeat(1, 1fr);
        --sp3-grid-template-2: repeat(2, 1fr);
        --sp3-grid-template-3: repeat(3, 1fr);
        --sp3-grid-template-4: repeat(4, 1fr);
        --sp3-grid-template-5: repeat(5, 1fr);
        --sp3-grid-template-6: repeat(6, 1fr);
        --sp3-grid-template-7: repeat(7, 1fr);
        --sp3-grid-template-8: repeat(8, 1fr);
        --sp3-grid-template-9: repeat(9, 1fr);
        --sp3-grid-template-10: repeat(10, 1fr);
        --sp3-grid-template-11: repeat(11, 1fr);
        --sp3-grid-template-12: repeat(12, 1fr);
        --sp3-grid-template-13: repeat(13, 1fr);
        --sp3-grid-template-14: repeat(14, 1fr);
        --sp3-grid-template-15: repeat(15, 1fr);
        --sp3-grid-template-16: repeat(16, 1fr);
        --sp3-grid-template-17: repeat(17, 1fr);

        /* Grid Template Columns Variables */
        --sp3-grid-template-columns-1: repeat(1, 1fr);
        --sp3-grid-template-columns-2: repeat(9, 1fr);
        --sp3-grid-template-columns-3: (1fr, 1fr, 1fr);
        --sp3-grid-template-columns-4: (1fr, 1fr, 1fr, 1fr);
        --sp3-grid-template-columns-5: (1fr, 1fr, 1fr, 1fr, 1fr);
        --sp3-grid-template-columns-5a: (1fr);
        --sp3-grid-template-columns-13: 100px 100px 100px 100px;

        /* Grid Template Rows Variables */
        --sp3-grid-template-rows-1: auto;
        --sp3-grid-template-rows-2: repeat(2, 1fr);

        /* Grid auto Rows Variables */
        --sp3-grid-auto-rows-1: auto;
        --sp3-grid-auto-rows-2: 100px;
        --sp3-grid-auto-rows-2a: 800px;
        --sp3-grid-auto-rows-3: minmax(100px, auto);
        --sp3-grid-auto-rows-4: 50px;
        --sp3-grid-auto-rows-5: 60px;
        --sp3-grid-auto-rows-6: 120px;


        /* Justify Content Variables */
        --sp3-justify-content-start: start;
        --sp3-justify-content-end: end;
        --sp3-justify-content-center: center;
        --sp3-justify-content-space-between: space-between;
        --sp3-justify-content-space-around: space-around;
        --sp3-justify-content-space-evenly: space-evenly;

        /* Flex Align Items Variables */
        --sp3-align-items-flex-start: flex-start;
        --sp3-align-items-flex-end: flex-end;
        --sp3-align-items-center: center;
        --sp3-align-items-baseline: baseline;
        --sp3-align-items-stretch: stretch;

        /* Flex Align Content Variables */
        --sp3-align-content-flex-start: flex-start;
        --sp3-align-content-flex-end: flex-end;
        --sp3-align-content-center: center;
        --sp3-align-content-space-between: space-between;
        --sp3-align-content-space-around: space-around;
        --sp3-align-content-stretch: stretch;

        /* Flex Align Self Variables */
        --sp3-align-self-auto: auto;
        --sp3-align-self-flex-start: flex-start;
        --sp3-align-self-flex-end: flex-end;
        --sp3-align-self-center: center;
        --sp3-align-self-baseline: baseline;
        --sp3-align-self-stretch: stretch;

        /* Flex Order Variables */
        --sp3-order-1: 1;
        --sp3-order-2: 2;
        --sp3-order-3: 3;
        --sp3-order-4: 4;
        --sp3-order-5: 5;
        --sp3-order-6: 6;
        --sp3-order-7: 7;
        --sp3-order-8: 8;
        --sp3-order-9: 9;
        --sp3-order-10: 10;
        --sp3-order-11: 11;
        --sp3-order-12: 12;
        --sp3-order-13: 13;
        --sp3-order-14: 14;
        --sp3-order-15: 15;
        --sp3-order-16: 16;
        --sp3-order-17: 17;
        --sp3-order-18: 18;
        --sp3-order-19: 19;
        --sp3-order-20: 20;
        --sp3-order-21: 21;

        /* Z-Index Variables */
        --sp3-z-index-1: 100;
        --sp3-z-index-2: 200;
        --sp3-z-index-3: 300;
        --sp3-z-index-4: 400;
        --sp3-z-index-5: 500;
        --sp3-z-index-6: 600;
        --sp3-z-index-7: 700;
        --sp3-z-index-8: 800;
        --sp3-z-index-9: 900;
        --sp3-z-index-10: 1000;
        --sp3-z-index-11: 1100;
        --sp3-z-index-12: 1200;
        --sp3-z-index-13: 1300;
        --sp3-z-index-14: 1400;
        --sp3-z-index-15: 1500;
        --sp3-z-index-16: 1600;
        --sp3-z-index-17: 1700;
        --sp3-z-index-18: 1800;
        --sp3-z-index-19: 1900;
        --sp3-z-index-20: 2000;

    }

    /* Box Sizing Rules */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    /* Remove Default Margin */
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
        margin: 0;
    }

    /* Remove List Styles on ul, ol elements with a  */
    ul[role='list'],
    ol[role='list'] {
        list-style: none;
    }

    /* Set Core Body Defaults */
    body {
        min-height: 100vh;
        scroll-behavior: smooth;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
    }

    /* A elements that don't have a class get default */
    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img,
    picture {
        max-width: 100%;
        display: block;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
            color: magenta;
        }
    }
`;

pick3Scrape_sharedStyles.container = /*css*/ `

    .pick3-scrape-main-container {
        margin: var(--sp3-margin-0a);
        width: var(--sp3-width-100a);
        overflow: var(--sp3-overflow-hidden);
    }    
    
`;

pick3Scrape_sharedStyles.header = /*css*/ `

    .scrape-pick3-logo {
        grid-area: image;
    }

    .scrape-h2 {        
        grid-area: header2;
    }

    .para-pick3-scrape-date {
        grid-area: when-event;
    }

    .para-pick3-scrape-numbers {
        grid-area: scrape-numbers;
    }

    .scrape-h4 {
        grid-area: header4;
    }

    .para-pick3-scrape-fireball {
        grid-area: fireball_number;
    }

    .pick3-scrape-button {
        grid-area: button;
    }

    * {
    box-sizing: border-box;
  }
    
    .pick3-scrape-header {
        margin: var(--sp3-margin-00a);  
        width: var(--sp3-width-840);
        height: var(--sp3-height-auto);
        background-color: var(--sp3-bg-color-4t);
        border: var(--sp3-border-xthicka);
        border-radius: var(--sp3-radius-md);
        filter: var(--sp3-filter-shadow-xmda);
        font-family: var(--sp3-ff-src-code-pro);
    }

    .pick3-scrape-header > .scrape-pick3-logo {
        margin: var(--sp3-margin-0);        
        width: var(--sp3-width-300);
        rotate: var(--sp3-rotate-345);
    }

    .pick3-scrape-header > .scrape-h2 {
        font-size: var(--sp3-fs-xxl);
        font-weight: var(--sp3-fw-bold);
        color: var(--sp3-clr-fc-11);
        text-shadow: var(--sp3-text-shadow-xmdz);
        text-align: var(--sp3-text-align-right);
    }

    .pick3-scrape-header > .para-pick3-scrape-date {
        font-size: var(--sp3-fs-md);
        font-weight: var(--sp3-fw-semibold);
        color: var(--sp3-clr-fc-2);
        font-style: var(--sp3-f-style-italic);
        text-shadow: var(--sp3-text-shadow-xmd);
    }

    .pick3-scrape-header > .para-pick3-scrape-numbers {
        justify: var(--sp3-justify-right);
        font-size: var(--sp3-fs-xxxl-1);
        font-weight: var(--sp3-fw-semibold);
        color: var(--sp3-clr-fc-11);
        font-style: var(--sp3-f-style-italic);
        text-shadow: var(--sp3-text-shadow-xmdz);
    }
 
    .pick3-scrape-header > .scrape-h4 {
        justify: var(--sp3-justify-end);
        font-size: var(--sp3-fs-sm);
        font-weight: var(--sp3-fw-semibold);
        color: var(--sp3-clr-fc-6);
        font-style: var(--sp3-f-style-italic);
        text-shadow: var(--sp3-text-shadow-xmd);
    }

    .pick3-scrape-header > .para-pick3-scrape-fireball {
        justify: var(--sp3-justify-start);
        font-family: var(--sp3-ff-titillium-web);
        font-size: var(--sp3-fs-xxxl-1);
        font-weight: var(--sp3-fw-bold);
        color: var(--sp3-clr-fc-0f);
        text-shadow: var(--sp3-text-shadow-xmd);
    }

    .pick3-scrape-header > .pick3-scrape-button {
        margin: var(--sp3-margin-00b);
        width: var(--sp3-width-200);
        height: var(--sp3-height-50);
        font-size: var(--sp3-fs-md);
        font-weight: var(--sp3-fw-bold);
        color: var(--sp3-clr-fc-11);
        text-shadow: var(--sp3-text-shadow-xmd);
        border: var(--sp3-border-button);
        border-radius: var(--sp3-radius-sm);
        background-color: var(--sp3-bg-color-button);
        box-shadow: var(--sp3-shadow-inset-xxl-1a);
        filter: var(--sp3-filter-shadow-xmda);
    }

    .pick3-scrape-button:hover {
        background-color: var(--sp3-bg-color-button-hover);
        transition: var(--sp3-transition-07s);
        color: var(--sp3-clr-fc-9);
        cursor: var(--sp3-cursor-pointer);    
    }

    .pick3-scrape-button:focus {
        outline-color: transparent;
        outline-style: solid;
        box-shadow: 0 0 0 4px #5a01a7;
        transition: 0.7s;
        color: var(--sp3-clr-fc-9);
    }

    .pick3-scrape-button:active {
        transform: var(--sp3-scale-095);
        transition: var(--sp3-transition-01s);
        background-color: var(--sp3-bg-color-button-active); 
        color: var(--sp3-clr-fc-2);
    }

    .pick3-scrape-header {
        display: var(--sp3-display-grid);
        padding: var(--sp3-padding-xxs);
        grid-template-columns: var(--sp3-grid-template-columns-4);
        grid-auto-rows: var(--sp3-grid-auto-rows-5);
        grid-template-areas: var(--sp3-grid-template-areas-4);
      
    }
`;

pick3Scrape_sharedStyles.numbers = /*css*/ `


`;

export { pick3Scrape_sharedStyles };
