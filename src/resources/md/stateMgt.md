# **How State Management works**

**_Dead simple SM in Vanilla JavaScript_**

Dead simple State Management in Vanilla JavaScript
It's been years now since you started using Redux, MobX or even plain React Hooks and have no idea how state management works and why it works the way it works? I'll show you the dead simple bottom level of work in state management sans any optimization or other bells and whistles.

We will be building a stupidly simple plain ol' HTML page with script tags in it.

```html
<!doctype html>
<html>
	<head>
		<title>State Management in Vanilla JS</title>
	</head>

	<body>
		<div id="app"></div>

		<script>
			//
		</script>
	</body>
</html>
```

**_Now let's write some JavaScript_**

NOTE: TL;DR; is down below ⏬

```javascript
const App = function \_App() {
 return `     <h1>Hello Vanilla JS</h1>
    <div>Example of state management in Vanilla JS</div>
  `;
}
document.getElementById("app").innerHTML = App();
//I could have simply declared as
const App = function() { // ...
// or
const App = () => { // ...
But there's reason I didn't, which I'll explain later. Now, let's create some state
App.state = {
count: 0,
increment: () => {
App.state.count++;
}
};
```

A simple state created as a property on App function. 😉

Wait! You can do that? 😲

Yes, everything in JavaScript is an object, and technically you can even do that on strings and numbers. That is why methods like "hello world".toUppercase() and (12).toFixed(2) would work. But the compiler doesn't allow you to define your own properties on a string or number.

Now that App has been made stateful, we shall integrate the state and add a click event listener at the end of file.

```html
<h1>`${_App.state.count}`</h1>
<button id="button">Increase</button>
```

```javascript
document.getElementById('app').innerHTML = App();
// On Click Function
document
	.getElementById('button')
	.addEventListener('click', App.state.increment);
// Note that I'm accessing App inside itself by neither this nor by App but by \_App. This is called as "Named function expression"

// There are two special things about Named function expression:

// It allows the function to reference itself internally.
// It is not visible outside of the function.
// Even if I do something like this below, the code won't break.
const Component = App;
App = null;
document.getElementById('app').innerHTML = Component();
// Even when App has been reassigned to Component and then made to be null, the function itself remains intact and it refers itself as \_App locally, // hence it is not affected. Same as 'this' in every other OOP programming language (But We all know how this works in JavaScript)😅.

// Now try running it (simply double click the index.html file). Notice that the on click function isn't working! 🙄 It's because the UI is not reflecting the latest state, let's fix that by re-rendering the elements. This can be done by running this code again when the state is updated.
document.getElementById('app').innerHTML = App();
// On Click Function
document
	.getElementById('button')
	.addEventListener('click', App.state.increment);
// Since this code is and will be repeated, we will extract it to a function
const updateTree = () => {
	document.getElementById('app').innerHTML = App();
	// On Click Function
	document
		.getElementById('button')
		.addEventListener('click', App.state.increment);
};
// Now add a setState function
const setState = (callback) => {
	callback();
	updateTree(); // extracted function
};
// and update the increment function as
increment: () => {
	// Call our set state function
	setState(() => App.state.count++);
};
```

Now our App works as expected. And that's it! that's the end of Dead simple State Management in Vanilla JavaScript. However just using as it is would be consider as an awful and poor framework, not because of its lack of any bell and whistles worthy feature, but because it is poorly optimized, in fact it has no optimization, but you already know this when I said "…sans any optimization or other bells and whistles" in the beginning of this article.

Things to do,

Should not render the whole application to reflect a simple change.
As soon as we update to reflect the state, all the event listeners attached to DOM should not be lost and we shouldn't add new event listeners in its place.
The DOM elements that were unaffected and unchanged by state should not be forced to change. Changes should be as small as possible
So we shall few optimizations to our App like how React and similar library / framework does in the next upcoming article.

TL;DR;
Here is the full HTML file we have coded so far.

