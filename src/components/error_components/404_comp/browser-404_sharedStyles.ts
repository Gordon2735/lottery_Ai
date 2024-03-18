'use strict';
import { Ierror404SharedStyles } from '../errorInterfaces/Ierror404.js';

const error404_sharedStyles: Ierror404SharedStyles = {
	browser404: ``
};

error404_sharedStyles.browser404 = /*css*/ `

        /* ERRORS CSS STYLE FILE */

    @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&family=Titillium+Web:ital,wght@0,200;0,400;0,700;1,200&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Allerta+Stencil&family=Bagel+Fat+One&family=Black+Ops+One&display=swap');

    /* 
        font-family: 'Source Code Pro', monospace;
        font-family: 'Titillium Web', sans-serif; 
        font-family: 'Alberta Stencil', monospace;
        font-family: 'Bagel Fat One', sans-serif; 
    */

    :root {
        /* Scrollbar Colors & Effects Variables*/
        --scrollbar-background-1: hsla(201, 11%, 53%, 0.99);
        --scrollbar-thumb-1: hsla(210, 2%, 74%, 0.99);
        --scrollbar-thumb_hover-1: hsla(213, 62%, 45%, 0.99);
        --scrollbar-border-1: 0.18em solid hsla(201, 11%, 53%, 0.99);
        --scrollbar-box-shadow-1: inset 0 0 6px hsla(0, 0%, 0%, 0.6);
        --scrollbar-thumb-clr-1: hsla(0, 0%, 41%, 0.99);

        /* Background Image */
        --bgImage-moneyPile: url('../images/033e_sc_lottery.webp');

        /* Background Size */
        --bg-size-1: cover;

        /* bgRepeat */
        --bg-repeat-1: repeat;
        --bg-repeat-2: no-repeat;

        /* bg-blend-mode */
        --bg-blend-mode-normal: normal;
        --bg-blend-mode-overlay: overlay;
        --bg-blend-mode-screen: screen;

        /* Background Variables */
        --bg-clr-dark: hsla(0, 0%, 20%, 0.997);
        --bg-clr-light: hsla(0, 0%, 92%, 0.997);
        --bg-clr-white: hsla(0, 0%, 100%, 0.997);
        --bg-clr-black: hsla(0, 0%, 0%, 0.997);
        --bg-clr-red: hsla(0, 100%, 50%, 0.997);
        --bg-clr-chartreuse: hsla(90, 100%, 50%, 0.997);
        --bg-clr-green: hsla(120, 100%, 25%, 0.997);
        --bg-clr-blue: hsla(240, 100%, 50%, 0.997);
        --bg-clr-yellow: hsla(60, 100%, 50%, 0.997);
        --bg-clr-purple: hsla(300, 100%, 50%, 0.997);
        --bg-clr-cyan: hsla(180, 100%, 50%, 0.997);
        --bg-clr-magenta: hsla(300, 100%, 50%, 0.997);
        --bg-clr-orange: hsla(30, 100%, 50%, 0.997);
        --bg-clr-silver: hsla(0, 0%, 75%, 0.997);
        --bg-clr-gold: hsla(45, 100%, 50%, 0.997);
        --bg-clr-bronze: hsla(30, 100%, 50%, 0.997);
        --bg-clr-platinum: hsla(0, 0%, 90%, 0.997);
        --bg-clr-amber: hsla(45, 100%, 50%, 0.997);
        --bg-clr-emerald: hsla(120, 100%, 25%, 0.997);
        --bg-clr-sapphire: hsla(240, 100%, 50%, 0.997);
        --bg-clr-ruby: hsla(0, 100%, 50%, 0.997);
        --bg-clr-diamond: hsla(180, 100%, 50%, 0.997);
        --bg-clr-pearl: hsla(0, 0%, 100%, 0.997);
        --bg-clr-onyx: hsla(0, 0%, 0%, 0.997);
        --bg-clr-amethyst: hsla(300, 100%, 50%, 0.997);
        --bg-clr-topaz: hsla(45, 100%, 50%, 0.997);
        --bg-clr-jade: hsla(120, 100%, 25%, 0.997);
        --bg-clr-citrine: hsla(45, 100%, 50%, 0.997);
        --bg-clr-turquoise: hsla(180, 100%, 50%, 0.997);
        --bg-clr-lapis: hsla(240, 100%, 50%, 0.997);
        --bg-clr-rose: hsla(0, 100%, 50%, 0.997);
        --bg-clr-ivory: hsla(0, 0%, 100%, 0.997);
        --bg-clr-ebony: hsla(0, 0%, 0%, 0.997);
        --bg-clr-azure: hsla(240, 100%, 50%, 0.997);
        --bg-clr-cobalt: hsla(240, 100%, 50%, 0.997);
        --bg-clr-steel: hsla(0, 0%, 75%, 0.997);
        --bg-clr-brass: hsla(45, 100%, 50%, 0.997);
        --bg-clr-copper: hsla(30, 100%, 50%, 0.997);
        --bg-clr-tin: hsla(0, 0%, 75%, 0.997);
        --bg-clr-lead: hsla(0, 0%, 0%, 0.997);
        --bg-clr-mercury: hsla(0, 0%, 75%, 0.997);
        --bg-clr-argon: hsla(0, 0%, 75%, 0.997);
        --bg-clr-neon: hsla(0, 0%, 75%, 0.997);
        --bg-clr-helium: hsla(0, 0%, 75%, 0.997);
        --bg-clr-hydrogen: hsla(0, 0%, 75%, 0.997);
        --bg-clr-oxygen: hsla(0, 0%, 75%, 0.997);
        --bg-clr-nitrogen: hsla(0, 0%, 75%, 0.997);
        --bg-clr-carbon: hsla(0, 0%, 75%, 0.997);
        --bg-clr-silicon: hsla(0, 0%, 75%, 0.997);
        --bg-clr-iron: hsla(0, 0%, 75%, 0.997);
        --bg-clr-calcium: hsla(0, 0%, 75%, 0.997);
        --bg-clr-sodium: hsla(0, 0%, 75%, 0.997);
        --bg-clr-potassium: hsla(0, 0%, 75%, 0.997);
        --bg-clr-magnesium: hsla(0, 0%, 75%, 0.997);
        --bg-clr-aluminum: hsla(0, 0%, 75%, 0.997);
        --bg-clr-phosphorus: hsla(0, 0%, 75%, 0.997);
        --bg-clr-sulfur: hsla(0, 0%, 75%, 0.997);
        --bg-clr-chlorine: hsla(0, 0%, 75%, 0.997);
        --bg-clr-fluorine: hsla(0, 0%, 75%, 0.997);
        --bg-clr-bromine: hsla(0, 0%, 75%, 0.997);
        --bg-clr-iodine: hsla(0, 0%, 75%, 0.997);
        --bg-clr-astatine: hsla(0, 0%, 75%, 0.997);
        --bg-clr-radon: hsla(0, 0%, 75%, 0.997);
        --bg-clr-francium: hsla(0, 0%, 75%, 0.997);
        --bg-clr-radium: hsla(0, 0%, 75%, 0.997);
        --bg-clr-actinium: hsla(0, 0%, 75%, 0.997);
        --bg-clr-thorium: hsla(0, 0%, 75%, 0.997);
        --bg-clr-protactinium: hsla(0, 0%, 75%, 0.997);
        --bg-clr-uranium: hsla(0, 0%, 75%, 0.997);
        --bg-clr-neptunium: hsla(0, 0%, 75%, 0.997);
        --bg-clr-plutonium: hsla(0, 0%, 75%, 0.997);
        --bg-clr-americium: hsla(0, 0%, 75%, 0.997);
        --bg-clr-curium: hsla(0, 0%, 75%, 0.997);
        --bg-clr-berkelium: hsla(0, 0%, 75%, 0.997);
        --bg-clr-californium: hsla(0, 0%, 75%, 0.997);


        /* Background Gradients */
        --bg-gradient-dark: linear-gradient(90deg, hsla(0, 0%, 20%, 0.997), hsla(0, 0%, 10%, 0.997));
        --bg-gradient-dark-1: linear-gradient(90deg, hsla(187, 52%, 80%, 0.993) 0%, hsla(188, 98%, 34%, 0.993) 100%);
        --bg-gradient-dark-2: linear-gradient(178.25deg, hsla(0, 0%, 20%, 0.993), 87%, hsla(188, 35%, 58%, 0.993));
        --bg-gradient-light: linear-gradient(90deg, hsla(0, 0%, 92%, 0.997), hsla(0, 0%, 100%, 0.997));
        --bg-gradient-white: linear-gradient(90deg, hsla(0, 0%, 100%, 0.997), hsla(0, 0%, 100%, 0.997));
        --bg-gradient-black: linear-gradient(90deg, hsla(0, 0%, 0%, 0.997), hsla(0, 0%, 0%, 0.997));
        --bg-gradient-red: linear-gradient(90deg, hsla(0, 100%, 50%, 0.997), hsla(0, 100%, 25%, 0.997));
        --bg-gradient-chartreuse: linear-gradient(90deg, hsla(90, 100%, 50%, 0.997), hsla(90, 100%, 25%, 0.997));


        /* Color Variables */
        --clr-dark: hsla(0, 0%, 20%, 0.997);
        --clr-light: hsla(0, 0%, 92%, 0.997);
        --clr-white: hsla(0, 0%, 100%, 0.997);
        --clr-black: hsla(0, 0%, 0%, 0.997);
        --clr-red: hsla(0, 100%, 50%, 0.997);
        --clr-chartreuse: hsla(90, 100%, 50%, 0.997);
        --clr-green: hsla(120, 100%, 25%, 0.997);
        --clr-blue: hsla(240, 100%, 50%, 0.997);


        /* Font-Family Variables */
        --ff-src-code-pro: 'Source Code Pro', monospace;
        --ff-titillium-web: 'Titillium Web', sans-serif;
        --ff-allerta-stencil: 'Allerta Stencil', monospace;
        --ff-bagel-fat-one: 'Bagel Fat One', sans-serif;


        /* Font Sizes */
        /* Rem */
        --fs-xxs: 0.5rem;
        --fs-xs: 0.75rem;
        --fs-sm: 1rem;
        --fs-md: 1.25rem;
        --fs-lg: 1.5rem;
        --fs-1xl: 2rem;
        --fs-2xl: 3rem;
        --fs-3xl: 4rem;
        --fs-4xl: 5rem;
        --fs-5xl: 6rem;
        --fs-6xl: 7rem;
        /* Em */
        --fs-em-0-1: 0.1em;
        --fs-em-0-2: 0.2em;
        --fs-em-0-4: 0.4em;
        --fs-em-0-6: 0.6em;
        --fs-em-0-8: 0.8em;
        --fs-em-1: 1em;
        --fs-em-1-2: 1.2em;
        --fs-em-1-4: 1.4em;
        --fs-em-1-6: 1.6em;
        --fs-em-1-8: 1.8em;
        --fs-em-2: 2em;
        --fs-em-2-2: 2.2em;
        --fs-em-2-4: 2.4em;
        --fs-em-2-6: 2.6em;
        --fs-em-2-8: 2.8em;
        --fs-em-3: 3em;
        --fs-em-3-2: 3.2em;
        --fs-em-3-4: 3.4em;
        --fs-em-3-6: 3.6em;
        --fs-em-3-8: 3.8em;
        --fs-em-4: 4em;
        --fs-em-4-2: 4.2em;
        --fs-em-4-4: 4.4em;
        --fs-em-4-6: 4.6em;
        --fs-em-4-8: 4.8em;
        --fs-em-5: 5em;

        /* Font Weight Variables */
        --fw-thin: 100;
        --fw-extra_light: 200;
        --fw-light: 300;
        --fw-normal: 400;
        --fw-medium: 500;
        --fw-semibold: 600;
        --fw-bold: 700;
        --fw-extra_bold: 800;
        --fw-black: 900;

        /* Text Variables */
        --text-1: 0.5rem;
        --text-2: 0.75rem;

        /* Text Shadow Variables */
        --text-shadow-dark: 1px 1px 2px hsla(0, 0%, 0%, 0.997);
        --text-shadow-light: 1px 1px 2px hsla(0, 0%, 100%, 0.997);
        --text-shadow-white: 1px 1px 2px hsla(0, 0%, 100%, 0.997);
        --text-shadow-black: 1px 1px 2px hsla(0, 0%, 0%, 0.997);
        --text-shadow-red: 1px 1px 2px hsla(0, 100%, 50%, 0.997);
        --text-shadow-chartreuse: 1px 1px 2px hsla(90, 100%, 50%, 0.997);
        --text-shadow-inset: 0 2px 5px rgba(0, 0, 0, 0.5) inset;
        --text-shadow-inset-md: 0 4px 10px rgba(0, 0, 0, 0.5) inset;
        --text-shadow-inset-lg: 0 6px 15px rgba(0, 0, 0, 0.5) inset;
        --text-shadow-inset-xl: 0 8px 20px rgba(0, 0, 0, 0.5) inset;
        --text-shadow-inset-xxl: 0 10px 25px rgba(0, 0, 0, 0.5) inset;
        --text-shadow-inset-xxxl: 0 12px 30px rgba(0, 0, 0, 0.5) inset;
        --text-shadow-inset-xxxxl: 0 14px 35px rgba(0, 0, 0, 0.5) inset;
        --text-shadow-inset-xxxxxl: 0 16px 40px rgba(0, 0, 0, 0.5) inset;

        --text-color-1: #000;
        --text-color-2: #fff;
        --text-color-3: #f4f4f4;
        --text-color-4: #333;


        /* Text Background Color Variables */
        --text-bckgrnd-color-1: #000;
        --text-bckgrnd-color-2: #fff;
        --text-bckgrnd-color-3: #f4f4f4;
        --text-bckgrnd-color-4: #333;

        /* Text Hover Color Variables */
        --text-hover-color-1: #000;
        --text-hover-color-2: #fff;
        --text-hover-color-3: #f4f4f4;
        --text-hover-color-4: #333;

        /* Text Hover Background Color Variables */
        --text-hover-bckgrnd-color-4: #333;

        /* Text Active Color Variables */
        --text-active-color-1: #000;
        --text-active-color-2: #fff;
        --text-active-color-3: #f4f4f4;
        --text-active-color-4: #333;

        /* Text Active Background Color Variables */
        --text-active-bckgrnd-color-1: #000;
        --text-active-bckgrnd-color-2: #fff;
        --text-active-bckgrnd-color-3: #f4f4f4;
        --text-active-bckgrnd-color-4: #333;

        /* Text Focus Color Variables */
        --text-focus-color-1: #000;
        --text-focus-color-2: #fff;
        --text-focus-color-3: #f4f4f4;
        --text-focus-color-4: #333;


        /* Spacing Variables */
        --spacing-xxs: 0.25rem;
        --spacing-xs: 0.5rem;
        --spacing-sm: 1rem;
        --spacing-md: 1.5rem;
        --spacing-lg: 2rem;
        --spacing-xl: 3rem;
        --spacing-2xl: 4rem;
        --spacing-3xl: 5rem;

        /* Line Height Variables */
        --lh-1: 1;
        --lh-2: 1.25;
        --lh-3: 1.5;
        --lh-4: 1.75;
        --lh-5: 2;


        /* Border Variables */
        --border-dark: 1.25px solid hsla(0, 0%, 20%, 0.997);
        --border-light: 1.25px solid hsla(0, 0%, 92%, 0.997);
        --border-white: 1.25px solid hsla(0, 0%, 100%, 0.997);
        --border-black: 1.25px solid hsla(0, 0%, 0%, 0.997);
        --border-red: 1.25px solid hsla(0, 100%, 50%, 0.997);
        --border-chartreuse: 1.25px solid hsla(90, 100%, 50%, 0.997);
        --border-thin: 1px solid hsla(0, 0%, 0%, 0.993);
        --border-thick: 2px solid hsla(0, 0%, 0%, 0.993);
        --border-xthick: 3px solid hsla(188, 98%, 34%, 0.993);
        --border-2xthick: 4px solid hsla(0, 0%, 0%, 0.993);
        --border-3xthick: 10px solid hsla(188, 98%, 34%, 0.993);
        --border-feather: 10px solid hsla(188, 98%, 34%, 0.993);


        /* Border-Radius Variables */
        --border-radius-sm: 0.25rem;
        --border-radius-md: 0.5rem;
        --border-radius-lg: 1rem;
        --border-radius-xl: 2rem;
        --border-radius-2xl: 3rem;
        --border-radius-3xl: 4rem;
        --radius-0: 0rem;
        --radius-xxs: 0.125rem;
        --radius-sm: 0.25rem;
        --radius-smmd: 0.35rem;
        --radius-md: 0.5rem;
        --radius-lg: 1rem;
        --radius-xl: 2rem;
        --radius-2xl: 3rem;
        --radius-em-35: 0.35em;


        /* Box Shadow Variables */
        --box-shadow-dark: 1px 1px 2px hsla(0, 0%, 20%, 0.997);
        --box-shadow-light: 1px 1px 2px hsla(0, 0%, 92%, 0.997);
        --box-shadow-white: 1px 1px 2px hsla(0, 0%, 100%, 0.997);
        --box-shadow-black: 1px 1px 2px hsla(0, 0%, 0%, 0.997);
        --box-shadow-red: 1px 1px 2px hsla(0, 100%, 50%, 0.997);
        --box-shadow-chartreuse: 1px 1px 2px hsla(90, 100%, 50%, 0.997);
        --shadow-xxl: 0 24px 60px rgba(0, 0, 0, 0.2);
        --shadow-inset: inset 0 2px 4px 0 hsla(0, 0%, 0%, 0.69);
        --shadow-inset-md: inset 0 4px 8px 0 hsla(0, 0%, 0%, 0.69);
        --shadow-inset-lg: inset 0 6px 12px 0 hsla(0, 0%, 0%, 0.69);
        --shadow-inset-xl: inset 0 8px 16px 0 hsla(0, 0%, 0%, 0.69);
        --shadow-inset-xxl: inset 0 12px 24px 0 hsla(0, 0%, 0%, 0.69);
        --shadow-inset-xxl-1: inset 0 16px 32px 0 hsla(0, 0%, 0%, 0.69);
        --shadow-inset-xxl-1a: inset 0 9px 33px 25px hsla(0, 0%, 0%, 0.19);
        --shadow-inset-xxl-2: inset 0 24px 48px 0 hsla(0, 0%, 0%, 0.69);
        --shadow-inset-xxl-3: inset 0 32px 64px 0 hsla(0, 0%, 0%, 0.69);


        /* Filter Variables */
        --filter-dark: drop-shadow(1px 1px 2px hsla(0, 0%, 0%, 0.997));
        --filter-light: drop-shadow(1px 1px 2px hsla(0, 0%, 100%, 0.997));
        --filter-white: drop-shadow(1px 1px 2px hsla(0, 0%, 100%, 0.997));
        --filter-black: drop-shadow(1px 1px 2px hsla(0, 0%, 0%, 0.997));
        --filter-red: drop-shadow(1px 1px 2px hsla(0, 100%, 50%, 0.997));
        --filter-chartreuse: drop-shadow(1px 1px 2px hsla(90, 100%, 50%, 0.997));
        --filter-shadow-sm: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.5));
        --filter-shadow-md: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.5));
        --filter-shadow-xmd: drop-shadow(0 0 1rem hsla(0, 0%, 0%, 0.69));
        --filter-shadow-xmda: drop-shadow(0.7rem 0.7rem 1.7rem hsla(0, 0%, 0%, 0.763));
        --filter-shadow-xmdaz: drop-shadow(2rem 2rem 4.9rem hsla(0, 0%, 0%, 0.963));
        --filter-shadow-lg: drop-shadow(0 0 2rem rgba(0, 0, 0, 0.5));
        --filter-shadow-xl: drop-shadow(0 0 3rem rgba(0, 0, 0, 0.5));
        --filter-shadow-xxl: drop-shadow(0 0 4rem rgba(0, 0, 0, 0.5));
        --filter-shadow-inset: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.5)) inset;
        --filter-shadow-inset-md: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.5)) inset;
        --filter-shadow-inset-lg: drop-shadow(0 0 2rem rgba(0, 0, 0, 0.5)) inset;
        --filter-shadow-inset-xl: drop-shadow(0 0 3rem rgba(0, 0, 0, 0.5)) inset;
        --filter-shadow-inset-xxl: drop-shadow(0 0 4rem rgba(0, 0, 0, 0.5)) inset;
        --filter-shadow-inset-xxxl: drop-shadow(0 0 5rem rgba(0, 0, 0, 0.5)) inset;
        --filter-shadow-inset-xxxxl: drop-shadow(0 0 6rem rgba(0, 0, 0, 0.5)) inset;
        --filter-shadow-inset-xxxxxl: drop-shadow(0 0 7rem rgba(0, 0, 0, 0.5)) inset;

        /* Transition Variables */
        --transition-xfast: 0.05s;
        --transition-fast: 0.1s;
        --transition-medium: 0.3s;
        --transition-slow: 0.5s;
        --transition-faster: all 0.1s ease-in-out;
        --transition-moderate: all 0.3s ease-in-out;
        --transition-xmoderate: all 0.5s ease-in-out;
        --transition-slower: all 0.7s ease-in-out;

        /* Animation Variables */
        --animation-xfast: 0.05s;
        --animation-fast: 0.1s;
        --animation-medium: 0.3s;
        --animation-slow: 0.5s;

        /* Rotate */
        --rotate-0: 0;
        --rotate-1: 1deg;
        --rotate-2: 2deg;
        --rotate-3: 3deg;
        --rotate-5: 5deg;
        --rotate-6: 6deg;
        --rotate-7: 7deg;
        --rotate-8: 8deg;
        --rotate-9: 9deg;
        --rotate-10: 10deg;
        --rotate-15: 15deg;
        --rotate-45: 45deg;
        --rotate-90: 90deg;
        --rotate-180: 180deg;
        --rotate-270: 270deg;
        --rotate-359: 359deg;
        --rotate-358: 358deg;
        --rotate-355: 355deg;
        --rotate-350: 350deg;
        --rotate-345: 345deg;
        --rotate-335: 335deg;
        --rotate-330: 330deg;
        --rotate-325: 325deg;
        --rotate-320: 320deg;
        --rotate-315: 315deg;
        --rotate-310: 310deg;
        --rotate-305: 305deg;
        --rotate-300: 300deg;
        --rotate-295: 295deg;
        --rotate-290: 290deg;

        /* Text Align Variables */
        --text-align-left: left;
        --text-align-right: right;
        --text-align-center: center;
        --text-align-justify: justify;

        /* Text Transform Variables */
        --text-transform-uppercase: uppercase;
        --text-transform-lowercase: lowercase;
        --text-transform-capitalize: capitalize;
        --text-transform-none: none;

        /* Text Decoration Variables */
        --text-decoration-none: none;
        --text-decoration-underline: underline;
        --text-decoration-overline: overline;
        --text-decoration-line-through: line-through;

        /* Text Overflow Variables */
        --text-overflow-clip: clip;
        --text-overflow-ellipsis: ellipsis;

        /* Text White Space Variables */
        --white-space-normal: normal;
        --white-space-nowrap: nowrap;
        --white-space-pre: pre;
        --white-space-pre-line: pre-line;
        --white-space-pre-wrap: pre-wrap;

        /* Text Break Variables */
        --word-break-normal: normal;
        --word-break-break-all: break-all;
        --word-break-keep-all: keep-all;
        --word-break-break-word: break-word;

        /* Margin Variables */
        --margin--3: -3rem;
        --margin--2: -2rem;
        --margin--1: -1rem;
        --margin-0: 0rem;
        --margin-auto: auto;
        --margin-xxsm: 0.19rem;
        --margin-xxs: 0.25rem;
        --margin-xxsx: 0.28rem;
        --margin-xs: 0.5rem;
        --margin-sm: 0.75rem;
        --margin-md: 1rem;
        --margin-lg: 1.5rem;
        --margin-xl: 2rem;
        --margin-xxl: 3rem;
        --margin-xxl-1: 4rem;
        --margin-xxl-2: 5rem;
        --margin-xxl-3: 6rem;
        --margin-xxl-4: 7rem;
        --margin-xxl-5: 8rem;
        --margin-xxl-6: 9rem;
        --margin-xxl-7: 10rem;

        /* Padding Variables */
        --padding-0: 0;
        --padding-xxs: 0.25rem;
        --padding-xxsa: 0.35rem;
        --padding-xxsa1: 0.40rem;
        --padding-xs: 0.5rem;
        --padding-sm: 0.75rem;
        --padding-md: 1rem;
        --padding-lg: 1.5rem;
        --padding-xl: 2rem;
        --padding-xxl: 3rem;

        /* Width Variables */
        --width-100a: 100%;
        --width-75: 75%;
        --width-50: 50%;
        --width-35: 35%;
        --width-25: 25%;
        --width-20: 20%;
        --width-19: 19%;
        --width-18: 18%;
        --width-17: 17%;
        --width-16: 16%;
        --width-15: 15%;
        --width-14: 14%;
        --width-13: 13%;
        --width-12: 12%;
        --width-11: 11%;
        --width-10: 10%;
        --width-9: 9%;
        --width-8: 8%;
        --width-7: 7%;
        --width-6: 6%;
        --width-5: 5%;
        --width-auto: auto;
        --width-px: 1px;
        --width-xxs: 0.125rem;
        --width-xs: 0.25rem;
        --width-sm: 0.5rem;
        --width-md: 1rem;
        --width-lg: 2rem;
        --width-xl: 3rem;
        --width-xxl: 4rem;
        --width-xxxl: 5rem;
        --width-xxxl-1: 6rem;
        --width-xxxl-2: 7rem;
        --width-xxxl-3: 8rem;
        --width-xxxl-4: 9rem;
        --width-xxxl-4a: 9.3rem;
        --width-xxxl-5: 10rem;
        --width-xxxl-5a: 11rem;
        --width-xxxl-6: 12rem;
        --width-xxxl-7: 14rem;
        --width-xxxl-8: 16rem;
        --width-xxxl-9: 18rem;
        --width-xxxl-10: 20rem;
        --width-80: 80px;
        --width-85: 85px;
        --width-90: 90px;
        --width-95: 95px;
        --width-100: 100px;
        --width-110: 110px;
        --width-120: 120px;
        --width-130: 130px;
        --width-140: 140px;
        --width-150: 150px;
        --width-160: 160px;
        --width-180: 180px;
        --width-200: 200px;
        --width-240: 240px;
        --width-280: 280px;
        --width-300: 300px;
        --width-350: 350px;
        --width-375: 375px;
        --width-400: 400px;
        --width-450: 450px;
        --width-475: 475px;
        --width-500: 500px;
        --width-550: 550px;
        --width-600: 600px;
        --width-680: 680px;
        --width-780: 780px;
        --width-840: 840px;
        --width-880: 880px;
        --width-950: 950px;
        --width-1050: 1050px;
        --width-1080: 1080px;
        --width-1100: 1100px;
        --width-1200: 1200px;
        --width-1250: 1250px;
        --width-1300: 1300px;
        --width-1400: 1400px;
        --width-1500: 1500px;
        --width-1535: 1535px;
        --width-1550: 1550px;
        --width-1600: 1600px;
        --width-1700: 1700px;
        --width-1750: 1750px;
        --width-1800: 1800px;
        --width-1900: 1900px;
        --width-1950: 1950px;
        --width-minimum: 320px;
        --width-em-75: 75em;

        /* Height Variables */
        --height-100: 100%;
        --height-75: 75%;
        --height-50: 50%;
        --height-25: 25%;
        --height-15: 15%;
        --height-10: 10%;
        --height-auto: auto;
        --height-px: 1px;
        --height-xxs: 0.125rem;
        --height-xs: 0.25rem;
        --height-sm: 0.5rem;
        --height-md: 1rem;
        --height-lg: 2rem;
        --height-xl: 3rem;
        --height-xxl: 4rem;
        --height-xxxl: 5rem;
        --height-xxxl-1: 6rem;
        --height-xxxl-2: 7rem;
        --height-xxxl-3: 8rem;
        --height-xxxl-4: 9rem;
        --height-xxxl-5: 10rem;

        /* Position Variables */
        --position-static: static;
        --position-relative: relative;
        --position-absolute: absolute;
        --position-fixed: fixed;
        --position-sticky: sticky;

        /* Top Variables */
        --top-auto: auto;
        --top-0: 0;
        --top-100: 100%;
        --top-98: 98%;
        --top-95: 95%;
        --top-90: 90%;
        --top-85: 85%;
        --top-75: 75%;
        --top-50: 50%;
        --top-35: 35%;
        --top-33: 33%;
        --top-31-5: 31.5%;
        --top-25: 25%;
        --top-20: 20%;
        --top-15: 15%;
        --top-10: 10%;
        --top-5: 5%;
        --top-0: 0;
        --top-xxs: 0.125rem;
        --top-xs: 0.25rem;
        --top-sm: 0.5rem;
        --top-sma: 0.75rem;
        --top-md: 1rem;
        --top-mdlg: 1.15rem;
        --top-lg: 2rem;
        --top-xlg: 2.25rem;
        --top-xl: 3rem;
        --top-xxl: 4rem;
        --top-xxxl: 5rem;
        --top-xxxl-1: 6rem;
        --top-xxxl-2: 7rem;
        --top-xxxl-3: 8rem;
        --top-xxxl-4: 9rem;
        --top-xxxl-5: 10rem;
        --top-xxxl-6: 11rem;
        --top-xxxl-7: 12rem;
        --top-xxxl-8: 13rem;
        --top-xxxl-9: 14rem;
        --top-xxxl-10: 15rem;
        --top-xxxl-11: 16rem;
        --top-xxxl-12: 17rem;
        --top-xxxl-13: 18rem;
        --top-xxxl-14: 19rem;
        --top-xxxl-15: 20rem;
        --top-xxxl-16: 21rem;
        --top-xxxl-17: 22rem;
        --top-xxxl-18: 23rem;
        --top-xxxl-19: 24rem;
        --top-xxxl-20: 25rem;
        --top-xxxl-21: 26rem;
        --top-xxxl-22: 27rem;
        --top-xxxl-23: 28rem;
        --top-xxxl-24: 29rem;
        --top-xxxl-25: 30rem;
        --top-xxxl-25a: 30rem;
        --top-xxxl-25az: 32rem;
        --top-xxxl-25b: 35rem;
        --top-xxxl-25c: 37rem;
        --top-xxxl-26: 40rem;
        --top-xxxl-26a: 45rem;
        --top-xxxl-26b: 48rem;
        --top-xxxl-27: 50rem;

        /* Right Variables */
        --right-auto: auto;
        --right-0: 0;
        --right-100: 100%;
        --right-75: 75%;
        --right-50: 50%;
        --right-25: 25%;
        --right-35: 35%;
        --right-15: 15%;
        --right-10: 10%;
        --right-5: 5%;
        --right-xxs: 0.125rem;
        --right-xs: 0.25rem;
        --right-sm: 0.5rem;
        --right-md: 1rem;
        --right-lg: 2rem;
        --right-xl: 3rem;
        --right-xxl: 4rem;
        --right-xxxl: 5rem;
        --right-xxxl-1: 6rem;
        --right-xxxl-2: 7rem;

        /* bottom Variables */
        --bottom-5pc: 5%;
        --bottom-10pc: 10%;
        --bottom-15pc: 15%;
        --bottom-20pc: 20%;
        --bottom-25pc: 25%;
        --bottom-30pc: 30%;
        --bottom-35pc: 35%;
        --bottom-40pc: 40%;
        --bottom-45pc: 45%;
        --bottom-50pc: 50%;
        --bottom-55pc: 55%;
        --bottom-60pc: 60%;
        --bottom-65pc: 65%;
        --bottom-70pc: 70%;
        --bottom-75pc: 75%;
        --bottom-80pc: 80%;
        --bottom-85pc: 85%;
        --bottom-90pc: 90%;
        --bottom-95pc: 95%;
        --bottom-100pc: 100%;
        --bottom-0: 0rem;
        --bottom-xxs: 0.125rem;
        --bottom-xs: 0.25rem;
        --bottom-sm: 0.5rem;
        --bottom-md: 1rem;
        --bottom-lg: 2rem;
        --bottom-xl: 3rem;
        --bottom-xxl: 4rem;
        --bottom-xxxl: 5rem;
        --bottom-xxxl-1: 6rem;
        --bottom-xxxl-2: 7rem;

        /* Left Variables */
        --left-auto: auto;
        --left-0: 0;
        --left-100: 100%;
        --left-75: 75%;
        --left-50: 50%;
        --left-40: 40%;
        --left-35: 35%;
        --left-30: 30%;
        --left-25: 25%;
        --left-24: 24%;
        --left-23: 23%;
        --left-22: 22%;
        --left-20: 20%;
        --left-19: 19%;
        --left-18: 18%;
        --left-17: 17%;
        --left-16: 16%;
        --left-15: 15%;
        --left-10: 10%;
        --left-xxs: 0.125rem;
        --left-xs: 0.25rem;
        --left-sm: 0.5rem;
        --left-sma: 0.75rem;
        --left-md: 1rem;
        --left-mda: 1.45rem;
        --left-lg: 2rem;
        --left-mdlg: 2.65rem;
        --left-1xl: 3rem;
        --left-2xl: 4rem;
        --left-3xl: 5rem;
        --left-4xl-1: 6rem;
        --left-5xl-2: 7rem;
        --left-6xl-3: 8rem;
        --left-7xl-4: 9rem;
        --left-8xl-5: 10rem;
        --left-9xl-6: 11rem;
        --left-10xl-7: 12rem;
        --left-11xl-8: 13rem;
        --left-12xl-9: 14rem;
        --left-13xl-10: 15rem;
        --left-14xl-11: 16rem;
        --left-15xl-12: 17rem;
        --left-16xl-13: 18rem;
        --left-17xl-14: 19rem;
        --left-18xl-15: 20rem;
        --left-19xl-16: 21rem;
        --left-20xl-17: 22rem;

        /* Overflow Variables */
        --overflow-visible: visible;
        --overflow-hidden: hidden;
        --overflow-scroll: scroll;
        --overflow-auto: auto;
        --overflow-y-scroll: scroll;

        /* Scroll Behaviour Variables */
        --scroll-behaviour-auto: auto;
        --scroll-behaviour-smooth: smooth;

        /* Display Variables */
        --display-none: none;
        --display-inline: inline;
        --display-inline-block: inline-block;
        --display-block: block;
        --display-table: table;
        --display-table-cell: table-cell;
        --display-flex: flex;
        --display-inline-flex: inline-flex;

        /* Flex Direction Variables */
        --flex-direction-row: row;
        --flex-direction-row-reverse: row-reverse;
        --flex-direction-column: column;
        --flex-direction-column-reverse: column-reverse;

        /* Flex Wrap Variables */
        --flex-wrap: wrap;
        --flex-nowrap: nowrap;
        --flex-wrap-reverse: wrap-reverse;

        /* Visibility Variables */
        --visibility-visible: visible;
        --visibility-hidden: hidden;
        --visibility-collapse: collapse;

        /* Opacity Variables */
        --opacity-0: 0;
        --opacity-05: 0.05;
        --opacity-08: 0.08;
        --opacity-10: 0.10;
        --opacity-15: 0.15;
        --opacity-25: 0.25;
        --opacity-35: 0.35;
        --opacity-40: 0.40;
        --opacity-45: 0.45;
        --opacity-50: 0.50;
        --opacity-60: 0.60;
        --opacity-65: 0.65;
        --opacity-75: 0.75;
        --opacity-100: 1;

        /* Grid Variables */
        --grid-gap: 1rem;
        --grid-gap-sm: 0.5rem;
        --grid-gap-lg: 1.5rem;
        --grid-gap-xl: 2rem;
        --grid-gap-xxl: 3rem;
        --grid-gap-xxxl: 4rem;
        --grid-gap-xxxxl: 5rem;
        --grid-gap-xxxxxl: 6rem;
        --grid-gap-xxxxxl-2: 7rem;
        --grid-gap-xxxxxl-3: 8rem;
        --grid-gap-xxxxxl-4: 9rem;
        --grid-gap-xxxxxl-5: 10rem;
        --grid-gap-xxxxxl-6: 11rem;
        --grid-gap-xxxxxl-7: 12rem;

        /* Grid Template Variables */
        --grid-template-1: repeat(1, 1fr);
        --grid-template-2: repeat(2, 1fr);
        --grid-template-3: repeat(3, 1fr);
        --grid-template-4: repeat(4, 1fr);
        --grid-template-5: repeat(5, 1fr);
        --grid-template-6: repeat(6, 1fr);
        --grid-template-7: repeat(7, 1fr);
        --grid-template-8: repeat(8, 1fr);
        --grid-template-9: repeat(9, 1fr);
        --grid-template-10: repeat(10, 1fr);
        --grid-template-11: repeat(11, 1fr);
        --grid-template-12: repeat(12, 1fr);
        --grid-template-13: repeat(13, 1fr);
        --grid-template-14: repeat(14, 1fr);
        --grid-template-15: repeat(15, 1fr);
        --grid-template-16: repeat(16, 1fr);
        --grid-template-17: repeat(17, 1fr);

        /* Grid Template Columns Variables */
        --grid-template-columns-1: repeat(1, 1fr);
        --grid-template-columns-2: repeat(2, 1fr);
        --grid-template-columns-3: repeat(3, 1fr);
        --grid-template-columns-4: repeat(4, 1fr);
        --grid-template-columns-5: repeat(5, 1fr);
        --grid-template-columns-6: repeat(6, 1fr);
        --grid-template-columns-7: repeat(7, 1fr);
        --grid-template-columns-8: repeat(8, 1fr);
        --grid-template-columns-9: repeat(9, 1fr);
        --grid-template-columns-10: repeat(10, 1fr);
        --grid-template-columns-11: repeat(11, 1fr);
        --grid-template-columns-12: repeat(12, 1fr);
        --grid-template-columns-13: repeat(13, 1fr);

        /* Grid Template Rows Variables */
        --grid-template-rows-1: repeat(1, 1fr);
        --grid-template-rows-2: repeat(2, 1fr);
        --grid-template-rows-3: repeat(3, 1fr);
        --grid-template-rows-4: repeat(4, 1fr);
        --grid-template-rows-5: repeat(5, 1fr);
        --grid-template-rows-6: repeat(6, 1fr);
        --grid-template-rows-7: repeat(7, 1fr);
        --grid-template-rows-8: repeat(8, 1fr);
        --grid-template-rows-9: repeat(9, 1fr);
        --grid-template-rows-10: repeat(10, 1fr);
        --grid-template-rows-11: repeat(11, 1fr);
        --grid-template-rows-12: repeat(12, 1fr);
        --grid-template-rows-13: repeat(13, 1fr);

        /* Flex Variables */
        --flex-1: 1;
        --flex-2: 2;
        --flex-3: 3;
        --flex-4: 4;
        --flex-5: 5;
        --flex-6: 6;
        --flex-7: 7;
        --flex-8: 8;
        --flex-9: 9;
        --flex-10: 10;
        --flex-11: 11;
        --flex-12: 12;
        --flex-13: 13;
        --flex-14: 14;
        --flex-15: 15;
        --flex-16: 16;
        --flex-17: 17;
        --flex-18: 18;
        --flex-19: 19;
        --flex-20: 20;
        --flex-21: 21;

        /* Flex Direction Variables */
        --flex-direction-row: row;
        --flex-direction-row-reverse: row-reverse;
        --flex-direction-column: column;
        --flex-direction-column-reverse: column-reverse;

        /* Flex Wrap Variables */
        --flex-wrap: wrap;
        --flex-nowrap: nowrap;
        --flex-wrap-reverse: wrap-reverse;

        /* Flex Justify Content Variables */
        --justify-content-flex-start: flex-start;
        --justify-content-flex-end: flex-end;
        --justify-content-center: center;
        --justify-content-space-between: space-between;
        --justify-content-space-around: space-around;
        --justify-content-space-evenly: space-evenly;

        /* Flex Align Items Variables */
        --align-items-flex-start: flex-start;
        --align-items-flex-end: flex-end;
        --align-items-center: center;
        --align-items-baseline: baseline;
        --align-items-stretch: stretch;

        /* Flex Align Content Variables */
        --align-content-flex-start: flex-start;
        --align-content-flex-end: flex-end;
        --align-content-center: center;
        --align-content-space-between: space-between;
        --align-content-space-around: space-around;
        --align-content-stretch: stretch;

        /* Flex Align Self Variables */
        --align-self-auto: auto;
        --align-self-flex-start: flex-start;
        --align-self-flex-end: flex-end;
        --align-self-center: center;
        --align-self-baseline: baseline;
        --align-self-stretch: stretch;

        /* Flex Order Variables */
        --order-1: 1;
        --order-2: 2;
        --order-3: 3;
        --order-4: 4;
        --order-5: 5;
        --order-6: 6;
        --order-7: 7;
        --order-8: 8;
        --order-9: 9;
        --order-10: 10;
        --order-11: 11;
        --order-12: 12;
        --order-13: 13;
        --order-14: 14;
        --order-15: 15;
        --order-16: 16;
        --order-17: 17;
        --order-18: 18;
        --order-19: 19;
        --order-20: 20;
        --order-21: 21;

        /* Z-Index Variables */
        --z-index-1: 100;
        --z-index-2: 200;
        --z-index-3: 300;
        --z-index-4: 400;
        --z-index-5: 500;
        --z-index-6: 600;
        --z-index-7: 700;
        --z-index-8: 800;
        --z-index-9: 900;
        --z-index-10: 1000;
        --z-index-11: 1100;
        --z-index-12: 1200;
        --z-index-13: 1300;
        --z-index-14: 1400;
        --z-index-15: 1500;
        --z-index-16: 1600;
        --z-index-17: 1700;
        --z-index-18: 1800;
        --z-index-19: 1900;
        --z-index-20: 2000;

        /* Container Query Variables */
        --container-query-1: 1;
        --container-query-2: 2;
        --container-query-3: 3;
        --container-query-4: 4;
        --container-query-5: 5;
        --container-query-6: 6;
        --container-query-7: 7;
        --container-query-8: 8;
        --container-query-9: 9;
        --container-query-10: 10;
        --container-query-11: 11;
        --container-query-12: 12;
        --container-query-13: 13;
        --container-query-14: 14;
        --container-query-15: 15;
        --container-query-16: 16;
        --container-query-17: 17;
        --container-query-18: 18;
        --container-query-19: 19;
        --container-query-20: 20;

        /* Container Query Breakpoint Variables */
        --container-query-breakpoint-1: 1;
        --container-query-breakpoint-2: 2;
        --container-query-breakpoint-3: 3;
        --container-query-breakpoint-4: 4;
        --container-query-breakpoint-5: 5;
        --container-query-breakpoint-6: 6;
        --container-query-breakpoint-7: 7;
        --container-query-breakpoint-8: 8;
        --container-query-breakpoint-9: 9;
        --container-query-breakpoint-10: 10;
        --container-query-breakpoint-11: 11;
        --container-query-breakpoint-12: 12;
        --container-query-breakpoint-13: 13;
        --container-query-breakpoint-14: 14;
        --container-query-breakpoint-15: 15;
        --container-query-breakpoint-16: 16;
        --container-query-breakpoint-17: 17;
        --container-query-breakpoint-18: 18;
        --container-query-breakpoint-19: 19;
        --container-query-breakpoint-20: 20;

        /* Container-Type */
        --container-type-1: inline-size;
        --container-type-2: block-size;
        --container-type-3: min-inline-size;
        --container-type-4: min-block-size;
        --container-type-5: max-inline-size;
        --container-type-6: max-block-size;
        --container-type-7: width;
        --container-type-8: height;
        --container-type-9: min-width;
        --container-type-10: min-height;
        --container-type-11: max-width;
        --container-type-12: max-height;
        --container-type-13: aspect-ratio;
        --container-type-14: min-aspect-ratio;
        --container-type-15: max-aspect-ratio;

        /* Container Name */
        --container-name-1: Index_Main_Container;
        --container-name-2: About_Main_Container;
        --container-name-3: Projects_Main_Container;
        --container-name-4: Contact_Main_Container;
        --container-name-5: Footer_Main_Container;

        /* UTILITY CLASSES */

        /* Custom Properties */

        /* Media Query Variables */
        --media-query-1: @media screen and (max-width: 315px) {
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

        ;

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
        }
    }

`;

export { error404_sharedStyles };
