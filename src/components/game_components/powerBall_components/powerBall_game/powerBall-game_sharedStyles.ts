'use strict';

import { IPowerBallGameSharedStyles } from '../powerBall_resources/powerBall_types/IPowerBallGame.js';

const powerballGame_sharedStyles: IPowerBallGameSharedStyles = {
	global: '',
	root: '',
	shell: '',
	container: '',
	queries: ''
};

powerballGame_sharedStyles.global = /*css*/ `

	.main-body {
		background-image: var(--PB-game-background-color-1);
	}

`;

powerballGame_sharedStyles.root = /*css*/ `

	:root {

		/* Powerball Game CSS Variables */

		/* Powerball Game Scrollbar Colors & Effects Variables*/
		--scrollbar-background-wc-1: hsla(201, 11%, 53%, 0.99);
		--scrollbar-thumb-wc-1: hsla(210, 2%, 74%, 0.99);
		--scrollbar-thumb_hover-wc-1: hsla(213, 62%, 45%, 0.99);
		--scrollbar-border-wc-1: 0.18em solid hsla(201, 11%, 53%, 0.99);
		--scrollbar-box-shadow-wc-1: inset 0 0 6px hsla(0, 0%, 0%, 0.6);
		--scrollbar-thumb-clr-wc-1: hsla(0, 0%, 41%, 0.99);

		/* Powerball Game Background Variables */
		--PB-game-background-color-1: linear-gradient(178.25deg, hsla(230, 59%, 28%, 0.993), 87%, hsla(188, 35%, 58%, 0.993));
		--PB-game-background-color-2: linear-gradient(178.25deg, hsla(238, 59%, 26%, 0.993), 87%, hsl(229, 59%, 29%, 0.993));
		--PB-game-background-color-2: #f4f4f4;

		/* PB Game Color Variables */
		--PB-game-color-1: hsla(230, 59%, 28%, 0.993);
		--PB-game-color-2: #333;
		--PB-game-color-3: #f4f4f4;
		--PB-game-color-4: hsla(210, 2%, 74%, 0.99);

		/* PB Game Border Variables */
		--PB-game-border: #ccc;

		/* PB Game Border Radius Variables */
		--PB-game-border-radius: 10px;

		/* PB Game Font Family Variables */
		--ff-PB-src-code-pro: 'Source Code Pro', monospace;
		--ff-PB-titillium-web: 'Titillium Web', sans-serif;
		--ff-PB-allerta-stencil: 'Allerta Stencil', monospace;
		--ff-PB-bagel-fat-one: 'Bagel Fat One', sans-serif;
		--ff-PB-black-ops-one: 'Black Ops One', sans-serif;
		--ff-PB-chango: 'Chango', sans-serif;
		--ff-PB-saira-stencil-one: 'Saira Stencil One', sans-serif;
		--ff-PB-days-one: 'Days One', sans-serif; 

		/* PB Game Font Size Variables */
		--fs-PB-xxs: 0.5rem;
		--fs-PB-xs: 0.65rem;
		--fs-PB-sm: 0.875rem;
		--fs-PB-md: 1rem;
		--fs-PB-lg: 1.125rem;
		--fs-PB-xl: 1.25rem;
		--fs-PB-xxl: 1.5rem;
		--fs-PB-xxxl: 1.875rem;
		--fs-PB-xxxl-0: 2rem;
		--fs-PB-xxxl-1: 2.25rem;
		--fs-PB-xxxl-2: 3rem;
		--fs-PB-xxxl-3: 3.75rem;
		--fs-PB-xxxl-4: 4.5rem;
		--fs-PB-xxxl-5: 5.25rem;
		--fs-PB-em-0-1: 0.1em;
		--fs-PB-em-0-2: 0.2em;
		--fs-PB-em-0-4: 0.4em;
		--fs-PB-em-0-6: 0.6em;
		--fs-PB-em-0-8: 0.8em;
		--fs-PB-em-1: 1em;
		--fs-PB-em-1-2: 1.2em;
		--fs-PB-em-1-4: 1.4em;
		--fs-PB-em-1-6: 1.6em;
		--fs-PB-em-1-8: 1.8em;
		--fs-PB-em-2: 2em;
		--fs-PB-em-2-2: 2.2em;
		--fs-PB-em-2-4: 2.4em;
		--fs-PB-em-2-6: 2.6em;
		--fs-PB-em-2-8: 2.8em;
		--fs-PB-em-3: 3em;
		--fs-PB-em-3-2: 3.2em;
		--fs-PB-em-3-4: 3.4em;
		--fs-PB-em-3-6: 3.6em;
		--fs-PB-em-3-8: 3.8em;
		--fs-PB-em-4: 4em;
		--fs-PB-em-4-2: 4.2em;
		--fs-PB-em-4-4: 4.4em;
		--fs-PB-em-4-6: 4.6em;
		--fs-PB-em-4-8: 4.8em;
		--fs-PB-em-5: 5em;

		/* PB Game Font Weight Variables */
		--fw-PB-thin: 100;
		--fw-PB-extra_light: 200;
		--fw-PB-light: 300;
		--fw-PB-normal: 400;
		--fw-PB-medium: 500;
		--fw-PB-semibold: 600;
		--fw-PB-bold: 700;
		--fw-PB-extra_bold: 800;
		--fw-PB-black: 900;

		/* PB Game Line Height Variables */
		--lh-PB-1: 1;
		--lh-PB-2: 1.25;
		--lh-PB-3: 1.5;
		--lh-PB-4: 1.75;
		--lh-PB-5: 2;

		/* PB Game Spacing Variables */
		--spacing-PB-xxs: 0.25rem;
		--spacing-PB-xxsa: 0.38rem;
		--spacing-PB-xs: 0.5rem;
		--spacing-PB-sm: 0.75rem;
		--spacing-PB-md: 1rem;
		--spacing-PB-lg: 1.5rem;
		--spacing-PB-xl: 2rem;
		--spacing-PB-xxl: 3rem;

		/* PB Game Text Shadow Variables */
		--text-shadow-PB-sm: 0 2px 5px rgba(0, 0, 0, 0.5);
		--text-shadow-PB-md: 0 4px 10px rgba(0, 0, 0, 0.5);
		--text-shadow-PB-xmd: 0.2px 0.4px 3px hsla(0, 0%, 0%, 0.69);
		--text-shadow-PB-xmda: 3.2px 3.8px 8px hsla(0, 0%, 0%, 0.69);
		--text-shadow-PB-lg: 0 6px 15px rgba(0, 0, 0, 0.5);
		--text-shadow-PB-xl: 0 8px 20px rgba(0, 0, 0, 0.5);
		--text-shadow-PB-xxl: 0 10px 25px rgba(0, 0, 0, 0.5);
		--text-shadow-PB-inset: 0 2px 5px rgba(0, 0, 0, 0.5) inset;
		--text-shadow-PB-inset-md: 0 4px 10px rgba(0, 0, 0, 0.5) inset;
		--text-shadow-PB-inset-lg: 0 6px 15px rgba(0, 0, 0, 0.5) inset;
		--text-shadow-PB-inset-xl: 0 8px 20px rgba(0, 0, 0, 0.5) inset;
		--text-shadow-PB-inset-xxl: 0 10px 25px rgba(0, 0, 0, 0.5) inset;
		--text-shadow-PB-inset-xxxl: 0 12px 30px rgba(0, 0, 0, 0.5) inset;
		--text-shadow-PB-inset-xxxxl: 0 14px 35px rgba(0, 0, 0, 0.5) inset;
		--text-shadow-PB-inset-xxxxxl: 0 16px 40px rgba(0, 0, 0, 0.5) inset;

        /* PB Game Text Align Variables */
        --text-align-PB-left: left;
        --text-align-PB-right: right;
        --text-align-PB-center: center;
        --text-align-PB-justify: justify;

        /* PB Game Text Transform Variables */
        --text-transform-PB-uppercase: uppercase;
        --text-transform-PB-lowercase: lowercase;
        --text-transform-PB-capitalize: capitalize;
        --text-transform-PB-none: none;

        /* PB Game Text Decoration Variables */
        --text-decoration-PB-none: none;
        --text-decoration-PB-underline: underline;
        --text-decoration-PB-overline: overline;
        --text-decoration-PB-line-through: line-through;

        /* PB Game Text Overflow Variables */
        --text-overflow-PB-clip: clip;
        --text-overflow-PB-ellipsis: ellipsis;

        /* PB Game Text White Space Variables */
        --white-space-PB-normal: normal;
        --white-space-PB-nowrap: nowrap;
        --white-space-PB-pre: pre;
        --white-space-PB-pre-line: pre-line;
        --white-space-PB-pre-wrap: pre-wrap;

        /* PB Game Text Break Variables */
        --word-break-PB-normal: normal;
        --word-break-PB-break-all: break-all;
        --word-break-PB-keep-all: keep-all;
        --word-break-PB-break-word: break-word;
        
        /* PB Game Margin Variables */
        --margin-PB--3: -3rem;
        --margin-PB--2: -2rem;
        --margin-PB--1: -1rem;
        --margin-PB-0: 0;
        --margin-PB-auto: auto;
        --margin-PB-xxsm: 0.19rem;
        --margin-PB-xxs: 0.25rem;
        --margin-PB-xxsx: 0.28rem;
        --margin-PB-xs: 0.5rem;
        --margin-PB-sm: 0.75rem;
        --margin-PB-md: 1rem;
        --margin-PB-lg: 1.5rem;
        --margin-PB-xl: 2rem;
        --margin-PB-xxl: 3rem;
        --margin-PB-xxl-1: 4rem;
        --margin-PB-xxl-2: 5rem;
        --margin-PB-xxl-3: 6rem;
        --margin-PB-xxl-4: 7rem;
        --margin-PB-xxl-5: 8rem;
        --margin-PB-xxl-6: 9rem;
        --margin-PB-xxl-7: 10rem;

		
		/* PB Game Padding Variables */
		--PB-game-padding: 20px;


        /* PB Game Padding Variables */
        --PB-game-padding-0: 0;
        --PB-game-padding-1: 0.25rem;
        --PB-game-padding-2: 0.35rem;
        --PB-game-padding-3: 0.40rem;
        --PB-game-padding-4: 0.5rem;
        --PB-game-padding-5: 0.75rem;
        --PB-game-padding-6: 1rem;
        --PB-game-padding-7: 1.5rem;
        --PB-game-padding-8: 2rem;
        --PB-game-padding-9: 3rem;
		--PB-game-padding-10: 20px;

        /* PB Game Width Variables */
        --width-PB-100a: 100%;
        --width-PB-75: 75%;
        --width-PB-50: 50%;
        --width-PB-35: 35%;
        --width-PB-25: 25%;
        --width-PB-20: 20%;
        --width-PB-19: 19%;
        --width-PB-18: 18%;
        --width-PB-17: 17%;
        --width-PB-16: 16%;
        --width-PB-15: 15%;
        --width-PB-14: 14%;
        --width-PB-13: 13%;
        --width-PB-12: 12%;
        --width-PB-11: 11%;
        --width-PB-10: 10%;
        --width-PB-9: 9%;
        --width-PB-8: 8%;
        --width-PB-7: 7%;
        --width-PB-6: 6%;
        --width-PB-5: 5%;
        --width-PB-auto: auto;
        --width-PB-px: 1px;
        --width-PB-xxs: 0.125rem;
        --width-PB-xs: 0.25rem;
        --width-PB-sm: 0.5rem;
        --width-PB-md: 1rem;
        --width-PB-lg: 2rem;
        --width-PB-xl: 3rem;
        --width-PB-xxl: 4rem;
        --width-PB-xxxl: 5rem;
        --width-PB-xxxl-1: 6rem;
        --width-PB-xxxl-2: 7rem;
        --width-PB-xxxl-3: 8rem;
        --width-PB-xxxl-4: 9rem;
        --width-PB-xxxl-4a: 9.3rem;
        --width-PB-xxxl-5: 10rem;
        --width-PB-xxxl-5a: 11rem;
        --width-PB-xxxl-6: 12rem;
        --width-PB-xxxl-7: 14rem;
        --width-PB-xxxl-8: 16rem;
        --width-PB-xxxl-9: 18rem;
        --width-PB-xxxl-10: 20rem;
        --width-PB-80: 80px;
        --width-PB-85: 85px;
        --width-PB-90: 90px;
        --width-PB-95: 95px;
        --width-PB-100: 100px;
        --width-PB-110: 110px;
        --width-PB-120: 120px;
        --width-PB-130: 130px;
        --width-PB-140: 140px;
        --width-PB-150: 150px;
        --width-PB-160: 160px;
        --width-PB-180: 180px;
        --width-PB-200: 200px;
        --width-PB-240: 240px;
        --width-PB-280: 280px;
        --width-PB-300: 300px;
        --width-PB-350: 350px;
        --width-PB-375: 375px;
        --width-PB-400: 400px;
        --width-PB-450: 450px;
        --width-PB-475: 475px;
        --width-PB-500: 500px;
        --width-PB-550: 550px;
        --width-PB-600: 600px;
        --width-PB-680: 680px;
        --width-PB-780: 780px;
        --width-PB-840: 840px;
        --width-PB-880: 880px;
        --width-PB-950: 950px;
        --width-PB-1050: 1050px;
        --width-PB-1080: 1080px;
        --width-PB-1100: 1100px;
        --width-PB-1200: 1200px;
        --width-PB-1250: 1250px;
        --width-PB-1300: 1300px;
        --width-PB-1400: 1400px;
        --width-PB-1500: 1500px;
        --width-PB-1535: 1535px;
        --width-PB-1550: 1550px;
        --width-PB-1600: 1600px;
        --width-PB-1700: 1700px;
        --width-PB-1750: 1750px;
        --width-PB-1800: 1800px;
        --width-PB-1900: 1900px;
        --width-PB-1950: 1950px;
        --width-PB-minimum: 320px;
        --width-PB-em-75: 75em;
        
        /* Height Variables */
        --height-PB-100: 100%;
        --height-PB-75: 75%;
        --height-PB-50: 50%;
        --height-PB-25: 25%;
        --height-PB-15: 15%;
        --height-PB-10: 10%;
        --height-PB-auto: auto;
        --height-PB-px: 1px;
        --height-PB-xxs: 0.125rem;
        --height-PB-xs: 0.25rem;
        --height-PB-sm: 0.5rem;
        --height-PB-md: 1rem;
        --height-PB-lg: 2rem;
        --height-PB-xl: 3rem;
        --height-PB-xxl: 4rem;
        --height-PB-xxxl: 5rem;
        --height-PB-xxxl-1: 6rem;
        --height-PB-xxxl-2: 7rem;
        --height-PB-xxxl-3: 8rem;
        --height-PB-xxxl-4: 9rem;
        --height-PB-xxxl-5: 10rem;
        
        /* PB Game Position Variables */
        --position-PB-static: static;
        --position-PB-relative: relative;
        --position-PB-absolute: absolute;
        --position-PB-fixed: fixed;
        --position-PB-sticky: sticky;

		/* PB Game Top Variables */
		--top-PB-auto: auto;
		--top-PB-0: 0;
		--top-PB-100: 100%;
		--top-PB-98: 98%;
		--top-PB-95: 95%;
		--top-PB-90: 90%;
		--top-PB-85: 85%;
		--top-PB-75: 75%;
		--top-PB-50: 50%;
		--top-PB-35: 35%;
		--top-PB-33: 33%;
		--top-PB-31-5: 31.5%;
		--top-PB-25: 25%;
		--top-PB-20: 20%;
		--top-PB-15: 15%;
		--top-PB-10: 10%;
		--top-PB-5: 5%;
		--top-PB-0: 0;
		--top-PB-xxs: 0.125rem;
		--top-PB-xs: 0.25rem;
		--top-PB-sm: 0.5rem;
		--top-PB-sma: 0.75rem;
		--top-PB-md: 1rem;
		--top-PB-mdlg: 1.15rem;
		--top-PB-lg: 2rem;
		--top-PB-xlg: 2.25rem;
		--top-PB-xl: 3rem;
		--top-PB-xxl: 4rem;
		--top-PB-xxxl: 5rem;
		--top-PB-xxxl-1: 6rem;
		--top-PB-xxxl-2: 7rem;
		--top-PB-xxxl-3: 8rem;
		--top-PB-xxxl-4: 9rem;
		--top-PB-xxxl-5: 10rem;
		--top-PB-xxxl-6: 11rem;
		--top-PB-xxxl-7: 12rem;
		--top-PB-xxxl-8: 13rem;
		--top-PB-xxxl-9: 14rem;
		--top-PB-xxxl-10: 15rem;
		--top-PB-xxxl-11: 16rem;
		--top-PB-xxxl-12: 17rem;
		--top-PB-xxxl-13: 18rem;
		--top-PB-xxxl-14: 19rem;
		--top-PB-xxxl-15: 20rem;
		--top-PB-xxxl-16: 21rem;
		--top-PB-xxxl-17: 22rem;
		--top-PB-xxxl-18: 23rem;
		--top-PB-xxxl-19: 24rem;
		--top-PB-xxxl-20: 25rem;
		--top-PB-xxxl-21: 26rem;
		--top-PB-xxxl-22: 27rem;
		--top-PB-xxxl-23: 28rem;
		--top-PB-xxxl-24: 29rem;
		--top-PB-xxxl-25: 30rem;
		--top-PB-xxxl-25a: 30rem;
		--top-PB-xxxl-25az: 32rem;
		--top-PB-xxxl-25b: 35rem;
		--top-PB-xxxl-25c: 37rem;
		--top-PB-xxxl-26: 40rem;
		--top-PB-xxxl-26a: 45rem;
		--top-PB-xxxl-26b: 48rem;
		--top-PB-xxxl-27: 50rem;

		/* PB Game Right Variables */
		--right-PB-auto: auto;
		--right-PB-0: 0;
		--right-PB-100: 100%;
		--right-PB-75: 75%;
		--right-PB-50: 50%;
		--right-PB-25: 25%;
		--right-PB-35: 35%;
		--right-PB-15: 15%;
		--right-PB-10: 10%;
		--right-PB-5: 5%;
		--right-PB-xxs: 0.125rem;
		--right-PB-xs: 0.25rem;
		--right-PB-sm: 0.5rem;
		--right-PB-md: 1rem;
		--right-PB-lg: 2rem;
		--right-PB-xl: 3rem;
		--right-PB-xxl: 4rem;
		--right-PB-xxxl: 5rem;
		--right-PB-xxxl-1: 6rem;
		--right-PB-xxxl-2: 7rem;

		/* PB Game bottom Variables */
		--bottom-PB-5pc: 5%;
		--bottom-PB-10pc: 10%;
		--bottom-PB-15pc: 15%;
		--bottom-PB-20pc: 20%;
		--bottom-PB-25pc: 25%;
		--bottom-PB-30pc: 30%;
		--bottom-PB-35pc: 35%;
		--bottom-PB-40pc: 40%;
		--bottom-PB-45pc: 45%;
		--bottom-PB-50pc: 50%;
		--bottom-PB-55pc: 55%;
		--bottom-PB-60pc: 60%;
		--bottom-PB-65pc: 65%;
		--bottom-PB-70pc: 70%;
		--bottom-PB-75pc: 75%;
		--bottom-PB-80pc: 80%;
		--bottom-PB-85pc: 85%;
		--bottom-PB-90pc: 90%;
		--bottom-PB-95pc: 95%;
		--bottom-PB-100pc: 100%;
		--bottom-PB-0: 0rem;
		--bottom-PB-xxs: 0.125rem;
		--bottom-PB-xs: 0.25rem;
		--bottom-PB-sm: 0.5rem;
		--bottom-PB-md: 1rem;
		--bottom-PB-lg: 2rem;
		--bottom-PB-xl: 3rem;
		--bottom-PB-xxl: 4rem;
		--bottom-PB-xxxl: 5rem;
		--bottom-PB-xxxl-1: 6rem;
		--bottom-PB-xxxl-2: 7rem;

		/* Left Variables */
		--left-PB-auto: auto;
		--left-PB-0: 0;
		--left-PB-100: 100%;
		--left-PB-75: 75%;
		--left-PB-50: 50%;
		--left-PB-40: 40%;
		--left-PB-35: 35%;
		--left-PB-30: 30%;
		--left-PB-25: 25%;
		--left-PB-24: 24%;
		--left-PB-23: 23%;
		--left-PB-22: 22%;
		--left-PB-20: 20%;
		--left-PB-19: 19%;
		--left-PB-18: 18%;
		--left-PB-17: 17%;
		--left-PB-16: 16%;
		--left-PB-15: 15%;
		--left-PB-10: 10%;
		--left-PB-xxs: 0.125rem;
		--left-PB-xs: 0.25rem;
		--left-PB-sm: 0.5rem;
		--left-PB-sma: 0.75rem;
		--left-PB-md: 1rem;
		--left-PB-mda: 1.45rem;
		--left-PB-lg: 2rem;
		--left-PB-mdlg: 2.65rem;
		--left-PB-xl: 3rem;
		--left-PB-xxl: 4rem;
		--left-PB-xxxl: 5rem;
		--left-PB-xxxl-1: 6rem;
		--left-PB-xxxl-2: 7rem;
		--left-PB-xxxl-3: 8rem;
		--left-PB-xxxl-4: 9rem;
		--left-PB-xxxl-5: 10rem;
		--left-PB-xxxl-6: 11rem;
		--left-PB-xxxl-7: 12rem;
		--left-PB-xxxl-8: 13rem;
		--left-PB-xxxl-9: 14rem;
		--left-PB-xxxl-10: 15rem;
		--left-PB-xxxl-11: 16rem;
		--left-PB-xxxl-12: 17rem;
		--left-PB-xxxl-13: 18rem;
		--left-PB-xxxl-14: 19rem;
		--left-PB-xxxl-15: 20rem;
		--left-PB-xxxl-16: 21rem;
		--left-PB-xxxl-17: 22rem;
		--left-PB-xxxl-18: 23rem;
		--left-PB-xxxl-19: 24rem;
		--left-PB-xxxl-20: 25rem;
		--left-PB-xxxl-21: 26rem;
		--left-PB-xxxl-22: 27rem;
		--left-PB-xxxl-23: 28rem;
		--left-PB-xxxl-24: 29rem;
		--left-PB-xxxl-25: 30rem;
		--left-PB-xxxl-25a: 31rem;
		--left-PB-xxxl-25b: 32rem;
		--left-PB-xxxl-25c: 35rem;
		--left-PB-xxxl-25d: 38rem;
		--left-PB-xxxl-26: 40rem;
		--left-PB-xxxl-26a: 43rem;
		--left-PB-xxxl-27: 50rem;
		--left-PB-xxxl-27a: 55rem;
		--left-PB-xxxl-27b: 57.5rem;
		--left-PB-xxxl-28: 60rem;
		--left-PB-xxxl-28a: 62rem;
		--left-PB-xxxl-28b: 64rem;
		--left-PB-xxxl-28c: 66rem;
		--left-PB-xxxl-29: 70rem;
		--left-PB-xxxl-30: 80rem;
		--left-PB-xxxl-31: 90rem;
		--left-PB-xxxl-32: 100rem;

		/* PB Game Overflow Variables */
		--overflow-PB-visible: visible;
		--overflow-PB-hidden: hidden;
		--overflow-PB-scroll: scroll;
		--overflow-PB-auto: auto;
		--overflow-y-PB-scroll: scroll;

		/* PB Game Scroll Behaviour Variables */
		--scroll-behaviour-PB-auto: auto;
		--scroll-behaviour-PB-smooth: smooth;
		
		/* PB Game Display Variables */
		--display-PB-none: none;
		--display-PB-inline: inline;
		--display-PB-inline-block: inline-block;
		--display-PB-block: block;
		--display-PB-table: table;
		--display-PB-table-cell: table-cell;
		--display-PB-flex: flex;
		--display-PB-inline-flex: inline-flex;

		/* PB Game Flex Direction Variables */
		--flex-direction-PB-row: row;
		--flex-direction-PB-row-reverse: row-reverse;
		--flex-direction-PB-column: column;
		--flex-direction-PB-column-reverse: column-reverse;

		/* PB Game Flex Wrap Variables */
		--flex-wrap-PB: wrap;
		--flex-nowrap-PB: nowrap;
		--flex-wrap-reverse-PB: wrap-reverse;

		/* PB Game Visibility Variables */
		--visibility-PB-visible: visible;
		--visibility-PB-hidden: hidden;
		--visibility-PB-collapse: collapse;

		/* PB Game Opacity Variables */
		--opacity-PB-0: 0;
		--opacity-PB-05: 0.05;
		--opacity-PB-08: 0.08;
		--opacity-PB-10: 0.10;
		--opacity-PB-15: 0.15;
		--opacity-PB-25: 0.25;
		--opacity-PB-35: 0.35;
		--opacity-PB-40: 0.40;
		--opacity-PB-45: 0.45;
		--opacity-PB-50: 0.50;
		--opacity-PB-60: 0.60;
		--opacity-PB-65: 0.65;
		--opacity-PB-75: 0.75;
		--opacity-PB-100: 1;
		
		/* PB Game Border Variables */
		--border-PB-thin: 1px solid hsla(0, 0%, 0%, 0.993);
		--border-PB-thick: 2px solid hsla(0, 0%, 0%, 0.993);
		--border-PB-xthick: 3px solid hsla(188, 98%, 34%, 0.993);
		--border-PB-xxthick: 4px solid hsla(0, 0%, 0%, 0.993);
		--border-PB-xxxthick: 10px solid hsla(188, 98%, 34%, 0.993);
		--border-PB-feather: 10px solid hsla(188, 98%, 34%, 0.993);

		/* PB Game Border Radius Variables */
		--radius-PB-0: 0rem;
		--radius-PB-xxs: 0.125rem;
		--radius-PB-sm: 0.25rem;
		--radius-PB-smmd: 0.35rem;
		--radius-PB-md: 0.5rem;
		--radius-PB-lg: 1rem;
		--radius-PB-xl: 2rem;
		--radius-PB-xxl: 3rem;
		--radius-PB-em-35: 0.35em;

		/* PB Game Box Shadow Variables */
		--shadow-PB-sm: 0 5px 15px rgba(0, 0, 0, 0.1);
		--shadow-PB-md: 0 8px 30px rgba(0, 0, 0, 0.1);
		--shadow-PB-xmd: 7px 5px 9px hsla(0, 0%, 0%, 0.69);
		--shadow-PB-lg: 0 12px 35px rgba(0, 0, 0, 0.15);
		--shadow-PB-xl: 0 16px 50px rgba(0, 0, 0, 0.15);
		--shadow-PB-xxl: 0 24px 60px rgba(0, 0, 0, 0.2);
		--shadow-PB-inset: inset 0 2px 4px 0 hsla(0, 0%, 0%, 0.69);
		--shadow-PB-inset-md: inset 0 4px 8px 0 hsla(0, 0%, 0%, 0.69);
		--shadow-PB-inset-lg: inset 0 6px 12px 0 hsla(0, 0%, 0%, 0.69);
		--shadow-PB-inset-xl: inset 0 8px 16px 0 hsla(0, 0%, 0%, 0.69);
		--shadow-PB-inset-xxl: inset 0 12px 24px 0 hsla(0, 0%, 0%, 0.69);
		--shadow-PB-inset-xxl-1: inset 0 16px 32px 0 hsla(0, 0%, 0%, 0.69);
		--shadow-PB-inset-xxl-1a: inset 0 9px 33px 25px hsla(0, 0%, 0%, 0.19);
		--shadow-PB-inset-xxl-2: inset 0 24px 48px 0 hsla(0, 0%, 0%, 0.69);
		--shadow-PB-inset-xxl-3: inset 0 32px 64px 0 hsla(0, 0%, 0%, 0.69);

		
		/* PB Game Filter Variables */
		--filter-shadow-PB-sm: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.5));
		--filter-shadow-PB-md: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.5));
		--filter-shadow-PB-xmd: drop-shadow(0 0 1rem hsla(0, 0%, 0%, 0.69));
		--filter-shadow-PB-xmda: drop-shadow(0.7rem 0.7rem 1.7rem hsla(0, 0%, 0%, 0.763));
		--filter-shadow-PB-xmdaz: drop-shadow(2rem 2rem 4.9rem hsla(0, 0%, 0%, 0.963));
		--filter-shadow-PB-lg: drop-shadow(0 0 2rem rgba(0, 0, 0, 0.5));
		--filter-shadow-PB-xl: drop-shadow(0 0 3rem rgba(0, 0, 0, 0.5));
		--filter-shadow-PB-xxl: drop-shadow(0 0 4rem rgba(0, 0, 0, 0.5));
		--filter-shadow-PB-inset: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.5)) inset;
		--filter-shadow-PB-inset-md: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.5)) inset;
		--filter-shadow-PB-inset-lg: drop-shadow(0 0 2rem rgba(0, 0, 0, 0.5)) inset;
		--filter-shadow-PB-inset-xl: drop-shadow(0 0 3rem rgba(0, 0, 0, 0.5)) inset;
		--filter-shadow-PB-inset-xxl: drop-shadow(0 0 4rem rgba(0, 0, 0, 0.5)) inset;
		--filter-shadow-PB-inset-xxxl: drop-shadow(0 0 5rem rgba(0, 0, 0, 0.5)) inset;
		--filter-shadow-PB-inset-xxxxl: drop-shadow(0 0 6rem rgba(0, 0, 0, 0.5)) inset;
		--filter-shadow-PB-inset-xxxxxl: drop-shadow(0 0 7rem rgba(0, 0, 0, 0.5)) inset;

		/* PB Game Transition Variables */
		--transition-PB-fast: all 0.1s ease-in-out;
		--transition-PB-moderate: all 0.3s ease-in-out;
		--transition-PB-xmoderate: all 0.5s ease-in-out;
		--transition-PB-slow: all 0.7s ease-in-out;

		/* PB Game Rotate */
		--rotate-PB-0: 0;
		--rotate-PB-1: 1deg;
		--rotate-PB-2: 2deg;
		--rotate-PB-3: 3deg;
		--rotate-PB-5: 5deg;
		--rotate-PB-6: 6deg;
		--rotate-PB-7: 7deg;
		--rotate-PB-8: 8deg;
		--rotate-PB-9: 9deg;
		--rotate-PB-10: 10deg;
		--rotate-PB-15: 15deg;
		--rotate-PB-45: 45deg;
		--rotate-PB-90: 90deg;
		--rotate-PB-180: 180deg;
		--rotate-PB-270: 270deg;
		--rotate-PB-359: 359deg;
		--rotate-PB-358: 358deg;
		--rotate-PB-355: 355deg;
		--rotate-PB-350: 350deg;
		--rotate-PB-345: 345deg;
		--rotate-PB-335: 335deg;
		--rotate-PB-330: 330deg;
		--rotate-PB-325: 325deg;
		--rotate-PB-320: 320deg;
		--rotate-PB-315: 315deg;
		--rotate-PB-310: 310deg;
		--rotate-PB-305: 305deg;
		--rotate-PB-300: 300deg;
		--rotate-PB-295: 295deg;
		--rotate-PB-290: 290deg;


		/* PB Game Grid Variables */
		--grid-PB-gap: 1rem;
		--grid-PB-gap-sm: 0.5rem;
		--grid-PB-gap-lg: 1.5rem;
		--grid-PB-gap-xl: 2rem;
		--grid-PB-gap-xxl: 3rem;
		--grid-PB-gap-xxxl: 4rem;
		--grid-PB-gap-xxxxl: 5rem;
		--grid-PB-gap-xxxxxl: 6rem;
		--grid-PB-gap-xxxxxl-2: 7rem;
		--grid-PB-gap-xxxxxl-3: 8rem;
		--grid-PB-gap-xxxxxl-4: 9rem;
		--grid-PB-gap-xxxxxl-5: 10rem;
		--grid-PB-gap-xxxxxl-6: 11rem;
		--grid-PB-gap-xxxxxl-7: 12rem;

		/* PB Game Grid Template Variables */
		--grid-template-PB-1: repeat(1, 1fr);
		--grid-template-PB-2: repeat(2, 1fr);
		--grid-template-PB-3: repeat(3, 1fr);
		--grid-template-PB-4: repeat(4, 1fr);
		--grid-template-PB-5: repeat(5, 1fr);
		--grid-template-PB-6: repeat(6, 1fr);
		--grid-template-PB-7: repeat(7, 1fr);
		--grid-template-PB-8: repeat(8, 1fr);
		--grid-template-PB-9: repeat(9, 1fr);
		--grid-template-PB-10: repeat(10, 1fr);
		--grid-template-PB-11: repeat(11, 1fr);
		--grid-template-PB-12: repeat(12, 1fr);
		--grid-template-PB-13: repeat(13, 1fr);
		--grid-template-PB-14: repeat(14, 1fr);
		--grid-template-PB-15: repeat(15, 1fr);
		--grid-template-PB-16: repeat(16, 1fr);
		--grid-template-PB-17: repeat(17, 1fr);

		/* PB Game Grid Template Columns Variables */
		--grid-template-columns-PB-1: repeat(1, 1fr);
		--grid-template-columns-PB-2: repeat(2, 1fr);
		--grid-template-columns-PB-3: repeat(3, 1fr);
		--grid-template-columns-PB-4: repeat(4, 1fr);
		--grid-template-columns-PB-5: repeat(5, 1fr);
		--grid-template-columns-PB-6: repeat(6, 1fr);
		--grid-template-columns-PB-7: repeat(7, 1fr);
		--grid-template-columns-PB-8: repeat(8, 1fr);
		--grid-template-columns-PB-9: repeat(9, 1fr);
		--grid-template-columns-PB-10: repeat(10, 1fr);
		--grid-template-columns-PB-11: repeat(11, 1fr);
		--grid-template-columns-PB-12: repeat(12, 1fr);
		--grid-template-columns-PB-13: repeat(13, 1fr);

		/* PB Game Grid Template Rows Variables */
		--grid-template-rows-PB-1: repeat(1, 1fr);
		--grid-template-rows-PB-2: repeat(2, 1fr);
		--grid-template-rows-PB-3: repeat(3, 1fr);
		--grid-template-rows-PB-4: repeat(4, 1fr);
		--grid-template-rows-PB-5: repeat(5, 1fr);
		--grid-template-rows-PB-6: repeat(6, 1fr);
		--grid-template-rows-PB-7: repeat(7, 1fr);
		--grid-template-rows-PB-8: repeat(8, 1fr);
		--grid-template-rows-PB-9: repeat(9, 1fr);
		--grid-template-rows-PB-10: repeat(10, 1fr);
		--grid-template-rows-PB-11: repeat(11, 1fr);
		--grid-template-rows-PB-12: repeat(12, 1fr);
		--grid-template-rows-PB-13: repeat(13, 1fr);

		/* PB Game Flex Variables */
		--flex-PB-1: 1;
		--flex-PB-2: 2;
		--flex-PB-3: 3;
		--flex-PB-4: 4;
		--flex-PB-5: 5;
		--flex-PB-6: 6;
		--flex-PB-7: 7;
		--flex-PB-8: 8;
		--flex-PB-9: 9;
		--flex-PB-10: 10;
		--flex-PB-11: 11;
		--flex-PB-12: 12;
		--flex-PB-13: 13;
		--flex-PB-14: 14;
		--flex-PB-15: 15;
		--flex-PB-16: 16;
		--flex-PB-17: 17;
		--flex-PB-18: 18;
		--flex-PB-19: 19;
		--flex-PB-20: 20;
		--flex-PB-21: 21;

		/* PB Game Flex Direction Variables */
		--flex-direction-PB-row: row;
		--flex-direction-PB-row-reverse: row-reverse;
		--flex-direction-PB-column: column;
		--flex-direction-PB-column-reverse: column-reverse;

		/* PB Game Flex Wrap Variables */
		--flex-PB-wrap: wrap;
		--flex-PB-nowrap: nowrap;
		--flex-PB-wrap-reverse: wrap-reverse;

		/* Flex Justify Content Variables */
		--justify-content-PB-flex-start: flex-start;
		--justify-content-PB-flex-end: flex-end;
		--justify-content-PB-center: center;
		--justify-content-PB-space-between: space-between;
		--justify-content-PB-space-around: space-around;
		--justify-content-PB-space-evenly: space-evenly;

		/* PB Game Flex Align Items Variables */
		--align-items-PB-flex-start: flex-start;
		--align-items-PB-flex-end: flex-end;
		--align-items-PB-center: center;
		--align-items-PB-baseline: baseline;
		--align-items-PB-stretch: stretch;

		/* PB Game Flex Align Content Variables */
		--align-content-PB-flex-start: flex-start;
		--align-content-PB-flex-end: flex-end;
		--align-content-PB-center: center;
		--align-content-PB-space-between: space-between;
		--align-content-PB-space-around: space-around;
		--align-content-PB-stretch: stretch;

		/* PB Game Flex Align Self Variables */
		--align-self-PB-auto: auto;
		--align-self-PB-flex-start: flex-start;
		--align-self-PB-flex-end: flex-end;
		--align-self-PB-center: center;
		--align-self-PB-baseline: baseline;
		--align-self-PB-stretch: stretch;

		/* PB Game Flex Order Variables */
		--order-PB-1: 1;
		--order-PB-2: 2;
		--order-PB-3: 3;
		--order-PB-4: 4;
		--order-PB-5: 5;
		--order-PB-6: 6;
		--order-PB-7: 7;
		--order-PB-8: 8;
		--order-PB-9: 9;
		--order-PB-10: 10;
		--order-PB-11: 11;
		--order-PB-12: 12;
		--order-PB-13: 13;
		--order-PB-14: 14;
		--order-PB-15: 15;
		--order-PB-16: 16;
		--order-PB-17: 17;
		--order-PB-18: 18;
		--order-PB-19: 19;
		--order-PB-20: 20;
		--order-PB-21: 21;

		/* Z-Index Variables */
		--z-index-PB-1: 100;
		--z-index-PB-2: 200;
		--z-index-PB-3: 300;
		--z-index-PB-4: 400;
		--z-index-PB-5: 500;
		--z-index-PB-6: 600;
		--z-index-PB-7: 700;
		--z-index-PB-8: 800;
		--z-index-PB-9: 900;
		--z-index-PB-10: 1000;
		--z-index-PB-11: 1100;
		--z-index-PB-12: 1200;
		--z-index-PB-13: 1300;
		--z-index-PB-14: 1400;
		--z-index-PB-15: 1500;
		--z-index-PB-16: 1600;
		--z-index-PB-17: 1700;
		--z-index-PB-18: 1800;
		--z-index-PB-19: 1900;
		--z-index-PB-20: 2000;

		/* PB Game Container Query Variables */
		--container-query-PB-1: 1;
		--container-query-PB-2: 2;
		--container-query-PB-3: 3;
		--container-query-PB-4: 4;
		--container-query-PB-5: 5;
		--container-query-PB-6: 6;
		--container-query-PB-7: 7;
		--container-query-PB-8: 8;
		--container-query-PB-9: 9;
		--container-query-PB-10: 10;
		--container-query-PB-11: 11;
		--container-query-PB-12: 12;
		--container-query-PB-13: 13;
		--container-query-PB-14: 14;
		--container-query-PB-15: 15;
		--container-query-PB-16: 16;
		--container-query-PB-17: 17;
		--container-query-PB-18: 18;
		--container-query-PB-19: 19;
		--container-query-PB-20: 20;

		/* PB Game Container Query Breakpoint Variables */
		--container-query-breakpoint-PB-1: 1;
		--container-query-breakpoint-PB-2: 2;
		--container-query-breakpoint-PB-3: 3;
		--container-query-breakpoint-PB-4: 4;
		--container-query-breakpoint-PB-5: 5;
		--container-query-breakpoint-PB-6: 6;
		--container-query-breakpoint-PB-7: 7;
		--container-query-breakpoint-PB-8: 8;
		--container-query-breakpoint-PB-9: 9;
		--container-query-breakpoint-PB-10: 10;
		--container-query-breakpoint-PB-11: 11;
		--container-query-breakpoint-PB-12: 12;
		--container-query-breakpoint-PB-13: 13;
		--container-query-breakpoint-PB-14: 14;
		--container-query-breakpoint-PB-15: 15;
		--container-query-breakpoint-PB-16: 16;
		--container-query-breakpoint-PB-17: 17;
		--container-query-breakpoint-PB-18: 18;
		--container-query-breakpoint-PB-19: 19;
		--container-query-breakpoint-PB-20: 20;

		/* PB Game Container-Type */
		--container-type-PB-1: inline-size;
		--container-type-PB-2: block-size;
		--container-type-PB-3: min-inline-size;
		--container-type-PB-4: min-block-size;
		--container-type-PB-5: max-inline-size;
		--container-type-PB-6: max-block-size;
		--container-type-PB-7: width;
		--container-type-PB-8: height;
		--container-type-PB-9: min-width;
		--container-type-PB-10: min-height;
		--container-type-PB-11: max-width;
		--container-type-PB-12: max-height;
		--container-type-PB-13: aspect-ratio;
		--container-type-PB-14: min-aspect-ratio;
		--container-type-PB-15: max-aspect-ratio;

		/* PB Game Container Name */
		--container-name-PB-1: Index_Main_Container;
		--container-name-PB-2: About_Main_Container;
		--container-name-PB-3: Projects_Main_Container;
		--container-name-PB-4: Contact_Main_Container;
		--container-name-PB-5: Footer_Main_Container;

		/* PB Game UTILITY CLASSES */

	}

`;

powerballGame_sharedStyles.shell = /*css*/ `

	.powerball-game_shell {
		margin: var(--margin-PB-0);
		padding: var(--PB-game-padding-0);
	}

`;

powerballGame_sharedStyles.container = /*css*/ `

	.container {
		display: grid;
		grid-template-columns: 2fr;
		grid-template-rows: auto;
		gap: var(--grid-PB-gap);
	}

	.pb-h1 {
		font-family: var(--ff-PB-chango);
		font-size: var(--fs-PB-em-3-4);
		font-weight: var(--fw-PB-bold);
		color: var(--PB-game-color-3);	
	}

	.pb-paragraph {
		font-family: var(--ff-PB-titillium-web);
		font-size: var(--fs-PB-em-1-4);
		font-weight: var(--fw-PB-light);
		color: var(--PB-game-color-4);	
	}
`;

powerballGame_sharedStyles.queries = /*css*/ `

`;

export { powerballGame_sharedStyles };
