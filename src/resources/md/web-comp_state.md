**Generative AI is experimental**. [Learn more](https://support.google.com/websearch?p=data_genai_search&hl=en)

Choose what you’re giving feedback on

Or give [general feedback](https://www.google.com/search?q=vanilla+javascript+native+web+components+and+state+management%2C+references+and+code+examples&rlz=1C2FHFK_enUS956US1075&sca_esv=946c7383e35f7723&sxsrf=ACQVn08D0zAraRrm-wk-VJbLzDlrdPQ-og%3A1710130671024&source=hp&ei=7oXuZdLrO6CHkvQPypeQiAo&iflsig=ANes7DEAAAAAZe6T_4eyczvfwJbJNhpZ1F_9L3K8Xed7&ved=0ahUKEwjSmqeZreuEAxWgg4QIHcoLBKEQ4dUDCBg&uact=5&oq=vanilla+javascript+native+web+components+and+state+management%2C+references+and+code+examples&gs_lp=Egdnd3Mtd2l6GgIYAiJbdmFuaWxsYSBqYXZhc2NyaXB0IG5hdGl2ZSB3ZWIgY29tcG9uZW50cyBhbmQgc3RhdGUgbWFuYWdlbWVudCwgcmVmZXJlbmNlcyBhbmQgY29kZSBleGFtcGxlczIFECEYoAEyBRAhGKABMgUQIRigATIFECEYoAFImroDUN8sWNq3A3ABeACQAQCYAZoBoAGkKaoBBTIyLjI5uAEDyAEA-AEBmAI0oAKFK6gCCsICBxAjGOoCGCfCAgQQIxgnwgIKECMYgAQYigUYJ8ICCxAAGIAEGIoFGJECwgIOEC4YgAQYigUYsQMYgwHCAhEQLhiABBixAxiDARjHARjRA8ICDhAuGIAEGLEDGMcBGNEDwgIFEAAYgATCAgsQLhiDARixAxiABMICDhAAGIAEGIoFGLEDGIMBwgILEAAYgAQYsQMYgwHCAhcQLhiABBiKBRiRAhixAxjJAxjHARjRA8ICFBAuGIAEGIoFGJECGLEDGMcBGNEDwgIIEC4YgAQYsQPCAgsQABiABBiKBRiSA8ICCxAuGIAEGLEDGIMBwgIIEAAYgAQYsQPCAgsQLhiABBjHARivAcICCBAuGIAEGNQCwgILEC4YgAQYsQMY1ALCAhQQLhiABBiKBRixAxiDARjHARjRA8ICCBAuGIAEGOUEwgIGEAAYFhgewgILEAAYgAQYigUYhgPCAgUQIRifBcICBBAhGBXCAgcQIRgKGKABwgIGECEYDRgVwgIIEAAYgAQYogSYAwuSBwUxOS4zM6AHh-AC&sclient=gws-wiz#)

Here are some references and code examples for vanilla javascript native web components and

#### **state management**

State management refers to the management of the state of one or more user interface controls such as text fields, submit buttons, radio buttons, etc. in a graphical user interface. In this user interface programming technique, the state of one UI control depends on the state of other UI controls.

[Wikipedia](https://en.wikipedia.org/wiki/State_management)

![alt text](https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRYMklpL4hNbBiuOl5HWr7QQ8NqwL_cBr2J1jM-EwULogqeTsJf)

[Flutter](https://docs.flutter.dev/data-and-backend/state-mgmt/intro)

#### Native Web Components and State Management

-   MDN Web Components Documentation
-   Web Components Examples
-   Open-WC Code Examples
-   State Management:
-   State Management with Native Web Components
-   Back to Basics: Mastering State Management in Vanilla JavaScript
-   Building stateful web apps without React

Here is a code example of a stateful web component in vanilla JavaScript:

```html
<my-component></my-component>
```

Use code with caution.

[Learn more](https://support.google.com/legal/answer/13505487?hl=en)

```javascript
class MyComponent extends HTMLElement {
	constructor() {
		super();
		this.state = { count: 0 };
	}
	render() {
		return `
      <div>
        <h1>Count: ${this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
      </div>
    `;
	}
	setState(newState) {
		this.state = { ...this.state, ...newState };
		this.render();
	}
}
customElements.define('my-component', MyComponent);
```

##### **Use code with caution**

[Learn more](https://support.google.com/legal/answer/13505487?hl=en)

This code creates a web component called `my-component` that has a single state property called `count`. The component renders a button that increments the `count` state property when clicked. When the `count` state property changes, the component re-renders itself to display the updated count.

This is just a simple example of how to use state management in vanilla JavaScript web components. There are many other ways to manage state in web components, and the best approach will vary depending on the specific needs of your application.
