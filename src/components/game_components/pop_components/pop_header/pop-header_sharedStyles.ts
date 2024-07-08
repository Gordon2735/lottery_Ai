'use strict';

import type { IpopHeaderSharedStyles } from './Ipop_header.js';

const popHeader_sharedStyles: IpopHeaderSharedStyles = {
    root: ``,
    shell: ``,
    container: ``,
    results: ``
};

popHeader_sharedStyles.root = /*css*/ `

    :root {
        /* CSS Variables */
        
        /* Background Colors */
        --pop-header-bg-color-light: #f4f4f4;
        --pop-header-bg-color-dark: #333;
        --pop-header-bg-color-4t: rgba(95, 158, 160, 0.393);

        /* Background Gradients */
        --pop-header-gradient-dark-0: linear-gradient(178.25deg, hsla(0, 0%, 20%, 0.993), 87%, hsla(188, 35%, 58%, 0.993));
        --pop-header-gradient-dark-0a: linear-gradient(178.25deg, hsla(0, 0%, 20%, 0.993), 77%, hsla(188, 35%, 58%, 0.993));
        --pop-header-gradient-dark-descripSection: linear-gradient(178.25deg, hsla(0, 0%, 20%, 0.993), 53%, hsla(41, 92%, 53%, 0.393));
        --pop-header-gradient-dark-1: linear-gradient(178.35deg, hsla(188, 98%, 34%, 0.993), 34.5%, hsla(187, 52%, 80%, 0.593));
        --pop-header-gradient-dark-1a: linear-gradient(178.35deg, hsla(188, 98%, 34%, 0.993), 64.5%, hsla(187, 52%, 80%, 0.593));
        --pop-header-gradient-dark-2: linear-gradient(178.25deg, hsla(0, 0%, 20%, 0.993), 87%, hsla(188, 35%, 58%, 0.993));
        --pop-header-gradient-dark-3: linear-gradient(178.35deg, hsla(41, 92%, 53%, 0.993), 94.5%, hsla(187, 52%, 80%, 0.593));

        /* Background Image */
        --pop-header-bgImage-1: url('/src/components/game_components/pop_components/pop_resources/images/backgrounds_pop/00_pop_bckgrd.png');
        /*--pop-header-bgImage-2: */
        /* Background Size */
        --pop-header-size-1: cover;

        /* --bgRepeat-wc */
        --pop-header-repeat-1: repeat;
        --pop-header-repeat-2: no-repeat;

        /* --bg-wc-blend-mode */
        --pop-header-bg-blend-mode-normal: normal;
        --pop-header-bg-blend-mode-overlay: overlay;
        --pop-header-bg-blend-mode-screen: screen;

        /* Margin Variable */
        --pop-header-margin_0: 0;
        --pop-header-margin_1: 2em auto 2em auto;
        --pop-header-margin_2: 2em 0em 2em 7em;
  
        /* Padding Variable */
        --pop-header-padding_0: 0;
        --pop-header-padding_1: 1em;
        --pop-header-padding_2: 2em;

        /* Position Variable */
        --pop-header-position-0: absolute;
        --pop-header-position-1: fixed;
        --pop-header-position-2: relative;
        --pop-header-position-4: absolute;
        --pop-header-position-5: sticky;
        --pop-header-position-6: static;

        /* Display Variables */
        --pop-header-display-none: none;
        --pop-header-display-inline: inline;
        --pop-header-display-inline-block: inline-block;
        --pop-header-display-block: block;
        --pop-header-display-table: table;
        --pop-header-display-table-cell: table-cell;
        --pop-header-display-flex: flex;
        --pop-header-display-inline-flex: inline-flex;
        --pop-header-display-grid: grid;

        /* Visibility Variables */
        --pop-header-visibility-visible: visible;
        --pop-header-visibility-hidden: hidden;
        --pop-header-visibility-collapse: collapse;

        /* Flex Wrap Variables */
        --pop-header-flex-wrap-wc: wrap;
        --pop-header-flex-nowrap-wc: nowrap;
        --pop-header-flex-wrap-reverse-wc: wrap-reverse;
        
        /* Justify Content Variables */
        --pop-header-justify-content-start: start;
        --pop-header-justify-content-end: end;
        --pop-header-justify-content-center: center;
        --pop-header-justify-content-space-between: space-between;
        --pop-header-justify-content-space-around: space-around;
        --pop-header-justify-content-space-evenly: space-evenly;

        --pop-header-text-justify-all: distribute;
        --pop-header-text-start: start;
        --pop-header-text-center: center;
        --pop-header-text-end: end;


        /* Rotate */
        --pop-header-rotate-0: 0;
        --pop-header-rotate-1: 1deg;
        --pop-header-rotate-2: 2deg;
        --pop-header-rotate-3: 3deg;
        --pop-header-rotate-5: 5deg;
        --pop-header-rotate-6: 6deg;
        --pop-header-rotate-7: 7deg;
        --pop-header-rotate-8: 8deg;
        --pop-header-rotate-9: 9deg;
        --pop-header-rotate-10: 10deg;
        --pop-header-rotate-15: 15deg;
        --pop-header-rotate-30: 30deg;
        --pop-header-rotate-45: 45deg;
        --pop-header-rotate-90: 90deg;
        --pop-header-rotate-180: 180deg;
        --pop-header-rotate-270: 270deg;
        --pop-header-rotate-359: 359deg;
        --pop-header-rotate-358: 358deg;
        --pop-header-rotate-355: 355deg;
        --pop-header-rotate-350: 350deg;
        --pop-header-rotate-345: 345deg;
        --pop-header-rotate-340: 340deg;
        --pop-header-rotate-335: 335deg;
        --pop-header-rotate-330: 330deg;
        --pop-header-rotate-325: 325deg;
        --pop-header-rotate-320: 320deg;
        --pop-header-rotate-315: 315deg;
        --pop-header-rotate-310: 310deg;
        --pop-header-rotate-305: 305deg;
        --pop-header-rotate-300: 300deg;
        --pop-header-rotate-295: 295deg;
        --pop-header-rotate-290: 290deg;

        /* Z-Index Variables */
        --pop-header-z-index-1: 100;
        --pop-header-z-index-2: 200;
        --pop-header-z-index-3: 300;
        --pop-header-z-index-4: 400;
        --pop-header-z-index-5: 500;
        --pop-header-z-index-6: 600;
        --pop-header-z-index-7: 700;
        --pop-header-z-index-8: 800;
        --pop-header-z-index-9: 900;
        --pop-header-z-index-10: 1000;

    }

`;

