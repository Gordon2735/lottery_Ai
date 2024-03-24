'use strict';

interface IerrorBaseTemplate {
	activateShadowDOM: boolean;
	root: ShadowRoot | null | undefined;
	template: string;
	connectedCallback(): void;
	render(): void;
	spanErrorCode: () => void;
}

interface IerrorBase {
	activateShadowDOM: boolean;
	root: ShadowRoot | null | undefined;
	template: string;
	connectedCallback(): void;
}

interface IerrorBaseSharedHTML {
	base: string;
}

interface IerrorBaseSharedStyles {
	root: string;
	base: string;
}

export {
	IerrorBaseTemplate,
	IerrorBase,
	IerrorBaseSharedHTML,
	IerrorBaseSharedStyles
};
