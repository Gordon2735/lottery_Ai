'use strict';

import { IsidePanelSharedStyles } from './IsidePanel.js';

const sidePanel_sharedStyles: IsidePanelSharedStyles = {
	global: ``,
	root: ``,
	shell: ``,
	panel: ``,
	lottery: ``,
	powerball: ``,
	mega_mil: ``,
	cash5: ``,
	pick3: ``,
	pick4: ``,
	cash_pop: ``,
	winnings: ``,
	today_nums: ``,
	histories: ``,
	terms: ``,
	q_a: ``,
	security: ``,
	about: ``,
	contact: ``
};

sidePanel_sharedStyles.global = /*css*/ `

    :host {
        
        
    }
        
`;

sidePanel_sharedStyles.root = /*css*/ `

    :root {

        /* Side Panel Web Component CSS Variables  */

         /*Font Family*/
        --ff-sp-0: 'Chango';
        --ff-sp-1: 'Source Sans Pro', sans-serif;

        /*Font Colors*/
        --fc-sp-1: hsla(198, 86%, 92%, 0.99);
        --fc-sp-2: hsla(197, 71%, 73%, 0.99);
        --fc-sp-3: hsla(198, 53%, 87%, 0.99);
        --fc-sp-4: hsla(198, 23%, 59%, 0.99);
        --fc-sp-5: hsla(0, 0%, 0%, 0.99);
        --fc-sp-6a: hsla(197, 98%, 17%, 0.99);
        --fc-sp-6: hsla(212, 62%, 49%, 0.99);
        --fc-sp-7: hsla(210, 95%, 62%, 0.99);
        --fc-sp-7a: hsla(209, 59%, 48%, 0.99);
        --fc-sp-8: hsla(208, 42%, 77%, 0.99);
        --fc-sp-9: hsla(0, 0%, 27%, 0.99);
        --fc-sp-10: hsla(0, 0%, 100%, 0.99);
        --fc-sp-11: hsla(0, 98%, 50%, 0.9);
        --fc-sp-12: hsla(52, 77%, 53%, 0.9);
        --fc-sp-13: hsla(212, 62%, 49%, 0.99);
        --fc-sp-14: hsla(52, 97%, 58%, 0.99);
        --fc-sp-15: hsla(198, 53%, 87%, 0.19);
        --fc-sp-16: hsla(39, 99%, 45%, 0.99);
        --fc-sp-17: hsla(43, 74%, 49%, 0.99);
        --fc-sp-18: hsla(197, 71%, 73%, 0.70);
        --fc-sp-19: hsla(172, 51%, 49%, 0.99);
        --fc-sp-20: hsla(37, 81%, 58%, 0.99);
        --fc-sp-21: hsla(37, 81%, 58%, 0.99);
        --fc-sp-22: hsla(204, 76%, 57%, 0.99);
        --fc-sp-23: hsla(38, 35%, 78%, 0.99);
        --fc-sp-24: hsla(37, 25%, 33%, 0.99);
        --fc-sp-25: hsla(36, 27%, 22%, 0.99);
        --fc-sp-26: hsla(136, 5%, 57%, 0.99);
        --fc-sp-27: hsla(135, 4%, 37%, 0.99);
        --fc-sp-28: hsla(138, 4%, 53%, 0.99);
        --fc-sp-29: hsla(140, 3%, 44%, 0.99);
        --fc-sp-30: hsla(137, 15%, 82%, 0.99);
        --fc-sp-31: hsla(140, 3%, 21%, 0.99);

        /*Borders*/
        --border-sp-0: 2.5px solid hsla(240, 81%, 12%, 0.99);


        /* Filter Variables */
        --filter-sp-ds-0: drop-shadow(6px 5px 7px hsla(0, 0%, 0%, 0.72));
        --filter-sp-ds-1: drop-shadow(3px 2px 2px hsla(0, 0%, 0%, 0.6));
        --filter-sp-ds-2: drop-shadow(6px 4px 4px hsla(0, 0%, 0%, 0.6));






        /* --bg-sythColor-primary: rgb(6, 6, 56);*/
        
    }

`;

sidePanel_sharedStyles.panel = /*css*/ `

    #container {
        margin-bottom: 10px;
        position: absolute;
        top: 70px;
        left: 0px;
        width: 200px;
        height: calc(100% - 150px);
        background: hsla(0, 0%, 66%, 0.69);
        overflow: hidden;
        transform: translateX(-227px);
        transition: all 1s;
        filter: var(--filter-sp-ds-0);
        border: var(--border-sp-0);
        border-radius: 0px 8px 8px 0px;
        font-Family: var(--ff-sp-1);
        z-index: 500;
    }
    #big-3 {
        margin: 27px 0px 15px 0px;
        left: 15px;
        display: inline-block;
        position: absolute;
        width: 160px;
        align-items: center;
        filter: var(--filter-sp-ds-1);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 160 / 61;
        z-index: 600;
    }
    #line {
        margin: 110px 0px 20px 0px;
        left: 15px;
    }
    #js-symbol {
        margin: -14px 0px 0.5px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: center;
        filter: var(--filter-sp-ds-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }

    #ts-symbol {
        margin: 80px 0px 1px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: baseline;
        filter: var(--filter-sp-ds-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }
    #line2 {
        margin: 190px 0px 20px 0px;
        left: 15px;
    }
    #vanilla {
        margin: 7px 0px 3px 0px;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
    }
    @keyframes FadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes FadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    .hamburgers {
        margin: 8px 0px 1px 15px;
        position: absolute;
        top: -13px;
        cursor: pointer;
        font-size: 35px;
        color: var(--fc-sp-5);
        filter: drop-shadow(3px 2px 2px rgba(0, 0, 0, 0.6));
        z-index: 1500;
    }
    .hamburgers:hover {
        color: var(--fc-sp-17);
    }
    .hamburgers:active {
        color: rgb(252, 4, 4);
        transform: rotate(180deg);
        transition: all .5s;
    }
    .item {
        padding: 20px 0 20px 10px;
        width: 200px;
        height: 8px;
        line-height: 9px;
        border-bottom: 1px solid #999;
        font-size: 12px; 
        cursor: pointer;  
    }

    .lottery-a {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .powerball-a {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }
    .mega_mil {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .cash5-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .pick3-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }
    
    .pick4-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .winnings-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }    

    .today_nums-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

        .histories-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .terms-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .q_a-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .security-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .about-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .contact-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .histories-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .terms-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .q_a-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .security-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .about-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .contact-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .item:hover {
        background: rgb(112, 112, 112);
        border-radius: 0px 8px 8px 0px;
        box-shadow: 10px 6px 16px  rgba(0, 0, 0, 0.6);
        color: rgb(233, 242, 255);
        font-size: 12px;
        font-style: italic;
        font-weight: 600;
        letter-spacing: 0.22em;
    }
    
    .projects-sidepanel-title {
        margin: 30px auto 0px auto;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
    }

`;

