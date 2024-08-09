'use strict';

import type { IpopGameSharedStyles } from './Ipop_game.js';

const popGame_sharedStyle: IpopGameSharedStyles = {
    root: ``,
    shell: ``,
    container: ``,
    results: ``
};

popGame_sharedStyle.root = /*css*/ `

    :root {

        /* CSS Variables */

        --pop-bckgrd-image-0: url("./components/game_components/pop_components/pop_resources/images/00_pop_logo.png");
        --pop-bckgrd-image-1: url("./components/game_components/pop_components/pop_resources/images/backgrounds_pop/01_pop_bckgrd.png");

        /* Background Color Variables */
        --pop-bg-color-light: #f4f4f4;
        --pop-bg-color-dark: #333;
        --pop-bg-color-4t: rgba(95, 158, 160, 0.393);
       
        /* Variables for Backgrounds and Gradients/Images */
        --pop-gradient-dark-A: linear-gradient(178.25deg, hsla(0, 0%, 20%, 0.993), 53%, hsla(41, 92%, 53%, 0.393));
        --pop-gradient-dark-B: linear-gradient(178.35deg, hsla(41, 92%, 53%, 0.993), 94.5%, hsla(187, 52%, 80%, 0.593));
        --pop-gradient-dark-1a: linear-gradient(178.35deg, hsla(188, 98%, 34%, 0.993), 64.5%, hsla(187, 52%, 80%, 0.593));
        --pop-gradient-dark-2: linear-gradient(178.25deg, hsla(0, 0%, 20%, 0.993), 87%, hsla(188, 35%, 58%, 0.993));

        /* Font Color Variables */
        /* Text Color Variables */
        --pop-clr-fc-0: hsla(80, 61%, 50%, 0.993);
        --pop-clr-fc-0f: hsla(0, 79%, 72%, 0.993);
        --pop-clr-fc-1: hsla(240, 64%, 27%, 0.993);
        --pop-clr-fc-2: hsla(198, 53%, 87%, 0.99);
        --pop-clr-fc-4: hsl(0, 0%, 70%);
        --pop-clr-fc-5: hsl(0, 38%, 38%);
        --pop-clr-fc-6: hsl(32, 83%, 54%);
        --pop-clr-fc-6a: hsla(32, 100%, 68%, 0.993);
        --pop-clr-fc-7: hsla(0, 0%, 0%, 0.9963);
        --pop-clr-fc-8: hsla(240, 64%, 27%, 0.993);
        --pop-clr-fc-9: hsla(80, 61%, 50%, 0.993);
        --pop-clr-fc-10: hsla(0, 79%, 72%, 0.593); 
        --pop-clr-fc-pick3-11: hsla(108, 60%, 53%, 0.993);
        --pop-clr-fc-pick3-12: hsla(187, 52%, 80%, 0.993);
        --pop-clr-fc-pick3-13: hsla(108, 88%, 84%, 0.993);
        --pop-clr-fc-pick3-14: hsla(234, 68%, 37%, 0.993);
        --pop-clr-fc-pick3-15: hsla(34, 78%, 91%, 0.993);
        --pop-clr-fc-pick3-16: hsla(41, 92%, 53%, 0.993);
        --pop-clr-fc-pick3-17: hsla(108, 72%, 82%, 0.993);
        --pop-fc-pop: hsla(313, 100%, 29%, 0.993);
        --pop-clr-fc-pop-stroke-red: hsla(319, 92%, 48%, 0.993);
        --pop-clr-fc-pop-stroke-white: hsla(0, 0%, 100%, 0.993);
       
        /* Font Size Variables */
        --pop-fs-xxs: 0.5rem;
        --pop-fs-xs: 0.65rem;
        --pop-fs-sm: 0.875rem;
        --pop-fs-md: 1rem;
        --pop-fs-lg: 1.125rem;
        --pop-fs-xl: 1.25rem;
        --pop-fs-xxl: 1.5rem;
        --pop-fs-xxlz: 1.82rem;
        --pop-fs-xxxl: 1.875rem;
        --pop-fs-xxxl-0: 2rem;
        --pop-fs-xxxl-1: 2.25rem;
        --pop-fs-xxxl-2: 3rem;
        --pop-fs-xxxl-3: 3.75rem;
        --pop-fs-xxxl-4: 4.5rem;
        --pop-fs-xxxl-5: 5.25rem;
        --pop-fs-em-0-1: 0.1em;
        --pop-fs-em-0-2: 0.2em;
        --pop-fs-em-0-4: 0.4em;
        --pop-fs-em-0-6: 0.6em;
        --pop-fs-em-0-8: 0.8em;
        --pop-fs-em-1: 1em;
        --pop-fs-em-1-2: 1.2em;
        --pop-fs-em-1-4: 1.4em;
        --pop-fs-em-1-6: 1.6em;
        --pop-fs-em-1-8: 1.8em;
        --pop-fs-em-2: 2em;
        --pop-fs-em-2-2: 2.2em;
        --pop-fs-em-2-4: 2.4em;
        --pop-fs-em-2-6: 2.6em;
        --pop-fs-em-2-8: 2.8em;
        --pop-fs-em-3: 3em;
        --pop-fs-em-3-2: 3.2em;
        --pop-fs-em-3-4: 3.4em;
        --pop-fs-em-3-6: 3.6em;
        --pop-fs-em-3-8: 3.8em;
        --pop-fs-em-4: 4em;
        --pop-fs-em-4-2: 4.2em;
        --pop-fs-em-4-4: 4.4em;
        --pop-fs-em-4-6: 4.6em;
        --pop-fs-em-4-8: 4.8em;
        --pop-fs-em-5: 5em;
       
        /* Font Weight Variables */
        --pop-fw-thin: 100;
        --pop-fw-extra_light: 200;
        --pop-fw-light: 300;
        --pop-fw-normal: 400;
        --pop-fw-medium: 500;
        --pop-fw-semibold: 600;
        --pop-fw-bold: 700;
        --pop-fw-extra_bold: 800;
        --pop-fw-black: 900;
    
        /* Font Styles Variables */
        --pop-f-style-italic: italic;
        --pop-f-style-normal: normal;
        --pop-f-style-oblique: oblique;
       
        /* Text Align Variables */
        --pop-text-align-left: left;
        --pop-text-align-right: right;
        --pop-text-align-center: center;
        --pop-text-align-justify: justify;
    
        /* Text Transform Variables */
        --pop-text-transform-uppercase: uppercase;
        --pop-text-transform-lowercase: lowercase;
        --pop-text-transform-capitalize: capitalize;
        --pop-text-transform-none: none;
    
        /* Text Decoration Variables */
        --pop-text-decoration-none: none;
        --pop-text-decoration-underline: underline;
        --pop-text-decoration-overline: overline;
        --pop-text-decoration-line-through: line-through;
    
        /* Text Overflow Variables */
        --pop-text-overflow-clip: clip;
        --pop-text-overflow-ellipsis: ellipsis;
    
        /* Text White Space Variables */
        --pop-white-space-normal: normal;
        --pop-white-space-nowrap: nowrap;
        --pop-white-space-pre: pre;
        --pop-white-space-pre-line: pre-line;
        --pop-white-space-pre-wrap: pre-wrap;
    
        /* Text Break Variables */
        --pop-word-break-normal: normal;
        --pop-word-break-break-all: break-all;
        --pop-word-break-keep-all: keep-all;
        --pop-word-break-break-word: break-word;
       
        /* Text Justify Variables */
        --pop-text-justify-all: distribute-all-lines;
    
        /* -ms Text Justify Variables // -ms-text-justify */
        /* Works with text-align is set to justify */
        --pop-ms-text-justify-all: distribute;

        /*  Text Stroke Variables // -webkit-text-stroke: 5px black;  */ 
        --pop-text-stroke-1: 1px black;
        --pop-text-stroke-2: 2px black;
    
        /* Line Height Variables */
        --pop-lh-1: 1;
        --pop-lh-2: 1.25;
        --pop-lh-3: 1.5;
        --pop-lh-4: 1.75;
        --pop-lh-5: 2;
       
        /* Spacing Variables */
        --pop-spacing-xxs: 0.25rem;
        --pop-spacing-xxsa: 0.38rem;
        --pop-spacing-xs: 0.5rem;
        --pop-spacing-sm: 0.75rem;
        --pop-spacing-md: 1rem;
        --pop-spacing-lg: 1.5rem;
        --pop-spacing-xl: 2rem;
        --pop-spacing-xxl: 3rem;   
  
       
        /* Text Shadow Variables */
        --pop-text-shadow-sm: 0 2px 5px rgba(0, 0, 0, 0.5);
        --pop-text-shadow-md: 0 4px 10px rgba(0, 0, 0, 0.5);
        --pop-text-shadow-xmd: 0.2px 0.4px 3px hsla(0, 0%, 0%, 0.69);
        --pop-text-shadow-xmdz: 0.8px 1px 2px hsla(0, 0%, 0%, 0.99);
        --pop-text-shadow-standard: 0px 0px 7px hsla(0, 0%, 0%, 0.99);
        --pop-text-shadow-standard-2: 0px 0px 8px hsla(0, 0%, 0%, 0.99);
        --pop-text-shadow-xmda: 3.2px 3.8px 8px hsla(0, 0%, 0%, 0.69);
       
       
        /* Variables for Margins */
        --pop-margin-0: 0; 
        --pop-margin-0a: 0em auto 0em auto; 
        --pop-margin-1: 3em 0em 1em 0em; 
        --pop-margin-0a: 2em 0em 1em 0em; 
        --pop-margin-0b: 1.1em 0em 0em 1.1em; 
        --pop-margin-00z: 0.4em auto 0em auto;
        --pop-margin-00za: 0em auto 0em auto;
        --pop-margin-1a: 1em 0em 1em 0em; 
        --pop-margin-2: 0.2em 0em 0.3em 1em; 
        --pop-margin-2a: 2.2em 0em 1.3em 0em; 
        --pop-margin-2b: 3.2em 0em 1.3em 0em; 
        --pop-margin-2bz: 2.2em 0em 1.3em 0em; 
        --pop-margin-2bza: 1.2em 0em 1.3em 3em; 
        --pop-margin-2bzb: 2.9em 0em 1.3em 3em; 
        --pop-margin-2bzz: 3.2em 0em 5.3em 3em; 
        --pop-margin-2c: 4.2em 0em 1.3em 0em; 
        --pop-margin-2d: 5.2em 0em 1.3em 0em; 
        --pop-margin-3: 3em 0em 4.25em 0em; 
        --pop-margin-3a: -1em 0em 1.9em 0em; 
    
        /* Variables for Margins Bottom */
        --pop-margin-bottom-0: 1.5em; 
    
        /* Padding Variables */
        --pop-padding-0: 0;
        --pop-padding-xxs: 0.25rem;
        --pop-padding-xxsa: 0.35rem;
        --pop-padding-xxsa1: 0.40rem;
        --pop-padding-xs: 0.5rem;
        --pop-padding-sm: 0.75rem;
        --pop-padding-md: 1rem;
        --pop-padding-lg: 1.5rem;
        --pop-padding-xl: 2rem;
        --pop-padding-xxl: 3rem;      
       
        /* Width Variables */
        --pop-width-100a: 100%;
        --pop-width-90: 90%;
        --pop-width-75: 75%;
        --pop-width-60: 60%;
        --pop-width-55: 55%;
        --pop-width-50: 50%;
        --pop-width-40: 40%;
        --pop-width-35: 35%;
        --pop-width-25: 25%;
        --pop-width-20: 20%;
        --pop-width-19: 19%;
        --pop-width-18: 18%;
        --pop-width-17: 17%;
        --pop-width-16: 16%;
        --pop-width-15: 15%;
        --pop-width-14: 14%;
        --pop-width-13: 13%;
        --pop-width-12: 12%;
        --pop-width-11: 11%;
        --pop-width-10: 10%;
        --pop-width-9: 9%;
        --pop-width-8: 8%;
        --pop-width-7: 7%;
        --pop-width-6: 6%;
        --pop-width-5: 5%;
        --pop-width-auto: auto;
        --pop-width-px: 1px;
        --pop-width-xxs: 0.125rem;
        --pop-width-xs: 0.25rem;
        --pop-width-sm: 0.5rem;
        --pop-width-md: 1rem;
        --pop-width-lg: 2rem;
        --pop-width-xl: 3rem;
        --pop-width-xxl: 4rem;
        --pop-width-xxxl: 5rem;
        --pop-width-xxxl-1: 6rem;
        --pop-width-xxxl-2: 7rem;
        --pop-width-xxxl-3: 8rem;
        --pop-width-xxxl-4: 9rem;
        --pop-width-xxxl-4a: 9.3rem;
        --pop-width-xxxl-5: 10rem;
        --pop-width-xxxl-5a: 11rem;
        --pop-width-xxxl-6: 12rem;
        --pop-width-xxxl-7: 14rem;
        --pop-width-xxxl-8: 16rem;
        --pop-width-xxxl-9: 18rem;
        --pop-width-xxxl-10: 20rem;
        --pop-width-80: 80px;
        --pop-width-85: 85px;
        --pop-width-90: 90px;
        --pop-width-95: 95px;
        --pop-width-100: 100px;
        --pop-width-110: 110px;
        --pop-width-120: 120px;
        --pop-width-130: 130px;
        --pop-width-140: 140px;
        --pop-width-150: 150px;
        --pop-width-160: 160px;
        --pop-width-180: 180px;
        --pop-width-185: 185px;
        --pop-width-200: 200px;
        --pop-width-220: 220px;
        --pop-width-240: 240px;
        --pop-width-280: 280px;
        --pop-width-300: 300px;
        --pop-width-350: 350px;
        --pop-width-375: 375px;
        --pop-width-400: 400px;
        --pop-width-450: 450px;
        --pop-width-475: 475px;
        --pop-width-500: 500px;
        --pop-width-550: 550px;
        --pop-width-600: 600px;
        --pop-width-680: 680px;
        --pop-width-780: 780px;
        --pop-width-840: 840px;
        --pop-width-880: 880px;
        --pop-width-950: 950px;
        --pop-width-1050: 1050px;
        --pop-width-1080: 1080px;
        --pop-width-1100: 1100px;
        --pop-width-1200: 1200px;
        --pop-width-1250: 1250px;
        --pop-width-1300: 1300px;
        --pop-width-1400: 1400px;
        --pop-width-1500: 1500px;
        --pop-width-1535: 1535px;
        --pop-width-1550: 1550px;
        --pop-width-1600: 1600px;
        --pop-width-1700: 1700px;
        --pop-width-1750: 1750px;
        --pop-width-1800: 1800px;
        --pop-width-1900: 1900px;
        --pop-width-1950: 1950px;
        --pop-width-minimum: 320px;
        --pop-width-em-75: 75em;
        --pop-width-vw-20: 20vw;
        --pop-width-vw-25: 25vw;
       
        /* Height Variables */
        --pop-height-100: 100%;
        --pop-height-75: 75%;
        --pop-height-50: 50%;
        --pop-height-48: 48%;
        --pop-height-42: 42%;
        --pop-height-30: 30%;
        --pop-height-25: 25%;
        --pop-height-15: 15%;
        --pop-height-10: 10%;
        --pop-height-auto: auto;
        --pop-height-px: 1px;
        --pop-height-px-1: 10px;
        --pop-height-px-2: 20px;
        --pop-height-px-3: 30px;
        --pop-height-px-4: 40px;
        --pop-height-xxs: 0.125rem;
        --pop-height-xs: 0.25rem;
        --pop-height-sm: 0.5rem;
        --pop-height-md: 1rem;
        --pop-height-lg: 2rem;
        --pop-height-xl: 3rem;
        --pop-height-xxl: 4rem;
        --pop-height-xxxl: 5rem;
        --pop-height-xxxl-1: 6rem;
        --pop-height-xxxl-2: 7rem;
        --pop-height-xxxl-3: 8rem;
        --pop-height-xxxl-4: 9rem;
        --pop-height-xxxl-5: 10rem;
       
        /* Background Size */
        --pop-size-1: cover;
        /* --bgRepeat-wc */
        --pop-repeat-1: repeat;
        --pop-repeat-2: no-repeat;
       
        /* --bg-wc-blend-mode */
        --pop-bg-blend-mode-normal: normal;
        --pop-bg-blend-mode-overlay: overlay;
        --pop-bg-blend-mode-screen: screen;
       
        /* Font Family Variables */
        --pop-ff-src-code-pro: 'Source Code Pro', monospace;
        --pop-ff-titillium-web: 'Titillium Web', sans-serif;      
        --pop-ff-allerta-stencil: 'Allerta Stencil', monospace;
        --pop-ff-bagel-fat-one: 'Bagel Fat One', sans-serif;
        --pop-ff-black-ops-one: 'Black Ops One', sans-serif;
        --pop-ff-chango: 'Chango', sans-serif;
        --pop-ff-saira-stencil-one: 'Saira Stencil One', sans-serif;
        --pop-ff-days-one: 'Days One', sans-serif;
        --pop-ff-Black-Han-Sans: 'Black Han Sans', sans-serif;
       
        /* Overflow Variables */
        --pop-overflow-visible: visible;
        --pop-overflow-hidden: hidden;
        --pop-overflow-scroll: scroll;
        --pop-overflow-auto: auto;
        --pop-overflow-y-scroll: scroll;
       
        /* Scroll Behaviour Variables */
        --pop-scroll-behaviour-auto: auto;
        --pop-scroll-behaviour-smooth: smooth;
       
        /* Position Variables */
        --pop-position-absolute: absolute;
        --pop-position-relative: relative;
        --pop-position-static: static;
        --pop-position-fixed: fixed;
        --pop-position-sticky: sticky;
     
        /* Display Variables */
        --pop-display-none: none;
        --pop-display-inline: inline;
        --pop-display-inline-block: inline-block;
        --pop-display-block: block;
        --pop-display-table: table;
        --pop-display-table-cell: table-cell;
        --pop-display-flex: flex;
        --pop-display-inline-flex: inline-flex;
        --pop-display-grid: grid;
       
        /* Flex Direction Variables */
        --pop-flex-direction-row: row;
        --pop-flex-direction-row-reverse: row-reverse;
        --pop-flex-direction-column: column;
        --pop-flex-direction-column-reverse: column-reverse;
       
        /* Flex Wrap Variables */
        --pop-flex-wrap-wc: wrap;
        --pop-flex-nowrap-wc: nowrap;
        --pop-flex-wrap-reverse-wc: wrap-reverse;
       
        /* Justify Content Variables */
        --pop-justify-content-start: start;
        --pop-justify-content-end: end;
        --pop-justify-content-center: center;
        --pop-justify-content-space-between: space-between;
        --pop-justify-content-space-around: space-around;
        --pop-justify-content-space-evenly: space-evenly;
       
        /* Justify Self */
        --pop-justify-self-center: center;
       
        /* Flex Align Items Variables */
        --pop-align-items-flex-start: flex-start;
        --pop-align-items-flex-end: flex-end;
        --pop-align-items-center: center;
        --pop-align-items-baseline: baseline;
        --pop-align-items-stretch: stretch;
       
        /* Flex Align Content Variables */
        --pop-align-content-flex-start: flex-start;
        --pop-align-content-flex-end: flex-end;
        --pop-align-content-center: center;
        --pop-align-content-space-between: space-between;
        --pop-align-content-space-around: space-around;
        --pop-align-content-stretch: stretch;
       
        /* Flex Align Self Variables */
        --pop-align-self-auto: auto;
        --pop-align-self-flex-start: flex-start;
        --pop-align-self-flex-end: flex-end;
        --pop-align-self-center: center;
        --pop-align-self-baseline: baseline;
        --pop-align-self-stretch: stretch;
       
        /* Flex Order Variables */
        --pop-order-1: 1;
        --pop-order-2: 2;
        --pop-order-3: 3;
        --pop-order-4: 4;
        --pop-order-5: 5;
        --pop-order-6: 6;
        --pop-order-7: 7;
        --pop-order-8: 8;
        --pop-order-9: 9;
        --pop-order-10: 10;
        --pop-order-11: 11;
        --pop-order-12: 12;
        --pop-order-13: 13;
        --pop-order-14: 14;
        --pop-order-15: 15;
        --pop-order-16: 16;
        --pop-order-17: 17;
        --pop-order-18: 18;
        --pop-order-19: 19;
        --pop-order-20: 20;
        --pop-order-21: 21;
       
        /* Visibility Variables */
        --pop-visibility-visible: visible;
        --pop-visibility-hidden: hidden;
        --pop-visibility-collapse: collapse;
       
        /* Opacity Variables */
        --pop-opacity-0: 0;
        --pop-opacity-05: 0.05;
        --pop-opacity-08: 0.08;
        --pop-opacity-10: 0.10;
        --pop-opacity-12: 0.12;
        --pop-opacity-15: 0.15;
        --pop-opacity-25: 0.25;
        --pop-opacity-35: 0.35;
        --pop-opacity-40: 0.40;
        --pop-opacity-45: 0.45;
        --pop-opacity-50: 0.50;
        --pop-opacity-60: 0.60;
        --pop-opacity-65: 0.65;
        --pop-opacity-75: 0.75;
        --pop-opacity-100: 1;
       
        /* Top Variables */
        --pop-top-0: 0.5%;
        --pop-top-1: 1%;
        --pop-top-4: 4%;
        --pop-top-5: 5%;
        --pop-top-10: 10%;
        --pop-top-20: 20%;
        --pop-top-25: 25%;
        --pop-top-34: 34%;
        --pop-top-40: 40%;
        --pop-top-40_6: 40.6%;
        --pop-top-41: 41%;
        --pop-top-42: 42%;
        --pop-top-43: 43%;
        --pop-top-44: 44%;
        --pop-top-44_5: 44.5%;
        --pop-top-45: 45%;
              
        /* left Variables */
        --pop-left-0: 0;
        --pop-left-2: 2%;
        --pop-left-7: 7%;
        --pop-left-10: 10%;
        --pop-left-15: 15%;
        --pop-left-19: 19%;
        --pop-left-18: 18%;
        --pop-left-17: 17%;
        --pop-left-16: 16%;
        --pop-left-20: 20%;
        --pop-left-22: 22%;
        --pop-left-23: 23%;
        --pop-left-24: 24%;
        --pop-left-25: 25%;
        --pop-left-30: 30%;
        --pop-left-35: 35%;
        --pop-left-40: 40%;
        --pop-left-50: 50%;
        --pop-left-65: 65%;
        --pop-left-75: 75%;
        --pop-left-80: 80%;
        --pop-left-85: 85%;
        --pop-left-90: 90%;
        --pop-left-95: 95%;
        --pop-left-100: 100%;
       
        /* Right Variable */
        --pop-right-3: 3%;
        --pop-right-5: 5%;
        --pop-right-10: 10%;
       
    
        /* bottom Variables */
        --pop-bottom-2pc: 2%;
        --pop-bottom-5pc: 5%;
        --pop-bottom-7pc: 7%;
        --pop-bottom-10pc: 10%;
        --pop-bottom-15pc: 15%;
        --pop-bottom-20pc: 20%;
        --pop-bottom-25pc: 25%;
        --pop-bottom-30pc: 30%;
        --pop-bottom-35pc: 35%;
        --pop-bottom-40pc: 40%;
        --pop-bottom-45pc: 45%;
        --pop-bottom-50pc: 50%;
        --pop-bottom-55pc: 55%;
        --pop-bottom-60pc: 60%;
        --pop-bottom-65pc: 65%;
        --pop-bottom-70pc: 70%;
        --pop-bottom-75pc: 75%;
        --pop-bottom-80pc: 80%;
        --pop-bottom-85pc: 85%;
        --pop-bottom-90pc: 90%;
        --pop-bottom-95pc: 95%;
        --pop-bottom-100pc: 100%;
        --pop-bottom-0: 0rem;

        /* Variables for Padding Bottom */
        --pop-padding-bottom-0: 0;
        --pop-padding-bottom-1: 2rem;
       
        /* Border Variables */
        --pop-border-thin: 1px solid hsla(0, 0%, 0%, 0.993);
        --pop-border-thick: 2px solid hsla(0, 0%, 0%, 0.993);
        --pop-border-xthick: 3px solid hsla(188, 98%, 34%, 0.993);
        --pop-border-xthicka: 6px solid hsla(188, 98%, 34%, 0.993);
        --pop-border-xxthick: 4px solid hsla(0, 0%, 0%, 0.993);
        --pop-border-xxxthick: 10px solid hsla(188, 98%, 34%, 0.993);
        --pop-border-feather: 10px solid hsla(188, 98%, 34%, 0.993);
        --pop-border-details: 5px solid hsla(41, 92%, 53%, 0.993);
        --pop-border-predictions-1: 4px solid hsla(41, 92%, 53%, 0.993);
        --pop-border-predictions-2: 4px solid hsla(41, 92%, 53%, 0.793);
       
        /* Border Radius Variables */
        --pop-border-radius-1: 7px;
        --pop-radius-0: 0rem;
        --pop-radius-xxs: 0.125rem;
        --pop-radius-sm: 0.25rem;
        --pop-radius-smmd: 0.35rem;
        --pop-radius-md: 0.5rem;
        --pop-radius-lg: 1rem;
        --pop-radius-xl: 2rem;
        --pop-radius-xxl: 3rem;
        --pop-radius-em-35: 0.35em;
       
        /* Filter Variables */
        --pop-filter-0: drop-shadow(0 0 3rem hsla(0, 0%, 0%, 0.211));
        --pop-filter-1: drop-shadow(0 0 1.7rem hsla(188, 98%, 34%, 0.997));
        --pop-filter-pop-stroke: drop-shadow(0 0 0.65rem hsla(319, 92%, 48%, 0.993));
        --pop-filter-shadow-inset: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.5)) inset;
        --pop-filter-shadow-inset-md: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.5)) inset;
        --pop-filter-shadow-inset-lg: drop-shadow(0 0 2rem rgba(0, 0, 0, 0.5)) inset;
        --pop-filter-shadow-inset-xl: drop-shadow(0 0 3rem rgba(0, 0, 0, 0.5)) inset;
        --pop-filter-shadow-inset-xxl: drop-shadow(0 0 4rem rgba(0, 0, 0, 0.5)) inset;
        --pop-filter-shadow-inset-xxxl: drop-shadow(0 0 5rem rgba(0, 0, 0, 0.5)) inset;
        --pop-filter-shadow-inset-xxxxl: drop-shadow(0 0 6rem rgba(0, 0, 0, 0.5)) inset;
        --pop-filter-shadow-inset-xxxxxl: drop-shadow(0 0 7rem rgba(0, 0, 0, 0.5)) inset;
       
       
        /* Box Shadow Variables */
        --pop-shadow-line: 0px 0px 4px hsla(0, 0%, 0%, 0.8993);
        --pop-shadow-sm: 0 5px 15px rgba(0, 0, 0, 0.1);
        --pop-shadow-md: 0 8px 30px rgba(0, 0, 0, 0.1);
        --pop-shadow-xmd: 7px 5px 9px hsla(0, 0%, 0%, 0.69);
        --pop-shadow-lg: 0 12px 35px rgba(0, 0, 0, 0.15);
        --pop-shadow-xl: 0 16px 50px rgba(0, 0, 0, 0.15);
        --pop-shadow-xxl: 0 24px 60px rgba(0, 0, 0, 0.2);
        --pop-shadow-inset: inset 0 2px 4px 0 hsla(0, 0%, 0%, 0.69);
        --pop-shadow-inset-md: inset 0 4px 8px 0 hsla(0, 0%, 0%, 0.69);
        --pop-shadow-inset-lg: inset 0 6px 12px 0 hsla(0, 0%, 0%, 0.69);
        --pop-shadow-inset-xl: inset 0 8px 16px 0 hsla(0, 0%, 0%, 0.69);
        --pop-shadow-inset-xxl: inset 0 12px 24px 0 hsla(0, 0%, 0%, 0.69);
        --pop-shadow-inset-xxl-1: inset 0 16px 32px 0 hsla(0, 0%, 0%, 0.69);
        --pop-shadow-inset-xxl-1a: inset 0 3px 3px 3px hsla(0, 1%, 71%, 0.393),
                                                       0 3px 3px 2px hsla(0, 1%, 23%, 0.292);
        --pop-shadow-inset-xxl-1b: inset 0 3px 13px 7px hsla(0, 1%, 71%, 0.193),
                                                       0 3px 13px 5px hsla(0, 1%, 23%, 0.192);
        --pop-shadow-inset-xxl-1c: inset 0 2px 4px 3.5px hsla(0, 1%, 71%, 0.213),
                                                    0 3px 3px 4px hsla(0, 1%, 23%, 0.492),
                                                    0 3px 3px 3.5px hsla(0, 1%, 71%, 0.293);
        --pop-shadow-inset-xxl-2: inset 0 24px 48px 0 hsla(0, 0%, 0%, 0.69);
        --pop-shadow-inset-xxl-3: inset 0 32px 64px 0 hsla(0, 0%, 0%, 0.69);
       
        /* Rotate */
        --pop-rotate-0: 0;
        --pop-rotate-1: 1deg;
        --pop-rotate-2: 2deg;
        --pop-rotate-3: 3deg;
        --pop-rotate-5: 5deg;
        --pop-rotate-6: 6deg;
        --pop-rotate-7: 7deg;
        --pop-rotate-8: 8deg;
        --pop-rotate-9: 9deg;
        --pop-rotate-10: 10deg;
        --pop-rotate-15: 15deg;
        --pop-rotate-30: 30deg;
        --pop-rotate-45: 45deg;
        --pop-rotate-90: 90deg;
        --pop-rotate-180: 180deg;
        --pop-rotate-270: 270deg;
        --pop-rotate-359: 359deg;
        --pop-rotate-358: 358deg;
        --pop-rotate-355: 355deg;
        --pop-rotate-350: 350deg;
        --pop-rotate-345: 345deg;
        --pop-rotate-335: 335deg;
        --pop-rotate-330: 330deg;
        --pop-rotate-325: 325deg;
        --pop-rotate-320: 320deg;
        --pop-rotate-315: 315deg;
        --pop-rotate-310: 310deg;
        --pop-rotate-305: 305deg;
        --pop-rotate-300: 300deg;
        --pop-rotate-295: 295deg;
        --pop-rotate-290: 290deg;
       
                /* Transition Variables */
        --pop-transition-fast: all 0.1s ease-in-out;
        --pop-transition-moderate: all 0.3s ease-in-out;
        --pop-transition-xmoderate: all 0.5s ease-in-out;
        --pop-transition-slow: all 0.7s ease-in-out;
       
        /* Transform Variables */
        --pop-transform-1: scale(0.95);
       
        /* Button Background Color */
        --pop-bgc-button-0: hsla(0, 0%, 45%, 0.993);
        --pop-bgc-button-1: hsla(0, 2%, 12%, 0.993);
       
        /* Button Font Color */
        --pop-button-fc-0: hsla(0, 0%, 20%, 0.993);
        --pop-button-fc-1: hsla(90, 100%, 50%, 0.993);
        --pop-button-fc-2: hsla(32, 100%, 68%, 0.993);
       
        /* Button Hover Variables */
        --pop-bgc-hover-0: hsla(0, 1%, 71%, 0.993);
        --pop-bgc-hover-1: hsla(0, 0%, 20%, 0.993);
        --pop-bgc-hover-2: hsla(32, 100%, 68%, 0.993);
        --pop-bgc-hover-3: hsla(0, 100%, 56%, 0.993);
        
        /* Z-Index Variables */
        --pop-z-index-1: 100;
        --pop-z-index-2: 200;
        --pop-z-index-3: 300;
        --pop-z-index-4: 400;
        --pop-z-index-5: 500;
        --pop-z-index-6: 600;
        --pop-z-index-7: 700;
        --pop-z-index-8: 800;
        --pop-z-index-9: 900;
        --pop-z-index-10: 1000;


        /* Position Variables */
        --pop-position-absolute: absolute;
        --pop-position-relative: relative;
        --pop-position-static: static;
        --pop-position-fixed: fixed;
        --pop-position-sticky: sticky;

    }

`;

