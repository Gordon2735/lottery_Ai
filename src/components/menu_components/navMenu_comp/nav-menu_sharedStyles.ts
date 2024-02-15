'use strict';

import { INavMenuSharedStyles } from './Inav-menu.js';

const navMenu_sharedStyles: INavMenuSharedStyles = {
	shell: ``,
	navbar: ``,
	navHamBtn: ``,
	navbarQueries: ``
};

navMenu_sharedStyles.shell = /*css*/ `

    /*
    .nav-menu-comp {
        margin: 0;
        padding: 0;
    }
    */

`;

navMenu_sharedStyles.navbar = /*css*/ `

    .nav-menu {
        top: 0vh;
        right: 54vw;
        display: flex;
        position: sticky;
        height: 4.8vh;
        justify-content: space-between;
        align-items: center;
        background-image: var(--gradient-wc-bckgrnd-dark-1);
        z-index: var(--z-index-wc-7);
    }

    .brand-title {
        margin: 0.3rem;
        font-size: 1em;
    }

    .nav-menu-links {
        margin: var(--margin-wc-xxsx) var(--margin-wc-xl) var(--margin-wc-sm) var(--margin-wc-0);
        height: 63%;
    }

    .nav-menu-links ul {
        margin: 0;
        padding: 0;
        display: flex;
        font-family: var(--ff-wc-days-one);
    }

    .nav-menu-links li {
        list-style: none;
        height: 75%;
        font-size: 0.70vw;
        font-weight: var(--fw-wc-medium);
    }

    .nav-menu-links li a {
        margin-right: var(--margin-wc-xxsx);
        display: var(--display-wc-block);
        text-decoration: var(--text-decoration-wc-none);
        text-shadow: var(--text-shadow-wc-xmd);
        color: var(--clr-fc-wc-1);
        padding: var(--padding-wc-xxsa1);
    }

    .nav-menu-links li a:hover {
        background-color: var(--clr-wc-background-hover);
        border-radius: 4px;
        color: var(--clr-fc-wc-9);
        z-index: var(--z-index-wc-6);
    }
    .nav-menu-links li a::after {
        content: ♻️;
        background-color: var(--clr-wc-background-after-2);
        border-radius: 14px;
        color: var(--clr-fc-wc-10);
        z-index: var(--z-index-wc-6);
    }

`;

navMenu_sharedStyles.navHamBtn = /*css*/ `

    .toggle-button {
        position: absolute;
        top: 5.75px;
        right: 20px;
        display: none;
        flex-direction: column;
        justify-content: space-between;
        width: 30px;
        height: 21px;
    }

    .toggle-button .bar {
        height: 3px;
        width: 100%;
        background-color: var(--clr-fc-wc-6);
        border-radius: 10px;
        z-index: 7;
    }

    .toggle-button .bar:hover {
        box-shadow: rgb(78, 64, 64) 3px 3px 15px;
    }

    .toggle-button:hover {
        box-shadow: var(--clr-fc-wc-6) 3px 3px 15px;
        background-color: rgba(105, 105, 105, 0.081);
    }

`;

navMenu_sharedStyles.navbarQueries = /*css*/ `

    @media (max-width: 1000px) {
        .nav-menu {
            top: 11.7vh;
            right: -1vw;
            margin-top: 10px;
            flex-direction: column;
            align-items: flex-start;
        }

        .toggle-button {
            display: flex;
        }

        .nav-menu-links {
            display: none;
            width: 40%;
        }

        .nav-menu-links ul {
            margin-top: 7.3vh;
            width: 100%;
            flex-direction: column;
            background: var(--clr-fc-wc-8);
        }

        .nav-menu-links ul li {
            text-align: right;
        }

        .nav-menu-links ul li a {
            padding: 0.5rem 1rem;
            color: var(--clr-fc-wc-6);
        }

        .nav-menu-links ul li a:hover {
            margin-bottom: 0.2rem;
            padding: 0.2rem 0.2rem;
            background-color: var(--clr-wc-background-navMenu);
            z-index: var(--z-index-wc-10);
            color: var(--clr-fc-wc-6);
        }

        .nav-menu-links ul li a::after {
            padding: 0.2rem 0.2rem;
            color: var(--clr-fc-wc-6);
        }

        .nav-menu-links.active {
            display: flex;
            width: 75vw;
            height: auto;
        }
    }

`;

export { navMenu_sharedStyles };
