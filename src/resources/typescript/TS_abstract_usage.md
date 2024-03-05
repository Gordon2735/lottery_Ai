![](../../../public/images/khalil.png)
Khalil Stemmler,  
Software Essentialist ⚡

### About the author

I'm Khalil. I turn code-first developers into confident crafters without having to buy, read & digest hundreds of complex programming books. Using Software Essentialism, my philosophy of software design, I coach developers through boredom, impostor syndrome, and a lack of direction to master software design and architecture. Mastery though, is not the end goal. It is merely a step towards your Inward Pull.

[When to Use TypeScript Abstract Classes](https://khalilstemmler.com/blogs/typescript/abstract-class/)

# **When to Use TypeScript Abstract Classes**

[TypeScript](https://khalilstemmler.com/articles/categories/type-script)

Last updated Jan 9th, 2022

Abstract classes are similar to interfaces, but we use them to provide common behavior to subclasses or implement inversion of control using the Template Method design pattern.

[abstraction](https://khalilstemmler.com/articles/tags/abstraction/)[object-oriented programming](https://khalilstemmler.com/articles/tags/object-oriented-programming/)[abstract class](https://khalilstemmler.com/articles/tags/abstract-class/)[template method](https://khalilstemmler.com/articles/tags/template-method/)

![](/img/blog/templates/banners/typescript-blog-banner.png)

If you're just getting started with object-oriented programming, the notion of an `abstract` class may seem a little foreign. Abstraction is one of the key ideas from object-oriented programming, and abstract classes are one of the two tools that OO provides to implement abstraction.

In this article, we'll learn all about abstraction, abstract classes, and everyday use cases for using them in your projects.

Let's start by understanding abstraction: perhaps the most crucial concept from object-oriented programming.

## What is abstraction?[](https://khalilstemmler.com/blogs/typescript/abstract-class/#What-is-abstraction)

[Abstraction](https://khalilstemmler.com/articles/object-oriented/programming/4-principles/#Abstraction) is perhaps the most important element of design.

By selectively choosing which details to include, we can make concepts appear less complex, increase understandability, communicativeness, readability, and so on.

As programmers, we rely on abstraction to solve advanced architectural challenges. Abstraction removes the need to implement all the low-level details upfront; instead, we can focus on the high-level and figure out the specifics later.

You could also say that abstraction allows us to spend more time on the declarative (asking for what we want) and less on the imperative (specifying exactly *how* it'll work).

### Concretions & abstractions[](https://khalilstemmler.com/blogs/typescript/abstract-class/#Concretions--abstractions)

We deal primarily with two types of classes in object-oriented programming languages: concretions and abstractions.

![Abstract vs. concretion](/img/blog/typescript/abstract-class/abstraction-vs-concretion.svg)

Concrete classes are real, and we can construct objects from them to use at runtime using the `new` keyword. They're what most of us end up using when we first start learning object-oriented programming.

```typescript
// Concrete class
class User {
	private name: string;

	public getName(): string {
		return this.name;
	}

	constructor(name: string) {
		this.name = name;
	}
}

const user = new User('Khalil'); // Creating an instance
// of a concrete class
```

On the other hand, abstractions are *blueprints* or *contracts* that specify the properties and methods that a concretion *should have*. We can use them to contractualize the valid structure of an object or a class.

```typescript
// Interface (abstraction)
interface Box {
	length: number;
	width: number;
}

const boxOne: Box = { length: 1, width: 2 }; // ✅ Valid! Has all props
const boxTwo: Box = { length: 1 }; // ❌ Not valid, missing prop
```

```typescript
// Interface (abstraction)
interface Box {
	length: number;
	width: number;
}

// Concrete class implementing Box abstraction
class MobileBox implements Box {
	// ✅ Valid! Implements all necessary props
	public length: number;
	public width: number;

	constructor(length: number, width: number) {
		this.length = length;
		this.width = width;
	}
}

let boxThree = new MobileBox(1, 2);
```

### How to create abstractions in OO languages[](https://khalilstemmler.com/blogs/typescript/abstract-class/#How-to-create-abstractions-in-OO-languages)

In the previous examples, we used the `interface` keyword to create abstractions. However, when we speak of abstractions in object-oriented programming, we're generally referring to one of two tools:

-   interfaces (i.e.: the `interface` keyword) or
-   abstract classes (i.e.: the `abstract` keyword in front of a class)

**Type systems as an abstraction tool:** We should also note that we can use types to implement abstractions if we use a language with a type system (such as TypeScript).

### Why is abstraction necessary?[](https://khalilstemmler.com/blogs/typescript/abstract-class/#Why-is-abstraction-necessary)

There are many different reasons why abstraction matters, but the key one is that it allows us to create a plugin architecture, separating the high-level from the low-level.

In traditional structured programming, we couldn't safely implement what's known as *dynamic binding* — the ability to refer to an abstraction (something that doesn't concretely exist) and feel confident that the dependency would work with our code.

For example, imagine we were writing the code for an OS that made USB ports work. We’d need to ensure that every device plugged in can function and do its job, but in reality, there are a *lot* of different things that can be plugged in. What should we do? Write some code for each and every single one of those?

```typescript
switch (deviceType) {
  case 'MOUSE':
		mouseSubroutine();
	case 'HEADPHONES':
		headphonesSubroutine();
	case 'MIDI_KEYBOARD':
		midiKeyboardSubroutine();
	case 'WEBCAM':
		webcamSubroutine();
	...
}
```

That won't scale. What happens when there's a new type of USB device? Come in and write *more code*? No, this is *architecturally* poor. Without abstraction, we'd continue to increase the cyclomatic complexity of our USB port code as we add support for more devices over time. We'd see our simple program blow up into an enormous and ever-growing control-flow graph of subroutines on subroutines.

![Program flow](/img/blog/typescript/abstract-class/program-flow.png)

What if there was a way to invert this dependency relationship? What if we could focus on defining a contract containing all the necessary things that a USB device needs to provide if they want it to work with the OS — and leave it to future USB device developers to implement them?

We are asking: what if we could **program against an abstraction instead of an implementation (a concretion)?**

We can! The idea of *ports* and *adapters* is probably the simplest way to understand this phenomenon. Consider the abstraction to be the *port* that defines a valid adapter. With this design, we create a plugin architecture that removes the need for us to need to define _every single last USB device_ and leave it to future developers to implement compatible *adapters* based on our contract.

![ports-and-adapters](/img/blog/typescript/abstract-class/ports-and-adapters.svg)

Abstraction is deeply related to the ideas of:

-   [Liskov Substitution Principle](https://khalilstemmler.com/articles/solid-principles/solid-typescript/) — since we define valid subtypes, each implementation should work and be interchangeable as long as it implements the contract.
-   [Dependency Inversion](https://khalilstemmler.com/articles/tutorials/dependency-injection-inversion-explained/) — we do not directly depend on the concretions; instead, we rely on the abstraction that the concretions depend on; this keeps our core code unit testable.
-   [Inversion of Control](https://khalilstemmler.com/articles/tutorials/dependency-injection-inversion-explained/) — we can give the client developer the ability to customize behavior by inverting program control to the client developer at hook points.

Next, let's take a look at the mechanics behind creating and using abstract classes in TypeScript.

## Abstract class in TypeScript[](https://khalilstemmler.com/blogs/typescript/abstract-class/#Abstract-class-in-TypeScript)

The most common use of abstract classes in TypeScript is to locate some common behavior to share within related subclasses. However, it's essential to know that you cannot instantiate an abstract class. Therefore, the only way to access shared behavior is to extend the `abstract` class with a subclass.

For a simple demonstration, we'll imagine that we're selling digital books (`PDF`, `EPUB`, `Kindle`, etc.) — all of which have some common logic and their specific logic as well. To start, we'll build the base `Book` abstraction to put the common logic.

To declare an abstract class, we use the `abstract` keyword.

```typescript
abstract class Book {
	// ..
}
```

### Defining common properties[](https://khalilstemmler.com/blogs/typescript/abstract-class/#Defining-common-properties)

Within this `Book` abstraction, we can then decide on the contract for a `Book`. Let us say that all `Book` subclasses must have `author` and `title` properties. We can define them as instance variables and accept them as input using the abstract class constructor.

```typescript
abstract class Book {
	private author: string;
	private title: string;
	constructor(author: string, title: string) {
		this.author = author;
		this.title = title;
	}
}
```

### Defining common logic[](https://khalilstemmler.com/blogs/typescript/abstract-class/#Defining-common-logic)

We can then can place some of the common logic within the `Book` abstract class using regular methods.

```typescript
abstract class Book {
	private author: string;
	private title: string;

	constructor(author: string, title: string) {
		this.author = author;
		this.title = title;
	}

	// Common methods
	public getBookTitle(): string {
		return this.title;
	}
	public getBookAuthor(): string {
		return this.title;
	}
}
```

Remember that an `abstract` class is an abstraction comparable to an `interface`. We can't instantiate it directly. Trying anyway for demonstration purposes, we'll notice that we get an error that looks like this:

```typescript
let book = new Book( // ❌ error TS2511: Cannot create an
	'Robert Greene', // instance of an abstract class.
	'The Laws of Human Nature'
);
```

So then, what shall we do? We'll introduce one of our specific types of `Book` *concretions* — the `PDF` class. We extend/inherit the abstract `Book` class as a new subclass to hook it up.

```typescript
class PDF extends Book {
	// Extends the abstraction

	private belongsToEmail: string;

	constructor(author: string, title: string, belongsToEmail: string) {
		super(author, title); // Must call super on subclass

		this.belongsToEmail = belongsToEmail;
	}
}
```

Since `PDF` is a concrete class, we can instantiate it. The `PDF` object has all of the properties and methods of the `Book` abstraction, so we can call `getBookTitle` and `getBookAuthor` as if it were originally declared on the `PDF` class.

```typescript
let book: PDF = new PDF(
	'Robert Greene',
	'The Laws of Human Nature',
	'khalil@khalilstemmler.com'
);

book.getBookTitle(); // "The Laws of Human Nature"
book.getBookAuthor(); // "Robert Greene"
```

### Defining mandatory methods[](https://khalilstemmler.com/blogs/typescript/abstract-class/#Defining-mandatory-methods)

Abstract classes have one last important feature: the notion of the `abstract` method. Abstract methods are methods that we *must* define on any implementing subclass.

In the abstract class, we define them like so:

```typescript
abstract class Book {
  private author: string;
  private title: string;

  constructor (author: string, title: string) {
    this.author = author;
    this.title = title;
  }

  abstract getBookType (): string; // No implementation}
```

Notice that there is no implementation for the abstract method? That's because we implement it on the subclass.

Demonstrating with the `PDF` and an additional `EPUB` subclass, we add the required abstract method to both of them.

```typescript
...

class PDF extends Book {
  ...
  getBookType (): string { // Must implement this    return 'PDF';  }}

class EPUB extends Book {

  constructor (author: string, title: string) {
    super(author, title);
  }

  getBookType (): string { // Must implement this    return 'EPUB';  }}
```

Failing to implement the required abstract methods will fail to make the class *complete* and *concrete* — this means we'll run into errors when trying to compile our code or create instances.

There are good reasons for using this technique. The best way to understand is to consider real-world scenarios. We'll explore this in the next section.

## Use cases (when to use abstract classes)[](https://khalilstemmler.com/blogs/typescript/abstract-class/#Use-cases-when-to-use-abstract-classes)

Now that we know the mechanics behind how abstract classes work, let's talk about real-life use cases for it — scenarios you are likely to encounter.

There are two primary use cases for needing to use abstract classes:

1. Sharing common behavior and
2. Template method pattern (framework hook methods)

### 1\. Sharing common behavior (base HTTP class example)[](https://khalilstemmler.com/blogs/typescript/abstract-class/#1-Sharing-common-behavior-base-HTTP-class-example)

A prevalent scenario is the need to perform HTTP data-fetching logic within a front-end application that relies on multiple backend APIs endpoints.

Let’s say that we definitely need to fetch data from:

-   a `Users` API located at [example.com/users](http://example.com/users)
-   a `Reviews` API located at [example.com/reviews](http://example.com/reviews)

What’s the common logic?

-   Setting up an HTTP library (like [Axios](https://www.npmjs.com/package/axios))
-   Setting up [interceptors](https://axios-http.com/docs/interceptors) to set up common refetching logic (say, like when an access token expires)
-   Performing HTTP methods

Using an abstract class, we can define a `BaseAPI` as an abstraction with some of the implementation already provided.

```typescript
export abstract class BaseAPI {
	protected baseUrl: string;
	private axiosInstance: AxiosInstance | any = null;

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
		this.axiosInstance = axios.create({});
		this.enableInterceptors();
	}

	private enableInterceptors() {
		// Here's where you can define common refetching logic
	}

	protected get(url: string, params?: any, headers?: any): Promise<any> {
		return this.getAxiosInstance({
			method: 'GET',
			url: `${this.baseUrl}${url}`,
			params: params ? params : null,
			headers: headers ? headers : null
		});
	}

	protected post(url: string, params?: any, headers?: any): Promise<any> {
		return this.getAxiosInstance({
			method: 'POST',
			url: `${this.baseUrl}${url}`,
			params: params ? params : null,
			headers: headers ? headers : null
		});
	}
}
```

Here, we've placed the low-level behavior within a `BaseAPI` abstraction. Now we can define the high-level behavior — the rich stuff — in the subclasses.

```typescript
export class UsersAPI extends BaseAPI {
  constructor () {
    super('http://example.com/users');
  }

  // High-level functionality
  async getAllUsers (): Promise<User[]> {    let response = await this.get('/');    return response.data.users as User[];  }
  ...
}
```

This pattern is widespread. [Apollo's REST DataSource API](https://www.apollographql.com/docs/apollo-server/data/data-sources/#example) builds on the same abstract class approach.

### 2\. Template method design pattern (front-end libraries & frameworks example)[](https://khalilstemmler.com/blogs/typescript/abstract-class/#2-Template-method-design-pattern-front-end-libraries--frameworks-example)

The template method design pattern (also known as the template pattern) is a behavioral design pattern that works by defining the skeleton of the algorithm in an abstract class and deferring some of the steps off to subclasses.

![template method design pattern.svg](/img/blog/typescript/abstract-class/template_method_design_pattern.svg)

Because it allows for customizability, the template method pattern is widespread in libraries and frameworks like Angular, Vue, or React.js.

To demonstrate, let's consider older versions of React.js, the popular library for building front-end interfaces.

When you create a React component using class-based components, what’s the one method you absolutely _positively_ need to implement? That’d be the `render` method, right?

So then, a simplistic version of the `abstract` class for a component could look like the following:

```typescript
abstract class Component {
	private props: any;
	private state: any;

	abstract render(): void; // Mandatory
}
```

And then to use it, we’d need to extend the `Component` abstraction and implement the render method.

```typescript
class Box extends Component {
	render() {
		// Must implement this method
	}
}
```

We *need* to implement the render method because it is a critical part of the work involved with deciding what gets created on screen. It's up to the client developer (us) to determine what HTML & CSS the browser should show. The library can't decide on that for us, so we need to provide it.

An `abstract` class is a suitable tool for this problem is because there is an algorithm running behind the scenes — an algorithm in which the `render` step is but a single step amongst many.

![react-lifecyclepng](/img/blog/typescript/abstract-class/react-lifecycle.png)

We can see that there are *three* distinct phases to React: mounting, updating, and unmounting. React's abstract class further gives us (the client developer) the ability to customize our components by connecting the ability to *hook into* various lifecycle events. For example, you can perform some behavior as soon as your component mounts (`componentDidMount`), when it updates (`componentDidUpdate`), and when it's about to unmount (`componentWillUnmount`).

Another vastly simplistic (and not entirely accurate or complete) depiction of what that may look like behind the scenes is like this:

```typescript
abstract class Component {
  private props: any;
  private state: any;

  abstract render (): void;

	// Algorithm for mounting
	constructor () {
    this.render();
    this.componentDidMount();
  }

	// The general algorithm for updating. Called when new props occur,
	// when setState is called or when forceUpdate is called
  onUpdate () {
    if (this.componentShouldUpdate()) {
      this.render();
      this.componentDidUpdate();
    }
  }

  // Algorithm for unmounting
  onUnmount () {
    this.componentWillUnmount();
    // Complete unmounting
  }

  public componentDidMount (): void {
    // No implementation lifecycle method, allow the client to override
  }

  public componentDidUpdate (): void {
    // No implementation lifecycle method, allow the client to override
  }

  public componentWillUnmount (): void {
    // No implementation lifecycle method, allow the client to override
  }

  private componentShouldUpdate (): boolean {
    // Determines if the component should update
    ...
  }
}
```

And now, a customized component subclass can _plug in_ behavior within those key lifecycle hook methods. This is the concept of [Inversion of Control](https://khalilstemmler.com/articles/tutorials/dependency-injection-inversion-explained/).

```typescript
class Box extends Component {
	constructor() {
		super();
	}

	componentDidMount() {
		// (Optional) Perform custom logic
	}

	componentDidUpdate() {
		// (Optional) Perform custom logic
	}

	componentWillUnmount() {
		// (Optional) Perform custom logic
	}

	render() {
		// Must implement this method
	}
}
```

So as a framework designer, the Template Method design pattern is attractive when:

-   You need the client to implement a step of the algorithm → **so you make that step an abstract method**
-   You want to provide the ability for clients to customize behavior at various steps of the algorithm → **so you expose optional lifecycle methods to the client**

## In summary[](https://khalilstemmler.com/blogs/typescript/abstract-class/#In-summary)

-   Object-oriented programs contain concretions and abstractions. Abstract classes are one of two ways we can implement abstractions in object-oriented programming.
-   Use abstract classes to define shared behavior or implement the Template Method pattern.

## Frequently asked questions[](https://khalilstemmler.com/blogs/typescript/abstract-class/#Frequently-asked-questions)

### What is an abstract class constructor for?[](https://khalilstemmler.com/blogs/typescript/abstract-class/#What-is-an-abstract-class-constructor-for)

The abstract class constructor is used to set up properties or run other setup logic from within the abstract class so that the low-level abstract class methods can use them. We invoke the constructor by calling `super` on a subclass (derived class).

### What does the abstract method do?[](https://khalilstemmler.com/blogs/typescript/abstract-class/#What-does-the-abstract-method-do)

The abstract method exists to force clients to implement specific functionality necessary for the abstract class to work. We abstract away the exact details to a subclass.

### What’s the difference between an interface vs. abstract class?[](https://khalilstemmler.com/blogs/typescript/abstract-class/#Whats-the-difference-between-an-interface-vs-abstract-class)

Interfaces and abstract classes are both examples of abstractions in object-oriented programming. Where an interface can only define the properties and methods of an abstraction, an abstract class can define the properties and methods in addition some common behavior.

We also use the `implements` keyword to inherit from an interface but use the `extends` keyword to perform inheritance against an `abstract` class.

When you need an abstraction, default to an interface (or a type in typed languages) but opt for an abstract class when you need to define common behavior or generalize an algorithm using the Template Method design pattern.