sidePanel_sharedStyles.lottery = /* css */ `

    #container {
        margin-bottom: 10px;
        position: absolute;
        top: 70px;
        left: 0px;
        width: 200px;
        height: calc(100% - 150px);
        background: hsla(0, 0%, 66%, 0.69);
        overflow: hidden;
        transform: translateX(-227px);
        transition: all 1s;
        filter: var(--filter-sp-ds-0);
        border: var(--border-sp-0);
        border-radius: 0px 8px 8px 0px;
        font-Family: var(--ff-sp-1);
        z-index: 500;
    }
    #big-3 {
        margin: 27px 0px 15px 0px;
        left: 15px;
        display: inline-block;
        position: absolute;
        width: 160px;
        align-items: center;
        filter: var(--filter-sp-ds-1);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 160 / 61;
        z-index: 600;
    }
    #line {
        margin: 110px 0px 20px 0px;
        left: 15px;
    }
    #js-symbol {
        margin: 14px 0px 0.5px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: center;
        filter: var(--filter-sp-ds-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }

    #ts-symbol {
        margin: 80px 0px 1px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: baseline;
        filter: var(--filter-sp-ds-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }
    #line2 {
        margin: 190px 0px 20px 0px;
        left: 15px;
    }
    #vanilla {
        margin: 7px 0px 3px 0px;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
    }
    @keyframes FadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes FadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    .hamburgers {
        margin: 8px 0px 1px 15px;
        position: absolute;
        top: -13px;
        cursor: pointer;
        font-size: 35px;
        color: var(--fc-sp-5);
        filter: drop-shadow(3px 2px 2px rgba(0, 0, 0, 0.6));
        z-index: 1500;

    }
    .hamburgers:hover {
        color: var(--fc-sp-17);
    }
    .hamburgers:active {
        color: rgb(252, 4, 4);
        transform: rotate(180deg);
        transition: all .5s;
    }
    .item {
        padding: 20px 0 20px 10px;
        width: 200px;
        height: 8px;
        line-height: 9px;
        border-bottom: 1px solid #999;
        font-size: 12px; 
        cursor: pointer;  
    }

    .lottery-a {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .powerball-a {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }
    .mega_mil {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .cash5-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .pick3-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .pick4-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .winnings-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }    

    .today_nums-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

        .histories-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .terms-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .q_a-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .security-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .about-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .contact-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .histories-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .terms-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .q_a-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .security-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .about-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .contact-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .item:hover {
        background: rgb(112, 112, 112);
        border-radius: 0px 8px 8px 0px;
        box-shadow: 10px 6px 16px  rgba(0, 0, 0, 0.6);
        color: rgb(233, 242, 255);
        font-size: 12px;
        font-style: italic;
        font-weight: 600;
        letter-spacing: 0.22em;
    }

    .projects-sidepanel-title {
        margin: 30px auto 0px auto;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
    }

    `;
sidePanel_sharedStyles.powerball = /* css */ `

    #container {
        margin-bottom: 10px;
        position: absolute;
        top: 80px;
        left: 0px;
        width: 200px;
        height: calc(100% - 150px);
        background: hsla(0, 0%, 66%, 0.69);
        overflow: hidden;
        transform: translateX(-227px);
        transition: all 1s;
        filter: var(--filter-sp-ds-0);
        border: var(--border-sp-0);
        border-radius: 0px 8px 8px 0px;
        font-Family: var(--ff-sp-1);
        z-index: 500;
    }
    #big-3 {
        margin: 27px 0px 15px 0px;
        left: 15px;
        display: inline-block;
        position: absolute;
        width: 160px;
        align-items: center;
        filter: var(--filter-sp-ds-1);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 160 / 61;
        z-index: 600;
    }
    #line {
        margin: 110px 0px 20px 0px;
        left: 15px;
    }
    #js-symbol {
        margin: 14px 0px 0.5px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: center;
        filter: var(--filter-sp-ds-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }

    #ts-symbol {
        margin: 80px 0px 1px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: baseline;
        filter: var(--filter-sp-ds-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }
    #line2 {
        margin: 190px 0px 20px 0px;
        left: 15px;
    }
    #vanilla {
        margin: 7px 0px 3px 0px;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
    }
    @keyframes FadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes FadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    .hamburgers {
        margin: 8px 0px 1px 15px;
        position: absolute;
        top: -13px;
        cursor: pointer;
        font-size: 35px;
        color: var(--fc-sp-5);
        filter: drop-shadow(3px 2px 2px rgba(0, 0, 0, 0.6));
        z-index: 1500;

    }
    .hamburgers:hover {
        color: var(--fc-sp-17);
    }
    .hamburgers:active {
        color: rgb(252, 4, 4);
        transform: rotate(180deg);
        transition: all .5s;
    }
    .item {
        padding: 20px 0 20px 10px;
        width: 200px;
        height: 8px;
        line-height: 9px;
        border-bottom: 1px solid #999;
        font-size: 12px; 
        cursor: pointer;  
    }

    .lottery-a {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .powerball-a {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }
    .mega_mil {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .cash5-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .pick3-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .pick4-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .winnings-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }    

    .today_nums-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

        .histories-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .terms-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .q_a-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .security-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .about-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .contact-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .histories-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .terms-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .q_a-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .security-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .about-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .contact-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .item:hover {
        background: rgb(112, 112, 112);
        border-radius: 0px 8px 8px 0px;
        box-shadow: 10px 6px 16px  rgba(0, 0, 0, 0.6);
        color: rgb(233, 242, 255);
        font-size: 12px;
        font-style: italic;
        font-weight: 600;
        letter-spacing: 0.22em;
    }

    .projects-sidepanel-title {
        margin: 30px auto 0px auto;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
    }

`;

