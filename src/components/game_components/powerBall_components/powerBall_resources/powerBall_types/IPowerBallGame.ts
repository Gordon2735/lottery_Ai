'use strict';

interface IPowerBallGame {
    activateShadowDOM: boolean;
    root: ShadowRoot | null | undefined;
    template: string;
    connectedCallback(): void;
}

interface IPowerBallGameTemplate {
    activateShadowDOM: boolean;
    root: ShadowRoot | null | undefined;
    template: string;
    connectedCallback(): void;
}

interface IPowerBallGameShell {
    activateShadowDOM: boolean;
    root: ShadowRoot | null | undefined;
    template: string;
    connectedCallback(): void;
}

interface IPowerBallGameSharedHTML {
    global: string;
    shell: string;
    container: string;
}
interface IPowerBallGameSharedStyles {
    global: string;
    root: string;
    shell: string;
    container: string;
    queries: string;
}

export type {
    IPowerBallGame,
    IPowerBallGameTemplate,
    IPowerBallGameShell,
    IPowerBallGameSharedHTML,
    IPowerBallGameSharedStyles
};
