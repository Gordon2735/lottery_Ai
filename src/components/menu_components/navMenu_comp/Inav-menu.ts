'use strict';

interface INavMenuTemplate {
    activateShadowDOM: boolean;
    root: ShadowRoot | null | undefined;
    template: string;
    connectedCallback(): void;
}

interface INavMenuShell {
    activateShadowDOM: boolean;
    root: ShadowRoot | null | undefined;
    template: string;
    connectedCallback(): void;
}

interface INavMenu {
    activateShadowDOM: boolean;
    root: ShadowRoot | null | undefined;
    template: string;
    connectedCallback(): void;
}

interface INavMenuSharedHTML {
    shell: string;
    navbar: string;
    navHamBtn: string;
}
interface INavMenuSharedStyles {
    shell: string;
    navbar: string;
    navHamBtn: string;
    navbarQueries: string;
}

export type {
    INavMenu,
    INavMenuTemplate,
    INavMenuShell,
    INavMenuSharedHTML,
    INavMenuSharedStyles
};