sidePanel_sharedStyles.mega_mil = /* css */ `

    #container {
        margin-bottom: 30px;
        position: absolute;
        top: 80px;
        left: 0px;
        width: 200px;
        height: calc(100% - 255px);
        background: hsla(0, 0%, 66%, 0.69);
        overflow: hidden;
        transform: translateX(-227px);
        transition: all 1s;
        filter: var(--filter-sp-ds-0);
        border: var(--border-sp-0);
        border-radius: 0px 8px 8px 0px;
        font-Family: var(--ff-sp-1);
        z-index: 500;
    }
    #big-3 {
        margin: 27px 0px 15px 0px;
        left: 15px;
        display: inline-block;
        position: absolute;
        width: 160px;
        align-items: center;
        filter: var(--filter-sp-ds-1);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 160 / 61;
        z-index: 600;
    }
    #line {
        margin: 110px 0px 20px 0px;
        left: 15px;
    }
    #js-symbol {
        margin: -14px 0px 0.5px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: center;
        filter: var(--filter-sp-ds-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }

    #ts-symbol {
        margin: 80px 0px 1px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: baseline;
        filter: var(--filter-sp-ds-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }
    #line2 {
        margin: 190px 0px 20px 0px;
        left: 15px;
    }
    #vanilla {
        margin: 7px 0px 3px 0px;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
    }
    @keyframes FadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes FadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    .hamburgers {
        margin: 8px 0px 1px 15px;
        position: absolute;
        top: -13px;
        cursor: pointer;
        font-size: 35px;
        color: var(--fc-sp-5);
        filter: drop-shadow(3px 2px 2px rgba(0, 0, 0, 0.6));
        z-index: 1500;

    }
    .hamburgers:hover {
        color: var(--fc-sp-17);
    }
    .hamburgers:active {
        color: rgb(252, 4, 4);
        transform: rotate(180deg);
        transition: all .5s;
    }
    .item {
        padding: 20px 0 20px 10px;
        width: 200px;
        height: 8px;
        line-height: 9px;
        border-bottom: 1px solid #999;
        font-size: 12px; 
        cursor: pointer;  
    }

    .lottery-a {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .powerball-a {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }
    .mega_mil {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .cash5-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .pick3-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .pick4-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .winnings-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }    

    .today_nums-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

        .histories-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .terms-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .q_a-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .security-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .about-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .contact-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .histories-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .terms-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .q_a-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .security-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .about-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .contact-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .item:hover {
        background: rgb(112, 112, 112);
        border-radius: 0px 8px 8px 0px;
        box-shadow: 10px 6px 16px  rgba(0, 0, 0, 0.6);
        color: rgb(233, 242, 255);
        font-size: 12px;
        font-style: italic;
        font-weight: 600;
        letter-spacing: 0.22em;
    }

    .projects-sidepanel-title {
        margin: 30px auto 0px auto;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
    }
    `;

sidePanel_sharedStyles.cash5 = /* css */ `

    #container {
        margin-bottom: 30px;
        position: absolute;
        top: 80px;
        left: 0px;
        width: 200px;
        height: calc(100% - 255px);
        background: hsla(0, 0%, 66%, 0.69);
        overflow: hidden;
        transform: translateX(-227px);
        transition: all 1s;
        filter: var(--filter-sp-ds-0);
        border: var(--border-sp-0);
        border-radius: 0px 8px 8px 0px;
        font-Family: var(--ff-sp-1);
        z-index: 500;
    }
    #big-3 {
        margin: 27px 0px 15px 0px;
        left: 15px;
        display: inline-block;
        position: absolute;
        width: 160px;
        align-items: center;
        filter: var(--filter-sp-ds-1);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 160 / 61;
        z-index: 600;
    }
    #line {
        margin: 110px 0px 20px 0px;
        left: 15px;
    }
    #js-symbol {
        margin: -14px 0px 0.5px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: center;
        filter: var(--filter-sp-ds-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }

    #ts-symbol {
        margin: 80px 0px 1px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: baseline;
        filter: var(--filter-sp-ds-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }
    #line2 {
        margin: 190px 0px 20px 0px;
        left: 15px;
    }
    #vanilla {
        margin: 7px 0px 3px 0px;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
    }
    @keyframes FadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes FadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    .hamburgers {
        margin: 8px 0px 1px 15px;
        position: absolute;
        top: -13px;
        cursor: pointer;
        font-size: 35px;
        color: var(--fc-sp-5);
        filter: drop-shadow(3px 2px 2px rgba(0, 0, 0, 0.6));
        z-index: 1500;

    }
    .hamburgers:hover {
        color: var(--fc-sp-17);
    }
    .hamburgers:active {
        color: rgb(252, 4, 4);
        transform: rotate(180deg);
        transition: all .5s;
    }
    .item {
        padding: 20px 0 20px 10px;
        width: 200px;
        height: 8px;
        line-height: 9px;
        border-bottom: 1px solid #999;
        font-size: 12px; 
        cursor: pointer;  
    }

    .lottery-a {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .powerball-a {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }
    .mega_mil {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .cash5-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .pick3-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .pick4-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .winnings-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }    

    .today_nums-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

        .histories-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .terms-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .q_a-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .security-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .about-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .contact-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .histories-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .terms-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .q_a-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .security-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .about-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .contact-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .item:hover {
        background: rgb(112, 112, 112);
        border-radius: 0px 8px 8px 0px;
        box-shadow: 10px 6px 16px  rgba(0, 0, 0, 0.6);
        color: rgb(233, 242, 255);
        font-size: 12px;
        font-style: italic;
        font-weight: 600;
        letter-spacing: 0.22em;
    }

    .projects-sidepanel-title {
        margin: 30px auto 0px auto;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
    }
    `;

