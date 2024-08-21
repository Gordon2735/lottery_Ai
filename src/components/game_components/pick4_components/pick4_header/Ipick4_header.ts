'use strict';

interface Ipick4_header {
    activateShadowDOM: boolean;
    root: ShadowRoot | null | undefined;
    template: string;
    connectedCallback(): void;
}

interface Ipick4_header_sharedHTML {
    shell: string;
    header: string;
    currentPick4: string;
}

interface Ipick4_header_sharedStyles {
    root: string;
    shell: string;
    header: string;
    currentPick4: string;
}

export type {
    Ipick4_header,
    Ipick4_header_sharedHTML,
    Ipick4_header_sharedStyles
};
