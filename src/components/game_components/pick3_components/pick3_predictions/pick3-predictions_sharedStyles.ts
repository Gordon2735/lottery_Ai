'use strict';

import { Ipick3PredictionsSharedStyles } from './Ipick3-predictions.js';

const pick3_predictions_sharedStyles: Ipick3PredictionsSharedStyles = {
    root: ``,
    container: ``,
    predictions: ``,
    results: ``
};

pick3_predictions_sharedStyles.root = /*css*/ `

    :root {
        --pk3-predictions-shadow-inset-xxl-1a
        /* CSS Variables */
        
        /* Background Color Variables */
        --pk3-predictions-bg-color-light: #f4f4f4;
        --pk3-predictions-bg-color-dark: #333;
        --pk3-predictions-bg-color-4t: rgba(95, 158, 160, 0.393);

        /* Variables for Backgrounds and Gradients/Images */
        --pk3-predictions-gradient-dark-A: linear-gradient(178.25deg, hsla(0, 0%, 20%, 0.993), 53%, hsla(41, 92%, 53%, 0.393));
        --pk3-predictions-gradient-dark-B: linear-gradient(178.35deg, hsla(41, 92%, 53%, 0.993), 94.5%, hsla(187, 52%, 80%, 0.593));
        --pk3-predictions-gradient-dark-1a: linear-gradient(178.35deg, hsla(188, 98%, 34%, 0.993), 64.5%, hsla(187, 52%, 80%, 0.593));
        --pk3-predictions-gradient-dark-2: linear-gradient(178.25deg, hsla(0, 0%, 20%, 0.993), 87%, hsla(188, 35%, 58%, 0.993));

        /* Font Size Variables */
        --pk3-predictions-fs-xxs: 0.5rem;
        --pk3-predictions-fs-xs: 0.65rem;
        --pk3-predictions-fs-sm: 0.875rem;
        --pk3-predictions-fs-md: 1rem;
        --pk3-predictions-fs-lg: 1.125rem;
        --pk3-predictions-fs-xl: 1.25rem;
        --pk3-predictions-fs-xxl: 1.5rem;
        --pk3-predictions-fs-xxlz: 1.82rem;
        --pk3-predictions-fs-xxxl: 1.875rem;
        --pk3-predictions-fs-xxxl-0: 2rem;
        --pk3-predictions-fs-xxxl-1: 2.25rem;
        --pk3-predictions-fs-xxxl-2: 3rem;
        --pk3-predictions-fs-xxxl-3: 3.75rem;
        --pk3-predictions-fs-xxxl-4: 4.5rem;
        --pk3-predictions-fs-xxxl-5: 5.25rem;
        --pk3-predictions-fs-em-0-1: 0.1em;
        --pk3-predictions-fs-em-0-2: 0.2em;
        --pk3-predictions-fs-em-0-4: 0.4em;
        --pk3-predictions-fs-em-0-6: 0.6em;
        --pk3-predictions-fs-em-0-8: 0.8em;
        --pk3-predictions-fs-em-1: 1em;
        --pk3-predictions-fs-em-1-2: 1.2em;
        --pk3-predictions-fs-em-1-4: 1.4em;
        --pk3-predictions-fs-em-1-6: 1.6em;
        --pk3-predictions-fs-em-1-8: 1.8em;
        --pk3-predictions-fs-em-2: 2em;
        --pk3-predictions-fs-em-2-2: 2.2em;
        --pk3-predictions-fs-em-2-4: 2.4em;
        --pk3-predictions-fs-em-2-6: 2.6em;
        --pk3-predictions-fs-em-2-8: 2.8em;
        --pk3-predictions-fs-em-3: 3em;
        --pk3-predictions-fs-em-3-2: 3.2em;
        --pk3-predictions-fs-em-3-4: 3.4em;
        --pk3-predictions-fs-em-3-6: 3.6em;
        --pk3-predictions-fs-em-3-8: 3.8em;
        --pk3-predictions-fs-em-4: 4em;
        --pk3-predictions-fs-em-4-2: 4.2em;
        --pk3-predictions-fs-em-4-4: 4.4em;
        --pk3-predictions-fs-em-4-6: 4.6em;
        --pk3-predictions-fs-em-4-8: 4.8em;
        --pk3-predictions-fs-em-5: 5em;

        /* Font Weight Variables */
        --pk3-predictions-fw-thin: 100;
        --pk3-predictions-fw-extra_light: 200;
        --pk3-predictions-fw-light: 300;
        --pk3-predictions-fw-normal: 400;
        --pk3-predictions-fw-medium: 500;
        --pk3-predictions-fw-semibold: 600;
        --pk3-predictions-fw-bold: 700;
        --pk3-predictions-fw-extra_bold: 800;
        --pk3-predictions-fw-black: 900;
        
        /* Font Styles Variables */
        --pk3-predictions-f-style-italic: italic;
        --pk3-predictions-f-style-normal: normal;
        --pk3-predictions-f-style-oblique: oblique;

        /* Text Align Variables */
        --pk3-predictions-text-align-left: left;
        --pk3-predictions-text-align-right: right;
        --pk3-predictions-text-align-center: center;
        --pk3-predictions-text-align-justify: justify;
        
        /* Text Transform Variables */
        --pk3-predictions-text-transform-uppercase: uppercase;
        --pk3-predictions-text-transform-lowercase: lowercase;
        --pk3-predictions-text-transform-capitalize: capitalize;
        --pk3-predictions-text-transform-none: none;
        
        /* Text Decoration Variables */
        --pk3-predictions-text-decoration-none: none;
        --pk3-predictions-text-decoration-underline: underline;
        --pk3-predictions-text-decoration-overline: overline;
        --pk3-predictions-text-decoration-line-through: line-through;
        
        /* Text Overflow Variables */
        --pk3-predictions-text-overflow-clip: clip;
        --pk3-predictions-text-overflow-ellipsis: ellipsis;
        
        /* Text White Space Variables */
        --pk3-predictions-white-space-normal: normal;
        --pk3-predictions-white-space-nowrap: nowrap;
        --pk3-predictions-white-space-pre: pre;
        --pk3-predictions-white-space-pre-line: pre-line;
        --pk3-predictions-white-space-pre-wrap: pre-wrap;
        
        /* Text Break Variables */
        --pk3-predictions-word-break-normal: normal;
        --pk3-predictions-word-break-break-all: break-all;
        --pk3-predictions-word-break-keep-all: keep-all;
        --pk3-predictions-word-break-break-word: break-word;

        /* Text Justify Variables */
        --pk3-predictions-text-justify-all: distribute-all-lines;
        
        /* -ms Text Justify Variables // -ms-text-justify */
        /* Works with text-align is set to justify */
        --pk3-predictions-ms-text-justify-all: distribute;
        
        /* Line Height Variables */
        --pk3-predictions-lh-1: 1;
        --pk3-predictions-lh-2: 1.25;
        --pk3-predictions-lh-3: 1.5;
        --pk3-predictions-lh-4: 1.75;
        --pk3-predictions-lh-5: 2;

        /* Spacing Variables */
        --pk3-predictions-spacing-xxs: 0.25rem;
        --pk3-predictions-spacing-xxsa: 0.38rem;
        --pk3-predictions-spacing-xs: 0.5rem;
        --pk3-predictions-spacing-sm: 0.75rem;
        --pk3-predictions-spacing-md: 1rem;
        --pk3-predictions-spacing-lg: 1.5rem;
        --pk3-predictions-spacing-xl: 2rem;
        --pk3-predictions-spacing-xxl: 3rem;
        
        /* Font Color Variables */
        /* Text Color Variables */
        --pk3-predictions-clr-fc-0: hsla(80, 61%, 50%, 0.993);
        --pk3-predictions-clr-fc-0f: hsla(0, 79%, 72%, 0.993);
        --pk3-predictions-clr-fc-1: hsla(240, 64%, 27%, 0.993);
        --pk3-predictions-clr-fc-2: hsla(198, 53%, 87%, 0.99);
        --pk3-predictions-clr-fc-4: hsl(0, 0%, 70%);
        --pk3-predictions-clr-fc-5: hsl(0, 38%, 38%);
        --pk3-predictions-clr-fc-6: hsl(32, 83%, 54%);
        --pk3-predictions-clr-fc-6a: hsla(32, 100%, 68%, 0.993);
        --pk3-predictions-clr-fc-7: hsla(0, 0%, 0%, 0.9963);
        --pk3-predictions-clr-fc-8: hsla(240, 64%, 27%, 0.993);
        --pk3-predictions-clr-fc-9: hsla(80, 61%, 50%, 0.993);
        --pk3-predictions-clr-fc-10: hsla(0, 79%, 72%, 0.593); 
        --pk3-predictions-clr-fc-pick3-11: hsla(108, 60%, 53%, 0.993);
        --pk3-predictions-clr-fc-pick3-12: hsla(187, 52%, 80%, 0.993);
        --pk3-predictions-clr-fc-pick3-13: hsla(108, 88%, 84%, 0.993);
        --pk3-predictions-clr-fc-pick3-14: hsla(234, 68%, 37%, 0.993);
        --pk3-predictions-clr-fc-pick3-15: hsla(34, 78%, 91%, 0.993);
        --pk3-predictions-clr-fc-pick3-16: hsla(41, 92%, 53%, 0.993);
        --pk3-predictions-clr-fc-pick3-17: hsla(108, 72%, 82%, 0.993);

        /* Text Shadow Variables */
        --pk3-predictions-text-shadow-sm: 0 2px 5px rgba(0, 0, 0, 0.5);
        --pk3-predictions-text-shadow-md: 0 4px 10px rgba(0, 0, 0, 0.5);
        --pk3-predictions-text-shadow-xmd: 0.2px 0.4px 3px hsla(0, 0%, 0%, 0.69);
        --pk3-predictions-text-shadow-xmdz: 0.8px 1px 2px hsla(0, 0%, 0%, 0.99);
        --pk3-predictions-text-shadow-standard: 0px 0px 7px hsla(0, 0%, 0%, 0.99);
        --pk3-predictions-text-shadow-standard-2: 0px 0px 8px hsla(0, 0%, 0%, 0.99);
        --pk3-predictions-text-shadow-xmda: 3.2px 3.8px 8px hsla(0, 0%, 0%, 0.69);


        /* Variables for Margins */
        --pk3-predictions-margin-0: 0; 
        --pk3-predictions-margin-1: 3em 0em 1em 0em; 
        --pk3-predictions-margin-0a: 2em 0em 1em 0em; 
        --pk3-predictions-margin-0b: 1.1em 0em 0em 1.1em; 
        --pk3-predictions-margin-00z: 0.4em auto 0em auto;
        --pk3-predictions-margin-1a: 1em 0em 1em 0em; 
        --pk3-predictions-margin-2: 0.2em 0em 0.3em 1em; 
        --pk3-predictions-margin-2a: 2.2em 0em 1.3em 0em; 
        --pk3-predictions-margin-2b: 3.2em 0em 1.3em 0em; 
        --pk3-predictions-margin-2bz: 2.2em 0em 1.3em 0em; 
        --pk3-predictions-margin-2c: 4.2em 0em 1.3em 0em; 
        --pk3-predictions-margin-2d: 5.2em 0em 1.3em 0em; 
        --pk3-predictions-margin-3: 1em 0em 1.5em 0em; 
        --pk3-predictions-margin-3a: -1em 0em 1.9em 0em; 
        
        /* Variables for Margins Bottom */
        --pk3-predictions-margin-bottom-0: 1.5em; 
        
        /* Padding Variables */
        --pk3-predictions-padding-0: 0;
        --pk3-predictions-padding-xxs: 0.25rem;
        --pk3-predictions-padding-xxsa: 0.35rem;
        --pk3-predictions-padding-xxsa1: 0.40rem;
        --pk3-predictions-padding-xs: 0.5rem;
        --pk3-predictions-padding-sm: 0.75rem;
        --pk3-predictions-padding-md: 1rem;
        --pk3-predictions-padding-lg: 1.5rem;
        --pk3-predictions-padding-xl: 2rem;
        --pk3-predictions-padding-xxl: 3rem;

        /* Width Variables */
        --pk3-predictions-width-100a: 100%;
        --pk3-predictions-width-90: 90%;
        --pk3-predictions-width-75: 75%;
        --pk3-predictions-width-60: 60%;
        --pk3-predictions-width-55: 55%;
        --pk3-predictions-width-50: 50%;
        --pk3-predictions-width-35: 35%;
        --pk3-predictions-width-25: 25%;
        --pk3-predictions-width-20: 20%;
        --pk3-predictions-width-19: 19%;
        --pk3-predictions-width-18: 18%;
        --pk3-predictions-width-17: 17%;
        --pk3-predictions-width-16: 16%;
        --pk3-predictions-width-15: 15%;
        --pk3-predictions-width-14: 14%;
        --pk3-predictions-width-13: 13%;
        --pk3-predictions-width-12: 12%;
        --pk3-predictions-width-11: 11%;
        --pk3-predictions-width-10: 10%;
        --pk3-predictions-width-9: 9%;
        --pk3-predictions-width-8: 8%;
        --pk3-predictions-width-7: 7%;
        --pk3-predictions-width-6: 6%;
        --pk3-predictions-width-5: 5%;
        --pk3-predictions-width-auto: auto;
        --pk3-predictions-width-px: 1px;
        --pk3-predictions-width-xxs: 0.125rem;
        --pk3-predictions-width-xs: 0.25rem;
        --pk3-predictions-width-sm: 0.5rem;
        --pk3-predictions-width-md: 1rem;
        --pk3-predictions-width-lg: 2rem;
        --pk3-predictions-width-xl: 3rem;
        --pk3-predictions-width-xxl: 4rem;
        --pk3-predictions-width-xxxl: 5rem;
        --pk3-predictions-width-xxxl-1: 6rem;
        --pk3-predictions-width-xxxl-2: 7rem;
        --pk3-predictions-width-xxxl-3: 8rem;
        --pk3-predictions-width-xxxl-4: 9rem;
        --pk3-predictions-width-xxxl-4a: 9.3rem;
        --pk3-predictions-width-xxxl-5: 10rem;
        --pk3-predictions-width-xxxl-5a: 11rem;
        --pk3-predictions-width-xxxl-6: 12rem;
        --pk3-predictions-width-xxxl-7: 14rem;
        --pk3-predictions-width-xxxl-8: 16rem;
        --pk3-predictions-width-xxxl-9: 18rem;
        --pk3-predictions-width-xxxl-10: 20rem;
        --pk3-predictions-width-80: 80px;
        --pk3-predictions-width-85: 85px;
        --pk3-predictions-width-90: 90px;
        --pk3-predictions-width-95: 95px;
        --pk3-predictions-width-100: 100px;
        --pk3-predictions-width-110: 110px;
        --pk3-predictions-width-120: 120px;
        --pk3-predictions-width-130: 130px;
        --pk3-predictions-width-140: 140px;
        --pk3-predictions-width-150: 150px;
        --pk3-predictions-width-160: 160px;
        --pk3-predictions-width-180: 180px;
        --pk3-predictions-width-185: 185px;
        --pk3-predictions-width-200: 200px;
        --pk3-predictions-width-220: 220px;
        --pk3-predictions-width-240: 240px;
        --pk3-predictions-width-280: 280px;
        --pk3-predictions-width-300: 300px;
        --pk3-predictions-width-350: 350px;
        --pk3-predictions-width-375: 375px;
        --pk3-predictions-width-400: 400px;
        --pk3-predictions-width-450: 450px;
        --pk3-predictions-width-475: 475px;
        --pk3-predictions-width-500: 500px;
        --pk3-predictions-width-550: 550px;
        --pk3-predictions-width-600: 600px;
        --pk3-predictions-width-680: 680px;
        --pk3-predictions-width-780: 780px;
        --pk3-predictions-width-840: 840px;
        --pk3-predictions-width-880: 880px;
        --pk3-predictions-width-950: 950px;
        --pk3-predictions-width-1050: 1050px;
        --pk3-predictions-width-1080: 1080px;
        --pk3-predictions-width-1100: 1100px;
        --pk3-predictions-width-1200: 1200px;
        --pk3-predictions-width-1250: 1250px;
        --pk3-predictions-width-1300: 1300px;
        --pk3-predictions-width-1400: 1400px;
        --pk3-predictions-width-1500: 1500px;
        --pk3-predictions-width-1535: 1535px;
        --pk3-predictions-width-1550: 1550px;
        --pk3-predictions-width-1600: 1600px;
        --pk3-predictions-width-1700: 1700px;
        --pk3-predictions-width-1750: 1750px;
        --pk3-predictions-width-1800: 1800px;
        --pk3-predictions-width-1900: 1900px;
        --pk3-predictions-width-1950: 1950px;
        --pk3-predictions-width-minimum: 320px;
        --pk3-predictions-width-em-75: 75em;
        --pk3-predictions-width-vw-20: 20vw;
        --pk3-predictions-width-vw-25: 25vw;

        /* Height Variables */
        --pk3-predictions-height-100: 100%;
        --pk3-predictions-height-75: 75%;
        --pk3-predictions-height-50: 50%;
        --pk3-predictions-height-48: 48%;
        --pk3-predictions-height-42: 42%;
        --pk3-predictions-height-30: 30%;
        --pk3-predictions-height-25: 25%;
        --pk3-predictions-height-15: 15%;
        --pk3-predictions-height-10: 10%;
        --pk3-predictions-height-auto: auto;
        --pk3-predictions-height-px: 1px;
        --pk3-predictions-height-px-1: 10px;
        --pk3-predictions-height-px-2: 20px;
        --pk3-predictions-height-px-3: 30px;
        --pk3-predictions-height-px-4: 40px;
        --pk3-predictions-height-xxs: 0.125rem;
        --pk3-predictions-height-xs: 0.25rem;
        --pk3-predictions-height-sm: 0.5rem;
        --pk3-predictions-height-md: 1rem;
        --pk3-predictions-height-lg: 2rem;
        --pk3-predictions-height-xl: 3rem;
        --pk3-predictions-height-xxl: 4rem;
        --pk3-predictions-height-xxxl: 5rem;
        --pk3-predictions-height-xxxl-1: 6rem;
        --pk3-predictions-height-xxxl-2: 7rem;
        --pk3-predictions-height-xxxl-3: 8rem;
        --pk3-predictions-height-xxxl-4: 9rem;
        --pk3-predictions-height-xxxl-5: 10rem;

        /* Background Size */
        --pk3-predictions-size-1: cover;
        /* --bgRepeat-wc */
        --pk3-predictions-repeat-1: repeat;
        --pk3-predictions-repeat-2: no-repeat;

        /* --bg-wc-blend-mode */
        --pk3-predictions-bg-blend-mode-normal: normal;
        --pk3-predictions-bg-blend-mode-overlay: overlay;
        --pk3-predictions-bg-blend-mode-screen: screen;

        /* Font Family Variables */
        --pk3-predictions-ff-src-code-pro: 'Source Code Pro', monospace;
        --pk3-predictions-ff-titillium-web: 'Titillium Web', sans-serif;      
        --pk3-predictions-ff-allerta-stencil: 'Allerta Stencil', monospace;
        --pk3-predictions-ff-bagel-fat-one: 'Bagel Fat One', sans-serif;
        --pk3-predictions-ff-black-ops-one: 'Black Ops One', sans-serif;
        --pk3-predictions-ff-chango: 'Chango', sans-serif;
        --pk3-predictions-ff-saira-stencil-one: 'Saira Stencil One', sans-serif;
        --pk3-predictions-ff-days-one: 'Days One', sans-serif;
        --pk3-predictions-ff-Black-Han-Sans: 'Black Han Sans', sans-serif;

        /* Overflow Variables */
        --pk3-predictions-overflow-visible: visible;
        --pk3-predictions-overflow-hidden: hidden;
        --pk3-predictions-overflow-scroll: scroll;
        --pk3-predictions-overflow-auto: auto;
        --pk3-predictions-overflow-y-scroll: scroll;

        /* Scroll Behaviour Variables */
        --pk3-predictions-scroll-behaviour-auto: auto;
        --pk3-predictions-scroll-behaviour-smooth: smooth;

        /* Position Variables */
        --pk3-predictions-position-absolute: absolute;
        --pk3-predictions-position-relative: relative;
        --pk3-predictions-position-static: static;
        --pk3-predictions-position-fixed: fixed;
        --pk3-predictions-position-sticky: sticky;
        
        /* Display Variables */
        --pk3-predictions-display-none: none;
        --pk3-predictions-display-inline: inline;
        --pk3-predictions-display-inline-block: inline-block;
        --pk3-predictions-display-block: block;
        --pk3-predictions-display-table: table;
        --pk3-predictions-display-table-cell: table-cell;
        --pk3-predictions-display-flex: flex;
        --pk3-predictions-display-inline-flex: inline-flex;
        --pk3-predictions-display-grid: grid;

        /* Flex Direction Variables */
        --pk3-predictions-flex-direction-row: row;
        --pk3-predictions-flex-direction-row-reverse: row-reverse;
        --pk3-predictions-flex-direction-column: column;
        --pk3-predictions-flex-direction-column-reverse: column-reverse;

        /* Flex Wrap Variables */
        --pk3-predictions-flex-wrap-wc: wrap;
        --pk3-predictions-flex-nowrap-wc: nowrap;
        --pk3-predictions-flex-wrap-reverse-wc: wrap-reverse;

        /* Justify Content Variables */
        --pk3-predictions-justify-content-start: start;
        --pk3-predictions-justify-content-end: end;
        --pk3-predictions-justify-content-center: center;
        --pk3-predictions-justify-content-space-between: space-between;
        --pk3-predictions-justify-content-space-around: space-around;
        --pk3-predictions-justify-content-space-evenly: space-evenly;

        /* Justify Self */
        --pk3-predictions-justify-self-center: center;

        /* Flex Align Items Variables */
        --pk3-predictions-align-items-flex-start: flex-start;
        --pk3-predictions-align-items-flex-end: flex-end;
        --pk3-predictions-align-items-center: center;
        --pk3-predictions-align-items-baseline: baseline;
        --pk3-predictions-align-items-stretch: stretch;

        /* Flex Align Content Variables */
        --pk3-predictions-align-content-flex-start: flex-start;
        --pk3-predictions-align-content-flex-end: flex-end;
        --pk3-predictions-align-content-center: center;
        --pk3-predictions-align-content-space-between: space-between;
        --pk3-predictions-align-content-space-around: space-around;
        --pk3-predictions-align-content-stretch: stretch;

        /* Flex Align Self Variables */
        --pk3-predictions-align-self-auto: auto;
        --pk3-predictions-align-self-flex-start: flex-start;
        --pk3-predictions-align-self-flex-end: flex-end;
        --pk3-predictions-align-self-center: center;
        --pk3-predictions-align-self-baseline: baseline;
        --pk3-predictions-align-self-stretch: stretch;

        /* Flex Order Variables */
        --pk3-predictions-order-1: 1;
        --pk3-predictions-order-2: 2;
        --pk3-predictions-order-3: 3;
        --pk3-predictions-order-4: 4;
        --pk3-predictions-order-5: 5;
        --pk3-predictions-order-6: 6;
        --pk3-predictions-order-7: 7;
        --pk3-predictions-order-8: 8;
        --pk3-predictions-order-9: 9;
        --pk3-predictions-order-10: 10;
        --pk3-predictions-order-11: 11;
        --pk3-predictions-order-12: 12;
        --pk3-predictions-order-13: 13;
        --pk3-predictions-order-14: 14;
        --pk3-predictions-order-15: 15;
        --pk3-predictions-order-16: 16;
        --pk3-predictions-order-17: 17;
        --pk3-predictions-order-18: 18;
        --pk3-predictions-order-19: 19;
        --pk3-predictions-order-20: 20;
        --pk3-predictions-order-21: 21;

        /* Visibility Variables */
        --pk3-predictions-visibility-visible: visible;
        --pk3-predictions-visibility-hidden: hidden;
        --pk3-predictions-visibility-collapse: collapse;

        /* Opacity Variables */
        --pk3-predictions-opacity-0: 0;
        --pk3-predictions-opacity-05: 0.05;
        --pk3-predictions-opacity-08: 0.08;
        --pk3-predictions-opacity-10: 0.10;
        --pk3-predictions-opacity-12: 0.12;
        --pk3-predictions-opacity-15: 0.15;
        --pk3-predictions-opacity-25: 0.25;
        --pk3-predictions-opacity-35: 0.35;
        --pk3-predictions-opacity-40: 0.40;
        --pk3-predictions-opacity-45: 0.45;
        --pk3-predictions-opacity-50: 0.50;
        --pk3-predictions-opacity-60: 0.60;
        --pk3-predictions-opacity-65: 0.65;
        --pk3-predictions-opacity-75: 0.75;
        --pk3-predictions-opacity-100: 1;

        /* Top Variables */
        --pk3-predictions-top-4: 4%;
        --pk3-predictions-top-10: 10%;
        --pk3-predictions-top-20: 20%;
        --pk3-predictions-top-34: 34%;
        --pk3-predictions-top-40: 40%;
        --pk3-predictions-top-40_6: 40.6%;
        --pk3-predictions-top-41: 41%;
        --pk3-predictions-top-42: 42%;
        --pk3-predictions-top-43: 43%;
        --pk3-predictions-top-44: 44%;
        --pk3-predictions-top-44_5: 44.5%;
        --pk3-predictions-top-45: 45%;
       
        /* left Variables */
        --pk3-predictions-left-0: 0;
        --pk3-predictions-left-2: 2%;
        --pk3-predictions-left-7: 7%;
        --pk3-predictions-left-10: 10%;
        --pk3-predictions-left-15: 15%;
        --pk3-predictions-left-19: 19%;
        --pk3-predictions-left-18: 18%;
        --pk3-predictions-left-17: 17%;
        --pk3-predictions-left-16: 16%;
        --pk3-predictions-left-20: 20%;
        --pk3-predictions-left-22: 22%;
        --pk3-predictions-left-23: 23%;
        --pk3-predictions-left-24: 24%;
        --pk3-predictions-left-25: 25%;
        --pk3-predictions-left-30: 30%;
        --pk3-predictions-left-35: 35%;
        --pk3-predictions-left-40: 40%;
        --pk3-predictions-left-50: 50%;
        --pk3-predictions-left-75: 75%;
        --pk3-predictions-left-80: 80%;
        --pk3-predictions-left-85: 85%;
        --pk3-predictions-left-90: 90%;
        --pk3-predictions-left-95: 95%;
        --pk3-predictions-left-100: 100%;

        
        /* bottom Variables */
        --pk3-predictions-bottom-2pc: 2%;
        --pk3-predictions-bottom-5pc: 5%;
        --pk3-predictions-bottom-7pc: 7%;
        --pk3-predictions-bottom-10pc: 10%;
        --pk3-predictions-bottom-15pc: 15%;
        --pk3-predictions-bottom-20pc: 20%;
        --pk3-predictions-bottom-25pc: 25%;
        --pk3-predictions-bottom-30pc: 30%;
        --pk3-predictions-bottom-35pc: 35%;
        --pk3-predictions-bottom-40pc: 40%;
        --pk3-predictions-bottom-45pc: 45%;
        --pk3-predictions-bottom-50pc: 50%;
        --pk3-predictions-bottom-55pc: 55%;
        --pk3-predictions-bottom-60pc: 60%;
        --pk3-predictions-bottom-65pc: 65%;
        --pk3-predictions-bottom-70pc: 70%;
        --pk3-predictions-bottom-75pc: 75%;
        --pk3-predictions-bottom-80pc: 80%;
        --pk3-predictions-bottom-85pc: 85%;
        --pk3-predictions-bottom-90pc: 90%;
        --pk3-predictions-bottom-95pc: 95%;
        --pk3-predictions-bottom-100pc: 100%;
        --pk3-predictions-bottom-0: 0rem;

        /* Border Variables */
        --pk3-predictions-border-thin: 1px solid hsla(0, 0%, 0%, 0.993);
        --pk3-predictions-border-thick: 2px solid hsla(0, 0%, 0%, 0.993);
        --pk3-predictions-border-xthick: 3px solid hsla(188, 98%, 34%, 0.993);
        --pk3-predictions-border-xthicka: 6px solid hsla(188, 98%, 34%, 0.993);
        --pk3-predictions-border-xxthick: 4px solid hsla(0, 0%, 0%, 0.993);
        --pk3-predictions-border-xxxthick: 10px solid hsla(188, 98%, 34%, 0.993);
        --pk3-predictions-border-feather: 10px solid hsla(188, 98%, 34%, 0.993);
        --pk3-predictions-border-details: 5px solid hsla(41, 92%, 53%, 0.993);
        --pk3-predictions-border-predictions-1: 4px solid hsla(41, 92%, 53%, 0.993);
        --pk3-predictions-border-predictions-2: 4px solid hsla(41, 92%, 53%, 0.793);

        /* Border Radius Variables */
        --pk3-predictions-border-radius-1: 7px;
        --pk3-predictions-radius-0: 0rem;
        --pk3-predictions-radius-xxs: 0.125rem;
        --pk3-predictions-radius-sm: 0.25rem;
        --pk3-predictions-radius-smmd: 0.35rem;
        --pk3-predictions-radius-md: 0.5rem;
        --pk3-predictions-radius-lg: 1rem;
        --pk3-predictions-radius-xl: 2rem;
        --pk3-predictions-radius-xxl: 3rem;
        --pk3-predictions-radius-em-35: 0.35em;

        /* Filter Variables */
        --pk3-predictions-filter-0: drop-shadow(0 0 3rem hsla(0, 0%, 0%, 0.211));
        --pk3-predictions-filter-1: drop-shadow(0 0 1.7rem hsla(188, 98%, 34%, 0.997));
        --pk3-predictions-filter-shadow-inset: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.5)) inset;
        --pk3-predictions-filter-shadow-inset-md: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.5)) inset;
        --pk3-predictions-filter-shadow-inset-lg: drop-shadow(0 0 2rem rgba(0, 0, 0, 0.5)) inset;
        --pk3-predictions-filter-shadow-inset-xl: drop-shadow(0 0 3rem rgba(0, 0, 0, 0.5)) inset;
        --pk3-predictions-filter-shadow-inset-xxl: drop-shadow(0 0 4rem rgba(0, 0, 0, 0.5)) inset;
        --pk3-predictions-filter-shadow-inset-xxxl: drop-shadow(0 0 5rem rgba(0, 0, 0, 0.5)) inset;
        --pk3-predictions-filter-shadow-inset-xxxxl: drop-shadow(0 0 6rem rgba(0, 0, 0, 0.5)) inset;
        --pk3-predictions-filter-shadow-inset-xxxxxl: drop-shadow(0 0 7rem rgba(0, 0, 0, 0.5)) inset;


        /* Box Shadow Variables */
        --pk3-predictions-shadow-line: 0px 0px 4px hsla(0, 0%, 0%, 0.8993);
        --pk3-predictions-shadow-sm: 0 5px 15px rgba(0, 0, 0, 0.1);
        --pk3-predictions-shadow-md: 0 8px 30px rgba(0, 0, 0, 0.1);
        --pk3-predictions-shadow-xmd: 7px 5px 9px hsla(0, 0%, 0%, 0.69);
        --pk3-predictions-shadow-lg: 0 12px 35px rgba(0, 0, 0, 0.15);
        --pk3-predictions-shadow-xl: 0 16px 50px rgba(0, 0, 0, 0.15);
        --pk3-predictions-shadow-xxl: 0 24px 60px rgba(0, 0, 0, 0.2);
        --pk3-predictions-shadow-inset: inset 0 2px 4px 0 hsla(0, 0%, 0%, 0.69);
        --pk3-predictions-shadow-inset-md: inset 0 4px 8px 0 hsla(0, 0%, 0%, 0.69);
        --pk3-predictions-shadow-inset-lg: inset 0 6px 12px 0 hsla(0, 0%, 0%, 0.69);
        --pk3-predictions-shadow-inset-xl: inset 0 8px 16px 0 hsla(0, 0%, 0%, 0.69);
        --pk3-predictions-shadow-inset-xxl: inset 0 12px 24px 0 hsla(0, 0%, 0%, 0.69);
        --pk3-predictions-shadow-inset-xxl-1: inset 0 16px 32px 0 hsla(0, 0%, 0%, 0.69);
        --pk3-predictions-shadow-inset-xxl-1a: inset 0 3px 3px 3px hsla(0, 1%, 71%, 0.393),
                                                        0 3px 3px 2px hsla(0, 1%, 23%, 0.292);
        --pk3-predictions-shadow-inset-xxl-1b: inset 0 3px 13px 7px hsla(0, 1%, 71%, 0.193),
                                                        0 3px 13px 5px hsla(0, 1%, 23%, 0.192);
        --pk3-predictions-shadow-inset-xxl-1c: inset 0 2px 4px 3.5px hsla(0, 1%, 71%, 0.213),
                                                     0 3px 3px 4px hsla(0, 1%, 23%, 0.492),
                                                     0 3px 3px 3.5px hsla(0, 1%, 71%, 0.293);
        --pk3-predictions-shadow-inset-xxl-2: inset 0 24px 48px 0 hsla(0, 0%, 0%, 0.69);
        --pk3-predictions-shadow-inset-xxl-3: inset 0 32px 64px 0 hsla(0, 0%, 0%, 0.69);

         /* Rotate */
         --pk3-predictions-rotate-0: 0;
         --pk3-predictions-rotate-1: 1deg;
         --pk3-predictions-rotate-2: 2deg;
         --pk3-predictions-rotate-3: 3deg;
         --pk3-predictions-rotate-5: 5deg;
         --pk3-predictions-rotate-6: 6deg;
         --pk3-predictions-rotate-7: 7deg;
         --pk3-predictions-rotate-8: 8deg;
         --pk3-predictions-rotate-9: 9deg;
         --pk3-predictions-rotate-10: 10deg;
         --pk3-predictions-rotate-15: 15deg;
         --pk3-predictions-rotate-30: 30deg;
         --pk3-predictions-rotate-45: 45deg;
         --pk3-predictions-rotate-90: 90deg;
         --pk3-predictions-rotate-180: 180deg;
         --pk3-predictions-rotate-270: 270deg;
         --pk3-predictions-rotate-359: 359deg;
         --pk3-predictions-rotate-358: 358deg;
         --pk3-predictions-rotate-355: 355deg;
         --pk3-predictions-rotate-350: 350deg;
         --pk3-predictions-rotate-345: 345deg;
         --pk3-predictions-rotate-335: 335deg;
         --pk3-predictions-rotate-330: 330deg;
         --pk3-predictions-rotate-325: 325deg;
         --pk3-predictions-rotate-320: 320deg;
         --pk3-predictions-rotate-315: 315deg;
         --pk3-predictions-rotate-310: 310deg;
         --pk3-predictions-rotate-305: 305deg;
         --pk3-predictions-rotate-300: 300deg;
         --pk3-predictions-rotate-295: 295deg;
         --pk3-predictions-rotate-290: 290deg;

                 /* Transition Variables */
        --pk3-predictions-transition-fast: all 0.1s ease-in-out;
        --pk3-predictions-transition-moderate: all 0.3s ease-in-out;
        --pk3-predictions-transition-xmoderate: all 0.5s ease-in-out;
        --pk3-predictions-transition-slow: all 0.7s ease-in-out;

        /* Transform Variables */
        --pk3-predictions-transform-1: scale(0.95);

        /* Button Background Color */
        --pk3-predictions-bgc-button-0: hsla(0, 0%, 45%, 0.993);
        --pk3-predictions-bgc-button-1: hsla(0, 2%, 12%, 0.993);

        /* Button Font Color */
        --pk3-predictions-button-fc-0: hsla(0, 0%, 20%, 0.993);
        --pk3-predictions-button-fc-1: hsla(90, 100%, 50%, 0.993);
        --pk3-predictions-button-fc-2: hsla(32, 100%, 68%, 0.993);

        /* Button Hover Variables */
        --pks-predictions-bgc-hover-0: hsla(0, 1%, 71%, 0.993);
        --pks-predictions-bgc-hover-1: hsla(0, 0%, 20%, 0.993);
        --pks-predictions-bgc-hover-2: hsla(32, 100%, 68%, 0.993);
        --pks-predictions-bgc-hover-3: hsla(0, 100%, 56%, 0.993);
         
         /* Z-Index Variables */
         --pk3-predictions-z-index-1: 100;
         --pk3-predictions-z-index-2: 200;
         --pk3-predictions-z-index-3: 300;
         --pk3-predictions-z-index-4: 400;
         --pk3-predictions-z-index-5: 500;
         --pk3-predictions-z-index-6: 600;
         --pk3-predictions-z-index-7: 700;
         --pk3-predictions-z-index-8: 800;
         --pk3-predictions-z-index-9: 900;
         --pk3-predictions-z-index-10: 1000;
         --pk3-predictions-z-index-11: 1100;
         --pk3-predictions-z-index-12: 1200;
         --pk3-predictions-z-index-13: 1300;
         --pk3-predictions-z-index-14: 1400;
         --pk3-predictions-z-index-15: 1500;
         --pk3-predictions-z-index-16: 1600;
         --pk3-predictions-z-index-17: 1700;
         --pk3-predictions-z-index-18: 1800;
         --pk3-predictions-z-index-19: 1900;
         --pk3-predictions-z-index-20: 2000;
    
    }
    
`;