sidePanel_sharedStyles.pick3 = /* css */ `

    #container {
        margin-bottom: 30px;
        position: absolute;
        top: 80px;
        left: 0px;
        width: 200px;
        height: calc(100% - 255px);
        background: hsla(0, 0%, 66%, 0.69);
        overflow: hidden;
        transform: translateX(-227px);
        transition: all 1s;
        filter: var(--filter-sp-ds-0);
        border: var(--border-sp-0);
        border-radius: 0px 8px 8px 0px;
        font-Family: var(--ff-sp-1);
        z-index: 500;
    }
    #big-3 {
        margin: 27px 0px 15px 0px;
        left: 15px;
        display: inline-block;
        position: absolute;
        width: 160px;
        align-items: center;
        filter: var(--filter-sp-ds-1);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 160 / 61;
        z-index: 600;
    }
    #line {
        margin: 110px 0px 20px 0px;
        left: 15px;
    }
    #js-symbol {
        margin: -14px 0px 0.5px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: center;
        filter: var(--filter-sp-ds-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }

    #ts-symbol {
        margin: 80px 0px 1px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: baseline;
        filter: var(--filter-sp-ds-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }
    #line2 {
        margin: 190px 0px 20px 0px;
        left: 15px;
    }
    #vanilla {
        margin: 7px 0px 3px 0px;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
    }
    @keyframes FadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes FadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    .hamburgers {
        margin: 8px 0px 1px 15px;
        position: absolute;
        top: -13px;
        cursor: pointer;
        font-size: 35px;
        color: var(--fc-sp-5);
        filter: drop-shadow(3px 2px 2px rgba(0, 0, 0, 0.6));
        z-index: 1500;

    }
    .hamburgers:hover {
        color: var(--fc-sp-17);
    }
    .hamburgers:active {
        color: rgb(252, 4, 4);
        transform: rotate(180deg);
        transition: all .5s;
    }
    .item {
        padding: 20px 0 20px 10px;
        width: 200px;
        height: 8px;
        line-height: 9px;
        border-bottom: 1px solid #999;
        font-size: 12px; 
        cursor: pointer;  
    }

    .lottery-a {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .powerball-a {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }
    .mega_mil {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .cash5-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .pick3-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .pick4-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .winnings-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }    

    .today_nums-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

        .histories-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .terms-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .q_a-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .security-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .about-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .contact-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .histories-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .terms-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .q_a-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .security-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .about-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .contact-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .item:hover {
        background: rgb(112, 112, 112);
        border-radius: 0px 8px 8px 0px;
        box-shadow: 10px 6px 16px  rgba(0, 0, 0, 0.6);
        color: rgb(233, 242, 255);
        font-size: 12px;
        font-style: italic;
        font-weight: 600;
        letter-spacing: 0.22em;
    }

    .projects-sidepanel-title {
        margin: 30px auto 0px auto;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
    }

`;

sidePanel_sharedStyles.pick4 = /* css */ `

    #container {
        margin-bottom: 30px;
        position: absolute;
        top: 80px;
        left: 0px;
        width: 200px;
        height: calc(100% - 255px);
        background: hsla(0, 0%, 66%, 0.69);
        overflow: hidden;
        transform: translateX(-227px);
        transition: all 1s;
        filter: var(--filter-sp-ds-0);
        border: var(--border-sp-0);
        border-radius: 0px 8px 8px 0px;
        font-Family: var(--ff-sp-1);
        z-index: 500;
    }
    #big-3 {
        margin: 27px 0px 15px 0px;
        left: 15px;
        display: inline-block;
        position: absolute;
        width: 160px;
        align-items: center;
        filter: var(--filter-sp-ds-1);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 160 / 61;
        z-index: 600;
    }
    #line {
        margin: 110px 0px 20px 0px;
        left: 15px;
    }
    #js-symbol {
        margin: -14px 0px 0.5px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: center;
        filter: var(--filter-sp-ds-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }

    #ts-symbol {
        margin: 80px 0px 1px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: baseline;
        filter: var(--filter-sp-ds-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }
    #line2 {
        margin: 190px 0px 20px 0px;
        left: 15px;
    }
    #vanilla {
        margin: 7px 0px 3px 0px;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
    }
    @keyframes FadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes FadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    .hamburgers {
        margin: 8px 0px 1px 15px;
        position: absolute;
        top: -13px;
        cursor: pointer;
        font-size: 35px;
        color: var(--fc-sp-5);
        filter: drop-shadow(3px 2px 2px rgba(0, 0, 0, 0.6));
        z-index: 1500;

    }
    .hamburgers:hover {
        color: var(--fc-sp-17);
    }
    .hamburgers:active {
        color: rgb(252, 4, 4);
        transform: rotate(180deg);
        transition: all .5s;
    }
    .item {
        padding: 20px 0 20px 10px;
        width: 200px;
        height: 8px;
        line-height: 9px;
        border-bottom: 1px solid #999;
        font-size: 12px; 
        cursor: pointer;  
    }

    .lottery-a {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .powerball-a {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }
    .mega_mil {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .cash5-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .pick3-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .pick4-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .winnings-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }    

    .today_nums-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

        .histories-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .terms-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .q_a-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .security-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .about-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .contact-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .histories-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .terms-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .q_a-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .security-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .about-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .contact-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .item:hover {
        background: rgb(112, 112, 112);
        border-radius: 0px 8px 8px 0px;
        box-shadow: 10px 6px 16px  rgba(0, 0, 0, 0.6);
        color: rgb(233, 242, 255);
        font-size: 12px;
        font-style: italic;
        font-weight: 600;
        letter-spacing: 0.22em;
    }

    .projects-sidepanel-title {
        margin: 30px auto 0px auto;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
    }
    `;

