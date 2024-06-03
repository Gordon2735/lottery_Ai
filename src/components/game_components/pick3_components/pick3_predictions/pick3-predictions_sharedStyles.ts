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

        /* CSS Variables */

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

        /* Font Color Variables */
        /* Text Color Variables */
        --pk3-predictions-clr-fc-0: hsla(80, 61%, 50%, 0.993);
        --pk3-predictions-clr-fc-0f: hsla(0, 79%, 72%, 0.993);
        --pk3-predictions-clr-fc-1: hsla(240, 64%, 27%, 0.993);
        --pk3-predictions-clr-fc-2: hsla(198, 53%, 87%, 0.99);
        --pk3-predictions-clr-fc-4: hsl(0, 0%, 70%);
        --pk3-predictions-clr-fc-5: hsl(0, 38%, 38%);
        --pk3-predictions-clr-fc-6: hsl(32, 83%, 54%);
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


        /* Variables for Margins */
        --pk3-predictions-margin-0: 0; 
        --pk3-predictions-margin-1: 3em 0em 1em 0em; 
        
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

        /* Top Variables */
        --pk3-predictions-top-10: 10%;
       
        /* left Variables */
        --pk3-predictions-left-10: 10%;
        --pk3-predictions-left-20: 20%;
        --pk3-predictions-left-25: 25%;
        --pk3-predictions-left-30: 30%;

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
         --pk3-rotate-30: 30deg;
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
        margin: var(--pk3-predictions-margin-1);
        padding: var(--pk3-predictions-padding-xxs);
        width: var(--pk3-predictions-width-75);
        position: var(--pk3-predictions-position-absolute);
        top: var(--pk3-predictions-top-10);
        left: var(--pk3-predictions-left-25);
        background-image: var(--pk3-predictions-gradient-dark-2),
                          var(--pk3-predictions-gradient-dark-2);
    }

    .pick3-prediction-header-figure {
        position: var(--pk3-predictions-position-relative);
        display: var(--pk3-predictions-display-inline-flex);
    }

    .pick3-predictions-captions {
        font-family: var(--pk3-predictions-ff-titillium-web);
        font-size: var(--pk3-predictions-fs-xxxl-0);
        color: var(--pk3-predictions-clr-fc-2);
    }

    .header-figure-img {
        width: var(--pk3-predictions-width-240);
        rotate: var(--pk3-rotate-345);
    }

`;

pick3_predictions_sharedStyles.results = /*css*/ `




`;

export { pick3_predictions_sharedStyles };
