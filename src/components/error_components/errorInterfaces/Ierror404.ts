'use strict';

interface Ierror404Template {
	activateShadowDOM: boolean;
	root: ShadowRoot | null | undefined;
	template: string;
	connectedCallback(): void;
	render(): void;
	spanErrorCode: () => void;
}

interface Ierror404 {
	activateShadowDOM: boolean;
	root: ShadowRoot | null | undefined;
	template: string;
	connectedCallback(): void;
}

interface Ierror404SharedHTML {
	browser404: string;
}

interface Ierror404SharedStyles {
	browser404: string;
}

export {
	Ierror404Template,
	Ierror404,
	Ierror404SharedHTML,
	Ierror404SharedStyles
};