sidePanel_sharedStyles.cash_pop = /* css */ `

    #container {
        margin-bottom: 30px;
        position: absolute;
        top: 80px;
        left: 0px;
        width: 200px;
        height: calc(100% - 255px);
        background: hsla(0, 0%, 66%, 0.69);
        overflow: hidden;
        transform: translateX(-227px);
        transition: all 1s;
        filter: var(--filter-sp-ds-0);
        border: var(--border-sp-0);
        border-radius: 0px 8px 8px 0px;
        font-Family: var(--ff-sp-1);
        z-index: 500;
    }
    #big-3 {
        margin: 27px 0px 15px 0px;
        left: 15px;
        display: inline-block;
        position: absolute;
        width: 160px;
        align-items: center;
        filter: var(--filter-sp-ds-1);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 160 / 61;
        z-index: 600;
    }
    #line {
        margin: 110px 0px 20px 0px;
        left: 15px;
    }
    #js-symbol {
        margin: -14px 0px 0.5px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: center;
        filter: var(--filter-sp-ds-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }

    #ts-symbol {
        margin: 80px 0px 1px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: baseline;
        filter: var(--filter-sp-ds-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }
    #line2 {
        margin: 190px 0px 20px 0px;
        left: 15px;
    }
    #vanilla {
        margin: 7px 0px 3px 0px;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
    }
    @keyframes FadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes FadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    .hamburgers {
        margin: 8px 0px 1px 15px;
        position: absolute;
        top: -13px;
        cursor: pointer;
        font-size: 35px;
        color: var(--fc-sp-5);
        filter: drop-shadow(3px 2px 2px rgba(0, 0, 0, 0.6));
        z-index: 1500;

    }
    .hamburgers:hover {
        color: var(--fc-sp-17);
    }
    .hamburgers:active {
        color: rgb(252, 4, 4);
        transform: rotate(180deg);
        transition: all .5s;
    }
    .item {
        padding: 20px 0 20px 10px;
        width: 200px;
        height: 8px;
        line-height: 9px;
        border-bottom: 1px solid #999;
        font-size: 12px; 
        cursor: pointer;  
    }

    .lottery-a {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .powerball-a {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }
    .mega_mil {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .cash5-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .pick3-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .pick4-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .winnings-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }    

    .today_nums-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

        .histories-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .terms-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .q_a-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .security-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .about-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .contact-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .histories-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .terms-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .q_a-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .security-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .about-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .contact-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .item:hover {
        background: rgb(112, 112, 112);
        border-radius: 0px 8px 8px 0px;
        box-shadow: 10px 6px 16px  rgba(0, 0, 0, 0.6);
        color: rgb(233, 242, 255);
        font-size: 12px;
        font-style: italic;
        font-weight: 600;
        letter-spacing: 0.22em;
    }

    .projects-sidepanel-title {
        margin: 30px auto 0px auto;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
    }

`;

sidePanel_sharedStyles.winnings = /* css */ `

    #container {
        margin-bottom: 30px;
        position: absolute;
        top: 80px;
        left: 0px;
        width: 200px;
        height: calc(100% - 255px);
        background: hsla(0, 0%, 66%, 0.69);
        overflow: hidden;
        transform: translateX(-227px);
        transition: all 1s;
        filter: var(--filter-sp-ds-0);
        border: var(--border-sp-0);
        border-radius: 0px 8px 8px 0px;
        font-Family: var(--ff-sp-1);
        z-index: 500;
    }
    #big-3 {
        margin: 27px 0px 15px 0px;
        left: 15px;
        display: inline-block;
        position: absolute;
        width: 160px;
        align-items: center;
        filter: var(--filter-sp-ds-1);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 160 / 61;
        z-index: 600;
    }
    #line {
        margin: 110px 0px 20px 0px;
        left: 15px;
    }
    #js-symbol {
        margin: -14px 0px 0.5px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: center;
        filter: var(--filter-sp-ds-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }

    #ts-symbol {
        margin: 80px 0px 1px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: baseline;
        filter: var(--filter-sp-ds-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }
    #line2 {
        margin: 190px 0px 20px 0px;
        left: 15px;
    }
    #vanilla {
        margin: 7px 0px 3px 0px;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
    }
    @keyframes FadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes FadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    .hamburgers {
        margin: 8px 0px 1px 15px;
        position: absolute;
        top: -13px;
        cursor: pointer;
        font-size: 35px;
        color: var(--fc-sp-5);
        filter: drop-shadow(3px 2px 2px rgba(0, 0, 0, 0.6));
        z-index: 1500;

    }
    .hamburgers:hover {
        color: var(--fc-sp-17);
    }
    .hamburgers:active {
        color: rgb(252, 4, 4);
        transform: rotate(180deg);
        transition: all .5s;
    }
    .item {
        padding: 20px 0 20px 10px;
        width: 200px;
        height: 8px;
        line-height: 9px;
        border-bottom: 1px solid #999;
        font-size: 12px; 
        cursor: pointer;  
    }

    .lottery-a {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .powerball-a {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }
    .mega_mil {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .cash5-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .pick3-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .pick4-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .winnings-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }    

    .today_nums-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

        .histories-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .terms-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .q_a-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .security-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .about-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .contact-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .histories-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .terms-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .q_a-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .security-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .about-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .contact-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .item:hover {
        background: rgb(112, 112, 112);
        border-radius: 0px 8px 8px 0px;
        box-shadow: 10px 6px 16px  rgba(0, 0, 0, 0.6);
        color: rgb(233, 242, 255);
        font-size: 12px;
        font-style: italic;
        font-weight: 600;
        letter-spacing: 0.22em;
    }

    .projects-sidepanel-title {
        margin: 30px auto 0px auto;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
    }

`;