pick3_predictions_sharedStyles.container = /*css*/ `

    /* Google Fonts Imports */
    /* 
    The Team needs to REFACTOR this and probably import Fonts directly into Mark-Up
    and take advantage of the pre-loading capabilities etc.
    Better yet: Find the time and download needed GF's and prep fonts for 
    the Team to serve our own Fonts: maybe create a Global Font Database and leverage 
    a Team workbench environment with a proper trimming-down and accomplish D.R.Y. in
    not just in the scope of a single App, but DON'T.REPEAT.YOURSELF. in a general sense
    by applying the D.R.Y. methodology in a Global-Developmental-App-to-App kind of 
    methodology. !Research this area and see if there's a compression technique, and 
    find-out the fastest options for a case-1 scenario: is it faster to serve a font from
    the backend Server-Side of the application or from the frontend Client-Side. Maybe 
    consider a 'Dynamic Import' from the Client-Side and average the milliseconds  
    in transmission... DO IT!!
    */
    @import url('https://fonts.googleapis.com/css2?family=Chango&family=Source+Code+Pro:ital,wght@0,200;0,400;0,600;0,700;0,900;1,200;1,400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&family=Titillium+Web:ital,wght@0,200;0,400;0,700;1,200&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Allerta+Stencil&family=Bagel+Fat+One&family=Black+Ops+One&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Days+One&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Days+One&display=swap');
    /* 
            font-family: 'Source Code Pro', monospace;
            font-family: 'Titillium Web', sans-serif; 
            font-family: 'Alberta Stencil', monospace;
            font-family: 'Bagel Fat One', sans-serif; 
            font-family: 'Black Ops One', sans-serif; 
            font-family: 'Chango', sans-serif;
            font-family: 'Saira Stencil One', sans-serif;
            font-family: "Days One", sans-serif;
            font-family: "Black Han Sans", sans-serif;
    */

    /* ********* CSS GLOBAL DEFAULTS ********* */

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

    .pick3-predictions {
        margin: var(--pk3-predictions-margin-0);
        padding: var(--pk3-predictions-padding-0);
    }
`;

