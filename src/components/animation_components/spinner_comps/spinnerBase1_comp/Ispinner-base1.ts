'use strict';

interface IspinnerBase1Template {
    activateShadowDOM: boolean;
    root: ShadowRoot | null | undefined;
    template: string;
    connectedCallback(): void;
}

interface IspinnerBase1 {
    activateShadowDOM: boolean;
    root: ShadowRoot | null | undefined;
    template: string;
    connectedCallback(): void;
}

interface IspinnerBase1SharedHTML {
    construct: string;
    logic: string;
}

interface IspinnerBase1SharedStyles {
    global: string;
    root: string;
    construct: string;
    logic: string;
    queries: string;
}

export type {
    IspinnerBase1Template,
    IspinnerBase1,
    IspinnerBase1SharedHTML,
    IspinnerBase1SharedStyles
};