sidePanel_sharedStyles.today_nums = /* css */ `

    #container {
        margin-bottom: 30px;
        position: absolute;
        top: 80px;
        left: 0px;
        width: 200px;
        height: calc(100% - 255px);
        background: hsla(0, 0%, 66%, 0.69);
        overflow: hidden;
        transform: translateX(-227px);
        transition: all 1s;
        filter: var(--filter-sp-ds-0);
        border: var(--border-sp-0);
        border-radius: 0px 8px 8px 0px;
        font-Family: var(--ff-sp-1);
        z-index: 500;
    }
    #big-3 {
        margin: 27px 0px 15px 0px;
        left: 15px;
        display: inline-block;
        position: absolute;
        width: 160px;
        align-items: center;
        filter: var(--filter-sp-ds-1);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 160 / 61;
        z-index: 600;
    }
    #line {
        margin: 110px 0px 20px 0px;
        left: 15px;
    }
    #js-symbol {
        margin: -14px 0px 0.5px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: center;
        filter: var(--filter-sp-ds-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }

    #ts-symbol {
        margin: 80px 0px 1px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: baseline;
        filter: var(--filter-sp-ds-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }
    #line2 {
        margin: 190px 0px 20px 0px;
        left: 15px;
    }
    #vanilla {
        margin: 7px 0px 3px 0px;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
    }
    @keyframes FadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes FadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    .hamburgers {
        margin: 8px 0px 1px 15px;
        position: absolute;
        top: -13px;
        cursor: pointer;
        font-size: 35px;
        color: var(--fc-sp-5);
        filter: drop-shadow(3px 2px 2px rgba(0, 0, 0, 0.6));
        z-index: 1500;

    }
    .hamburgers:hover {
        color: var(--fc-sp-17);
    }
    .hamburgers:active {
        color: rgb(252, 4, 4);
        transform: rotate(180deg);
        transition: all .5s;
    }
    .item {
        padding: 20px 0 20px 10px;
        width: 200px;
        height: 8px;
        line-height: 9px;
        border-bottom: 1px solid #999;
        font-size: 12px; 
        cursor: pointer;  
    }

    .lottery-a {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .powerball-a {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }
    .mega_mil {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .cash5-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .pick3-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .pick4-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .winnings-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }    

    .today_nums-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

        .histories-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .terms-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .q_a-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .security-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .about-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .contact-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .histories-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .terms-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .q_a-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .security-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .about-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .contact-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .item:hover {
        background: rgb(112, 112, 112);
        border-radius: 0px 8px 8px 0px;
        box-shadow: 10px 6px 16px  rgba(0, 0, 0, 0.6);
        color: rgb(233, 242, 255);
        font-size: 12px;
        font-style: italic;
        font-weight: 600;
        letter-spacing: 0.22em;
    }

    .projects-sidepanel-title {
        margin: 30px auto 0px auto;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
    }

`;

sidePanel_sharedStyles.histories = /* css */ `

    #container {
        margin-bottom: 30px;
        position: absolute;
        top: 80px;
        left: 0px;
        width: 200px;
        height: calc(100% - 255px);
        background: hsla(0, 0%, 66%, 0.69);
        overflow: hidden;
        transform: translateX(-227px);
        transition: all 1s;
        filter: var(--filter-sp-ds-0);
        border: var(--border-sp-0);
        border-radius: 0px 8px 8px 0px;
        font-Family: var(--ff-sp-1);
        z-index: 500;
    }
    #big-3 {
        margin: 27px 0px 15px 0px;
        left: 15px;
        display: inline-block;
        position: absolute;
        width: 160px;
        align-items: center;
        filter: var(--filter-sp-ds-1);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 160 / 61;
        z-index: 600;
    }
    #line {
        margin: 110px 0px 20px 0px;
        left: 15px;
    }
    #js-symbol {
        margin: -14px 0px 0.5px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: center;
        filter: var(--filter-sp-ds-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }

    #ts-symbol {
        margin: 80px 0px 1px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: baseline;
        filter: var(--filter-sp-ds-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }
    #line2 {
        margin: 190px 0px 20px 0px;
        left: 15px;
    }
    #vanilla {
        margin: 7px 0px 3px 0px;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
    }
    @keyframes FadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes FadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    .hamburgers {
        margin: 8px 0px 1px 15px;
        position: absolute;
        top: -13px;
        cursor: pointer;
        font-size: 35px;
        color: var(--fc-sp-5);
        filter: drop-shadow(3px 2px 2px rgba(0, 0, 0, 0.6));
        z-index: 1500;

    }
    .hamburgers:hover {
        color: var(--fc-sp-17);
    }
    .hamburgers:active {
        color: rgb(252, 4, 4);
        transform: rotate(180deg);
        transition: all .5s;
    }
    .item {
        padding: 20px 0 20px 10px;
        width: 200px;
        height: 8px;
        line-height: 9px;
        border-bottom: 1px solid #999;
        font-size: 12px; 
        cursor: pointer;  
    }

    .lottery-a {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .powerball-a {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }
    .mega_mil {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .cash5-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .pick3-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .pick4-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .winnings-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }    

    .today_nums-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

        .histories-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .terms-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .q_a-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .security-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .about-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .contact-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .histories-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .terms-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .q_a-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .security-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .about-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .contact-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .item:hover {
        background: rgb(112, 112, 112);
        border-radius: 0px 8px 8px 0px;
        box-shadow: 10px 6px 16px  rgba(0, 0, 0, 0.6);
        color: rgb(233, 242, 255);
        font-size: 12px;
        font-style: italic;
        font-weight: 600;
        letter-spacing: 0.22em;
    }

    .projects-sidepanel-title {
        margin: 30px auto 0px auto;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
    }

`;

sidePanel_sharedStyles.terms = /* css */ `

    #container {
        margin-bottom: 30px;
        position: absolute;
        top: 80px;
        left: 0px;
        width: 200px;
        height: calc(100% - 255px);
        background: hsla(0, 0%, 66%, 0.69);
        overflow: hidden;
        transform: translateX(-227px);
        transition: all 1s;
        filter: var(--filter-sp-ds-0);
        border: var(--border-sp-0);
        border-radius: 0px 8px 8px 0px;
        font-Family: var(--ff-sp-1);
        z-index: 500;
    }
    #big-3 {
        margin: 27px 0px 15px 0px;
        left: 15px;
        display: inline-block;
        position: absolute;
        width: 160px;
        align-items: center;
        filter: var(--filter-sp-ds-1);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 160 / 61;
        z-index: 600;
    }
    #line {
        margin: 110px 0px 20px 0px;
        left: 15px;
    }
    #js-symbol {
        margin: -14px 0px 0.5px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: center;
        filter: var(--filter-sp-ds-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }

    #ts-symbol {
        margin: 80px 0px 1px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: baseline;
        filter: var(--filter-sp-ds-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }
    #line2 {
        margin: 190px 0px 20px 0px;
        left: 15px;
    }
    #vanilla {
        margin: 7px 0px 3px 0px;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
    }
    @keyframes FadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes FadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    .hamburgers {
        margin: 8px 0px 1px 15px;
        position: absolute;
        top: -13px;
        cursor: pointer;
        font-size: 35px;
        color: var(--fc-sp-5);
        filter: drop-shadow(3px 2px 2px rgba(0, 0, 0, 0.6));
        z-index: 1500;

    }
    .hamburgers:hover {
        color: var(--fc-sp-17);
    }
    .hamburgers:active {
        color: rgb(252, 4, 4);
        transform: rotate(180deg);
        transition: all .5s;
    }
    .item {
        padding: 20px 0 20px 10px;
        width: 200px;
        height: 8px;
        line-height: 9px;
        border-bottom: 1px solid #999;
        font-size: 12px; 
        cursor: pointer;  
    }

    .lottery-a {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .powerball-a {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }
    .mega_mil {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .cash5-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .pick3-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .pick4-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .winnings-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }    

    .today_nums-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

        .histories-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .terms-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .q_a-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .security-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .about-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .contact-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .histories-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .terms-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .q_a-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .security-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .about-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .contact-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .item:hover {
        background: rgb(112, 112, 112);
        border-radius: 0px 8px 8px 0px;
        box-shadow: 10px 6px 16px  rgba(0, 0, 0, 0.6);
        color: rgb(233, 242, 255);
        font-size: 12px;
        font-style: italic;
        font-weight: 600;
        letter-spacing: 0.22em;
    }

    .projects-sidepanel-title {
        margin: 30px auto 0px auto;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
    }

`;

