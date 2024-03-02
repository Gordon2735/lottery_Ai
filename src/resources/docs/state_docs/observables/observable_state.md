![image](../../../../../public/images/typescript-letters.png)

# **Typescript Simple Observable State and Web Components**

-   [Typescript Simple Observable State and Web Components](https://codereview.stackexchange.com/questions/276342/typescript-simple-observable-state-and-web-component?newreg=15e11c8fbd984fb09b5b074cd316264e)

-   [timeline](https://codereview.stackexchange.com/posts/276342/timeline)

I've been experimenting with wiring up a vanilla web component in a reactive manner to a state box. The goal is that when something changes on the state object, the web component reacts. I realize that there are frameworks and libraries for this, but I want to understand fundamentally what goes on underneath. After two decades on server stuff, I want to branch out. I also wonder if we really need more dependencies if this is simple and straight-forward enough.

**My approach is this:**

-   A base class that extends `HTMLElement` that can declaratively (via attribute in the markup) specify what data to watch.
-   A state base class that is used to facilitate subscription to changes and notifications back to the subscribers.
-   An attribute to decorate properties that you want to watch on those classes derived from the state base class.

**First, the state base class:**

```typescript
class StateBase {
	constructor() {
		this._subs = new Map<string, Array<Function>>();
	}

	private _subs: Map<string, Array<Function>>;

	subscribe(propertyName: string, eventHandler: any) {
		if (!this._subs.has(propertyName))
			this._subs.set(propertyName, new Array<Function>());
		var callbacks = this._subs.get(propertyName);
		callbacks.push(eventHandler);
	}

	notify(propertyName: string) {
		var callbacks = this._subs.get(propertyName);
		if (callbacks)
			for (let i of callbacks) {
				i();
			}
	}
}
```

The `subscribe` method is called by the web component base with the name of the property to monitor and a reference to its update mechanism. Of course, you could arbitrarily subscribe to any method on an instance. I'm using a `Map` as a dictionary of callback method arrays, one item for each property. `notify` is called by the decorator when a property value changes. Instances of this class have to be in the global (`window`) scope so the web components can find it.

**Here's the attribute/decorator function:**

```typescript
const WatchProperty = (target: any, memberName: string) => {
	let currentValue: any = target[memberName];
	Object.defineProperty(target, memberName, {
		set(this: any, newValue: any) {
			console.log(
				'watchProperty called on ' +
					memberName +
					' with value ' +
					newValue
			);
			currentValue = newValue;
			this.notify(memberName);
		},
		get() {
			return currentValue;
		}
	});
};
```

The part I don't understand well, but [learned about on SO](https://stackoverflow.com/a/71347063/99897), is `Object.defineProperty` taking the target, which is a prototype, to get to the actual instance of the state box. It works though. The important part is that it calls `notify` on the aforementioned base state class.

**Here's the web component base:**

```typescript
abstract class ElementBase extends HTMLElement {
	// Derived class constructor must call super("IDofTemplateHTML") first.
	constructor(templateID: string) {
		super();
		this.attachShadow({ mode: 'open' });
		var el = document.getElementById(templateID) as HTMLTemplateElement;
		if (!el)
			throw Error(
				`No template found for ID '{templateID}'. Must pass the ID of the template in constructor to base class, like super('myID');`
			);
		const template = el.content;
		this.shadowRoot.appendChild(template.cloneNode(true));
	}

	connectedCallback() {
		var attr = this.getAttribute('caller');
		if (!attr)
			throw Error("There is no 'caller' attribute on the component.");
		var varAndProp = this.parseCallerString(attr);
		var state = window[varAndProp[0]];
		var delegate = this.update.bind(this);
		state.subscribe(varAndProp[1], delegate);
	}

	update() {
		console.log('update called start');
		var attr = this.getAttribute('caller');
		if (!attr)
			throw Error("There is no 'caller' attribute on the component.");
		var varAndProp = this.parseCallerString(attr);
		var externalValue = window[varAndProp[0]][varAndProp[1]];
		this.updateUI(externalValue);
		console.log('update called end - ' + externalValue);
	}

	private parseCallerString(caller: string): [string, string] {
		var segments = caller.split('.');
		if (segments.length != 2)
			throw Error(
				"caller attribute must follow 'globalVariable.property' format."
			);
		return [segments[0], segments[1]];
	}

	// Use this.shadowRoot in the implementation to manipulate the DOM as needed in response to the new data.
	abstract updateUI(data: any);
}
```

Importantly, your constructor has to take in the ID of the template. I imagine I could also include the template in the derived class, but it depends on how you like to organize and encapsulate things. I'd rather have the markup not in the code. The constructor sets up the `shadowRoot` from the template. `connectedCallback` takes the declarative `caller` attribute on the component instance and uses it to register the `update` method with the base state class. `update` again parses the `caller` attribute to find the state and its property value. Finally it calls the abstract `updateUI` method that the derived web component has to implement.

**OK, so here are a concrete implementation examples deriving from the base classes:**

```typescript
class TestState extends StateBase {
	constructor() {
		super();
		this.texty = '';
		this.numbery = 0;
	}

	@WatchProperty
	texty: string;

	@WatchProperty
	numbery: number;
}

class TestElement extends ElementBase {
	constructor() {
		super('pf-test');
	}
	updateUI(data) {
		this.shadowRoot.querySelector('h1').innerHTML = data;
	}
}
```

**And here's a page where it all comes together:**

```html
<!doctype html>
<html>
	<head>
		<title>TypeScript Hello Web</title>
	</head>
	<body>
		<script src="dist/test.js"></script>
		<!-- has all of the above stuff -->
		<script>
			var state = new TestState();

			customElements.define('pf-test', TestElement);

			document.addEventListener('DOMContentLoaded', () => {
				state.subscribe('texty', () => {
					console.log('Call me for texty!');
				});
				state.subscribe('numbery', () => {
					console.log('anon call for numbery');
				});
				state.texty = 'first change';
				state.numbery = 42;
				state.texty = 'second change!';
				state.numbery = 123;
			});
		</script>

		<template id="pf-test">
			<div>
				<h1>original</h1>
			</div>
		</template>

		<pf-test caller="state.texty"> </pf-test>
		<pf-test caller="state.numbery"> </pf-test>
	</body>
</html>
```

As you can guess, when the page is all done, there's a line that says "second change!" and another that says "123."

I'm not sure what specific feedback I seek, because I've spent so little time in TypeScript and front-end code in general. I'm interested in:

-   Style problems.
-   Syntax around member modifiers (public/private), appropriate use of `var/let/const` which I'm still learning.
-   General portability and reuse.
-   Potential gotchas or performance issues.
-   Sensible error checking.
-   Accusations that this entire approach sucks. :)

**Thank you in advance!**

**EDIT:** You can follow along with my changes on the Github: [https://github.com/jeffputz/ts-observable-web-component](https://github.com/jeffputz/ts-observable-web-component)

-   [javascript](https://codereview.stackexchange.com/questions/tagged/javascript "show questions tagged 'javascript'")
-   [typescript](https://codereview.stackexchange.com/questions/tagged/typescript "show questions tagged 'typescript'")
-   [observer-pattern](https://codereview.stackexchange.com/questions/tagged/observer-pattern "show questions tagged 'observer-pattern'")
-   [webcomponent](https://codereview.stackexchange.com/questions/tagged/webcomponent "show questions tagged 'webcomponent'")

[Share](https://codereview.stackexchange.com/q/276342/281494 'Short permalink to this question')

Share a link to this question (Includes your user id)

Copy link[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/ 'The current license for this post: CC BY-SA 4.0')

[Edit](https://codereview.stackexchange.com/posts/276342/edit 'Revise and improve this post')

**Get updates on questions and answers**

[edited May 6, 2022 at 17:42](https://codereview.stackexchange.com/posts/276342/revisions 'show all edits to this post')

Jeff Putz

asked May 6, 2022 at 3:33

[

![Jeff Putz's user avatar](https://www.gravatar.com/avatar/5ea27fefd5d94036b0def62f7cda2c60?s=64&d=identicon&r=PG)

](https://codereview.stackexchange.com/users/13295/jeff-putz)

[Jeff Putz](https://codereview.stackexchange.com/users/13295/jeff-putz)Jeff Putz

[Add a comment](https://codereview.stackexchange.com/questions/276342/typescript-simple-observable-state-and-web-component?newreg=15e11c8fbd984fb09b5b074cd316264e# 'Use comments to ask for more information or suggest improvements. Avoid answering questions in comments.') | [](https://codereview.stackexchange.com/questions/276342/typescript-simple-observable-state-and-web-component?newreg=15e11c8fbd984fb09b5b074cd316264e# 'Expand to show all comments on this post')

## 1 Answer 1

Sorted by: [Reset to default](https://codereview.stackexchange.com/questions/276342/typescript-simple-observable-state-and-web-component?answertab=scoredesc#tab-top)

Highest score (default) Date modified (newest first) Date created (oldest first)

-   [timeline](https://codereview.stackexchange.com/posts/276350/timeline)

It looks like you have learned a lot from it. I want to concentrate on your points you've listed on what you're looking for in terms of this review.

### Style

Probably the two biggest things that grabs my attention are, that you've decided to leave out parenthesis on most of the `if`\-statements and that most of the time you're using the `var` keyword. So leaving out the curly braces is a potential gotcha, but I think you are aware of this - linters like ESLint or Prettier will help you with that, if desired. In general, this looks good to me (more about the var stuff in the syntax section, where you explicitly asked for it).

### Syntax

Mainly the `var` keyword has been used - it can be used but should be avoided. `let` and `const` are the better alternatives. As a quick recap, when using the `var` keyword, the interpreter moves all variables declared that way to the top of their scopes - regardless where they are placed. Each variable is mutable and can be redeclared (var), whereas variables using the `let` keyword are mutable but cannot be redeclared and `const` is not mutable at all once assigned:

```typescript
var x = 'foo'; // ✅
var x = '15'; // ✅

let y = '10';
let y = '15'; // ❌
y = '15'; // ✅

const z = '10';
z = '5'; // ❌
```

This means, avoid var, use const wherever possible unless you need to mutate a variable - then there is let!

**A few things I'd to differently code wise:**

Adding the event handler to the callback array (the first code block is taken from your posting, below how this code could be transformed).

```typescript
// Using discouraged var keyword
var callbacks = this._subs.get(propertyName);
callbacks.push(eventHandler);

// Using const keyword
const callbacks = this._subs.get(propertyName);
callbacks.push(eventHandler);

// The variable can be safely inlined as its not used afterwards
this._subs.get(propertyName).push(eventHandler);
```

Using the spread syntax is helpful - read more about it at MDN ([https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)):

```javascript
// Original code
var segments = caller.split('.');
if (segments.length != 2)
	throw Error(
		"caller attribute must follow 'globalVariable.property' format."
	);
return [segments[0], segments[1]];

// Refactored using spread syntax
const segments = caller.split('.');
if (segments.length != 2)
	throw Error(
		"caller attribute must follow 'globalVariable.property' format."
	);
return [...segments];
```

Note: I should be perfectly fine to just return segments here, there is no need to create a whole new array!

### Portability and reuse

As is, the portability seems to be just fine. Reusing this code is also perfectly doable. I'm wondering though, there are checks in the code, that the caller is of length 2 - this implies a limitation of the state. For example, using this as a global application state, where many different domains come together, it all has to be on the top-level. This does not feel right and might be a thing to be considered.

### Misc

Since this is TypeScript code, I'd like to mention, that there are a few `any` usages. Yes, it's tempting to use them, but try to be precise as possible, because most of the time it's the root of all evil. When there is no specific type I can come up with, I use `unknown` first. For example looking at the function signature of `subscribe`

```javascript
subscribe(propertyName: string, eventHandler: any)
```

I am allowed to pass in anything I'd like. So let's assume I put in the number 5. Later in the code, the "callbacks" are retrieved and the assumption is, that all of them are a function.

```javascript
notify(propertyName: string) {
  var callbacks = this._subs.get(propertyName);
  if (callbacks)
    for (let i of callbacks) {
      i();
    }
}
```

**During runtime, this will break and TypeScript didn't warn us about it. This can easily be fixed by adjusting the type to: `eventHandler: () => void`.**
