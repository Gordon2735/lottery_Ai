// Interface Collections for Component Tools

'use strict';

interface ISetAttributes {
	[key: string]: string; // key-value pairs for attributes
}

interface IAppendChildren {
	parent: HTMLElement | null;
	children: Node[];
}

interface IRemoveChildren {
	parent: HTMLElement | null;
	children: Node[];
}

export { ISetAttributes as default, IAppendChildren, IRemoveChildren };