sidePanel_sharedStyles.about = /* css */ `

    #container {
        margin-bottom: 30px;
        position: absolute;
        top: 80px;
        left: 0px;
        width: 200px;
        height: calc(100% - 255px);
        background: hsla(0, 0%, 66%, 0.69);
        overflow: hidden;
        transform: translateX(-227px);
        transition: all 1s;
        filter: var(--filter-sp-ds-0);
        border: var(--border-sp-0);
        border-radius: 0px 8px 8px 0px;
        font-Family: var(--ff-sp-1);
        z-index: 500;
    }
    #big-3 {
        margin: 27px 0px 15px 0px;
        left: 15px;
        display: inline-block;
        position: absolute;
        width: 160px;
        align-items: center;
        filter: var(--filter-sp-ds-1);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 160 / 61;
        z-index: 600;
    }
    #line {
        margin: 110px 0px 20px 0px;
        left: 15px;
    }
    #js-symbol {
        margin: -14px 0px 0.5px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: center;
        filter: var(--filter-sp-ds-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }

    #ts-symbol {
        margin: 80px 0px 1px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: baseline;
        filter: var(--filter-sp-ds-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }
    #line2 {
        margin: 190px 0px 20px 0px;
        left: 15px;
    }
    #vanilla {
        margin: 7px 0px 3px 0px;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
    }
    @keyframes FadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes FadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    .hamburgers {
        margin: 8px 0px 1px 15px;
        position: absolute;
        top: -13px;
        cursor: pointer;
        font-size: 35px;
        color: var(--fc-sp-5);
        filter: drop-shadow(3px 2px 2px rgba(0, 0, 0, 0.6));
        z-index: 1500;

    }
    .hamburgers:hover {
        color: var(--fc-sp-17);
    }
    .hamburgers:active {
        color: rgb(252, 4, 4);
        transform: rotate(180deg);
        transition: all .5s;
    }
    .item {
        padding: 20px 0 20px 10px;
        width: 200px;
        height: 8px;
        line-height: 9px;
        border-bottom: 1px solid #999;
        font-size: 12px; 
        cursor: pointer;  
    }

    .lottery-a {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .powerball-a {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }
    .mega_mil {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .cash5-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .pick3-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .pick4-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .winnings-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }    

    .today_nums-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

        .histories-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .terms-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .q_a-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .security-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .about-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .contact-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .histories-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .terms-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .q_a-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .security-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .about-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .contact-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .item:hover {
        background: rgb(112, 112, 112);
        border-radius: 0px 8px 8px 0px;
        box-shadow: 10px 6px 16px  rgba(0, 0, 0, 0.6);
        color: rgb(233, 242, 255);
        font-size: 12px;
        font-style: italic;
        font-weight: 600;
        letter-spacing: 0.22em;
    }

    .projects-sidepanel-title {
        margin: 30px auto 0px auto;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
    }
    `;

sidePanel_sharedStyles.contact = /* css */ `

    #container {
        margin-bottom: 30px;
        position: absolute;
        top: 80px;
        left: 0px;
        width: 200px;
        height: calc(100% - 255px);
        background: hsla(0, 0%, 66%, 0.69);
        overflow: hidden;
        transform: translateX(-227px);
        transition: all 1s;
        filter: var(--filter-sp-ds-0);
        border: var(--border-sp-0);
        border-radius: 0px 8px 8px 0px;
        font-Family: var(--ff-sp-1);
        z-index: 500;
    }
    #big-3 {
        margin: 27px 0px 15px 0px;
        left: 15px;
        display: inline-block;
        position: absolute;
        width: 160px;
        align-items: center;
        filter: var(--filter-sp-ds-1);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 160 / 61;
        z-index: 600;
    }
    #line {
        margin: 110px 0px 20px 0px;
        left: 15px;
    }
    #js-symbol {
        margin: -14px 0px 0.5px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: center;
        filter: var(--filter-sp-ds-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }

    #ts-symbol {
        margin: 80px 0px 1px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: baseline;
        filter: var(--filter-sp-ds-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }
    #line2 {
        margin: 190px 0px 20px 0px;
        left: 15px;
    }
    #vanilla {
        margin: 7px 0px 3px 0px;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
    }
    @keyframes FadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes FadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    .hamburgers {
        margin: 8px 0px 1px 15px;
        position: absolute;
        top: -13px;
        cursor: pointer;
        font-size: 35px;
        color: var(--fc-sp-5);
        filter: drop-shadow(3px 2px 2px rgba(0, 0, 0, 0.6));
        z-index: 1500;

    }
    .hamburgers:hover {
        color: var(--fc-sp-17);
    }
    .hamburgers:active {
        color: rgb(252, 4, 4);
        transform: rotate(180deg);
        transition: all .5s;
    }
    .item {
        padding: 20px 0 20px 10px;
        width: 200px;
        height: 8px;
        line-height: 9px;
        border-bottom: 1px solid #999;
        font-size: 12px; 
        cursor: pointer;  
    }

    .lottery-a {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .powerball-a {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }
    .mega_mil {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .cash5-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .pick3-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .pick4-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .winnings-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }    

    .today_nums-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

        .histories-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .terms-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .q_a-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .security-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .about-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .contact-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .histories-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .terms-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .q_a-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .security-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .about-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .contact-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .item:hover {
        background: rgb(112, 112, 112);
        border-radius: 0px 8px 8px 0px;
        box-shadow: 10px 6px 16px  rgba(0, 0, 0, 0.6);
        color: rgb(233, 242, 255);
        font-size: 12px;
        font-style: italic;
        font-weight: 600;
        letter-spacing: 0.22em;
    }

    .projects-sidepanel-title {
        margin: 30px auto 0px auto;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
    }

`;

