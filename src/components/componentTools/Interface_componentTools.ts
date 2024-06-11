// Interface Collections for Component Tools

'use strict';

interface ISetAttributes {
    [key: string]: string; // key-value pairs for attributes
}

interface IAppendChildren {
    (parent: HTMLElement, children: Node[]): Promise<void>;
}

interface IRemoveChildren {
    (parent: HTMLElement, children: Node[]): Promise<void>;
}

export type { ISetAttributes, IAppendChildren, IRemoveChildren };
