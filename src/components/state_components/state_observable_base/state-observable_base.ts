// /* eslint-disable @typescript-eslint/no-explicit-any */
// 'use strict';

// import { StateBase } from '../../../state/state_base.js';

// abstract class StateObervableBase extends HTMLElement {
// 	// Derived class constructor must call super("IDofTemplateHTML") first.
// 	constructor(templateID: string) {
// 		super();
// 		if (templateID == null) return;
// 		this.attachShadow({ mode: 'open' });
// 		const el = <HTMLTemplateElement>document.getElementById(templateID);
// 		if (!el)
// 			throw Error(
// 				`No template found for ID '{templateID}'. Must pass the ID of the template in constructor to base class, like super('myID');`
// 			);
// 		const template = el.content;
// 		this.shadowRoot?.appendChild(template.cloneNode(true));
// 	}

// 	connectedCallback() {
// 		const states: StateBase = new StateBase();
// 		const subscribes: (
// 			propertyName: string,
// 			eventHandler: () => void
// 		) => void = states.subscribe;
// 		const attr: string | null = this.getAttribute('caller');
// 		if (!attr)
// 			throw Error("There is no 'caller' attribute on the component.");
// 		const varAndProp: [string, string] = this.parseCallerString(attr);
// 		const state = varAndProp[0];
// 		const delegate: () => void = this.update.bind(this);
// 		subscribes(state, delegate);
// 		// subscribes(varAndProp[1], delegate);
// 		this.update();
// 	}

// 	update(): void {
// 		console.log('update called start');
// 		const attr: string | null = this.getAttribute('caller');
// 		if (!attr)
// 			throw Error("There is no 'caller' attribute on the component.");
// 		const varAndProp: [string, string] = this.parseCallerString(attr);
// 		const externalValue: [string, string] =
// 			window[<keyof Window>varAndProp[0]][<keyof Window>varAndProp[1]];
// 		this.updateUI(externalValue);
// 		console.log('update called end - ' + externalValue);
// 	}

// 	private parseCallerString(caller: string): [string, string] {
// 		const segments = caller.split('.');
// 		if (segments.length !== 2)
// 			throw Error(
// 				"caller attribute must follow 'globalVariable.property' format."
// 			);
// 		return [segments[0], segments[1]];
// 	}

// 	// Use this.shadowRoot in the implementation to manipulate the DOM as needed in response to the new data.
// 	abstract updateUI(data: any): void;
// }

// export { StateObervableBase };