````html
<!doctype html>
<html>
	<head>
		<title>State Management in Vanilla JS</title>
	</head>

	<body>
		<div id="app"></div>

		<script>
			const App = function _App() {
				return `
          <h1>Hello Vanilla JS!</h1>
          <div>
            Example of state management in Vanilla JS
          </div>
          <br />
          <h1>${_App.state.count}</h1>
          <button id="button">Increase</button>
        `;
			};

			App.state = {
				count: 0,
				increment: () => {
					setState(() => App.state.count++);
				}
			};

			const setState = (callback) => {
				callback();
				updateTree(); // extracted function
			};

			const updateTree = () => {
				document.getElementById('app').innerHTML = App();
				document
					.getElementById('button')
					.addEventListener('click', App.state.increment);
			};

			updateTree();
		</script>
	</body>
</html>
``` ```javascript import {render, html} from 'uhtml'; const App = (function () {
const State = { counter : 0 }; function incer () { State.counter += 1;
App.redraw() }; function view () { return html'

<h1>`${State.counter}`</h1>
<button class="counter" onclick="${incer}">INC</button>
<input value="not erased" />
'; }; function redraw () { render(app, view()) }; return { redraw } })();
App.redraw(); ``` You can test it here : SSMOPT 7 likes Like Reply artydev
profile image artydev • Mar 10 '21 And if you want to get a little further
```javascript import {render, html} from 'uhtml'; const Header = () => html';
``` ```html
<h1>Header</h1>
` const Footer = () => html'
<h1>Footer</h1>
` const Counter = (state, actions) => html`
<h1>${state.counter}</h1>
<button class="counter" onclick="${actions.inc}">INC</button>
<input value="not erased" />' ``` ```javascript const App = (function () { const
State = { counter : 0 } const Actions = { inc : () => { State.counter += 1;
redraw(); } } function view (s, a) { return html` ${Header()} ${Counter(s, a)}
${Footer()} ` } function redraw () { render(app, view(State, Actions)) } return
{ redraw } })() App.redraw() You can test it here IntroSamPattern 4 likes Like
Reply reenaverma profile image Reena Verma • Jun 21 '23 Hi @artydev- this is
really interesting. I've not heard of the uthml package before. What exactly is
it used/needed for vs the original package? 1 like Like Reply artydev profile
image artydev • Mar 10 '21 Thank you for your post. Here is a variation : const
App =(function () { const State = { counter : 0 } function render () {
app.innerHTML = view (); return App } function incer () { State.counter += 1;
App .render() .setupEvents(); } function view () { return `
<div>Counter ${State.counter}</div>
<button class="counter">INC</button>
` } function setupEvents () { let button = document .querySelector(".counter")
.addEventListener("click", App.incer) } return { render, incer, setupEvents }
})(); App .render() .setupEvents(); ``` You can test it here : SSM Regards 8
likes Like Reply vijaypushkin profile image Vijay Pushkin • Mar 13 '21 This one
is great. Makes better use of functional programming. 2 likes Like Reply
ryantheleach profile image Ryan Leach • Mar 10 '21 I don't want to come off
sounding like an asshole, but is this satire? It feels like someone whose never
learnt JavaScript, and just copied react examples suddenly learnt how the
language works... Unless I'm missing something fundamental. 3 likes Like Reply
artydev profile image artydev • Mar 11 '21 Please, be comprehensive... 2 likes
Like Reply rjegge profile image rjegge • Jun 10 '22 Are you sure you didn't want
to come off sounding that way? I'm pretty sure you did. 1 like Like Reply
hey_yogini profile image Yogini Bende • Mar 9 '21 This is a nice explaination
and it helps you understand the state management concept behind the scene. Good
work 🙌 5 likes Like Reply sgroen profile image Viridi • Mar 12 '21 • Edited on
Mar 12 Hi Vijay Pushkin, I know this tutorial is not about the best code but I
couldn't help myself from refactoring your code ;). ```html
<!doctype html>
<html lang="en">
	<head>
		<title>State Management in Vanilla JS</title>
	</head>
	<body>
		<div id="app"></div>
		<script>
			const App = {
				state: {
					count: 0
				},
				template() {
					return `
          <h1>Hello Vanilla JS!</h1>
          <div>
            Example of state management in Vanilla JS
          </div>
          <br />
          <h1 id="counter">${this.state.count}</h1>
          <button id="button">Increase</button>
        `;
				},
				initialize() {
					document.getElementById('app').innerHTML = this.template();
					document
						.getElementById('button')
						.addEventListener('click', () => App.increment());
				},
				increment() {
					this.state.count++;
					this.updateUI();
				},
				updateUI() {
					document.getElementById('counter').textContent =
						this.state.count;
				}
			};
			App.initialize();
		</script>
	</body>
</html>
``` 2 likes Like Reply jiminikiz profile image Jiminikiz • Oct 14 '22 ```html
<!doctype html>
<html lang="en">
	<head>
		<title>State Management in Vanilla JS</title>
	</head>
	<body>
		<main id="app"></main>
		<script id="template" type="text/template">
			<h1>{{title}}</h1>
			<h2 id="counter">{{count}}</h2>
			<button id="button">Increase</button>
		</script>
		<script>
			const App = {
				state: {
					title: 'State Counter Example',
					count: 0
				},
				template() {
					return template.innerHTML
						.replace('{{title}}', App.state.title)
						.replace('{{count}}', App.state.count);
				},
				initialize() {
					app.innerHTML = this.template();
					button.addEventListener('click', () => App.increment());
				},
				increment() {
					this.state.count++;
					this.render();
				},
				render() {
					counter.textContent = this.state.count;
				}
			};

			App.initialize();
		</script>
	</body>
</html>
``` 1 like Like Reply artydev profile image artydev • Mar 11 '21 • Edited on Mar
11 Hello, here is the code of utml (877lines) uhtml.js You can test it here :
uhtmltest Optimized in a sense, it uses VDom Diff to update the page. Regards 2
likes Like Reply snickdx profile image Nicholas Mendez • Mar 10 '21 • Edited on
Mar 10 So happy to see some framework-agnostic content. This is a great read and
shows sometimes we can get by just fine with the standard web technologies. I
was really wondering why you had \_App and App but your justification is
brillaint. 3 likes Like Reply henshawsamuel profile image Samuel Henshaw • Mar
10 '21 Great insight 3 likes Like Reply salsferrazza profile image Salvatore
Sferrazza • May 7 '23 Really into this, thank you for sharing! The cognitive
burden of many frameworks is too high for what one gets in return. I've found
this routine to be helpful for rendering the state of arbitrary objects to the
DOM. Additionally, when using standard HTML template tags, I've used another
routine to populate slots (template parameters) and render the template at
runtime. 1 like Like Reply squashbugler profile image John Grisham • Mar 16 '21
• Edited on Mar 16 Vanilla javascript? I've never heard of that library. 2 likes
Like Reply chovy profile image chovy • Nov 18 '21 When's the next article which
I hope will be web components leverage native shadow Dom to handle updates when
state changes :) Nice article by the way. Good starting point. 2 likes Like
Reply saksham profile image Saksham96 • Mar 10 '21 Nice Insight on state
management, waiting for the upcoming article. 2 likes Like Reply shtep profile
image jim shtepa • Mar 11 '21 Is your lastname really Pushkin? Like Alexander
Sergeyevich Pushkin? 1 like Like Reply vijaypushkin profile image Vijay Pushkin
• Mar 11 '21 The place where I'm from, we don't have family names. So, yes both
are my names! 2 likes Like Reply shtep profile image jim shtepa • Mar 11 '21
Understood, cool. Pushkin is perhaps the greatest person in Russian literature.
I am from Kazakhstan and we happen to speak and learn russian language at
school. Anyways you have a great name! 1 like Like Reply paramsiddharth profile
image Param Siddharth • Mar 11 '21 • Edited on Mar 11 Wow! 😮😍🥰 What an
amazing tutorial! Now I can start writing my own front-end web framework.
😏😏😂😂 Just kidding, I won't! But I've always wanted to know how to. Thank you
for the article! 💕💕 1 like Like Reply ankitakathuria profile image
ankitakathuria • Nov 15 '22 hey what does it mean when you add redraw in curly
braces i.e return {redraw}. Please someone explain 1 like Like Reply artydev
profile image artydev • Mar 11 '21 Thank you I won t give you any links. There
is enough material on Dev To, that explain my choice. Regards 1 like Like Reply
artydev profile image artydev • Mar 12 '21 Hello Matt, Please ask real
questions, read authors posts, share your tips, examples That will be
constructive for all of us Regards 2 likes Like Thread sgroen profile image
Viridi • Mar 12 '21 • Edited on Mar 12 First of all great post Vijay! artydev is
right about the fact that the code could be optimized but Matt is also right.
Adding a library does not optimize this piece of code. Having a look at the code
there is only one thing that changes and that is text in the last h1 tag. So if
you want to optimize this code why not do it like this? ```html
<!doctype html>
<html lang="en">
	<head>
		<title>State Management in Vanilla JS</title>
	</head>
	<body>
		<h1>Hello Vanilla JS!</h1>
		<div>Example of state management in Vanilla JS</div>
		<br />
		<h1 id="app"></h1>
		<button id="button">Increase</button>
		<script>
			const App = function _App() {
				return _App.state.count;
			};

			App.state = {
				count: 0,
				increment: () => {
					App.state.count++;
					App.state.updateUI();
				},
				updateUI: () => {
					document.getElementById('app').textContent = App();
				}
			};
			App.state.updateUI();
			document
				.getElementById('button')
				.addEventListener('click', App.state.increment);
		</script>
	</body>
</html>
``` There is no need to add the event listener on every update and there is no
need to rerender the rest of the html on every update. Just update the text in
the h1 tag and minimize the rerendering needs. If you want to build the html
from javascript you can render the html just once on initialization. 1 like Like
Thread artydev profile image artydev • Mar 12 '21 • Edited on Mar 12 Thank you
for your tips You are totally right if you have few elements to update. Regards
1 like Like Thread sgroen profile image Viridi • Mar 12 '21 • Edited on Mar 12
No problem artydev. You can of course always fall back on a library when you
have a lot of re-rendering going on. I believe that to make the right decision
you need to understand what is going on under the hood. There are a lot of
tutorials on diffing and VDom to be found on the internet for those interested.
1 like Like Thread vijaypushkin profile image Vijay Pushkin • Mar 12 '21 Hi
there Viridi. Thanks for your input. But optimising and moving all the elements
to HTML wasn't the point of this article 1 like Like Thread sgroen profile image
Viridi • Mar 12 '21 Hi Vijay Pushkin, You are absolutely right. artydev and Matt
Kimek started a discussion about optimization. I just hooked in to that. Your
post was about handling state in vanilla javascript and you did a good job on
that. 1 like Like Thread artydev profile image artydev • Mar 12 '21 • Edited on
Mar 12 And only for the pleasure , here is a case when using a library worth it
:-) ```html
<div class="my-chrono"></div>
<div class="my-chrono"></div>
<div class="my-chrono"></div>
<div class="my-chrono"></div>
<div class="my-chrono"></div>
<div class="my-chrono"></div>
``` ```javascript import {define} from 'wicked-elements'; let Counter = function
() { let count = 0; let disabled = false; let timer; let start = () => { timer =
setInterval(() => { count += 1; disabled = true; m.redraw()}) }; let stop = ()
=> {clearInterval(timer); disabled = false; m.redraw()}; let reset = () =>
{stop(); count = 0}; let disable = (status) => status; let view = () => [
m(".wrap", m("h1", count ), m("", m("button", {onclick : start, disabled :
disabled}, "start"), m("button", {onclick : stop}, "stop"), m("button", {onclick
: reset}, "reset") ) ) ] return { view } } function renderComp(target,
component) { m.mount(target, component); } define(".my-chrono", { init() {
renderComp(this.element, Counter); } }) ```
````
