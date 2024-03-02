# **Observable TypeScript Examples**

March 1, 2024

**Anonymous**

can you offer a definition for Observables using TypeScript and share some code examples, thank you!

In TypeScript, Observables are a part of the reactive programming paradigm, particularly popularized by libraries like RxJS. Observables represent streams of data or events that can be observed over time. They allow you to work with asynchronous data streams and perform operations such as map, filter, reduce, and more on those streams.

Here's a simple definition of Observables in TypeScript:

**Observables**: Observables represent a collection of values or events that may arrive asynchronously over time.

Here's a basic example of how you can use Observables in TypeScript using RxJS:

First, you need to install RxJS:

bashCopy code

```bash
`npm install rxjs`
```

Then, you can use Observables in your TypeScript code:

```typescript
import { Observable, Observer } from 'rxjs';

// Create an observable that emits numbers every second
const observable = new Observable<number>((observer: Observer<number>) => {
	let count = 0;
	const interval = setInterval(() => {
		observer.next(count++);
	}, 1000);

	// Cleanup function when unsubscribed
	return () => {
		clearInterval(interval);
	};
});

// Subscribe to the observable
const subscription = observable.subscribe({
	next: (value: number) => console.log(value),
	error: (error: any) => console.error(error),
	complete: () => console.log('Observable completed')
});

// Unsubscribe after 5 seconds
setTimeout(() => {
	subscription.unsubscribe();
}, 5000);
```

In this example:

-   We import `Observable` and `Observer` from the RxJS library.
-   We create an `Observable` that emits numbers every second.
-   We subscribe to the `Observable`, providing three callback functions: `next` to handle emitted values, `error` to handle errors, and `complete` to handle the completion of the observable.
-   After 5 seconds, we unsubscribe from the observable to stop receiving values.

This is a basic example, but Observables can be used for more complex scenarios like handling HTTP requests, handling user interactions, and managing state in reactive applications.

**Anonymous**

Thanks, but specifically for vanilla TypeScript that use no libraries or any other dependencies? Appreciate the great help my digital mentor!

Certainly! In vanilla TypeScript without any libraries or dependencies like RxJS, you can still implement a simple version of observables. Here's a basic example of how you can define and use observables in TypeScript without any external dependencies:

```typescript
// Define a simple Observable class
class Observable<T> {
	private observers: ((value: T) => void)[] = [];

	// Subscribe method to add observers
	subscribe(observer: (value: T) => void): void {
		this.observers.push(observer);
	}

	// Emit method to notify observers
	emit(value: T): void {
		this.observers.forEach((observer) => observer(value));
	}
}

// Example usage
const numberObservable = new Observable<number>();

// Subscribe to the observable
numberObservable.subscribe((value) => {
	console.log('Received value:', value);
});

// Emit values
numberObservable.emit(1);
numberObservable.emit(2);
numberObservable.emit(3);
```

In this example:

-   We define a simple `Observable` class parameterized by the type `T`.
-   The `subscribe` method allows observers to subscribe to the observable by providing a callback function to be called whenever a new value is emitted.
-   The `emit` method notifies all subscribed observers by invoking their callback functions with the emitted value.
-   We create an instance of `Observable` for numbers, subscribe to it with a callback function that logs the received values, and then emit some values.

This implementation is very basic and lacks many features provided by libraries like RxJS, such as error handling, completion notification, operators like map, filter, etc. However, it demonstrates the basic principles of observables in a vanilla TypeScript context.

**Anonymous**

Can you implement a more complex version of observables in vanilla TypeScript. I desire to understand the underlying precepts of this observable paradigm: I am authoring an application without major libraries or frameworks on the client side/UI: I am also implementing a modular, component centric foundation for the application and researching the concept of 'Observables' for managing 'STATE', or more pointedly considering using a 'base class' to be used and wired throughout the application for state.

**ChatGPT**

Certainly! Here's a more elaborate implementation of Observables in vanilla TypeScript that incorporates the basic principles of managing state:

```typescript
// Define a simple Observable class with state management
class Observable<T> {
	private observers: ((value: T) => void)[] = [];
	private state: T;

	constructor(initialState: T) {
		this.state = initialState;
	}

	// Subscribe method to add observers
	subscribe(observer: (value: T) => void): void {
		this.observers.push(observer);
		// Send the current state to the new subscriber
		observer(this.state);
	}

	// Emit method to update state and notify observers
	next(newState: T): void {
		this.state = newState;
		this.observers.forEach((observer) => observer(newState));
	}

	// Getter method to retrieve the current state
	getState(): T {
		return this.state;
	}
}

// Example usage
interface User {
	name: string;
	age: number;
}

const userObservable = new Observable<User>({ name: 'John Doe', age: 30 });

// Subscribe to the observable
userObservable.subscribe((user) => {
	console.log('Received user:', user);
});

// Update the user state
userObservable.next({ name: 'Jane Doe', age: 25 });
```

In this example:

-   We define an `Observable` class with generic type `T`, where `T` represents the type of state that the observable manages.
-   The class has a private array `observers` to store the observer functions.
-   It also has a `state` property to hold the current state.
-   The constructor allows initializing the observable with an initial state.
-   The `subscribe` method adds observers to the observable and immediately notifies them with the current state.
-   The `next` method updates the state and notifies all observers with the new state.
-   We added a `getState` method to retrieve the current state.

This implementation allows you to manage state throughout your application. You can use instances of this `Observable` class to represent different parts of your application's state and subscribe to changes in those parts to update the UI or trigger other actions accordingly.

You can extend this implementation further by adding error handling, completion notification, and other features as needed for your application. Additionally, you can explore patterns like using a centralized store for managing global state in larger applications.

**Anonymous**

Wonderful! This is exactly what I was reaching for in my thoughts. As usual, you are 'Johnny on the spot' with your ideas and examples used for enlightening developers as myself. Thank you!

**ChatGPT**

You're very welcome! I'm glad I could help clarify the concepts and provide examples that align with your needs. If you have any more questions or need further assistance as you continue to explore observables and state management in your TypeScript application, don't hesitate to ask. Happy coding, and best of luck with your project!
