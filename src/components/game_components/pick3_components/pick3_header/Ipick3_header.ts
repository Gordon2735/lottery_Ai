'use strict';

interface Ipick3_header {
    activateShadowDOM: boolean;
    root: ShadowRoot | null | undefined;
    template: string;
    connectedCallback(): void;
}

interface Ipick3_header_sharedHTML {
    shell: string;
    header: string;
    currentPick3: string;
}

interface Ipick3_header_sharedStyles {
    root: string;
    shell: string;
    header: string;
    currentPick3: string;
}

export type {
    Ipick3_header,
    Ipick3_header_sharedHTML,
    Ipick3_header_sharedStyles
};
