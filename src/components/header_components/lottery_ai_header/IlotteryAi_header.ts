// Interface Lottery Ai Header

'use strict';

interface ILotteryAiHeader {
	activateShadowDOM: boolean;
	root: ShadowRoot | null | undefined;
	template: string;
	connectedCallback(): void;
}

interface ILotteryAiHeaderTemplate {
	activateShadowDOM: boolean;
	root: ShadowRoot | null | undefined;
	template: string;
	connectedCallback(): void;
}

interface ILotteryAiHeaderShell {
	activateShadowDOM: boolean;
	root: ShadowRoot | null | undefined;
	template: string;
	connectedCallback(): void;
}

interface ILotteryAiHeaderSharedHTML {
	global: string;
	shell: string;
	container: string;
	queries: string;
}
interface ILotteryAiHeaderSharedStyles {
	global: string;
	root: string;
	shell: string;
	container: string;
	queries: string;
}

export {
	ILotteryAiHeader as default,
	ILotteryAiHeaderTemplate,
	ILotteryAiHeaderShell,
	ILotteryAiHeaderSharedHTML,
	ILotteryAiHeaderSharedStyles
};
