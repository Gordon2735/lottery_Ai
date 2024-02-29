// General Component Helper Functions

import ISetAttributes, {
	IAppendChildren,
	IRemoveChildren
} from './Interface_componentTools.js';

('use strict');

async function RegisterComponent(
	name: string,
	constructor: CustomElementConstructor,
	extendsElement?: string
): Promise<CustomElementRegistry> {
	try {
		extendsElement !== undefined
			? customElements.define(name, constructor, {
					extends: extendsElement
				})
			: customElements.define(name, constructor);
		return Promise.resolve(customElements);
	} catch (error: unknown) {
		console.error(
			`
				RegisterComponent had ERROR: ${error}
			`
		);
		return Promise.reject(error);
	}
}

async function setAttributes(
	tag: HTMLElement,
	attribute: ISetAttributes
): Promise<void> {
	try {
		Object.keys(attribute).forEach(async function (
			keys: string
		): Promise<void> {
			tag.setAttribute(keys, attribute[keys]);
			return;
		});
		return Promise.resolve();
	} catch (error: unknown) {
		console.error(
			`
				setAttributes had ERROR: ${error}
			`
		);
		return Promise.reject(error);
	}
}

const appendChildren: IAppendChildren = async function (
	parent: HTMLElement | HTMLHeadElement,
	children: Node[] | NodeListOf<Node>
): Promise<void> {
	try {
		children.forEach((child: Node) => {
			return parent?.appendChild(child);
		});
		return Promise.resolve();
	} catch (error: unknown) {
		console.error(
			`
				appendChildren had ERROR: ${error}
			`
		);
		return Promise.reject(error);
	}
};

const removeChildren: IRemoveChildren = async function (
	parent: HTMLElement,
	children: Node[]
): Promise<void> {
	try {
		children.forEach((child: Node) => {
			return parent?.removeChild(child);
		});
		return Promise.resolve();
	} catch (error: unknown) {
		console.error(
			`
				removeChildren had ERROR: ${error}
			`
		);
		return Promise.reject(error);
	}
};

export {
	removeChildren as default,
	RegisterComponent,
	setAttributes,
	appendChildren
};