popHeader_sharedStyles.shell = /*css*/ `

    .pop-header-shell {
        margin: 3em auto 2em auto;
        padding: 1.25em;
        width: 45%;
        min-width: 320px;
        height: 25%;
        min-height: 280px;
    }

`;

popHeader_sharedStyles.container = /*css*/ `

    .fig-lot {
        margin: 1.5em 8em 0em 0em;
        padding: 2.5px;
        display: flex;
        flex-flow: column;
        max-width: 380px;
        rotate: var(--pop-header-rotate-340);
        z-index: var(--pop-header-z-index-6);
    }

    .sc-lottery-logo {
        max-width: 280px;
        max-height: 135px;
    }

    .fig-cap-lot {
        padding: 3px;
        background-color: #222;
        display: hidden;
        cursor: pointer;
        color: #fff;
        font: italic smaller sans-serif;
        text-align: center;
    }
    
    /* .blink:hover, */
    .fig-cap-lot:hover {
        display: visible;
    }

    .blink {
        animation: blinkIt 4s ease-in-out infinite;
    }

    @keyframes blinkIt {
        0% {
            color: var(--pk3-clr-fc-pick3-13); 
        }
        25% {
            opacity: 0;
        }
        50% {
            color: var(--pk3-clr-fc-pick3-16);
            opacity: 1;
        }
        75% {
            opacity: 0;
        }
        100% {
            color: var(--pk3-clr-fc-pick3-13);
            opacity: 1;
        }
    }

    .pop-header {
        margin: var(--pop-header-margin_1);
        padding: var(--pop-header-padding_1);
        position: var(--pop-header-position-2:);
        display: hidden;
        /*display: var(--pop-display-inline-block);*/
        /*background-image: var(--pop-header-gradient-dark-0a),
                          var(--pop-header-gradient-dark-1a);
        */
        background: transparent;
        width: 40%;
        height: 35%;
        text-align: var(--pop-header-text-center);
    }
    +
    
    .fig-header {
        margin: auto 4em auto 0em;
        padding: 5px;
        display: flex;
        flex-flow: column;
        max-width: 520px;
        text-align: var(--pop-header-text-center);
    }

    .pop-header-logo {
        max-width: 540px;
        min-width: 320px;
        max-height: 680px;
        min-height: 380px;
    }

    .fig-cap-header-pop {
        padding: 3px;
        background-image: var(--pop-header-gradient-dark-1),
                          var(--pop-header-gradient-dark-1a);
        /*background-color: #222;*/
        color: #fff;
        font: italic smaller sans-serif;
        text-align: center;
        display: hidden;
        cursor: pointer;
    }

    
    .header-h1 {
        padding: 3px;
        background-color: #222;
        display: hidden;
        color: #fff;
        font: sans-serif;
        font-size: 24px;
        text-align: center;
    }

    .pop-header:hover {
        display: var(--pop-display-inline-block);
    }


    .header-h1:hover,
    .fig-cap-header-pop:hover {
        display: visible;
    }

`;

popHeader_sharedStyles.results = /*css*/ `


`;

export { popHeader_sharedStyles };
