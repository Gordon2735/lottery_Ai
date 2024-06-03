'use strict';

class Pick3PredictionsTemplate extends HTMLElement {
    activateShadowDOM: boolean = false;
    root: ShadowRoot | null | undefined;

    public set template(value: string) {
        this.template = value;
    }

    public get template(): string {
        return this.template;
    }

    connectedCallback(): void {
        if (this.activateShadowDOM === true) {
            this.attachShadow({ mode: 'open' });
        }
        this.render(this.template);
    }

    render(template: string) {
        const root: ShadowRoot | null = this.shadowRoot;
        this.root = root;

        if (this.activateShadowDOM === false) {
            this.innerHTML = template || this.template;
            return;
        } else {
            root!.innerHTML = template || this.template;
            return;
        }
    }

    disconnectedCallback(): void {}
}
export { Pick3PredictionsTemplate };
