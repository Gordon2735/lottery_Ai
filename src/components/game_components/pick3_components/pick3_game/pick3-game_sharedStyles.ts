'use strict';

import { Ipick3GameSharedStyles } from './Ipick3_game.js';

const pick3Game_sharedStyles: Ipick3GameSharedStyles = {
	root: ``,
	shell: ``,
	container: ``,
	game: ``,
	results: ``
};

pick3Game_sharedStyles.root = /*css*/ `

    :root {

        /* CSS Variables */

        /* Background Colors */
        --pk3-bg-color-light: #f4f4f4;
        --pk3-bg-color-dark: #333;

        /* Background Gradients */
        --pk3-gradient-dark-0: linear-gradient(178.25deg, hsla(0, 0%, 20%, 0.993), 87%, hsla(188, 35%, 58%, 0.993));
        --pk3-gradient-dark-1: linear-gradient(178.35deg, hsla(188, 98%, 34%, 0.993), 34.5%, hsla(187, 52%, 80%, 0.593));
        --pk3-gradient-dark-2: linear-gradient(178.25deg, hsla(0, 0%, 20%, 0.993), 87%, hsla(188, 35%, 58%, 0.993));

        /* Background Image */
        --pk3-bgImage-pick3: url('../images/033e_sc_lottery.webp');

        /* Background Size */
        --pk3-size-1: cover;

        /* --bgRepeat-wc */
        --pk3-repeat-1: repeat;
        --pk3-repeat-2: no-repeat;

        /* --bg-wc-blend-mode */
        --pk3-bg-blend-mode-normal: normal;
        --pk3-bg-blend-mode-overlay: overlay;
        --pk3-bg-blend-mode-screen: screen;

        /* Font Family Variables */
        --pk3-ff-src-code-pro: 'Source Code Pro', monospace;
        --pk3-ff-titillium-web: 'Titillium Web', sans-serif;

        /* Font Size Variables */
        --pk3-fs-xxs: 0.5rem;
        --pk3-fs-xs: 0.65rem;
        --pk3-fs-sm: 0.875rem;
        --pk3-fs-md: 1rem;
        --pk3-fs-lg: 1.125rem;
        --pk3-fs-xl: 1.25rem;
        --pk3-fs-xxl: 1.5rem;
        --pk3-fs-xxxl: 1.875rem;
        --pk3-fs-xxxl-0: 2rem;
        --pk3-fs-xxxl-1: 2.25rem;
        --pk3-fs-xxxl-2: 3rem;
        --pk3-fs-xxxl-3: 3.75rem;
        --pk3-fs-xxxl-4: 4.5rem;
        --pk3-fs-xxxl-5: 5.25rem;
        --pk3-fs-em-0-1: 0.1em;
        --pk3-fs-em-0-2: 0.2em;
        --pk3-fs-em-0-4: 0.4em;
        --pk3-fs-em-0-6: 0.6em;
        --pk3-fs-em-0-8: 0.8em;
        --pk3-fs-em-1: 1em;
        --pk3-fs-em-1-2: 1.2em;
        --pk3-fs-em-1-4: 1.4em;
        --pk3-fs-em-1-6: 1.6em;
        --pk3-fs-em-1-8: 1.8em;
        --pk3-fs-em-2: 2em;
        --pk3-fs-em-2-2: 2.2em;
        --pk3-fs-em-2-4: 2.4em;
        --pk3-fs-em-2-6: 2.6em;
        --pk3-fs-em-2-8: 2.8em;
        --pk3-fs-em-3: 3em;
        --pk3-fs-em-3-2: 3.2em;
        --pk3-fs-em-3-4: 3.4em;
        --pk3-fs-em-3-6: 3.6em;
        --pk3-fs-em-3-8: 3.8em;
        --pk3-fs-em-4: 4em;
        --pk3-fs-em-4-2: 4.2em;
        --pk3-fs-em-4-4: 4.4em;
        --pk3-fs-em-4-6: 4.6em;
        --pk3-fs-em-4-8: 4.8em;
        --pk3-fs-em-5: 5em;

        /* Font Weight Variables */
        --pk3-fw-thin: 100;
        --pk3-fw-extra_light: 200;
        --pk3-fw-light: 300;
        --pk3-fw-normal: 400;
        --pk3-fw-medium: 500;
        --pk3-fw-semibold: 600;
        --pk3-fw-bold: 700;
        --pk3-fw-extra_bold: 800;
        --pk3-fw-black: 900;
        
        /* Font Styles Variables */
        --pk3-f-style-italic: italic;

        /* Text Variables */
        --pk3-text-1: 0.5rem;
        --pk3-text-2: 0.75rem;

        /* Font Color Variables */
        /* Text Color Variables */
        --pk3-clr-fc-0: hsla(80, 61%, 50%, 0.993);
        --pk3-clr-fc-0f: hsla(0, 79%, 72%, 0.993);
        --pk3-clr-fc-1: hsla(240, 64%, 27%, 0.993);
        --pk3-clr-fc-2: hsla(198, 53%, 87%, 0.99);
        --pk3-clr-fc-4: hsl(0, 0%, 70%);
        --pk3-clr-fc-5: hsl(0, 38%, 38%);
        --pk3-clr-fc-6: hsl(32, 83%, 54%);
        --pk3-clr-fc-7: hsla(0, 0%, 0%, 0.9963);
        --pk3-clr-fc-8: hsla(240, 64%, 27%, 0.993);
        --pk3-clr-fc-9: hsla(80, 61%, 50%, 0.993);
        --pk3-clr-fc-10: hsla(0, 79%, 72%, 0.593); 

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

        --pk3-text-color-1: #000;
        --pk3-text-color-2: #fff;
        --pk3-text-color-3: #f4f4f4;
        --pk3-text-color-4: #333;


        /* Text Background Color Variables */
        --pk3-text-bckgrnd-color-1: #000;
        --pk3-text-bckgrnd-color-2: #fff;
        --pk3-text-bckgrnd-color-3: #f4f4f4;
        --pk3-text-bckgrnd-color-4: #333;

        /* Text Hover Color Variables */
        --pk3-text-hover-color-1: #000;
        --pk3-text-hover-color-2: #fff;
        --pk3-text-hover-color-3: #f4f4f4;
        --pk3-text-hover-color-4: #333;

        /* Text Hover Background Color Variables */
        --pk3-text-hover-bckgrnd-color-4: #333;

        /* Text Active Color Variables */
        --pk3-text-active-color-1: #000;
        --pk3-text-active-color-2: #fff;
        --pk3-text-active-color-3: #f4f4f4;
        --pk3-text-active-color-4: #333;

        /* Text Active Background Color Variables */
        --pk3-text-active-bckgrnd-color-1: #000;
        --pk3-text-active-bckgrnd-color-2: #fff;
        --pk3-text-active-bckgrnd-color-3: #f4f4f4;
        --pk3-text-active-bckgrnd-color-4: #333;

        /* Text Focus Color Variables */
        --pk3-text-focus-color-1: #000;
        --pk3-text-focus-color-2: #fff;
        --pk3-text-focus-color-3: #f4f4f4;
        --pk3-text-focus-color-4: #333;

        /* Text Focus Background Color Variables */
        --pk3-text-focus-bckgrnd-color-1: #000;
        --pk3-text-focus-bckgrnd-color-2: #fff;
        --pk3-text-focus-bckgrnd-color-3: #f4f4f4;
        --pk3-text-focus-bckgrnd-color-4: #333;

        /* Text Active Hover Color Variables */
        --pk3-text-active-hover-color-1: #000;
        --pk3-text-active-hover-color-2: #fff;
        --pk3-text-active-hover-color-3: #f4f4f4;
        --pk3-text-active-hover-color-4: #333;

        /* Text Active Hover Background Color Variables */
        --pk3-text-active-hover-bckgrnd-color-4: #333;

        /* Text Active Focus Color Variables */
        --pk3-text-active-focus-color-1: #000;
        --pk3-text-active-focus-color-2: #fff;
        --pk3-text-active-focus-color-3: #f4f4f4;
        --pk3-text-active-focus-color-4: #333;

        /* Text Active Focus Background Color Variables */
        --pk3-text-active-focus-bckgrnd-color-1: #000;
        --pk3-text-active-focus-bckgrnd-color-2: #fff;
        --pk3-text-active-focus-bckgrnd-color-3: #f4f4f4;
        --pk3-text-active-focus-bckgrnd-color-4: #333;

        /* Text Active Hover Focus Color Variables */
        --pk3-text-active-hover-focus-color-1: #000;
        --pk3-text-active-hover-focus-color-2: #fff;
        --pk3-text-active-hover-focus-color-3: #f4f4f4;
        --pk3-text-active-hover-focus-color-4: #333;

        /* Text Active Hover Focus Background Color Variables */
        --pk3-text-active-hover-focus-bckgrnd-color-4: #333;

        /* Line Height Variables */
        --pk3-lh-1: 1;
        --pk3-lh-2: 1.25;
        --pk3-lh-3: 1.5;
        --pk3-lh-4: 1.75;
        --pk3-lh-5: 2;

        /* Spacing Variables */
        --pk3-spacing-xxs: 0.25rem;
        --pk3-spacing-xxsa: 0.38rem;
        --pk3-spacing-xs: 0.5rem;
        --pk3-spacing-sm: 0.75rem;
        --pk3-spacing-md: 1rem;
        --pk3-spacing-lg: 1.5rem;
        --pk3-spacing-xl: 2rem;
        --pk3-spacing-xxl: 3rem;

        /* Text Shadow Variables */
        --pk3-text-shadow-sm: 0 2px 5px rgba(0, 0, 0, 0.5);
        --pk3-text-shadow-md: 0 4px 10px rgba(0, 0, 0, 0.5);
        --pk3-text-shadow-xmd: 0.2px 0.4px 3px hsla(0, 0%, 0%, 0.69);
        --pk3-text-shadow-xmda: 3.2px 3.8px 8px hsla(0, 0%, 0%, 0.69);
        --pk3-text-shadow-lg: 0 6px 15px rgba(0, 0, 0, 0.5);
        --pk3-text-shadow-xl: 0 8px 20px rgba(0, 0, 0, 0.5);
        --pk3-text-shadow-xxl: 0 10px 25px rgba(0, 0, 0, 0.5);
        --pk3-text-shadow-inset: 0 2px 5px rgba(0, 0, 0, 0.5) inset;
        --pk3-text-shadow-inset-md: 0 4px 10px rgba(0, 0, 0, 0.5) inset;
        --pk3-text-shadow-inset-lg: 0 6px 15px rgba(0, 0, 0, 0.5) inset;
        --pk3-text-shadow-inset-xl: 0 8px 20px rgba(0, 0, 0, 0.5) inset;
        --pk3-text-shadow-inset-xxl: 0 10px 25px rgba(0, 0, 0, 0.5) inset;
        --pk3-text-shadow-inset-xxxl: 0 12px 30px rgba(0, 0, 0, 0.5) inset;
        --pk3-text-shadow-inset-xxxxl: 0 14px 35px rgba(0, 0, 0, 0.5) inset;
        --pk3-text-shadow-inset-xxxxxl: 0 16px 40px rgba(0, 0, 0, 0.5) inset;

        /* Text Align Variables */
        --pk3-text-align-left: left;
        --pk3-text-align-right: right;
        --pk3-text-align-center: center;
        --pk3-text-align-justify: justify;

        /* Text Transform Variables */
        --pk3-text-transform-uppercase: uppercase;
        --pk3-text-transform-lowercase: lowercase;
        --pk3-text-transform-capitalize: capitalize;
        --pk3-text-transform-none: none;

        /* Text Decoration Variables */
        --pk3-text-decoration-none: none;
        --pk3-text-decoration-underline: underline;
        --pk3-text-decoration-overline: overline;
        --pk3-text-decoration-line-through: line-through;

        /* Text Overflow Variables */
        --pk3-text-overflow-clip: clip;
        --pk3-text-overflow-ellipsis: ellipsis;

        /* Text White Space Variables */
        --pk3-white-space-normal: normal;
        --pk3-white-space-nowrap: nowrap;
        --pk3-white-space-pre: pre;
        --pk3-white-space-pre-line: pre-line;
        --pk3-white-space-pre-wrap: pre-wrap;

        /* Text Break Variables */
        --pk3-word-break-normal: normal;
        --pk3-word-break-break-all: break-all;
        --pk3-word-break-keep-all: keep-all;
        --pk3-word-break-break-word: break-word;
        
        /* Margin Variables */
        --pk3-margin--pk3-3: -3rem;
        --pk3-margin--pk3-2: -2rem;
        --pk3-margin--pk3-1: -1rem;
        --pk3-margin-0: 1.2em 0em 1.2em 0.5em;
        --pk3-margin-auto: auto;
        --pk3-margin-xxsm: 0.19rem;
        --pk3-margin-xxs: 0.25rem;
        --pk3-margin-xxsx: 0.28rem;
        --pk3-margin-xs: 0.5rem;
        --pk3-margin-sm: 0.75rem;
        --pk3-margin-md: 1rem;
        --pk3-margin-lg: 1.5rem;
        --pk3-margin-xl: 2rem;
        --pk3-margin-xxl: 3rem;
        --pk3-margin-xxl-1: 4rem;
        --pk3-margin-xxl-2: 5rem;
        --pk3-margin-xxl-3: 6rem;
        --pk3-margin-xxl-4: 7rem;
        --pk3-margin-xxl-5: 8rem;
        --pk3-margin-xxl-6: 9rem;
        --pk3-margin-xxl-7: 10rem;

        /* Padding Variables */
        --pk3-padding-0: 0;
        --pk3-padding-xxs: 0.25rem;
        --pk3-padding-xxsa: 0.35rem;
        --pk3-padding-xxsa1: 0.40rem;
        --pk3-padding-xs: 0.5rem;
        --pk3-padding-sm: 0.75rem;
        --pk3-padding-md: 1rem;
        --pk3-padding-lg: 1.5rem;
        --pk3-padding-xl: 2rem;
        --pk3-padding-xxl: 3rem;

        /* Width Variables */
        --pk3-width-100a: 100%;
        --pk3-width-90: 90%;
        --pk3-width-75: 75%;
        --pk3-width-50: 50%;
        --pk3-width-35: 35%;
        --pk3-width-25: 25%;
        --pk3-width-20: 20%;
        --pk3-width-19: 19%;
        --pk3-width-18: 18%;
        --pk3-width-17: 17%;
        --pk3-width-16: 16%;
        --pk3-width-15: 15%;
        --pk3-width-14: 14%;
        --pk3-width-13: 13%;
        --pk3-width-12: 12%;
        --pk3-width-11: 11%;
        --pk3-width-10: 10%;
        --pk3-width-9: 9%;
        --pk3-width-8: 8%;
        --pk3-width-7: 7%;
        --pk3-width-6: 6%;
        --pk3-width-5: 5%;
        --pk3-width-auto: auto;
        --pk3-width-px: 1px;
        --pk3-width-xxs: 0.125rem;
        --pk3-width-xs: 0.25rem;
        --pk3-width-sm: 0.5rem;
        --pk3-width-md: 1rem;
        --pk3-width-lg: 2rem;
        --pk3-width-xl: 3rem;
        --pk3-width-xxl: 4rem;
        --pk3-width-xxxl: 5rem;
        --pk3-width-xxxl-1: 6rem;
        --pk3-width-xxxl-2: 7rem;
        --pk3-width-xxxl-3: 8rem;
        --pk3-width-xxxl-4: 9rem;
        --pk3-width-xxxl-4a: 9.3rem;
        --pk3-width-xxxl-5: 10rem;
        --pk3-width-xxxl-5a: 11rem;
        --pk3-width-xxxl-6: 12rem;
        --pk3-width-xxxl-7: 14rem;
        --pk3-width-xxxl-8: 16rem;
        --pk3-width-xxxl-9: 18rem;
        --pk3-width-xxxl-10: 20rem;
        --pk3-width-80: 80px;
        --pk3-width-85: 85px;
        --pk3-width-90: 90px;
        --pk3-width-95: 95px;
        --pk3-width-100: 100px;
        --pk3-width-110: 110px;
        --pk3-width-120: 120px;
        --pk3-width-130: 130px;
        --pk3-width-140: 140px;
        --pk3-width-150: 150px;
        --pk3-width-160: 160px;
        --pk3-width-180: 180px;
        --pk3-width-200: 200px;
        --pk3-width-240: 240px;
        --pk3-width-280: 280px;
        --pk3-width-300: 300px;
        --pk3-width-350: 350px;
        --pk3-width-375: 375px;
        --pk3-width-400: 400px;
        --pk3-width-450: 450px;
        --pk3-width-475: 475px;
        --pk3-width-500: 500px;
        --pk3-width-550: 550px;
        --pk3-width-600: 600px;
        --pk3-width-680: 680px;
        --pk3-width-780: 780px;
        --pk3-width-840: 840px;
        --pk3-width-880: 880px;
        --pk3-width-950: 950px;
        --pk3-width-1050: 1050px;
        --pk3-width-1080: 1080px;
        --pk3-width-1100: 1100px;
        --pk3-width-1200: 1200px;
        --pk3-width-1250: 1250px;
        --pk3-width-1300: 1300px;
        --pk3-width-1400: 1400px;
        --pk3-width-1500: 1500px;
        --pk3-width-1535: 1535px;
        --pk3-width-1550: 1550px;
        --pk3-width-1600: 1600px;
        --pk3-width-1700: 1700px;
        --pk3-width-1750: 1750px;
        --pk3-width-1800: 1800px;
        --pk3-width-1900: 1900px;
        --pk3-width-1950: 1950px;
        --pk3-width-minimum: 320px;
        --pk3-width-em-75: 75em;
        
        /* Height Variables */
        --pk3-height-100: 100%;
        --pk3-height-75: 75%;
        --pk3-height-50: 50%;
        --pk3-height-25: 25%;
        --pk3-height-15: 15%;
        --pk3-height-10: 10%;
        --pk3-height-auto: auto;
        --pk3-height-px: 1px;
        --pk3-height-xxs: 0.125rem;
        --pk3-height-xs: 0.25rem;
        --pk3-height-sm: 0.5rem;
        --pk3-height-md: 1rem;
        --pk3-height-lg: 2rem;
        --pk3-height-xl: 3rem;
        --pk3-height-xxl: 4rem;
        --pk3-height-xxxl: 5rem;
        --pk3-height-xxxl-1: 6rem;
        --pk3-height-xxxl-2: 7rem;
        --pk3-height-xxxl-3: 8rem;
        --pk3-height-xxxl-4: 9rem;
        --pk3-height-xxxl-5: 10rem;
        
        /* Position Variables */
        --pk3-position-static: static;
        --pk3-position-relative: relative;
        --pk3-position-absolute: absolute;
        --pk3-position-fixed: fixed;
        --pk3-position-sticky: sticky;

        /* Top Variables */
        --pk3-top-auto: auto;
        --pk3-top-0: 0;
        --pk3-top-100: 100%;
        --pk3-top-98: 98%;
        --pk3-top-95: 95%;
        --pk3-top-90: 90%;
        --pk3-top-85: 85%;
        --pk3-top-75: 75%;
        --pk3-top-50: 50%;
        --pk3-top-35: 35%;
        --pk3-top-33: 33%;
        --pk3-top-31-5: 31.5%;
        --pk3-top-25: 25%;
        --pk3-top-20: 20%;
        --pk3-top-15: 15%;
        --pk3-top-10: 10%;
        --pk3-top-5: 5%;
        --pk3-top-0: 0;
        --pk3-top-xxs: 0.125rem;
        --pk3-top-xs: 0.25rem;
        --pk3-top-sm: 0.5rem;
        --pk3-top-sma: 0.75rem;
        --pk3-top-md: 1rem;
        --pk3-top-mdlg: 1.15rem;
        --pk3-top-lg: 2rem;
        --pk3-top-xlg: 2.25rem;
        --pk3-top-xl: 3rem;
        --pk3-top-xxl: 4rem;
        --pk3-top-xxxl: 5rem;
        --pk3-top-xxxl-1: 6rem;
        --pk3-top-xxxl-2: 7rem;
        --pk3-top-xxxl-3: 8rem;
        --pk3-top-xxxl-4: 9rem;
        --pk3-top-xxxl-5: 10rem;
        --pk3-top-xxxl-6: 11rem;
        --pk3-top-xxxl-7: 12rem;
        --pk3-top-xxxl-8: 13rem;
        --pk3-top-xxxl-9: 14rem;
        --pk3-top-xxxl-10: 15rem;
        --pk3-top-xxxl-11: 16rem;
        --pk3-top-xxxl-12: 17rem;
        --pk3-top-xxxl-13: 18rem;
        --pk3-top-xxxl-14: 19rem;
        --pk3-top-xxxl-15: 20rem;
        --pk3-top-xxxl-16: 21rem;
        --pk3-top-xxxl-17: 22rem;
        --pk3-top-xxxl-18: 23rem;
        --pk3-top-xxxl-19: 24rem;
        --pk3-top-xxxl-20: 25rem;
        --pk3-top-xxxl-21: 26rem;
        --pk3-top-xxxl-22: 27rem;
        --pk3-top-xxxl-23: 28rem;
        --pk3-top-xxxl-24: 29rem;
        --pk3-top-xxxl-25: 30rem;
        --pk3-top-xxxl-25a: 30rem;
        --pk3-top-xxxl-25az: 32rem;
        --pk3-top-xxxl-25b: 35rem;
        --pk3-top-xxxl-25c: 37rem;
        --pk3-top-xxxl-26: 40rem;
        --pk3-top-xxxl-26a: 45rem;
        --pk3-top-xxxl-26b: 48rem;
        --pk3-top-xxxl-27: 50rem;

        /* Right Variables */
        --pk3-right-auto: auto;
        --pk3-right-0: 0;
        --pk3-right-100: 100%;
        --pk3-right-75: 75%;
        --pk3-right-50: 50%;
        --pk3-right-25: 25%;
        --pk3-right-35: 35%;
        --pk3-right-15: 15%;
        --pk3-right-10: 10%;
        --pk3-right-5: 5%;
        --pk3-right-xxs: 0.125rem;
        --pk3-right-xs: 0.25rem;
        --pk3-right-sm: 0.5rem;
        --pk3-right-md: 1rem;
        --pk3-right-lg: 2rem;
        --pk3-right-xl: 3rem;
        --pk3-right-xxl: 4rem;
        --pk3-right-xxxl: 5rem;
        --pk3-right-xxxl-1: 6rem;
        --pk3-right-xxxl-2: 7rem;

        /* bottom Variables */
        --pk3-bottom-5pc: 5%;
        --pk3-bottom-10pc: 10%;
        --pk3-bottom-15pc: 15%;
        --pk3-bottom-20pc: 20%;
        --pk3-bottom-25pc: 25%;
        --pk3-bottom-30pc: 30%;
        --pk3-bottom-35pc: 35%;
        --pk3-bottom-40pc: 40%;
        --pk3-bottom-45pc: 45%;
        --pk3-bottom-50pc: 50%;
        --pk3-bottom-55pc: 55%;
        --pk3-bottom-60pc: 60%;
        --pk3-bottom-65pc: 65%;
        --pk3-bottom-70pc: 70%;
        --pk3-bottom-75pc: 75%;
        --pk3-bottom-80pc: 80%;
        --pk3-bottom-85pc: 85%;
        --pk3-bottom-90pc: 90%;
        --pk3-bottom-95pc: 95%;
        --pk3-bottom-100pc: 100%;
        --pk3-bottom-0: 0rem;
        --pk3-bottom-xxs: 0.125rem;
        --pk3-bottom-xs: 0.25rem;
        --pk3-bottom-sm: 0.5rem;
        --pk3-bottom-md: 1rem;
        --pk3-bottom-lg: 2rem;
        --pk3-bottom-xl: 3rem;
        --pk3-bottom-xxl: 4rem;
        --pk3-bottom-xxxl: 5rem;
        --pk3-bottom-xxxl-1: 6rem;
        --pk3-bottom-xxxl-2: 7rem;

        /* Left Variables */
        --pk3-left-auto: auto;
        --pk3-left-0: 0;
        --pk3-left-100: 100%;
        --pk3-left-75: 75%;
        --pk3-left-50: 50%;
        --pk3-left-40: 40%;
        --pk3-left-35: 35%;
        --pk3-left-30: 30%;
        --pk3-left-25: 25%;
        --pk3-left-24: 24%;
        --pk3-left-23: 23%;
        --pk3-left-22: 22%;
        --pk3-left-20: 20%;
        --pk3-left-19: 19%;
        --pk3-left-18: 18%;
        --pk3-left-17: 17%;
        --pk3-left-16: 16%;
        --pk3-left-15: 15%;
        --pk3-left-10: 10%;
        --pk3-left-xxs: 0.125rem;
        --pk3-left-xs: 0.25rem;
        --pk3-left-sm: 0.5rem;
        --pk3-left-sma: 0.75rem;
        --pk3-left-md: 1rem;
        --pk3-left-mda: 1.45rem;
        --pk3-left-lg: 2rem;
        --pk3-left-mdlg: 2.65rem;
        --pk3-left-xl: 3rem;
        --pk3-left-xxl: 4rem;
        --pk3-left-xxxl: 5rem;
        --pk3-left-xxxl-1: 6rem;
        --pk3-left-xxxl-2: 7rem;
        --pk3-left-xxxl-3: 8rem;
        --pk3-left-xxxl-4: 9rem;
        --pk3-left-xxxl-5: 10rem;
        --pk3-left-xxxl-6: 11rem;
        --pk3-left-xxxl-7: 12rem;
        --pk3-left-xxxl-8: 13rem;
        --pk3-left-xxxl-9: 14rem;
        --pk3-left-xxxl-10: 15rem;
        --pk3-left-xxxl-11: 16rem;
        --pk3-left-xxxl-12: 17rem;
        --pk3-left-xxxl-13: 18rem;
        --pk3-left-xxxl-14: 19rem;
        --pk3-left-xxxl-15: 20rem;
        --pk3-left-xxxl-16: 21rem;
        --pk3-left-xxxl-17: 22rem;
        --pk3-left-xxxl-18: 23rem;
        --pk3-left-xxxl-19: 24rem;
        --pk3-left-xxxl-20: 25rem;
        --pk3-left-xxxl-21: 26rem;
        --pk3-left-xxxl-22: 27rem;
        --pk3-left-xxxl-23: 28rem;
        --pk3-left-xxxl-24: 29rem;
        --pk3-left-xxxl-25: 30rem;
        --pk3-left-xxxl-25a: 31rem;
        --pk3-left-xxxl-25b: 32rem;
        --pk3-left-xxxl-25c: 35rem;
        --pk3-left-xxxl-25d: 38rem;
        --pk3-left-xxxl-26: 40rem;
        --pk3-left-xxxl-26a: 43rem;
        --pk3-left-xxxl-27: 50rem;
        --pk3-left-xxxl-27a: 55rem;
        --pk3-left-xxxl-27b: 57.5rem;
        --pk3-left-xxxl-28: 60rem;
        --pk3-left-xxxl-28a: 62rem;
        --pk3-left-xxxl-28b: 64rem;
        --pk3-left-xxxl-28c: 66rem;
        --pk3-left-xxxl-29: 70rem;
        --pk3-left-xxxl-30: 80rem;
        --pk3-left-xxxl-31: 90rem;
        --pk3-left-xxxl-32: 100rem;

        /* Overflow Variables */
        --pk3-overflow-visible: visible;
        --pk3-overflow-hidden: hidden;
        --pk3-overflow-scroll: scroll;
        --pk3-overflow-auto: auto;
        --pk3-overflow-y-scroll: scroll;

        /* Scroll Behaviour Variables */
        --pk3-scroll-behaviour-auto: auto;
        --pk3-scroll-behaviour-smooth: smooth;
        
        /* Display Variables */
        --pk3-display-none: none;
        --pk3-display-inline: inline;
        --pk3-display-inline-block: inline-block;
        --pk3-display-block: block;
        --pk3-display-table: table;
        --pk3-display-table-cell: table-cell;
        --pk3-display-flex: flex;
        --pk3-display-inline-flex: inline-flex;
        --pk3-display-grid: grid;

        /* Flex Direction Variables */
        --pk3-flex-direction-row: row;
        --pk3-flex-direction-row-reverse: row-reverse;
        --pk3-flex-direction-column: column;
        --pk3-flex-direction-column-reverse: column-reverse;

        /* Flex Wrap Variables */
        --pk3-flex-wrap-wc: wrap;
        --pk3-flex-nowrap-wc: nowrap;
        --pk3-flex-wrap-reverse-wc: wrap-reverse;

        /* Visibility Variables */
        --pk3-visibility-visible: visible;
        --pk3-visibility-hidden: hidden;
        --pk3-visibility-collapse: collapse;

        /* Opacity Variables */
        --pk3-opacity-0: 0;
        --pk3-opacity-05: 0.05;
        --pk3-opacity-08: 0.08;
        --pk3-opacity-10: 0.10;
        --pk3-opacity-15: 0.15;
        --pk3-opacity-25: 0.25;
        --pk3-opacity-35: 0.35;
        --pk3-opacity-40: 0.40;
        --pk3-opacity-45: 0.45;
        --pk3-opacity-50: 0.50;
        --pk3-opacity-60: 0.60;
        --pk3-opacity-65: 0.65;
        --pk3-opacity-75: 0.75;
        --pk3-opacity-100: 1;
        
        /* Border Variables */
        --pk3-border-thin: 1px solid hsla(0, 0%, 0%, 0.993);
        --pk3-border-thick: 2px solid hsla(0, 0%, 0%, 0.993);
        --pk3-border-xthick: 3px solid hsla(188, 98%, 34%, 0.993);
        --pk3-border-xxthick: 4px solid hsla(0, 0%, 0%, 0.993);
        --pk3-border-xxxthick: 10px solid hsla(188, 98%, 34%, 0.993);
        --pk3-border-feather: 10px solid hsla(188, 98%, 34%, 0.993);

        /* Border Radius Variables */
        --pk3-radius-0: 0rem;
        --pk3-radius-xxs: 0.125rem;
        --pk3-radius-sm: 0.25rem;
        --pk3-radius-smmd: 0.35rem;
        --pk3-radius-md: 0.5rem;
        --pk3-radius-lg: 1rem;
        --pk3-radius-xl: 2rem;
        --pk3-radius-xxl: 3rem;
        --pk3-radius-em-35: 0.35em;

        /* Box Shadow Variables */
        --pk3-shadow-sm: 0 5px 15px rgba(0, 0, 0, 0.1);
        --pk3-shadow-md: 0 8px 30px rgba(0, 0, 0, 0.1);
        --pk3-shadow-xmd: 7px 5px 9px hsla(0, 0%, 0%, 0.69);
        --pk3-shadow-lg: 0 12px 35px rgba(0, 0, 0, 0.15);
        --pk3-shadow-xl: 0 16px 50px rgba(0, 0, 0, 0.15);
        --pk3-shadow-xxl: 0 24px 60px rgba(0, 0, 0, 0.2);
        --pk3-shadow-inset: inset 0 2px 4px 0 hsla(0, 0%, 0%, 0.69);
        --pk3-shadow-inset-md: inset 0 4px 8px 0 hsla(0, 0%, 0%, 0.69);
        --pk3-shadow-inset-lg: inset 0 6px 12px 0 hsla(0, 0%, 0%, 0.69);
        --pk3-shadow-inset-xl: inset 0 8px 16px 0 hsla(0, 0%, 0%, 0.69);
        --pk3-shadow-inset-xxl: inset 0 12px 24px 0 hsla(0, 0%, 0%, 0.69);
        --pk3-shadow-inset-xxl-1: inset 0 16px 32px 0 hsla(0, 0%, 0%, 0.69);
        --pk3-shadow-inset-xxl-1a: inset 0 9px 33px 25px hsla(0, 0%, 0%, 0.19);
        --pk3-shadow-inset-xxl-2: inset 0 24px 48px 0 hsla(0, 0%, 0%, 0.69);
        --pk3-shadow-inset-xxl-3: inset 0 32px 64px 0 hsla(0, 0%, 0%, 0.69);
        
        /* Filter Variables */
        --pk3-filter-shadow-sm: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.5));
        --pk3-filter-shadow-md: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.5));
        --pk3-filter-shadow-xmd: drop-shadow(0 0 1rem hsla(0, 0%, 0%, 0.69));
        --pk3-filter-shadow-xmda: drop-shadow(0.7rem 0.7rem 1.7rem hsla(0, 0%, 0%, 0.763));
        --pk3-filter-shadow-xmdaz: drop-shadow(2rem 2rem 4.9rem hsla(0, 0%, 0%, 0.963));
        --pk3-filter-shadow-lg: drop-shadow(0 0 2rem rgba(0, 0, 0, 0.5));
        --pk3-filter-shadow-xl: drop-shadow(0 0 3rem rgba(0, 0, 0, 0.5));
        --pk3-filter-shadow-xxl: drop-shadow(0 0 4rem rgba(0, 0, 0, 0.5));
        --pk3-filter-shadow-inset: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.5)) inset;
        --pk3-filter-shadow-inset-md: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.5)) inset;
        --pk3-filter-shadow-inset-lg: drop-shadow(0 0 2rem rgba(0, 0, 0, 0.5)) inset;
        --pk3-filter-shadow-inset-xl: drop-shadow(0 0 3rem rgba(0, 0, 0, 0.5)) inset;
        --pk3-filter-shadow-inset-xxl: drop-shadow(0 0 4rem rgba(0, 0, 0, 0.5)) inset;
        --pk3-filter-shadow-inset-xxxl: drop-shadow(0 0 5rem rgba(0, 0, 0, 0.5)) inset;
        --pk3-filter-shadow-inset-xxxxl: drop-shadow(0 0 6rem rgba(0, 0, 0, 0.5)) inset;
        --pk3-filter-shadow-inset-xxxxxl: drop-shadow(0 0 7rem rgba(0, 0, 0, 0.5)) inset;

        /* Transition Variables */
        --pk3-transition-fast: all 0.1s ease-in-out;
        --pk3-transition-moderate: all 0.3s ease-in-out;
        --pk3-transition-xmoderate: all 0.5s ease-in-out;
        --pk3-transition-slow: all 0.7s ease-in-out;

        /* Rotate */
        --pk3-rotate-0: 0;
        --pk3-rotate-1: 1deg;
        --pk3-rotate-2: 2deg;
        --pk3-rotate-3: 3deg;
        --pk3-rotate-5: 5deg;
        --pk3-rotate-6: 6deg;
        --pk3-rotate-7: 7deg;
        --pk3-rotate-8: 8deg;
        --pk3-rotate-9: 9deg;
        --pk3-rotate-10: 10deg;
        --pk3-rotate-15: 15deg;
        --pk3-rotate-45: 45deg;
        --pk3-rotate-90: 90deg;
        --pk3-rotate-180: 180deg;
        --pk3-rotate-270: 270deg;
        --pk3-rotate-359: 359deg;
        --pk3-rotate-358: 358deg;
        --pk3-rotate-355: 355deg;
        --pk3-rotate-350: 350deg;
        --pk3-rotate-345: 345deg;
        --pk3-rotate-335: 335deg;
        --pk3-rotate-330: 330deg;
        --pk3-rotate-325: 325deg;
        --pk3-rotate-320: 320deg;
        --pk3-rotate-315: 315deg;
        --pk3-rotate-310: 310deg;
        --pk3-rotate-305: 305deg;
        --pk3-rotate-300: 300deg;
        --pk3-rotate-295: 295deg;
        --pk3-rotate-290: 290deg;


        /* Grid Type Variables */
        --pk3-grid-template-areas:
            ". image image ."
            "header1 header1 header1 header1"
            "header2 header2 header2 header2"
            "numbers numbers numbers fireball";




        /* Grid Gap Variables */
        --pk3-grid-gap: 1rem;
        --pk3-grid-gap-sm: 0.5rem;
        --pk3-grid-gap-lg: 1.5rem;
        --pk3-grid-gap-xl: 2rem;
        --pk3-grid-gap-xxl: 3rem;
        --pk3-grid-gap-xxxl: 4rem;
        --pk3-grid-gap-xxxxl: 5rem;
        --pk3-grid-gap-xxxxxl: 6rem;
        --pk3-grid-gap-xxxxxl-2: 7rem;
        --pk3-grid-gap-xxxxxl-3: 8rem;
        --pk3-grid-gap-xxxxxl-4: 9rem;
        --pk3-grid-gap-xxxxxl-5: 10rem;
        --pk3-grid-gap-xxxxxl-6: 11rem;
        --pk3-grid-gap-xxxxxl-7: 12rem;

        /* Grid Template Variables */
        --pk3-grid-template-1: repeat(1, 1fr);
        --pk3-grid-template-2: repeat(2, 1fr);
        --pk3-grid-template-3: repeat(3, 1fr);
        --pk3-grid-template-4: repeat(4, 1fr);
        --pk3-grid-template-5: repeat(5, 1fr);
        --pk3-grid-template-6: repeat(6, 1fr);
        --pk3-grid-template-7: repeat(7, 1fr);
        --pk3-grid-template-8: repeat(8, 1fr);
        --pk3-grid-template-9: repeat(9, 1fr);
        --pk3-grid-template-10: repeat(10, 1fr);
        --pk3-grid-template-11: repeat(11, 1fr);
        --pk3-grid-template-12: repeat(12, 1fr);
        --pk3-grid-template-13: repeat(13, 1fr);
        --pk3-grid-template-14: repeat(14, 1fr);
        --pk3-grid-template-15: repeat(15, 1fr);
        --pk3-grid-template-16: repeat(16, 1fr);
        --pk3-grid-template-17: repeat(17, 1fr);

        /* Grid Template Columns Variables */
        --pk3-grid-template-columns-1: repeat(1, 1fr);
        --pk3-grid-template-columns-13: 100px 100px 100px 100px;

        /* Grid Template Rows Variables */
        --pk3-grid-template-rows-1: auto;
        --pk3-grid-template-rows-2: repeat(2, 1fr);


        /* Justify Content Variables */
        --pk3-justify-content-start: start;
        --pk3-justify-content-end: end;
        --pk3-justify-content-center: center;
        --pk3-justify-content-space-between: space-between;
        --pk3-justify-content-space-around: space-around;
        --pk3-justify-content-space-evenly: space-evenly;

        /* Flex Align Items Variables */
        --pk3-align-items-flex-start: flex-start;
        --pk3-align-items-flex-end: flex-end;
        --pk3-align-items-center: center;
        --pk3-align-items-baseline: baseline;
        --pk3-align-items-stretch: stretch;

        /* Flex Align Content Variables */
        --pk3-align-content-flex-start: flex-start;
        --pk3-align-content-flex-end: flex-end;
        --pk3-align-content-center: center;
        --pk3-align-content-space-between: space-between;
        --pk3-align-content-space-around: space-around;
        --pk3-align-content-stretch: stretch;

        /* Flex Align Self Variables */
        --pk3-align-self-auto: auto;
        --pk3-align-self-flex-start: flex-start;
        --pk3-align-self-flex-end: flex-end;
        --pk3-align-self-center: center;
        --pk3-align-self-baseline: baseline;
        --pk3-align-self-stretch: stretch;

        /* Flex Order Variables */
        --pk3-order-1: 1;
        --pk3-order-2: 2;
        --pk3-order-3: 3;
        --pk3-order-4: 4;
        --pk3-order-5: 5;
        --pk3-order-6: 6;
        --pk3-order-7: 7;
        --pk3-order-8: 8;
        --pk3-order-9: 9;
        --pk3-order-10: 10;
        --pk3-order-11: 11;
        --pk3-order-12: 12;
        --pk3-order-13: 13;
        --pk3-order-14: 14;
        --pk3-order-15: 15;
        --pk3-order-16: 16;
        --pk3-order-17: 17;
        --pk3-order-18: 18;
        --pk3-order-19: 19;
        --pk3-order-20: 20;
        --pk3-order-21: 21;

        /* Z-Index Variables */
        --pk3-z-index-1: 100;
        --pk3-z-index-2: 200;
        --pk3-z-index-3: 300;
        --pk3-z-index-4: 400;
        --pk3-z-index-5: 500;
        --pk3-z-index-6: 600;
        --pk3-z-index-7: 700;
        --pk3-z-index-8: 800;
        --pk3-z-index-9: 900;
        --pk3-z-index-10: 1000;
        --pk3-z-index-11: 1100;
        --pk3-z-index-12: 1200;
        --pk3-z-index-13: 1300;
        --pk3-z-index-14: 1400;
        --pk3-z-index-15: 1500;
        --pk3-z-index-16: 1600;
        --pk3-z-index-17: 1700;
        --pk3-z-index-18: 1800;
        --pk3-z-index-19: 1900;
        --pk3-z-index-20: 2000;

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

pick3Game_sharedStyles.shell = /*css*/ `



`;

pick3Game_sharedStyles.container = /*css*/ `

    .main-body {
        margin: 0em;
        padding: 0;
        background-image: var(--pk3-gradient-dark-0); 
        background-repeat: var(--pk3-repeat-2);
        background-size: var(--pk3-size-1);
        overflow: var(--pk3-overflow-hidden);
        width: var(--pk3-width-100a);
    }


`;

pick3Game_sharedStyles.game = /*css*/ `



`;

pick3Game_sharedStyles.results = /*css*/ `



`;

export { pick3Game_sharedStyles };
