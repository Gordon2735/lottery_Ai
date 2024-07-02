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

class PopGame extends PopGameTemplate {
    activateShadowDOM: boolean = false;
    body: HTMLBodyElement;
    mainContainer: HTMLElement | undefined;
    scrapeContainer: HTMLElement;
    scrapeH1: HTMLHeadingElement;
    scrapeNumbers: HTMLParagraphElement;

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

        this.body = body;
        this.scrapeContainer = scrapeContainer;
        this.scrapeH1 = scrapeH1;
        this.scrapeNumbers = scrapeNumbers;

        setAttributes(this.scrapeContainer, {
            id: 'scrapeContainer',
            class: 'scrape_container'
        });
        setAttributes(this.scrapeH1, {
            id: 'scrapeH1',
            class: 'scrape_h1'
        });
        setAttributes(this.scrapeNumbers, {
            id: 'scrapeNumbers',
            class: 'scrape_numbers'
        });
    }
    connectedCallback(): void {
        super.connectedCallback();

        const mainContainer: HTMLElement =
            document.getElementById('mainContainer')!;
        this.mainContainer = mainContainer;

        appendChildren(this.scrapeContainer, [
            this.scrapeH1,
            this.scrapeNumbers
        ]);

        // const scrapePopComponent: HTMLElement =
        //     document.createElement('pop-scrape');

        // setAttributes(scrapePopComponent, {
        //     type: 'module',
        //     id: 'scrapePopComponent',
        //     class: 'scrape_pop_component',
        //     src: '/src/components/game_components/pop_components/pop_SC_components/pop-scrape.js',
        //     content: 'text/javascript'
        // });
        appendChildren(this.mainContainer, [
            this.scrapeContainer
            // scrapePopComponent
        ]);
    }
    disConnectedCallback(): void {}
}
RegisterComponent('pop-game', PopGame);
