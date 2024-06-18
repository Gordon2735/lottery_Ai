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
        margin: 2em auto 2em auto;
        padding: 2.5px;
        display: flex;
        flex-flow: column;
        max-width: 320px;
        border: thin #c0c0c0 solid;
        rotate: var(--pop-header-rotate-345);
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
        color: #fff;
        font: italic smaller sans-serif;
        text-align: center;
    }
    
    .blink,
    .fig-cap-lot:hover {
        display: visible;
        cursor: pointer;
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
        background-image: var(--pop-header-gradient-dark-0a),
                          var(--pop-header-gradient-dark-1a);
        width: 40%;
        height: 30%;
    }
    
    .fig-header {
        margin: auto;
        padding: 5px;
        display: flex;
        flex-flow: column;
        max-width: 220px;
        border: thin #c0c0c0 solid;
    }

    .pop-header-logo {
        max-width: 480px;
        max-height: 420px;
    }

    .fig-cap-header-pop {
        padding: 3px;
        background-image: var(--pop-header-gradient-dark-1),
                          var(--pop-header-gradient-dark-1a);
        /*background-color: #222;*/
        color: #fff;
        font: italic smaller sans-serif;
        text-align: center;
    }

    .header-h1 {
        padding: 3px;
        background-color: #222;
        color: #fff;
        font: sans-serif;
        font-size: 24px;
        text-align: center;
    }

`;

popHeader_sharedStyles.results = /*css*/ `


`;

export { popHeader_sharedStyles };
