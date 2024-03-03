Apr 4, 2023 ⋅ 9 min read

# **A practical guide to TypeScript decorators**

[![](https://blog.logrocket.com/wp-content/uploads/2020/08/rahman-fadhil.png?w=150&h=150&crop=1)](https://blog.logrocket.com/author/rahmanfadhil/)

[Rahman Fadhil](https://blog.logrocket.com/author/rahmanfadhil/) Developer and content writer.

Table of contents

-   [Decorators in JavaScript vs. TypeScript](https://blog.logrocket.com/practical-guide-typescript-decorators/#decorators-javascript-vs-typescript)
-   [Getting started with decorators in TypeScript](https://blog.logrocket.com/practical-guide-typescript-decorators/#getting-started-decorators-typescript)
-   [New TypeScript decorators](https://blog.logrocket.com/practical-guide-typescript-decorators/#new-typescript-decorators)
-   [Types of decorators](https://blog.logrocket.com/practical-guide-typescript-decorators/#decorator-types)
    -   [Class decorators](https://blog.logrocket.com/practical-guide-typescript-decorators/#class-decorators)
    -   [Method decorators](https://blog.logrocket.com/practical-guide-typescript-decorators/#method-decorators)
    -   [Property decorators](https://blog.logrocket.com/practical-guide-typescript-decorators/#property-decorators)
    -   [Accessor decorators](https://blog.logrocket.com/practical-guide-typescript-decorators/#accessor-decorators)
    -   [Auto-accessor decorators](https://blog.logrocket.com/practical-guide-typescript-decorators/#auto-accessor-decorators)
-   [Use cases for TypeScript decorators](https://blog.logrocket.com/practical-guide-typescript-decorators/#use-cases-typescript-decorators)
    -   [Calculating execution time](https://blog.logrocket.com/practical-guide-typescript-decorators/#calculating-execution-time)
    -   [Using the decorator factory function](https://blog.logrocket.com/practical-guide-typescript-decorators/#using-decorator-factory-function)
    -   [Automatic error guard](https://blog.logrocket.com/practical-guide-typescript-decorators/#automatic-error-guard)
-   [Conclusion](https://blog.logrocket.com/practical-guide-typescript-decorators/#conclusion)

![LogRocket Galileo logo](https://blog.logrocket.com/wp-content/uploads/2023/12/GalileoAIPreview.png)

Introducing Galileo AI

LogRocket’s Galileo AI watches every session, surfacing impactful user struggle and key behavior patterns.

[READ THE  
BLOG POST](https://blog.logrocket.com/galileo-ai)

```typescript
const threshold = 2000;
const isMobile = window.matchMedia('(max-width: 1280px)').matches;
window.addEventListener('scroll', (event) => {
	if (isMobile) {
		return;
	}
	const gutter = document.querySelector('#gutter'); // show it if it is hidden and we have scrolled past the threshold
	if (window.scrollY > threshold && !gutter.classList.contains('show')) {
		gutter.classList.add('show');
		window.toggleToc(true);
	} // hide it if we scroll back above the threshold
	if (window.scrollY < threshold && gutter.classList.contains('show')) {
		gutter.classList.remove('show');
		window.toggleToc(false);
	}
});
```

```css
#gutter {
    box-sizing: border-box;
    display: flex; flex-direction: column; width: 190px; height: auto; background-color: #FFFFFF; border: 1px solid rgba(118, 74, 188, 0.16); border-radius: 26px; padding: 15px; opacity: 0; visibility: hidden; transition: opacity 1s, visibility 1s; }
    /\* Don't show the gutter on smaller screens \*/
    @media (max-width: 1280px) { #gutter { display: none; } } #gutter.show { opacity: 1; visibility: visible; } .topimage { width: 100%; border-radius: 26px 26px 0 0; margin-bottom: 5px; } .topimage img { width: 100%; } .gutter-top { font-style: normal; font-weight: 900; font-size: 24px; line-height: 120%; color: #491D90; flex: none; order: 0; align-self: stretch; flex-grow: 0; display: flex; align-items: center; margin-top: 5px; } .gutter-bottom { font-style: normal; font-size: 15px; line-height: 120%; color: #491D90; flex: none; order: 1; align-self: stretch; flex-grow: 0; display: flex; justify-content: center; align-items: center; } .cta { display: flex; justify-content: center; isolation: isolate; height: 47px; background: #764ABC; border-radius: 10px; flex: none; order: 2; margin-top: 10px; position: relative; } .gutter-button, .gutter-button:active, .gutter-button:visited { font-style: normal; font-weight: 600; font-size: 16px; width: 100%; height: 47px; line-height: 18px; text-align: center; color: #FFFFFF; text-decoration: none; display: flex; align-items: center; justify-content: center; } .gutter-button:hover { text-decoration: none; color: #a58ec8; }
```

![](http://blog.logrocket.com/wp-content/uploads/2023/04/logrocket-logo-1.png)

## See how LogRocket's AI-powered error tracking works

### no signup required

Check it out

close this ✕

```typescript
document
	.querySelector('.arcade-cta-button')
	.addEventListener('click', function () {
		var iframe = document.querySelector('.arcade-container');
		iframe.style.width = '930px';
		iframe.style.height = '655px';
		iframe.style.display = ''; // Ensure the iframe is shown when the button is clicked document.
		querySelector('.arcade-close').style.display = 'block';
	});
document.querySelector('.arcade-close').addEventListener('click', function () {
	document.querySelector('.arcade-container').style.display = 'none';
});
```

```css
.arcade-close {
	margin-right: 5px;
	float: right;
	text-align: center;
	width: 100px;
	display: none;
	padding: 5px;
	border-radius: 3px 3px 0px 0px;
	background: #dfdfdf;
	opacity: 0.5;
}
.arcade-close:hover {
	cursor: pointer;
}
.arcade-container {
	width: 0px;
	height: 0;
	transition: width 2s;
	margin-left: -100px;
}
#arcade-interstitial {
	border: 2px solid rgba(118, 74, 188, 0.2);
	border-radius: 8px;
	background-color: #491d90;
	justify-content: space-between;
	align-items: center;
	padding: 16px;
	font-family: 'Proxima Nova', sans-serif;
	margin-bottom: 30px;
	display: flex;
}
#arcade-interstitial img {
	width: 48px;
	height: 48px;
	border-radius: 50%;
}
#arcade-interstitial .text-container h2 {
	font-weight: 800;
	font-size: 22px;
	line-height: 22px;
	color: #fff;
	margin: 0 0 5px 0;
	width: 70%;
}
#arcade-interstitial .text-container {
	margin-left: 10px;
}
#arcade-interstitial .text-container h3 {
	font-weight: 900;
	font-size: 13px;
	line-height: 13px;
	letter-spacing: 0.1em;
	color: #fff;
	opacity: 0.5;
	margin: 0;
	flex: none;
	order: 1;
	flex-grow: 0;
	white-space: nowrap;
}
#arcade-interstitial .arcade-cta-button {
	background-color: #fff;
	color: #764abc;
	border: none;
	border-radius: 4px;
	padding: 10px;
	font-size: 16px;
	font-weight: 800;
	font-family: 'Proxima Nova', sans-serif;
	text-decoration: none;
	width: 25%;
	text-align: center;
}
.arcade-cta-button:hover {
	text-decoration: none;
	color: #a58ec8;
	cursor: pointer;
}
@media all and (min-width: 990px) and (max-width: 1200px) {
	.arcade-container {
		margin-left: -160px;
	}
}
@media all and (max-width: 889px) {
	#arcade-interstitial {
		display: none;
	}
}
```

**_Editor’s note:_** _This article was last updated on 4 April 2023 to include information about the accessor and auto-accessor TypeScript decorator types. For more information about decorators, check out our article about [JavaScript decorators](https://blog.logrocket.com/understanding-javascript-decorators/)._

![A Practical Guide To TypeScript Decorators](https://blog.logrocket.com/wp-content/uploads/2020/05/practical-guide-typescript-decorators.png)

A decorator is a design pattern in programming in which you wrap something to change its behavior. In JavaScript, this feature is currently at [stage three](https://github.com/tc39/proposal-decorators). Decorators are not new; several programming languages, such as Python, Java, and C#, adopted this pattern before JavaScript. Further refinement of the syntax will require feedback from implementation and users.

At the time of writing, [most browsers](https://caniuse.com/?search=decorators) do not support decorators. Nonetheless, you can test them out by using compilers like Babel.

In this article, we will learn how decorators compare in JavaScript and TypeScript. We will also explore the different types of TypeScript decorators that exist, including the class, method, property, and accessor decorators.

_Jump ahead:_

-   [Decorators in JavaScript vs. TypeScript](https://blog.logrocket.com/practical-guide-typescript-decorators/#decorators-javascript-vs-typescript)
-   [Getting started with decorators in TypeScript](https://blog.logrocket.com/practical-guide-typescript-decorators/#getting-started-decorators-typescript)
-   [New TypeScript decorators](https://blog.logrocket.com/practical-guide-typescript-decorators/#new-typescript-decorators)
-   [Types of decorators](https://blog.logrocket.com/practical-guide-typescript-decorators/#decorator-types)
    -   [Class decorators](https://blog.logrocket.com/practical-guide-typescript-decorators/#class-decorators)
    -   [Method decorators](https://blog.logrocket.com/practical-guide-typescript-decorators/#method-decorators)
    -   [Property decorators](https://blog.logrocket.com/practical-guide-typescript-decorators/#property-decorators)
    -   [Auto-accessor decorators](https://blog.logrocket.com/practical-guide-typescript-decorators/#auto-accessor-decorators)
-   [Use cases for TypeScript decorators](https://blog.logrocket.com/practical-guide-typescript-decorators/#use-cases-typescript-decorators)

## Decorators in JavaScript vs. TypeScript

TypeScript’s decorator feature is different from the JavaScript feature in a few significant ways. The first big difference is about what we can decorate. We can use TypeScript decorators to annotate and modify class declarations, methods, and properties, as well as accessors and parameters.

New TypeScript decorators do not currently support parameter decoration, but that will change in the future. Old TypeScript decorators, on the other hand, do support parameters decoration. We’ll learn more about this later in the article. JavaScript, on the other hand, only lets us decorate class declarations and methods.

The second important difference between decorators in JavaScript and TypeScript is type checking. Because TypeScript a strongly-typed programming language, it can type-check the parameters and return the value of the decorator function. JavaScript doesn’t have this kind of type checking and validation, so you need to rely on runtime checks or external tools like linters to catch type errors.

## Getting started with decorators in TypeScript

Start by creating a blank Node.js project:

```bash
$ mkdir typescript\-decorators
$ cd typescript decorators
$ npm init \-y
```

Next, install TypeScript as a development dependency:

```bash
$ npm install \-D typescript @types/node
```

The `@types/node` package contains the Node.js type definitions for TypeScript. We need this package to access some Node.js standard libraries.

Add an npm script in the `package.json` file to compile your TypeScript code:

```json
{
	// ...
	"scripts": { "build": "tsc" }
}
```

Until TypeScript 5.0, we had to explicitly set a flag, `experimentalDecorators`, to use decorators in our code. With TypeScript 5.0, this is no longer the case. While such a flag is likely to stay around for the foreseeable future, we can use new-style decorators without it. As a matter of fact, the old-style decorators modeled a different version of the proposal (Stage 2). We can use both styles in our code because the type rules are different, but it’s not advisable to do so.

Remember to configure your working environment to use at least TypeScript 5. Otherwise, the code in this article won’t compile.

We’ll use `ES6` as a target for TypeScript because it’s supported by all modern browsers:

```json
{ "compilerOptions": { "target": "ES6" } }
```

Next, we’ll create a simple TypeScript file to test the project out:

```typescript
console.log('Hello, world!');
```

```bash
$ npm run build
$ node index.js Hello, world!
```

Instead of repeating this command over and over, we can simplify the compilation and execution process by using a package called `ts-node`. It’s a community package that enables us to run TypeScript code directly without compiling it first.

Let’s install it as a development dependency:

```bash
$ npm install \-D ts\-node
```

Next, add a `start` script to the `package.json` file:

```json
{ "scripts": { "build": "tsc", "start": "ts-node index.ts" } }
```

```json
{ "scripts": { "build": "tsc", "start": "ts-node index.ts" } }

{ "scripts": { "build": "tsc", "start": "ts-node index.ts" } }
```

Simply run `npm start` to run your code:

```bash
$ npm start Hello, world!
```

For reference, I have all the source code on this article published on my [GitHub](https://github.com/mdipirro/typescript-decorators). You can clone it onto your computer using the command below:

```bash
$ git clone git@github.com:mdipirro/typescript\-decorators.git
```

## New TypeScript decorators

In TypeScript, decorators are functions that can be attached to classes and their members, such as methods and properties.

In this section, we’re going to look at new-style decorators. First, the new `Decorator` type is defined as follows:

type Decorator \= (target: Input, context: { kind: string; name: string | symbol; access: { get?(): unknown; set?(value: unknown): void; }; private?: boolean; static?: boolean; addInitializer?(initializer: () \=> void): void; }) \=> Output | void;

The `type` definition above looks complex, so let’s break it down one piece at a time:

-   `target` represents the element we’re decorating, whose type is `Input`
-   `context` contains metadata about how the decorated method was declared, namely:
    -   `kind`: the type of decorated value. As we’ll see, this can be either `class`, `method`, `getter`, `setter`, `field`, or `accessor`
    -   `name`: the name of the decorated object
    -   `access`: an object with references to a getter and setter method to access the decorated object
    -   `private`: whether the decorated object is a `private` class member
    -   `static`: whether the decorated object is a `static` class member
    -   `addInitializer`: a way to add custom initialization logic at the beginning of the constructor (or when the class is defined)
-   `Output` represents the type of value returned by the `Decorator` function

In the next section, we’ll take a look at the types of decorators. Interestingly, while old-style decorators let us decorate function parameters, new-style ones don’t, at least for the time being. As a matter of fact, parameter decorators are waiting for a [follow-on proposal](https://github.com/tc39/proposal-decorators/issues/47) to reach Stage 3.

## Types of decorators

Now that we know how the `Decorator` type is defined, we’ll take a look at the various types of decorators.

---

[

![](https://blog.logrocket.com/wp-content/uploads/2023/04/Screen-Shot-2023-04-05-at-3.19.07-PM.png)

## Over 200k developers use LogRocket to create better digital experiences

![](https://blog.logrocket.com/wp-content/uploads/2022/08/rocket-button-icon.png)Learn more →

](https://lp.logrocket.com/blg/learn-more)

---

```css
@media all and (max-width: 800px){
    .tweet-embed-container {flex-direction: column !important;}; .single-tweet, .embed-tweet-right {width: 100% !important;} } .embed-link {text-decoration: none;} .embed-link:hover {text-decoration: none;} .tweet-embed-container {border-radius: 20px; background: radial-gradient(79.69% 102.24% at 100% 100.11%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), radial-gradient(89.7% 115.09% at 3.43% 2.75%, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0)), #764ABC; background-blend-mode: overlay, overlay, normal; box-shadow: 0 4px 0 #d5d5d5; width: auto; padding: 20px 15px; display: flex; flex-direction: row; justify-content: space-evenly; align-items: center; margin: 0 auto; gap: 3%; } .single-tweet {width: 50%;} .single-tweet img {max-width: 100%;height: auto; border-radius:7px;} .embed-tweet-right {width: 46%;} .embed-tweet-right h2 {font-family: 'Avenir'; font-style: normal; font-weight: 500; font-size: 16px; line-height: 28px; color: #FFFFFF;} .embed-btn { display: flex; flex-direction: row; justify-content: left; width: 170px; gap: 5px; align-items: center; padding: 0px 10px; font-family: 'Avenir'; font-style: normal; font-weight: 900; font-size: 16px; line-height: 16px; color: #764ABC; height: 48px; /\* White \*/ background: #FFFFFF; mix-blend-mode: normal; box-shadow: 0px 24px 30px rgba(0, 0, 0, 0.11); border-radius: 80px; border: none; }
```

### Class decorators

When you attach a function to a class as a decorator, you’ll receive the class constructor as the first parameter:

type ClassDecorator \= (value: Function, context: { kind: "class" name: string | undefined addInitializer(initializer: () \=> void): void }) \=> Function | void

For example, let’s assume we want to use a decorator to add two properties, `fuel` and `isEmpty()`, to a `Rocket` class. In this case, we could write the following function:

```typescript
function WithFuel(target: typeof Rocket, context): typeof Rocket {
    if (context.kind \=== "class") {
    return class extends target { fuel: number \= 50 isEmpty(): boolean { return this.fuel \== 0 } } }
    }
```

After making sure the `kind` of the decorated element is indeed `class`, we return a new class with two additional properties. Alternatively, we could have used prototype objects to dynamically add new methods:

```typescript
function WithFuel(target: typeof Rocket, context): typeof Rocket { if (context.kind \=== "class") { target.prototype.fuel \= 50 target.prototype.isEmpty \= (): boolean \=> { return this.fuel \== 0 } } }
```

We can use `WithFuel` as follows:

```typescript
@WithFuel class Rocket {} const rocket \= new Rocket() console.log((rocket as any).fuel) console.log(\`Is the rocket empty? ${(rocket as any).isEmpty()}\`) /\* Prints:
50
Is the rocket empty? false
\*/
```

You might have noticed that we had to cast `rocket` to `any` to access the new properties. That’s because decorators can’t influence the structure of the type.

If the original class defines a property that is later decorated, the decorator overrides the original value. For example, if `Rocket` has a `fuel` property with a different value, `WithFuel` would override such a value:

```typescript
function WithFuel(target: typeof Rocket, context): typeof Rocket { if (context.kind \=== "class") { return class extends target { fuel: number \= 50 isEmpty(): boolean { return this.fuel \== 0 } } } } @WithFuel class Rocket { fuel: number \= 75 } const rocket \= new Rocket() console.log((rocket as any).fuel) // prints 50
```

### Method decorators

Another good place to attach a decorator is class methods. In this case, the type of the decorator function is as follows:

```typescript
type ClassMethodDecorator \= (target: Function, context: { kind: "method" name: string | symbol
access: { get(): unknown } static: boolean private: boolean
addInitializer(initializer: () \=> void): void }) \=> Function | void
```

We can use method decorators when we want something to happen before or after the invocation of the method being decorated.

For example, during development, it might be useful to log the calls to a given method or verify pre/post-conditions before/after the call. Additionally, we can influence the way the method is invoked, for example, by delaying its execution or limiting the number of calls within a given amount of time.

Finally, we can use method decorators to mark a method as deprecated, logging a message to warn the user and tell them which method to use instead:

```typescript
function deprecatedMethod(target: Function, context) { if (context.kind \=== "method") { return function (...args: any\[\]) { console.log(\`${context.name} is deprecated and will be removed in a future version.\`) return target.apply(this, args) } } }
```

Again, the first parameter of the `deprecatedMethod` function is, in this case, the method we’re decorating. After making sure it’s indeed a method (`context.kind === "method"`), we return a new `function` that basically wraps the decorated method and logs a warning message before calling the actual method call.

We can then use our new decorator as follows:

```typescript
@WithFuel class Rocket { fuel: number \= 75 @deprecatedMethod isReadyForLaunch(): Boolean { return !(this as any).isEmpty() } } const rocket \= new Rocket() console.log(\`Is the rocket ready for launch? ${rocket.isReadyForLaunch()}\`)
```

In the `isReadyForLaunch()` method, we refer to the `isEmpty` method we added via the `WithFuel` decorator. Notice how we had to cast `this` to an instance of `any`, as we did before. When we call `isReadyForLaunch()`, we’ll see the following output, showing that the warning gets correctly printed out:

isReadyForLaunch is deprecated and will be removed in a future version. Is the rocket ready for launch? true

Method decorators can be useful if you want to extend the functionality of our methods, which we’ll cover later.

### Property decorators

Property decorators are very similar to method decorators:

```typescript
type ClassPropertyDecorator \= (target: undefined, context: { kind: "field" name: string | symbol
access: { get(): unknown, set(value: unknown): void } static: boolean private: boolean }) \=> (initialValue: unknown) \=> unknown | void
```

Not surprisingly, the use cases for property decorators are very similar to those for method decorators. For example, we can track the accesses to a property or mark it as deprecated:

```typescript
function deprecatedProperty(\_: any, context) { if (context.kind \=== "field") { return function (initialValue: any) { console.log(\`${context.name} is deprecated and will be removed in a future version.\`) return initialValue } } }
```

The code is very similar to the `deprecatedMethod` decorator we defined for methods, and so is its usage.

### Accessor decorators

Very similar to method decorators are accessor decorators, which are decorators that target getters and setters:

```typescript
type ClassSetterDecorator \= (target: Function, context: { kind: "setter" name: string | symbol
access: { set(value: unknown): void } static: boolean private: boolean
addInitializer(initializer: () \=> void): void }) \=> Function | void type ClassGetterDecorator \= (value: Function, context: { kind: "getter" name: string | symbol
access: { get(): unknown } static: boolean private: boolean
addInitializer(initializer: () \=> void): void }) \=> Function | void
```

The definition of accessor decorators is similar to that of as method decorators. For example, we can merge our `deprecatedMethod` and `deprecatedProperty` decorations into a single, `deprecated` function that features support for getters and setters as well:

```typescript
function deprecated(target, context) { const kind \= context.kind const msg \= \`${context.name} is deprecated and will be removed in a future version.``\` `
    if (kind \=== "method" || kind \=== "getter" || kind \=== "setter") { return function (...args: any\[\]) { console.log(msg) return target.apply(this, args) } } else if (kind \=== "field") { return function (initialValue: any) { console.log(msg) return initialValue } } }
```

### Auto-accessor decorators

The new decorator proposal also introduced a new element called the “auto-accessor field”:

class Test { accessor x: number }

The transpiler will turn the `x` field above into a pair of getter and setter methods, with a `private` property behind the scenes. This is useful to represent a simple accessor pair and helps avoid some edgy issues that might arise while using decorators on class fields.

---

### More great articles from LogRocket:

-   Don't miss a moment with [The Replay](https://lp.logrocket.com/subscribe-thereplay), a curated newsletter from LogRocket
-   [Learn](https://blog.logrocket.com/rethinking-error-tracking-product-analytics/) how LogRocket's Galileo cuts through the noise to proactively resolve issues in your app
-   Use React's useEffect [to optimize your application's performance](https://blog.logrocket.com/understanding-react-useeffect-cleanup-function/)
-   Switch between [multiple versions of Node](https://blog.logrocket.com/switching-between-node-versions-during-development/)
-   [Discover](https://blog.logrocket.com/using-react-children-prop-with-typescript/) how to use the React children prop with TypeScript
-   [Explore](https://blog.logrocket.com/creating-custom-mouse-cursor-css/) creating a custom mouse cursor with CSS
-   Advisory boards aren’t just for executives. [Join LogRocket’s Content Advisory Board.](https://lp.logrocket.com/blg/content-advisory-board-signup) You’ll help inform the type of content we create and get access to exclusive meetups, social accreditation, and swag.

---

Auto-accessors can be decorated, as well, and their type will essentially be a merge of `ClassSetterDecorator` and `ClassGetterDecorator`. You can find additional details in the [Stage 3 decorators pull request](https://github.com/microsoft/TypeScript/pull/50820).

## Use cases for TypeScript decorators

Now that we’ve covered what decorators are and how to use them properly, let’s look at some specific problems decorators can help us solve.

### Calculating execution time

Let’s say we want to estimate how long it takes to run a function as a way to gauge your application performance. We can create a decorator to calculate the execution time of a method and print it on the console:

class Rocket { @measure launch() { console.log("Launching in 3... 2... 1... ![🚀](https://s.w.org/images/core/emoji/14.0.0/svg/1f680.svg)"); } }

The `Rocket` class has a `launch` method inside of it. To measure the execution time of the `launch` method, you can attach the `measure` decorator:

```typescript
import { performance } from "perf_hooks"; function measure(target: Function, context) { if (context.kind \=== "method") { return function (...args: any\[\]) { const start \= performance.now() const result \= target.apply(this, args) const end \= performance.now() console.log(\`Execution time: ${end \- start} milliseconds\`) return result } } }
```

As you can see, the `measure` decorator replaces the original method with a new one that enables it to calculate the execution time of the original method and log it to the console. To calculate the execution time, we’ll use the [Performance Hooks API](https://nodejs.org/api/perf_hooks.html) from the Node.js standard library. Instantiate a new `Rocket` instance and call the `launch` method:

const rocket \= new Rocket() rocket.launch()

You’ll get the following result:

Launching in 3... 2... 1... ![🚀](https://s.w.org/images/core/emoji/14.0.0/svg/1f680.svg) Execution time: 1.062355000525713 milliseconds

### Using the decorator factory function

To configure your decorators to act differently in a certain scenario, you can use a concept called the decorator factory. Decorator factories are functions returning a decorator. This enables us to customize the behavior of your decorators by passing some parameters in the factory.

**Take a look at the example below:**

```typescript
function fill(value: number) { return function(\_, context) { if (context.kind \=== "field") { return function (initialValue: number) { return value + initialValue } } } }
```

The `fill` function returns a decorator changing the value of the property based on the value passed from your factory:

```typescript
class Rocket { @fill(20) fuel: number \= 50 } const rocket \= new Rocket() console.log(rocket.fuel) // 70
```

### Automatic error guard

Another common use case for decorators is checking pre- and post-conditions on method calls. For example, assume we want to make sure `fuel` is at least a given value before calling the `launch()` method:

class Rocket { fuel \= 50 launch() { console.log("Launching to Mars in 3... 2... 1... ![🚀](https://s.w.org/images/core/emoji/14.0.0/svg/1f680.svg)") } }

Let’s say we have a `Rocket` class that has a `launchToMars` method. To launch a rocket, the fuel level must be above, for example, 75.

Let’s create the decorator for it:

```typescript
function minimumFuel(fuel: number) { return function(target: Function, context) { if (context.kind \=== "method") { return function (...args: any\[\]) { if (this.fuel \> fuel) { return target.apply(this, args) } else { console.log(\`Not enough fuel. Required: ${fuel}, got ${this.fuel}\`) } } } } }
```

`minimumFuel` is a factory decorator. It takes the `fuel` parameter, which indicates how much fuel is needed to launch a particular rocket. To check the fuel condition, wrap the original method with a new method, just like in the previous use case. Notice how we can freely refer to `this.fuel`, which will just work at runtime.

Now we can plug our decorator to the `launch` method and set the minimum fuel level:

```typescript
class Rocket { fuel \= 50 @minimumFuel(75) launch() { console.log("Launching to Mars in 3... 2... 1... ![🚀](https://s.w.org/images/core/emoji/14.0.0/svg/1f680.svg)") } }
```

If we now invoke the `launch` method, it won’t launch the rocket because the current fuel level is 50:

```typescript
const rocket \= new Rocket() rocket.launch() Not enough fuel. Required: 75, got 50
```

The cool thing about this decorator is that you can apply the same logic to a different method without rewriting the whole if-else statement.

## Conclusion

It’s true that in some scenarios, it’s not necessary to make your own decorators. Many TypeScript libraries/frameworks out there, such as [TypeORM](https://typeorm.io/) and [Angular](https://angular.io/), already provide all the decorators you need. But it’s always worth the extra effort to understand what’s going on under the hood, and it might even inspire you to build your own TypeScript framework.

## [LogRocket](https://lp.logrocket.com/blg/typescript-signup): Full visibility into your web and mobile apps

[![LogRocket Dashboard Free Trial Banner](https://blog.logrocket.com/wp-content/uploads/2017/03/1d0cd-1s_rmyo6nbrasp-xtvbaxfg.png)](https://lp.logrocket.com/blg/typescript-signup)

[LogRocket](https://lp.logrocket.com/blg/typescript-signup) is a frontend application monitoring solution that lets you replay problems as if they happened in your own browser. Instead of guessing why errors happen or asking users for screenshots and log dumps, LogRocket lets you replay the session to quickly understand what went wrong. It works perfectly with any app, regardless of framework, and has plugins to log additional context from Redux, Vuex, and @ngrx/store.

In addition to logging Redux actions and state, LogRocket records console logs, JavaScript errors, stacktraces, network requests/responses with headers + bodies, browser metadata, and custom logs. It also instruments the DOM to record the HTML and CSS on the page, recreating pixel-perfect videos of even the most complex single-page and mobile apps.

[Try it for free](https://lp.logrocket.com/blg/typescript-signup).
