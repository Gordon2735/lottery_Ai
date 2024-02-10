'use strict';

interface IIndexWrapper {
	activateShadowDOM: boolean;
	root: ShadowRoot | null | undefined;
	template: string;
	connectedCallback(): void;
}

interface IIndexWrapperTemplate {
	activateShadowDOM: boolean;
	root: ShadowRoot | null | undefined;
	template: string;
	connectedCallback(): void;
}

interface IIndexWrapperShell {
	activateShadowDOM: boolean;
	root: ShadowRoot | null | undefined;
	template: string;
	connectedCallback(): void;
}

interface IIndexWrapperSharedHTML {
	global: string;
	shell: string;
	container: string;
}
interface IIndexWrapperSharedStyles {
	global: string;
	root: string;
	shell: string;
	container: string;
	queries: string;
}

export {
	IIndexWrapper,
	IIndexWrapperTemplate,
	IIndexWrapperShell,
	IIndexWrapperSharedHTML,
	IIndexWrapperSharedStyles
};
