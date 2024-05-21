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

//function to handle multiple styles
// async function setStyle(
//     elId: string,
//     propertyObject = { '': '' }
// ): Promise<void> {
//     const element = document.getElementById(elId);
//     // const element = document.getElementById(elId) as unknown as HTMLElement;
//     for (const property in propertyObject) {
//         element!.style[property] = propertyObject[property] as {
//             '': never;
//         };
//     }
// }

async function insertStyle(
    elId: string,
    propertyObject: { [key: string]: string },
    elementVariable: HTMLElement | null,
    addKeyframes: string
): Promise<void> {
    try {
        const element: HTMLElement | null = document.getElementById(elId);

        switch (element !== null) {
            case true:
                for (const property in propertyObject) {
                    if (
                        Object.prototype.hasOwnProperty.call(
                            propertyObject,
                            property
                        )
                    ) {
                        (element as HTMLElement).style[property as never] =
                            propertyObject[property];
                    }
                }
                break;
            case false:
                console.error(
                    `
					Element with id ${elId} not found in Function insertStyle(),
					and the function's switch statement iterated to false.
				`
                );
                break;
            default:
                null;
                break;
        }
        switch (addKeyframes !== null) {
            case true:
                // (elementVariable as HTMLElement).innerHTML = /*html*/ `
                (elementVariable as HTMLElement).insertAdjacentHTML(
                    'beforeend',
                    /*html*/ `
					<style type="text/css">
						${addKeyframes}
					</style>
				`
                );
                break;
            case false:
                console.info(
                    `Evidently no ' @keyframes ' was needed and the 'insertStyles()' 
					 Function's switch statement for addKeyframes was false...
				 `
                );
                break;
            default:
                null;
                break;
        }
        return;
    } catch (error: unknown) {
        console.error(
            `
			The Function 'insertStyles()', which is a General-Helper Function 
			caught an error in the try/catch-block...
			ERROR: ${error}
		`
        );
        return;
    }
}

// setStyle('xyz', { 'padding-top': '10px' });

export {
    removeChildren as default,
    RegisterComponent,
    setAttributes,
    appendChildren,
    insertStyle
};
