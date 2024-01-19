// General Component Helper Functions

import ISetAttributes, {
	IAppendChildren,
	IRemoveChildren
} from './Interface_componentTools.js';

('use strict');

async function RegisterComponent(
	name: string,
	constructor: CustomElementConstructor,
	extendsElement?: string | undefined
): Promise<void | CustomElementRegistry> {
	extendsElement !== null
		? customElements.define(name, constructor, { extends: extendsElement })
		: customElements.define(name, constructor);
	return;
}

async function setAttributes(
	tag: HTMLElement,
	attribute: ISetAttributes
): Promise<void> {
	Object.keys(attribute).forEach(function (keys: string): void {
		tag.setAttribute(keys, attribute[keys]);
		return;
	});
}

async function appendChildren({
	parent,
	children
}: IAppendChildren): Promise<void> {
	children.forEach((child: Node) => {
		return parent?.appendChild(child);
	});
}

async function removeChildren({
	parent,
	children
}: IRemoveChildren): Promise<void> {
	children.forEach((child: Node) => {
		return parent?.removeChild(child);
	});
}

export {
	removeChildren as default,
	RegisterComponent,
	setAttributes,
	appendChildren
};