popGame_sharedStyle.shell = /*css*/ `

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

    .main-body {
        margin: 0;
        padding: 0;
        background-image: var(--pop-bckgrd-image-1);
        background-size: var(--pop-size-1);
        repeat: var(--pop-repeat-2);
        overflow: var(--pop-overflow-hidden);
        width: var(--pop-width-100a);
        height: 100%; 
        /* min-height: 100%; */
        z-index: var(--pop-z-index-5);
    }

    .main-container {
        margin: 0;
        padding: 0;
       /* background-image: var(--pop-bckgrd-image-0);*/
       width: var(--pop-width-100a);
       min-height: 100%; 
        /* min-height: 100%;  */
        font-family: var(--pop-ff-src-code-pro);
    }

    .pop-shell {
        margin: 0;
        padding: 0;
        /* width: 100%;
        min-height: 100%; */
    }

`;

popGame_sharedStyle.container = /*css*/ `    

    .main-container > .random-pop-container {      
        margin: var(--pop-margin-0);
        padding: var(--pop-padding-0);
        position: var(--pop-position-absolute);
        top: var(--pop-top-0);
        left: var(--pop-left-30);
        width: var(--pop-width-25);
        min-height: var(--pop-height-42);
        display: var(--pop-display-flex);
        flex-direction: var(--pop-flex-direction-column);
        justify-content: var(--pop-justify-content-center);
        align-items: var(--pop-align-items-center);
    }

    .random-pop-container > .random-pop-h1 {
        margin: var(--pop-margin-00z);
        padding-bottom: var(--pop-padding-bottom-1);
        text-align: var(--pop-text-align-center);
        font-size: var(--pop-fs-xxl);
        font-weight: var(--pop-fw-bold);
        color: var(--pop-fc-pop);
        text-shadow: var(--pop-text-shadow-xmd);
        /*-webkit-text-stroke: 5px black; */
    }
    
    .random-pop-container > .random-pop-numbers {
        margin: var(--pop-margin-00za);
        padding: var(--pop-padding-0);
        text-align: var(--pop-text-align-center);
        font-size: var(--pop-fs-xxxl-3);
        font-weight: var(--pop-fw-bold);
        color: var(--pop-clr-fc-pop-stroke-white);
        -webkit-text-stroke: 2.75px var(--pop-clr-fc-pop-stroke-red);
        filter: var(--pop-filter-pop-stroke);
    }

    .pop-predict_btn {
        position: var(--pop-position-absolute);
        width: var(--pop-width-180);
        height: var(--pop-height-px-4);
        text-align: var(--pop-text-align-center);
        font-family: var(--pop-ff-src-code-pro);
        font-size: var(--pop-fs-sm);
        font-weight: var(--pop-fw-bold);
        color: var(--pop-button-fc-1);
        text-shadow: var(--pop-text-shadow-xmd);
        border: var(--pop-border-predictions-2);
        border-radius: var(--pop-radius-sm);
        background-color: var(--pop-bgc-button-0);
        box-shadow: var(--pop-shadow-inset-xxl-1a);
        filter: var(--pop-filter-0);
        z-index: var(--pop-z-index-10);
    }

    .get-pop-predictions-btn {        
        margin: var(--pop-margin-00zz);
        bottom: var(--pop-bottom-7pc);
        left: var(--pop-left-40);        
        }
        
    .get-pop-predictions-btn-MidDay-btn {
        margin: var(--pop-margin-00zz);
        bottom: var(--pop-bottom-7pc);
        left: var(--pop-left-25);   
    }

    .pop-predict_btn:hover {
        background-color: var(--pks-predictions-bgc-hover-1);
        transition: var(--pop-transition-moderate);
        color: var(--pks-predictions-bgc-hover-2);
        cursor: var(--pop-cursor-pointer);  
        box-shadow: var(--pop-shadow-inset-xxl-1b);
    }

    .pop-predict_btn:focus {
        outline-color: transparent;
        outline-style: solid;
        box-shadow: 0 0 0 4px #5a01a7;
        transition: 0.7s;
        color: var(--pks-predictions-bgc-hover-2);
    }

    .pop-predict_btn:active {
        transform: var(--pop-transform-1);
        transition: var(--pop-transition-slow);
        background-color: var(--pop-bgc-button-1); 
        color: var(--pop-predictions-bgc-hover-3);
    }

`;

popGame_sharedStyle.results = /*css*/ `




`;

export { popGame_sharedStyle };
