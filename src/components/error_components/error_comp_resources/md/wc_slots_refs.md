<!-- Slots for Native Web-Components Explained  -->

**Generative AI is experimental**. [Learn more](https://support.google.com/websearch?p=data_genai_search&hl=en)

Choose what you’re giving feedback on

Or give [general feedback](https://www.google.com/search?q=native+web+component+slots+code+examples+in+vanilla+javascript%2Ftypescript&sca_esv=94cc259175ff0bb8&sxsrf=ACQVn09h4bWAMmbcyOhPehysux9SGTS5hw%3A1710485866169&source=hp&ei=avHzZZKICMqNwbkP18aXgA0&iflsig=ANes7DEAAAAAZfP_egu7lta8xs1-UgtCsnXC6MZmyGHq&ved=0ahUKEwiS5caz2PWEAxXKRjABHVfjBdAQ4dUDCBc&uact=5&oq=native+web+component+slots+code+examples+in+vanilla+javascript%2Ftypescript&gs_lp=Egdnd3Mtd2l6IkluYXRpdmUgd2ViIGNvbXBvbmVudCBzbG90cyBjb2RlIGV4YW1wbGVzIGluIHZhbmlsbGEgamF2YXNjcmlwdC90eXBlc2NyaXB0MgcQIRgKGKABMgcQIRgKGKABMgcQIRgKGKABSPaoA1DgGFiPmQNwBngAkAEAmAHKAqABqzeqAQkxOC4zMy4zLjO4AQPIAQD4AQGYAj6gAqM4qAIKwgIHECMY6gIYJ8ICBBAjGCfCAhEQLhiABBixAxiDARjHARjRA8ICFBAuGIAEGIoFGLEDGIMBGMcBGNEDwgILEAAYgAQYsQMYgwHCAg4QABiABBiKBRixAxiDAcICBRAuGIAEwgIREC4YgwEYxwEYsQMY0QMYgATCAgsQLhiABBjHARivAcICCBAAGIAEGLEDwgIFEAAYgATCAg4QLhiABBiKBRixAxiDAcICCxAuGIAEGLEDGIMBwgIIEC4YgAQYsQPCAgsQLhiDARixAxiABMICChAjGIAEGIoFGCfCAg4QLhiABBixAxjHARjRA8ICDRAuGIAEGMcBGNEDGArCAgcQABiABBgKwgIGEAAYFhgewgIFECEYoAHCAgQQIRgVwgIFECEYnwXCAggQABiABBiiBJgDD5IHCTE5LjM3LjMuM6AHtI4D&sclient=gws-wiz#)

Here are some code examples of native web component slots in vanilla JavaScript/

TypeScript

TypeScript

TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.

[Wikipedia](https://en.wikipedia.org/wiki/TypeScript)

![](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS2T2xeVEP510a3WXgD3UwqEs7Uom13H6bop9pDlB96F-Iq82Ps)

[Wikipedia](https://ru.wikipedia.org/wiki/TypeScript)

Learn more

Feedback

:

Vanilla JavaScript:

Code

```typescript
<my-component>  <div slot="header">This is the header</div>  <div slot="content">This is the content</div>  <div slot="footer">This is the footer</div></my-component>
```

JavaScript

```typescript
class MyComponent extends HTMLElement {
	constructor() {
		super();
		const headerSlot = this.querySelector('slot[name="header"]');
		const contentSlot = this.querySelector('slot[name="content"]');
		const footerSlot = this.querySelector('slot[name="footer"]');
		headerSlot.textContent = 'This is the header';
		contentSlot.textContent = 'This is the content';
		footerSlot.textContent = 'This is the footer';
	}
}
customElements.define('my-component', MyComponent);
```

TypeScript:

TypeScript

```typescript
@customElement('my-component')
class MyComponent extends HTMLElement {
	constructor() {
		super();
		const headerSlot = this.querySelector('slot[name="header"]');
		const contentSlot = this.querySelector('slot[name="content"]');
		const footerSlot = this.querySelector('slot[name="footer"]');
		headerSlot.textContent = 'This is the header';
		contentSlot.textContent = 'This is the content';
		footerSlot.textContent = 'This is the footer';
	}
}
```

In these examples, the `my-component` web component has three slots: `header`, `content`, and `footer`. The slots are filled with the text that is specified in the HTML.

You can also use slots to pass content from a parent element to a child element. For example, the following code would pass the text "This is the content" from the parent element to the `content` slot of the child element:

Code

```html
<parent-element>
	<my-component>
		<slot name="content">This is the content</slot>
	</my-component>
</parent-element>
```

Slots are a powerful way to create reusable and customizable

web components

Web Components

Web Components are a set of features that provide a standard component model for the web allowing for encapsulation and interoperability of individual HTML elements. Web Components are popular approach to build microfrontends.

[Wikipedia](https://en.wikipedia.org/wiki/Web_Components)

![](https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSNuAfTPr0R7lwJ1Bvfz7DaurxdWhcwVsY4KqH_ptBRC_wPpJlm)

[GitHub](https://github.com/webcomponents)

Learn more

Feedback

.