sidePanel_sharedStyles.security = /* css */ `

    #container {
        margin-bottom: 30px;
        position: absolute;
        top: 80px;
        left: 0px;
        width: 200px;
        height: calc(100% - 255px);
        background: hsla(0, 0%, 66%, 0.69);
        overflow: hidden;
        transform: translateX(-227px);
        transition: all 1s;
        filter: var(--filter-sp-ds-0);
        border: var(--border-sp-0);
        border-radius: 0px 8px 8px 0px;
        font-Family: var(--ff-sp-1);
        z-index: 500;
    }
    #big-3 {
        margin: 27px 0px 15px 0px;
        left: 15px;
        display: inline-block;
        position: absolute;
        width: 160px;
        align-items: center;
        filter: var(--filter-sp-ds-1);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 160 / 61;
        z-index: 600;
    }
    #line {
        margin: 110px 0px 20px 0px;
        left: 15px;
    }
    #js-symbol {
        margin: -14px 0px 0.5px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: center;
        filter: var(--filter-sp-ds-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }

    #ts-symbol {
        margin: 80px 0px 1px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: baseline;
        filter: var(--filter-sp-ds-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }
    #line2 {
        margin: 190px 0px 20px 0px;
        left: 15px;
    }
    #vanilla {
        margin: 7px 0px 3px 0px;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
    }
    @keyframes FadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes FadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    .hamburgers {
        margin: 8px 0px 1px 15px;
        position: absolute;
        top: -13px;
        cursor: pointer;
        font-size: 35px;
        color: var(--fc-sp-5);
        filter: drop-shadow(3px 2px 2px rgba(0, 0, 0, 0.6));
                z-index: 1500;

    }
    .hamburgers:hover {
        color: var(--fc-sp-17);
    }
    .hamburgers:active {
        color: rgb(252, 4, 4);
        transform: rotate(180deg);
        transition: all .5s;
    }
    .item {
        padding: 20px 0 20px 10px;
        width: 200px;
        height: 8px;
        line-height: 9px;
        border-bottom: 1px solid #999;
        font-size: 12px; 
        cursor: pointer;  
    }

    .lottery-a {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .powerball-a {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }
    .mega_mil {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .cash5-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .pick3-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .pick4-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .winnings-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }    

    .today_nums-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

        .histories-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .terms-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .q_a-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .security-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .about-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .contact-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .histories-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .terms-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .q_a-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .security-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .about-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .contact-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .item:hover {
        background: rgb(112, 112, 112);
        border-radius: 0px 8px 8px 0px;
        box-shadow: 10px 6px 16px  rgba(0, 0, 0, 0.6);
        color: rgb(233, 242, 255);
        font-size: 12px;
        font-style: italic;
        font-weight: 600;
        letter-spacing: 0.22em;
    }

    .projects-sidepanel-title {
        margin: 30px auto 0px auto;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
    }
    `;

sidePanel_sharedStyles.q_a = /* css */ `

    #container {
        margin-bottom: 30px;
        position: absolute;
        top: 80px;
        left: 0px;
        width: 200px;
        height: calc(100% - 255px);
        background: hsla(0, 0%, 66%, 0.69);
        overflow: hidden;
        transform: translateX(-227px);
        transition: all 1s;
        filter: var(--filter-sp-ds-0);
        border: var(--border-sp-0);
        border-radius: 0px 8px 8px 0px;
        font-Family: var(--ff-sp-1);
        z-index: 500;
    }
    #big-3 {
        margin: 27px 0px 15px 0px;
        left: 15px;
        display: inline-block;
        position: absolute;
        width: 160px;
        align-items: center;
        filter: var(--filter-sp-ds-1);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 160 / 61;
        z-index: 600;
    }
    #line {
        margin: 110px 0px 20px 0px;
        left: 15px;
    }
    #js-symbol {
        margin: -14px 0px 0.5px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: center;
        filter: var(--filter-sp-ds-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }

    #ts-symbol {
        margin: 80px 0px 1px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: baseline;
        filter: var(--filter-sp-ds-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }
    #line2 {
        margin: 190px 0px 20px 0px;
        left: 15px;
    }
    #vanilla {
        margin: 7px 0px 3px 0px;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
    }
    @keyframes FadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes FadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    .hamburgers {
        margin: 8px 0px 1px 15px;
        position: absolute;
        top: -13px;
        cursor: pointer;
        font-size: 35px;
        color: var(--fc-sp-5);
        filter: drop-shadow(3px 2px 2px rgba(0, 0, 0, 0.6));
        z-index: 1500;

    }
    .hamburgers:hover {
        color: var(--fc-sp-17);
    }
    .hamburgers:active {
        color: rgb(252, 4, 4);
        transform: rotate(180deg);
        transition: all .5s;
    }
    .item {
        padding: 20px 0 20px 10px;
        width: 200px;
        height: 8px;
        line-height: 9px;
        border-bottom: 1px solid #999;
        font-size: 12px; 
        cursor: pointer;  
    }

    .lottery-a {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .powerball-a {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }
    .mega_mil {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .cash5-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .pick3-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .pick4-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .winnings-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }    

    .today_nums-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

        .histories-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .terms-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .q_a-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .security-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .about-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .contact-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .histories-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .terms-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .q_a-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .security-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .about-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .contact-anchor {
        color: var(--fc-sp-5);
        text-decoration: none;
        outline: none;
    }

    .item:hover {
        background: rgb(112, 112, 112);
        border-radius: 0px 8px 8px 0px;
        box-shadow: 10px 6px 16px  rgba(0, 0, 0, 0.6);
        color: rgb(233, 242, 255);
        font-size: 12px;
        font-style: italic;
        font-weight: 600;
        letter-spacing: 0.22em;
    }

    .projects-sidepanel-title {
        margin: 30px auto 0px auto;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
    }

`;

export { sidePanel_sharedStyles };
