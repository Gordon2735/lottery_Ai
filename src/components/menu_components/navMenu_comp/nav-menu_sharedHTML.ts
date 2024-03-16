'use strict';

import { INavMenuSharedHTML } from './Inav-menu.js';

const navMenu_sharedHTML: INavMenuSharedHTML = {
	shell: ``,
	navbar: ``,
	navHamBtn: ``
};

navMenu_sharedHTML.shell = /*html*/ `

    <nav-menu id="navMenuComp" class="nav-menu-comp" state="startup"></nav-menu>

`;

navMenu_sharedHTML.navbar = /*html*/ `

    <nav id="navMenu" class="nav-menu">
        <div class="brand-title"></div>
            <a href="#" class="toggle-button">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
                </a>
            <div class="nav-menu-links">
                <ul>
                    <li><a href="/">Lottery &nbsp;</a></li>
                    <li><a href="/state_mgt">State Mgt &nbsp;</a></li>
                    <li><a href="/powerball">Powerball®️ &nbsp;</a></li>
                    <li><a href="/mega_mil">Mega Millions®️ &nbsp;</a></li>
                    <li><a href="/cash5">Palmetto Cash 5 &nbsp;</a></li>
                    <li><a href="/pick3">Pick 3 &nbsp;</a></li>
                    <li><a href="/pick4">Pick 4 &nbsp;</a></li>
                    <li><a href="/cash_pop">Cash Pop &nbsp;</a></li>
                    <li><a href="/winnings">Lottery Ai Winnings &nbsp;</a></li>
                    <li><a href="/today_nums">Today's Numbers &nbsp;</a></li>
                    <li><a href="/histories">Histories &nbsp;</a></li>
                    <li><a href="/terms">Terms & Conditions &nbsp;</a></li>
                    <li><a href="/contact">Contact Us &nbsp;</a></li>
                    <li><a href="/security">Security Questions &nbsp;</a></li>
                    <li><a href="/q_a">Q & A &nbsp;</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
        </div>
    </nav>

`;

navMenu_sharedHTML.navHamBtn = /*html*/ `




`;

export { navMenu_sharedHTML };