pick3_predictions_sharedStyles.predictions = /*css*/ `

    .main-body {
        margin: var(--pk3-predictions-margin-0);
        padding: var(--pk3-predictions-padding-0);
        background-image: var(--pk3-predictions-gradient-dark-A),
                        var(--pk3-predictions-gradient-dark-B);   
        background-repeat: var(--pk3-predictions-repeat-2);
        background-size: var(--pk3-predictions-size-1);
        overflow: var(--pk3-predictions-overflow-hidden);
        width: var(--pk3-predictions-width-100a);
    }

    .pick3-predictions-main {
        margin: var(--pk3-predictions-margin-0);
        padding: var(--pk3-predictions-padding-0);
        width: var(--pk3-predictions-width-100a);
    }

    .pick3-predictions-header {
        margin: var(--pk3-predictions-margin-3a);
        padding: var(--pk3-predictions-padding-md);
        width: var(--pk3-predictions-width-55);
        position: var(--pk3-predictions-position-absolute);
        top: var(--pk3-predictions-top-4);
        left: var(--pk3-predictions-left-2);
        background-image: var(--pk3-predictions-gradient-dark-2),
                          var(--pk3-predictions-gradient-dark-2);
        border: var(--pk3-predictions-border-details);
        border-radius: var(--pk3-predictions-border-radius-1);
        filter: var(--pk3-predictions-filter-0);
    }

    .pick3-prediction-header-figure {
        position: var(--pk3-predictions-position-relative);
        display: var(--pk3-predictions-display-inline-flex);
    }

    .header-figure-img {
        margin: var(--pk3-predictions-margin-0b);
        width: var(--pk3-predictions-width-185);
        rotate: var(--pk3-predictions-rotate-325);
        filter: var(--pk3-predictions-filter-0);
        animation: spin 7.1s linear infinite;
    }

    .pick3-predictions-captions {
        margin-left: 1.3em;
        font-family: var(--pk3-predictions-ff-titillium-web);
        font-size: var(--pk3-predictions-fs-xxxl-0);
        color: var(--pk3-predictions-clr-fc-2);
        text-shadow: var(--pk3-predictions-text-shadow-xmdz);
    }

    .pick3-predictions-header-H1 {
        margin: -1.9em auto 1.305em 5.4em;
        text-align: center;
        font-family: var(--pk3-predictions-ff-titillium-web);
        font-size: var(--pk3-predictions-fs-xxxl-0);
        font-weight: var(--pk3-predictions-fw-bold);
        color: var(--pk3-predictions-clr-fc-pick3-17);
        text-shadow: var(--pk3-predictions-text-shadow-xmdz);
        filter: var(--pk3-predictions-filter-1);
        letter-spacing: 0.17777em;
    }

    
    .pick3-predictions-header-H2 {
        font-family: var(--pk3-predictions-ff-titillium-web);
        font-size: var(--pk3-predictions-fs-xxl);
        color: var(--pk3-predictions-clr-fc-6a);
        text-shadow: var(--pk3-predictions-text-shadow-xmdz);
    }
    
    hr.header-line {
        width: 55%;
        border-top: 1px hsla(198, 53%, 87%, 0.99);
        box-shadow: var(--pk3-predictions-shadow-line);
    }
  
    .line-h1 {
        margin: -1.7em auto 1.1em 16em;
        width: 75%;
    }

    .paraHdr {
        margin: 1em 0em 0.3em 0em;
        font-family: var(--pk3-predictions-ff-src-code-pro);
        font-size: var(--pk3-predictions-fs-sm);
        font-style: var(--pk3-predictions-f-style-italic);
        text-align: var(--pk3-predictions-text-align-justify);
        color: var(--pk3-predictions-clr-fc-pick3-17);
        text-shadow: var(--pk3-predictions-text-shadow-xmdz);
    }

    .pick3-predictions-detail-section {
        margin: var(--pk3-predictions-margin-2bz);
        padding: var(--pk3-predictions-padding-xxs);
        width: var(--pk3-predictions-width-55);
        position: var(--pk3-predictions-position-absolute);
        top: var(--pk3-predictions-top-44_5);
        left: var(--pk3-predictions-left-2);
        background-image: var(--pk3-predictions-gradient-dark-2),
                          var(--pk3-predictions-gradient-dark-2);
        border: var(--pk3-predictions-border-details);        
        border-radius: var(--pk3-predictions-border-radius-1);    
        filter: var(--pk3-predictions-filter-0);
    }

    .pick3-predictions-details-1,
    .pick3-predictions-details-2,
    .pick3-predictions-details-3,
    .pick3-predictions-details-4,
    .pick3-predictions-details-5 {
        margin: var(--pk3-predictions-margin-2);
    }
    
    .summy {
        font-family: var(--pk3-predictions-ff-titillium-web);
        font-size: var(--pk3-predictions-fs-xxl);
        color: var(--pk3-predictions-clr-fc-6a);
        text-shadow: var(--pk3-predictions-text-shadow-xmdz);
    }

    summary::marker {
        color: var(--pk3-predictions-clr-fc-pick3-17);
        font-size: 0.7em;
    }
    
    summary {
      list-style-position: inside;
      margin-left: 30px;
      padding: 10px 10px 10px 20px;
      border-radius: 5px;
    }

    .detLi {
        padding: 0em 1.3em 1.1em 0em;
        font-family: var(--pk3-predictions-ff-src-code-pro);
        font-size: var(--pk3-predictions-fs-sm);
        color: var(--pk3-predictions-clr-fc-2);
        text-shadow: var(--pk3-predictions-text-shadow-xmdz);
        text-align: var(--pk3-predictions-text-align-justify);
    }

    .get-predictions-btn {
        margin: var(--pk3-predictions-margin-00zz);
        position: var(--pk3-predictions-position-absolute);
        bottom: var(--pk3-predictions-bottom-7pc);
        left: var(--pk3-predictions-left-40);
        width: var(--pk3-predictions-width-180);
        height: var(--pk3-predictions-height-px-4);
        text-align: var(--pk3-predictions-text-align-center);
        font-size: var(--pk3-predictions-fs-sm);
        font-weight: var(--pk3-predictions-fw-bold);
        color: var(--pk3-predictions-button-fc-1);
        text-shadow: var(--pk3-predictions-text-shadow-xmd);
        border: var(--pk3-predictions-border-predictions-2);
        border-radius: var(--pk3-predictions-radius-sm);
        background-color: var(--pk3-predictions-bgc-button-0);
        box-shadow: var(--pk3-predictions-shadow-inset-xxl-1a);
        filter: var(--pk3-predictions-filter-0);
        z-index: var(--pk3-predictions-z-index-10);
    }

    .get-predictions-btn:hover {
        background-color: var(--pks-predictions-bgc-hover-1);
        transition: var(--pk3-predictions-transition-moderate);
        color: var(--pks-predictions-bgc-hover-2);
        cursor: var(--pk3-predictions-cursor-pointer);  
        box-shadow: var(--pk3-predictions-shadow-inset-xxl-1b);
    }

    .get-predictions-btn:focus {
        outline-color: transparent;
        outline-style: solid;
        box-shadow: 0 0 0 4px #5a01a7;
        transition: 0.7s;
        color: var(--pks-predictions-bgc-hover-2);
    }

    .get-predictions-btn:active {
        transform: var(--pk3-predictions-transform-1);
        transition: var(--pk3-predictions-transition-slow);
        background-color: var(--pk3-predictions-bgc-button-1); 
        color: var(--pks-predictions-bgc-hover-3);
    }

    @keyframes spin {
        from {
            transform: rotate(360deg);
        }
    }

`;

// summary {
//     list-style: none;
//     padding: 10px 10px 10px 40px;
//     background: url(arrow.svg) no-repeat 14px 50%;
//     background-size: 18px;
//     font-weight: bold;
//   }

pick3_predictions_sharedStyles.results = /*css*/ `




`;

export { pick3_predictions_sharedStyles };
