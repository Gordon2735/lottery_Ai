// Cash Pop Game

'use strict';

import { PopGameTemplate } from './pop-game_template.js';
import { popGame_sharedHTML } from './pop-game_sharedHTML.js';
import { popGame_sharedStyle } from './pop-game_sharedStyles.js';
import {
    RegisterComponent,
    setAttributes,
    appendChildren
} from '../../../componentTools/general_helpers.js';
import getRandomPopNumber from '../pop_logic/popLogic.js';

class PopGame extends PopGameTemplate {
    activateShadowDOM: boolean = false;
    body: HTMLBodyElement;
    mainContainer: HTMLElement | undefined;
    scrapeContainer: HTMLElement;
    scrapeH1: HTMLHeadingElement;
    scrapeNumbers: HTMLParagraphElement;
    randomPopContainer: HTMLElement;
    randomPopH1: HTMLHeadingElement;
    randomPopNumbers: HTMLParagraphElement;

    public get template(): string {
        return /*html*/ `        

            <style>
                ${popGame_sharedStyle.container}
            </style>
            <style>
                ${popGame_sharedStyle.results}
            </style>       
            
            ${popGame_sharedHTML.container}
        
        `;
    }
    constructor() {
        super();

        this.activateShadowDOM = false;

        const body: HTMLBodyElement = document.getElementsByTagName('body')[0];
        const scrapeContainer: HTMLElement = document.createElement('section');
        const scrapeH1: HTMLHeadingElement = document.createElement('h1');
        const scrapeNumbers: HTMLParagraphElement = document.createElement('p');
        const randomPopContainer: HTMLElement =
            document.createElement('section');
        const randomPopH1: HTMLHeadingElement = document.createElement('h1');
        const randomPopNumbers: HTMLParagraphElement =
            document.createElement('p');

        this.body = body;
        this.scrapeContainer = scrapeContainer;
        this.scrapeH1 = scrapeH1;
        this.scrapeNumbers = scrapeNumbers;
        this.randomPopContainer = randomPopContainer;
        this.randomPopH1 = randomPopH1;
        this.randomPopNumbers = randomPopNumbers;

        setAttributes(this.scrapeContainer, {
            id: 'scrapeContainer',
            class: 'scrape-container'
        });
        setAttributes(this.scrapeH1, {
            id: 'scrapeH1',
            class: 'scrape-h1'
        });
        setAttributes(this.scrapeNumbers, {
            id: 'scrapeNumbers',
            class: 'scrape-numbers'
        });
        setAttributes(this.randomPopContainer, {
            id: 'randomPopContainer',
            class: 'random-pop-container'
        });
        setAttributes(this.randomPopH1, {
            id: 'randomPopH1',
            class: 'random-pop-h1'
        });
        setAttributes(this.randomPopNumbers, {
            id: 'randomPopNumbers',
            class: 'random-pop-numbers'
        });
    }
    connectedCallback(): void {
        super.connectedCallback();

        const mainContainer: HTMLElement =
            document.getElementById('mainContainer')!;
        this.mainContainer = mainContainer;

        appendChildren(this.mainContainer, [
            this.randomPopContainer,
            this.scrapeContainer
        ]);
        appendChildren(this.scrapeContainer, [
            this.scrapeH1,
            this.scrapeNumbers
        ]);

        this.randomPopH1.textContent = 'Random Pop Number';

        const sanitizeRandomPopNumber = async () => {
            await getRandomPopNumber().then((num: number) => {
                this.randomPopNumbers.innerHTML = /*html*/ `                
        
                    <span>${num}</span>
                
                `;
            });
        };
        sanitizeRandomPopNumber();

        appendChildren(this.randomPopContainer, [
            this.randomPopH1,
            this.randomPopNumbers
        ]);
    }
    disConnectedCallback(): void {}
}
RegisterComponent('pop-game', PopGame);
